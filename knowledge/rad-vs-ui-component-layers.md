---
generated_at: 2026-03-19
source_hash: 0d4597c9
sources:
  - src/components/rad/button/Button.vue
  - src/components/rad/button/index.ts
  - src/components/ui/button/Button.vue
  - src/components/rad/dialog/DialogContent.vue
  - src/components/rad/dialog/index.ts
  - src/components/ui/dialog/index.ts
  - src/components/rad/combobox/Combobox.vue
  - src/components/rad/houdini-provider/index.ts
  - src/components/rad/HoudiniProvider.vue
  - src/components/custom/IconButtonTooltip.vue
  - src/style/css/tokens/component-vars.css
---

## Two-layer component architecture: rad wraps ui

The package has **mirrored** component directories: `src/components/ui/` (raw shadcn-vue) and `src/components/rad/` (consumer-facing wrappers).

**ui/** = upstream-compatible shadcn-vue components. Use `~/lib/utils` path alias. These are the implementation layer.

**rad/** = thin wrappers around ui/ that add `data-slot` attributes. This enables the CSS theming API in `component-vars.css` where `[data-slot="button"]`, `[data-slot="dialog-content"]` etc. set component-scoped CSS variables.

## How rad wrapping works — two patterns

**Pattern 1: Full re-implementation** (button, some complex components)
The rad Button.vue is its own SFC that imports from `../../../lib` (not `~/lib/utils`). Nearly identical to ui/ version but uses relative imports and may add `data-slot`.

**Pattern 2: Passthrough wrapper** (dialog, combobox, most components)
```vue
<script setup lang="ts">
import OriginalDialogContent from "../../ui/dialog/DialogContent.vue";
defineOptions({ inheritAttrs: false });
</script>
<template>
    <OriginalDialogContent v-bind="$attrs" data-slot="dialog-content">
        <slot />
    </OriginalDialogContent>
</template>
```

Not every sub-component in a rad/ directory is wrapped — only the ones that need `data-slot` for CSS variable theming. The rest re-export from ui/ directly.

## rad-only components (not in ui/)

- `rad/houdini-provider/` — exports `HoudiniProvider.vue` from `rad/HoudiniProvider.vue` (flat file alongside dirs)
- `rad/HoudiniProvider.vue` — the actual file, sits at `src/components/rad/` root level

## custom/ directory

- `custom/IconButtonTooltip.vue` — compound component: Button + Tooltip, references ui/ (not rad/)
- Only one component currently

## How data-slot enables CSS theming

`component-vars.css` uses `[data-slot="X"]` selectors to define component-scoped CSS variables:
```css
[data-slot="button"]    { --button-radius: calc(var(--radius) - 2px); }
[data-slot="input"]     { --input-radius: ...; --input-height: 2.25rem; }
[data-slot="dialog-content"] { --dialog-radius: ...; --dialog-padding: 1.5rem; }
```

These are not in a `@layer`, so they beat Tailwind utility layer. Theme authors override these vars to customize structural properties per-component.

## Import conventions for consumers

Always import from `rad/`, not `ui/`:
```ts
import Button from "@adddog/shadcn-vue-design-system/components/rad/button/Button.vue";
// or via barrel:
import { Button } from "@adddog/shadcn-vue-design-system/components/rad/button";
```

## Adding a new component

1. Add shadcn-vue component to `src/components/ui/<name>/`
2. Create matching `src/components/rad/<name>/` directory
3. For sub-components needing `data-slot`: create passthrough wrapper adding the attribute
4. For sub-components NOT needing `data-slot`: re-export from `ui/` in rad's `index.ts`
5. Add any component-scoped CSS vars to `src/style/css/tokens/component-vars.css`

## Component catalog (63 rad directories)

accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card, carousel, checkbox, collapsible, combobox, command, context-menu, dialog, drawer, dropdown-menu, empty, field, form, houdini-provider, hover-card, input, input-group, input-otp, item, kbd, label, menubar, native-select, navigation-menu, number-field, pagination, pin-input, popover, progress, radio-group, range-calendar, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, stepper, switch, table, tabs, tags-input, textarea, toggle, toggle-group, tooltip
