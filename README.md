# @adddog/shadcn-vue-design-system

Vue 3 component library wrapping reka-ui primitives with Tailwind CSS styling, following shadcn-vue patterns.

## Architecture

### Component Layers

```
src/components/
├── ui/          # Base: reka-ui wrappers with Tailwind styling
├── rad/         # Aliases + providers (HoudiniProvider)
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

**ui/** (18): accordion, button, calendar, checkbox, command, dialog, drawer, dropdown-menu, input, label, popover, range-calendar, switch, table, tags-input, toggle, toggle-group, tooltip

**custom/**: IconButtonTooltip

**houdini/**: ConfettiBackground

### Dependencies

- `reka-ui` - headless primitives (formerly radix-vue)
- `class-variance-authority` - component variants
- `clsx` + `tailwind-merge` - class management
- `@vueuse/core` - Vue utilities
- `lucide-vue-next` - icons

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
