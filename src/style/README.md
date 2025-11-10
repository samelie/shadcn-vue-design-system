# Shadcn Vue Design System - Theme Architecture

Clean, organized theme system following Tailwind v4 best practices with zero duplication.

---

## Quick Start

### Using in Your App

```typescript
// main.ts or App.vue
import '@adddog/shadcn-vue-design-system/src/style/styles.css'
```

### Switching Themes

```html
<!-- Light mode (default) -->
<body class="light">

<!-- Dark mode -->
<body class="dark">

<!-- Theme variants -->
<body class="light theme-stone">
<body class="dark theme-stone">
```

---

## Architecture Overview

```
/src/style/
│
├── styles.css                    # 📍 Entry point - import this
│
├── css/
│   ├── tailwind-mapping.css      # @theme inline - SINGLE source
│   ├── my-styles.css             # Active: @adddog integration
│   ├── main.css                  # Alternative: standalone themes
│   ├── fonts.css                 # Font definitions
│   ├── themes.css                # Legacy (can be deprecated)
│   │
│   ├── tokens/
│   │   └── semantic.css          # Semantic tokens - SINGLE source
│   │
│   └── themes/
│       ├── index.css             # Theme variant index
│       └── stone.css             # Example theme variant
│
├── THEME_ARCHITECTURE_ANALYSIS.md   # Original analysis
├── REFACTORING_SUMMARY.md           # Complete refactoring details
└── README.md                         # This file
```

---

## File Responsibilities

| File | Purpose | Import in |
|------|---------|-----------|
| `styles.css` | Entry point - choose strategy | Your app |
| `tailwind-mapping.css` | @theme inline mapping (ONCE) | my-styles.css, main.css |
| `tokens/semantic.css` | Semantic token definitions (ONCE) | my-styles.css |
| `my-styles.css` | @adddog/design-tokens integration | styles.css |
| `main.css` | Standalone theme (no @adddog) | styles.css (alternative) |
| `themes/*.css` | Theme variants (.theme-stone, etc.) | Optional |
| `fonts.css` | Font configuration | All entry files |

---

## Design Patterns

### Pattern 1: Single Source of Truth

**@theme inline mapping** - defined once in `tailwind-mapping.css`:
```css
@theme inline {
  --color-background: var(--background);
  --color-primary: var(--primary);
  /* ... */
}
```

**Semantic tokens** - defined once in `tokens/semantic.css`:
```css
.light {
  --background: oklch(...);
  --primary: oklch(...);
}

.dark {
  --background: oklch(...);
  /* only overrides */
}
```

### Pattern 2: Theme Variants with @variant

```css
.theme-stone {
  --primary: oklch(...);

  @variant dark {
    --primary: oklch(...);  /* dark mode override */
  }
}
```

### Pattern 3: Import Layering

```css
/* 1. Design tokens (if using @adddog) */
@import "@adddog/design-tokens/light.css";

/* 2. Tailwind core */
@import "tailwindcss";

/* 3. Custom variants */
@custom-variant dark (&:is(.dark *));

/* 4. Semantic mappings */
@import "./tokens/semantic.css";

/* 5. Tailwind utility mappings */
@import "./tailwind-mapping.css";
```

---

## How to Add a New Theme

1. **Create theme file:** `css/themes/ocean.css`

```css
.theme-ocean {
  --radius: 0.625rem;
  --background: oklch(0.95 0.02 220);
  --primary: oklch(0.5 0.15 220);
  /* ... all semantic tokens ... */

  @variant dark {
    --background: oklch(0.15 0.02 220);
    --primary: oklch(0.7 0.15 220);
  }
}
```

2. **Import in themes/index.css:**

```css
@import "./ocean.css";
```

3. **Use in HTML:**

```html
<body class="light theme-ocean">
```

**No changes needed to:**
- tailwind-mapping.css
- tokens/semantic.css
- Core files

---

## Two Import Strategies

### Strategy 1: Design System Integration (Current)

Uses `@adddog/design-tokens` as source of truth.

**Entry:** `@import './css/my-styles.css'`

