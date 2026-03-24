---
name: design-system
description: "Use when working with Vue UI components, the shared design system (@adddog/shadcn-vue-design-system), reka-ui primitives, rad wrappers, Houdini CSS Paint API, or building/modifying Vue app UIs. Triggers: design system, component, shadcn, rad, reka-ui, ui component, button, dialog, popover, HoudiniProvider, ConfettiBackground, cn(), tailwind theme, or working on Vue app UI files."
---

# Design System Skill

**First**: read `packages/shadcn-vue-design-system/README.md` — it is the source of truth for architecture, patterns, component inventory, exports, and conventions.

## Agent Dispatch
For structural frontend work (pages, stores, routing, tests), dispatch `vue-frontend-architect`. For visual polish and theming, dispatch `ui-design-system-expert`. Both follow this skill's rules for component imports.

## Quick Reference

| Topic | Read |
|-------|------|
| Architecture + patterns + inventory | `packages/shadcn-vue-design-system/README.md` |
| shadcn-vue CLI config | `packages/shadcn-vue-design-system/components.json` |
| Barrel exports | `packages/shadcn-vue-design-system/src/components/index.ts` |
| Houdini composable | `packages/shadcn-vue-design-system/src/composables/useHoudini.ts` |
| Full Houdini integration example | `every3minutes-com/` |
| Domain component composition example | `park-app/apps/webui/` |

## App-Side Setup

### Dependency

```json
"@adddog/shadcn-vue-design-system": "workspace:*"
```

### Required Vite Aliases

Every consuming app needs these `resolve.alias` entries pointing into the design-system package:

```typescript
resolve: {
    alias: {
        "@": resolve(__dirname, "../../../packages/shadcn-vue-design-system/src"),
        "~/lib/utils": join(__dirname, "../../../packages/shadcn-vue-design-system/src/lib/index.ts"),
        "~/components": join(__dirname, "../../../packages/shadcn-vue-design-system/src/components"),
        "~/composables": join(__dirname, "../../../packages/shadcn-vue-design-system/src/composables"),
    },
}
```

Adjust relative paths based on app location. Reference configs:
- `every3minutes-com/vite.config.ts` (4 aliases incl. `~/composables`)
- `park-app/apps/webui/vite.config.ts` (3 aliases, uses `pkgRootDir` for `@`)

## Component Workflows

### Add upstream shadcn-vue component

```bash
cd packages/shadcn-vue-design-system
npx shadcn-vue@latest add <name>
```

Then create a rad/ wrapper for it (see below).

### Create rad/ wrapper

Transparent pass-through — apps import from `rad/`, never `ui/` directly:

```vue
<script setup lang="ts">
import OriginalComponent from "../../ui/<name>/<Name>.vue"
defineOptions({ inheritAttrs: false })
</script>

<template>
  <OriginalComponent v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>
  </OriginalComponent>
</template>
```

### Create custom component

Compose from `ui/` primitives in `src/components/custom/`. Export from barrel.

## Houdini Usage

Usage only — not worklet authoring.

1. **Wrap app root** in `<HoudiniProvider>`:
```vue
<script setup>
import { HoudiniProvider } from "@adddog/shadcn-vue-design-system"
</script>
<template>
  <HoudiniProvider>
    <RouterView />
  </HoudiniProvider>
</template>
```

2. **Use `<ConfettiBackground>`** with props inside the provider tree.

3. **Composable access**:
```typescript
import { useHoudini } from "@adddog/shadcn-vue-design-system"
const { supported, initialized, error } = useHoudini()
```

## Critical Rules

- **Apps import from `rad/` path** — never `ui/` directly
- **Always use `cn()`** from `~/lib/utils` for class merging
- **Don't modify upstream `ui/` components** — customize via `rad/` layer
- **Don't modify tsconfig** — auto-generated
- **`useHoudini` barrel import**: `import { useHoudini } from "@adddog/shadcn-vue-design-system"`
