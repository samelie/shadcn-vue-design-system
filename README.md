# @adddog/shadcn-vue-design-system

Vue 3 component library wrapping reka-ui primitives with Tailwind CSS styling, following shadcn-vue patterns.

## Usage

**Consumers should only import from `rad/` components.** The `rad/` layer is the public API — it wraps `ui/` with transparent pass-throughs and providers. Do not import directly from `ui/`.

```vue
<!-- CORRECT -->
import { Button } from "@adddog/shadcn-vue-design-system/components/rad/button"

<!-- WRONG — do not import from ui/ directly -->
import { Button } from "@adddog/shadcn-vue-design-system/components/ui/button"
```

## Architecture

### Component Layers

```
src/components/
├── ui/          # Internal: reka-ui wrappers with Tailwind styling (do not import directly)
├── rad/         # Public API: aliases + providers (HoudiniProvider) — use these
├── custom/      # App-specific composites (IconButtonTooltip)
└── houdini/     # CSS Paint API components (ConfettiBackground)
```

### Core Patterns

**Simple wrapper** - forwards props/emits, adds styling:
```vue
<script setup lang="ts">
import type { ButtonProps } from "reka-ui"
import { Primitive, useForwardPropsEmits } from "reka-ui"
import { cn } from "~/lib/utils"
import { buttonVariants } from "."

const props = defineProps<ButtonProps & { class?: string; variant?: string; size?: string }>()
const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <Primitive :class="cn(buttonVariants({ variant, size }), props.class)" v-bind="forwarded">
    <slot />
  </Primitive>
</template>
```

**Styled with class extraction** - uses reactiveOmit to separate class prop:
```vue
<script setup lang="ts">
import { reactiveOmit } from "@vueuse/core"
const props = defineProps<SomeProps & { class?: string }>()
const delegatedProps = reactiveOmit(props, "class")
const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>

<template>
  <Component :class="cn('base-styles', props.class)" v-bind="forwarded" />
</template>
```

**rad/ wrapper** - transparent pass-through:
```vue
<script setup lang="ts">
import OriginalButton from "../../ui/button/Button.vue"
defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalButton v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>
  </OriginalButton>
</template>
```

### Key Utilities

`src/lib/utils/cn.ts`:
- `cn(...inputs)` - clsx + tailwind-merge for class concatenation
- `valueUpdater(updaterOrValue, ref)` - @tanstack/vue-table state helper

### Houdini Paint API

`src/composables/houdini/`:
- `useHoudini(autoInit?)` - returns `{ supported, initialized, error }` refs
- `registerWorklets()` - loads 4 worklets: squircle, animated-gradient, smooth-border, confetti-background
- `isHoudiniSupported()` - feature detection
- `applyHoudiniClass()` - adds `houdini-supported` to document

`src/components/houdini/ConfettiBackground.vue` - animated confetti using CSS Paint API with fallback.

`src/components/rad/HoudiniProvider.vue` - app-wide Houdini initialization.

### Styling

`src/style/`:
- `styles.css` - main entry (imports css/main.css)
- `css/main.css` - imports fonts, themes, sizing, tailwind-mapping
- `css/themes.css` - semantic color tokens (primary, secondary, destructive, etc)
- `css/sizing.css` - responsive sizing + touch targets
- `css/tailwind-mapping.css` - maps Tailwind utilities to design tokens
- `houdini/fallbacks.css` - fallbacks for unsupported browsers

### Exports

```js
// Main components
import { Button, Dialog, ... } from "@adddog/shadcn-vue-design-system"

// Specific paths
import Button from "@adddog/shadcn-vue-design-system/components/ui/button/Button.vue"
import { useHoudini } from "@adddog/shadcn-vue-design-system/composables"
import { cn } from "@adddog/shadcn-vue-design-system/lib/utils"
import "@adddog/shadcn-vue-design-system/styles.css"
```

### Component Inventory

**ui/ + rad/** (59): accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card, carousel, checkbox, collapsible, combobox, command, context-menu, dialog, drawer, dropdown-menu, empty, field, form, hover-card, input, input-group, input-otp, item, kbd, label, menubar, native-select, navigation-menu, number-field, pagination, pin-input, popover, progress, radio-group, range-calendar, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, stepper, switch, table, tabs, tags-input, textarea, toggle, toggle-group, tooltip

**custom/**: ChartPlaceholder, IconButtonTooltip, MetricTile, StatusBadge

### Generic display primitives
Deep-import each component and its types from the declaring SFC. No barrel import is required:

```typescript
import ChartPlaceholder from "@adddog/shadcn-vue-design-system/components/custom/ChartPlaceholder.vue"
import MetricTile, { type MetricTone } from "@adddog/shadcn-vue-design-system/components/custom/MetricTile.vue"
import StatusBadge, { type StatusTone } from "@adddog/shadcn-vue-design-system/components/custom/StatusBadge.vue"
```

| Component | Props | Behavior |
|-----------|-------|----------|
| `StatusBadge` | required `tone: StatusTone`; optional `class` | Default slot supplies label; outline badge base with `success`, `warning`, `destructive` or `muted` semantic tokens; root `data-slot="status-badge"` |
| `MetricTile` | required `label: string`, `value: string \| null`; optional `unit`, `tone`, `emptyText`, `class` | `tone: MetricTone` defaults to `default`; also accepts `warning`, `destructive`, `muted`. Null displays `emptyText` (default `—`) and mutes root; string values use tabular numerals; root `data-slot="metric-tile"` |
| `ChartPlaceholder` | required `title`; optional `description`, `class` | Empty primitives with `h-40` default height; root `data-slot="chart-placeholder"`; caller class can override height |

All three merge caller classes with `cn()` and forward root attributes. Labels, values and descriptions render as text. Consumers choose state and formatting; these components contain no domain thresholds or history data.

`pnpm -F "@adddog/shadcn-vue-design-system" test` exercises actual SFC rendering through the existing Vue/Vite dependencies, including tokens, null values, escaped text, attributes and class overrides. The test server uses middleware mode and closes after the suite; no browser or extra test config is required.

**houdini/**: ConfettiBackground

### Dependencies

- `reka-ui` - headless primitives (formerly radix-vue)
- `class-variance-authority` - component variants
- `clsx` + `tailwind-merge` - class management
- `@vueuse/core` - Vue utilities
- `lucide-vue-next` - icons

**Optional peer deps** (for specific components):
- `embla-carousel-vue` - carousel
- `vue-sonner` - sonner (toast notifications)
- `vee-validate` + `@vee-validate/zod` - form validation
- `vue-input-otp` - OTP input

### Conventions

- `data-slot` attribute on root elements for debugging/styling hooks
- `defineOptions({ inheritAttrs: false })` + `v-bind="$attrs"` for wrapper transparency
- CVA (class-variance-authority) for variant definitions exported from component index.ts
- All components support `class` prop extension via `cn()`

## Scripts

| Script | Description |
|--------|-------------|
| `lint` | eslint . |
| `lint:fix` | eslint --fix . |
| `types` | vue-tsc --noEmit |