**Flow:**
```
@adddog/design-tokens
    ↓
tokens/semantic.css (maps to shadcn names)
    ↓
tailwind-mapping.css (maps to utilities)
    ↓
HTML classes (bg-background, text-primary)
```

**Use when:**
- You have a design token system
- Need consistency across multiple apps
- Want centralized token management

### Strategy 2: Standalone Themes (Alternative)

Self-contained themes without external dependencies.

**Entry:** `@import './css/main.css'`

**Flow:**
```
:root / .dark (direct definitions)
    ↓
tailwind-mapping.css (maps to utilities)
    ↓
HTML classes (bg-background, text-primary)
```

**Use when:**
- No design token system
- Single app/package
- Want complete control

---

## Theme Switching Examples

### Dark Mode Toggle (Vue)

```vue
<script setup>
const isDark = ref(false)

const toggleDark = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}
</script>

<template>
  <button @click="toggleDark">
    {{ isDark ? '🌙' : '☀️' }}
  </button>
</template>
```

### Theme Variant Selector (Vue)

```vue
<script setup>
const themes = ['default', 'stone', 'zinc', 'slate']
const currentTheme = ref('default')

const applyTheme = (theme) => {
  document.documentElement.className =
    theme === 'default' ? 'light' : `light theme-${theme}`
  currentTheme.value = theme
}
</script>

<template>
  <select v-model="currentTheme" @change="applyTheme(currentTheme)">
    <option v-for="theme in themes" :key="theme">
      {{ theme }}
    </option>
  </select>
</template>
```

---

## Available Semantic Tokens

All these map to Tailwind utilities via `tailwind-mapping.css`:

### Colors
```
--background           → bg-background
--foreground          → text-foreground
--primary             → bg-primary, text-primary
--primary-foreground  → text-primary-foreground
--secondary           → bg-secondary
--muted               → bg-muted
--accent              → bg-accent
--destructive         → bg-destructive
--success             → bg-success
--warning             → bg-warning
--border              → border-border
--input               → border-input
--ring                → ring-ring
```

### Radius
```
--radius              → rounded
--radius-sm           → rounded-sm
--radius-lg           → rounded-lg
```

### Charts
```
--chart-1 through --chart-5
```

### Sidebar
```
--sidebar, --sidebar-foreground, --sidebar-primary, etc.
```

---

## Troubleshooting

### Colors not applying?

1. Check import order in styles.css
2. Verify `@theme inline` is imported
3. Ensure .light or .dark class on <html> or <body>

### Theme variant not working?

1. Confirm theme file imported in themes/index.css
2. Check class applied: `class="light theme-stone"`
3. Verify @variant dark syntax correct

### Build errors?

1. Ensure @adddog/design-tokens installed (if using my-styles.css)
2. Check all @import paths resolve
3. Verify no circular imports

---

## Migration from Old Structure

If upgrading from previous structure:

**Before:**
```typescript
import '@adddog/shadcn-vue-design-system/src/style/styles.css'
```

**After:**
```typescript
import '@adddog/shadcn-vue-design-system/src/style/styles.css'
// Same import! Internal structure changed, API unchanged.
```

**No changes needed in consuming apps!**

---

## Performance

**Before refactoring:**
- ~800 lines total
- ~200 lines duplicated
- 4 files

**After refactoring:**
- ~600 lines total (25% reduction)
- 0 lines duplicated
- 8 files (organized)
- Faster builds (less duplication)
- Better caching (modular structure)

---

## Further Reading

- [THEME_ARCHITECTURE_ANALYSIS.md](./THEME_ARCHITECTURE_ANALYSIS.md) - Original problems identified
- [REFACTORING_SUMMARY.md](./REFACTORING_SUMMARY.md) - Complete change log
- [Tailwind v4 Theme Docs](https://tailwindcss.com/docs/theme)
- [Container Queries Guide](../../park-app/apps/webui/docs/tailwind-container-queries.md)

---

## Contributing

When adding new features:

1. **New semantic token?** → Add to `tokens/semantic.css`
2. **New theme variant?** → Create `themes/your-theme.css`
3. **New utility mapping?** → Add to `tailwind-mapping.css`

**Never duplicate:** Check if variable/mapping exists before adding.

---

## License

Part of @adddog/shadcn-vue-design-system
