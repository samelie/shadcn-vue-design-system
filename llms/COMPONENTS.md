# shadcn-vue Design System

Vue port of shadcn/ui built with Reka UI + Tailwind CSS.

## Installed Components (21)

- **accordion** - Collapsible content sections
- **button** - Clickable elements, various styles/sizes
- **calendar** - Date selection interface
- **checkbox** - Binary selection input
- **command** - Searchable command palette
- **dialog** - Modal overlay for focused content
- **drawer** - Sliding panel from screen edge
- **dropdown-menu** - Contextual menu with actions
- **input** - Text input field
- **label** - Form field label
- **native-select** - Native HTML select wrapper
- **popover** - Floating content overlay
- **range-calendar** - Date range selection
- **select** - Custom styled select dropdown
- **switch** - Toggle on/off control
- **table** - Data display in rows/columns
- **tags-input** - Multi-value tag entry
- **toggle** - Binary state button
- **toggle-group** - Mutually exclusive toggle buttons
- **tooltip** - Hover info overlay

## Available Not Installed (44)

alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button-group, card, carousel, chart, collapsible, combobox, context-menu, data-table, date-picker, empty, field, form, hover-card, input-group, input-otp, item, kbd, menubar, navigation-menu, number-field, pagination, pin-input, progress, radio-group, resizable, scroll-area, separator, sheet, sidebar, skeleton, slider, sonner, spinner, stepper, tabs, textarea, toast, typography

## Installation

```bash
# Add component via CLI (monorepo)
pnpm -F shadcn-vue-design-system exec shadcn-vue add [component-name]

# Or copy from https://www.shadcn-vue.com/docs/components/[component-name]
```

## Usage Pattern

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button variant="default">Click</Button>
</template>
```

## Component Structure

Each component exports from `src/components/ui/[name]/index.ts` with:
- Main component file(s) (.vue)
- Subcomponents (e.g., DialogContent, DialogTrigger)
- TypeScript types/props

## Key Dependencies

- **reka-ui** - Headless component primitives
- **tailwindcss** - Styling framework
- **class-variance-authority** - Variant management
- **tailwind-merge** - Class conflict resolution

## Utility: `cn()`

Located: `src/lib/utils/cn.ts`
Combines Tailwind classes, resolves conflicts.

```ts
import { cn } from '@/lib/utils'
cn('px-2 py-1', 'px-3') // => 'py-1 px-3'
```
