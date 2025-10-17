# @park-app/design-system

A comprehensive design system built with **Tailwind CSS v4** and powered by **@adddog/design-tokens** for consistent theming across light and dark modes, following **shadcn-vue** design patterns.

## Architecture

This design system bridges the gap between design tokens and Tailwind CSS utilities, providing:

- 🎨 **Design Token Integration** - Seamless integration with `@adddog/design-tokens`
- 🌗 **Automatic Theme Switching** - Light/dark mode support with CSS class switching
- ⚡ **Tailwind v4 Compatibility** - Modern `@theme inline` configuration without `tailwind.config`
- 🎯 **Type-Safe Styling** - TypeScript integration for design tokens
- 🧩 **shadcn-vue Compatible** - Full compatibility with shadcn-vue components and theming system

## Design Token Integration

### Theme Switching

The design system automatically supports theme switching through CSS classes:

```html
<!-- Light theme -->
<html class="light">
  <body>Your app content</body>
</html>

<!-- Dark theme -->
<html class="dark">
  <body>Your app content</body>
</html>
```

### Token-to-Tailwind Mapping

Design tokens from `@adddog/design-tokens` are mapped to Tailwind utilities in `src/style/styles.css`:

#### Color Mappings
```css
/* Semantic colors that adapt to theme */
--color-background: var(--ai-color-primary0);     /* White (light) / Dark (dark) */
--color-foreground: var(--ai-color-primary900);   /* Dark (light) / Light (dark) */
--color-accent: var(--ai-color-accent200);        /* Theme-aware accent colors */

/* Status colors */
--color-destructive: var(--ai-color-negative400); /* Error/danger */
--color-constructive: var(--ai-color-positive400); /* Success */
--color-attentive: var(--ai-color-warning400);    /* Warning */
```

#### Spacing & Sizing
```css
/* All spacing uses consistent design tokens */
--spacing-1: var(--ai-sizing-scale100);   /* 4px */
--spacing-2: var(--ai-sizing-scale300);   /* 8px */
--spacing-4: var(--ai-sizing-scale600);   /* 16px */
```

### Usage in Components

With this setup, you can use standard Tailwind classes that automatically adapt to the current theme:

```tsx
// This button will be white on light theme, dark on dark theme
<button className="bg-background text-foreground border-border">
  Click me
</button>

// Accent colors adapt to theme
<div className="text-accent-500 bg-accent-100">
  Themed content
</div>

// Status colors remain consistent
<div className="text-destructive bg-destructive/10">
  Error message
</div>
```

### How It Works

1. **Design Tokens** (`@adddog/design-tokens`)
   - Defines theme-specific color values in TypeScript
   - Generates CSS variables scoped to `.light` and `.dark` classes
   - Provides both regular colors and RGB variants

2. **Theme CSS** (`styles.css`)
   - Imports both light and dark token CSS files
   - Maps design tokens to Tailwind's semantic color system
   - Uses Tailwind v4's `@theme inline` for configuration

3. **Automatic Theme Switching**
   - Change the HTML class from `light` to `dark`
   - All CSS variables update automatically
   - Tailwind utilities inherit the new values seamlessly

### Design Token Structure

The design tokens provide:
- **Primary Colors** (`--ai-color-primary0` to `--ai-color-primary950`) - Grayscale
- **Accent Colors** (`--ai-color-accent50` to `--ai-color-accent800`) - Brand colors
- **Status Colors** (`--ai-color-positive/negative/warning-*`) - Semantic colors
- **Sizing Scale** (`--ai-sizing-scale0` to `--ai-sizing-scale4800`) - Consistent spacing
- **Font Tokens** (`--ai-*`) - Typography scales

## Theming Configuration

### Tailwind v4 CSS-Based Configuration

This design system uses **Tailwind v4** which eliminates the need for `tailwind.config.js/ts` files. All configuration is done through CSS using the `@theme inline` directive.

#### Key Differences from Tailwind v3

1. **No `tailwind.config` file needed** - All configuration happens in CSS
2. **CSS Variables with `hsl()` wrapper** - Color values must be wrapped in `hsl()`
3. **`@theme inline` directive** - Define theme tokens directly in CSS
4. **Better dark mode support** - Native CSS class-based theme switching

#### Configuration Structure

```css
/* Import Tailwind and design tokens */
@import "tailwindcss";
@import "@adddog/design-tokens/light.css";
@import "@adddog/design-tokens/dark.css";

/* Define custom dark variant */
@custom-variant dark (&:is(.dark *));

/* Define theme variables */
:root {
  --background: var(--ai-primary0);
  --foreground: var(--ai-primary900);
  /* ... more variables */
}

.dark {
  --background: var(--ai-primary900);
  --foreground: var(--ai-primary0);
  /* ... dark mode overrides */
}

/* Map to Tailwind with @theme inline */
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  /* ... Tailwind color mappings */
}
```

### Adding Custom Colors

The design system supports custom semantic colors beyond the standard set. Here's how to add **warning** and **success** colors:

#### 1. Define CSS Variables

Add these to your CSS file (e.g., `src/style/css/my-styles.css`):

```css
:root {
  /* Success colors - using positive tokens */
  --success: var(--ai-positive400);
  --success-foreground: var(--ai-primary0);

  /* Warning colors - using warning tokens */
  --warning: var(--ai-warning400);
  --warning-foreground: var(--ai-primary900);
}

.light {
  /* Light theme specific overrides if needed */
  --success: var(--ai-positive400);
  --success-foreground: var(--ai-primary0);
  --warning: var(--ai-warning400);
  --warning-foreground: var(--ai-primary900);
}

.dark {
  /* Dark theme adjustments for better visibility */
  --success: var(--ai-positive500);
  --success-foreground: var(--ai-primary0);
  --warning: var(--ai-warning500);
  --warning-foreground: var(--ai-primary0);
}
```

#### 2. Map to Tailwind Colors

Add the new colors to your `@theme inline` block:

```css
@theme inline {
  /* Existing colors... */
  --color-success: var(--success);
  --color-success-foreground: var(--success-foreground);
  --color-warning: var(--warning);
  --color-warning-foreground: var(--warning-foreground);
}
```

#### 3. Usage in Components

Once configured, use these colors with standard Tailwind utilities:

```vue
<!-- Success message -->
<div class="bg-success text-success-foreground p-4 rounded-lg">
  Operation completed successfully!
</div>

<!-- Warning alert -->
<div class="bg-warning text-warning-foreground p-4 rounded-lg">
  Please review your input
</div>

<!-- With opacity -->
<div class="bg-success/10 text-success border border-success/20">
  Subtle success background
</div>
```

### shadcn-vue Theming Best Practices

#### Color Format Recommendations

1. **Use HSL or OKLCH** - Better for color manipulation and accessibility
2. **Define complementary pairs** - Each color needs a foreground variant
3. **Consider contrast ratios** - Ensure WCAG AA compliance (4.5:1 for text)

#### Standard Color Variables

The design system includes these shadcn-vue standard colors:

| Variable | Purpose | Light Example | Dark Example |
|----------|---------|---------------|--------------|
| `--background` | Page background | `--ai-primary0` | `--ai-primary900` |
| `--foreground` | Primary text | `--ai-primary900` | `--ai-primary0` |
| `--primary` | Primary actions | `--ai-primary850` | `--ai-primary200` |
| `--secondary` | Secondary actions | `--ai-primary100` | `--ai-primary800` |
| `--accent` | Accent/highlight | `--ai-accent400` | `--ai-accent400` |
| `--destructive` | Errors/delete | `--ai-negative400` | `--ai-negative500` |
| `--muted` | Subtle backgrounds | `--ai-primary100` | `--ai-primary800` |
| `--border` | Borders | `--ai-primary200` | `--ai-primary750` |
| `--ring` | Focus rings | `--ai-primary700` | `--ai-primary500` |

#### Additional Semantic Colors

| Variable | Purpose | Mapped To |
|----------|---------|-----------|
| `--success` | Success states | `--ai-positive400` |
| `--warning` | Warning states | `--ai-warning400` |
| `--chart-1` to `--chart-5` | Data visualization | Various accent/semantic colors |

#### Component-Specific Theming

For specialized components like sidebars:

```css
:root {
  --sidebar: var(--ai-primary0);
  --sidebar-foreground: var(--ai-primary900);
  --sidebar-primary: var(--ai-primary850);
  --sidebar-border: var(--ai-primary200);
}

.dark {
  --sidebar: var(--ai-primary850);
  --sidebar-foreground: var(--ai-primary0);
  --sidebar-primary: var(--ai-accent400);
  --sidebar-border: var(--ai-primary750);
}
```

### Theme Switching Implementation

#### JavaScript/TypeScript

```typescript
// Toggle theme
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  html.classList.remove(currentTheme);
  html.classList.add(newTheme);
  localStorage.setItem('theme', newTheme);
}

// Initialize theme from localStorage or system preference
function initTheme() {
  const stored = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = stored || (systemPrefersDark ? 'dark' : 'light');

  document.documentElement.classList.add(theme);
}
```

#### Vue Composable

```typescript
import { ref, watchEffect } from 'vue';

export function useTheme() {
  const theme = ref<'light' | 'dark'>('light');

  // Initialize from localStorage or system preference
  const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  theme.value = stored || (systemPrefersDark ? 'dark' : 'light');

  // Apply theme to document
  watchEffect(() => {
    const html = document.documentElement;
    html.classList.remove('light', 'dark');
    html.classList.add(theme.value);
    localStorage.setItem('theme', theme.value);
  });

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
  };

  return { theme, toggleTheme };
}
```

### Advanced Theming Techniques

#### 1. Multiple Theme Support

Extend beyond light/dark with additional themes:

```css
.theme-ocean {
  --primary: oklch(0.5 0.15 220);
  --accent: oklch(0.6 0.2 200);
  /* ... custom color palette */
}

.theme-sunset {
  --primary: oklch(0.6 0.2 30);
  --accent: oklch(0.7 0.25 60);
  /* ... custom color palette */
}
```

#### 2. Component-Scoped Themes

Override theme colors for specific sections:

```vue
<div class="themed-section">
  <!-- This section has different colors -->
  <style scoped>
  .themed-section {
    --accent: var(--ai-positive400);
    --primary: var(--ai-accent600);
  }
  </style>
</div>
```

#### 3. Gradient Support

Define gradient utilities using theme colors:

```css
@theme inline {
  --gradient-primary: linear-gradient(135deg, var(--color-primary), var(--color-accent));
  --gradient-success: linear-gradient(135deg, var(--color-success), var(--color-positive-600));
}
```

### Accessibility Considerations

1. **Contrast Ratios**
   - Normal text: 4.5:1 minimum (WCAG AA)
   - Large text: 3:1 minimum
   - UI components: 3:1 minimum

2. **Color Blindness**
   - Don't rely solely on color to convey information
   - Use icons, labels, and patterns in addition to color
   - Test with color blindness simulators

3. **Respect System Preferences**
   ```css
   @media (prefers-color-scheme: dark) {
     /* Respect user's OS preference */
   }

   @media (prefers-reduced-motion: reduce) {
     /* Disable animations */
   }
   ```

## VSCode IntelliSense Configuration

### The Challenge with Tailwind v4

Tailwind CSS v4 uses CSS-based configuration (`@theme inline`) instead of traditional `tailwind.config.js/ts` files. This can break VSCode IntelliSense as the extension traditionally relies on detecting JavaScript config files.

### Solution: Configure VSCode Settings

To enable IntelliSense for Tailwind v4 with CSS-based configuration:

#### 1. Create/Update `.vscode/settings.json`

Add this to your project's `.vscode/settings.json`:

```json
{
  "tailwindCSS.experimental.configFile": "src/style/css/my-styles.css",
  "editor.quickSuggestions": {
    "strings": true
  },
  "tailwindCSS.includeLanguages": {
    "vue": "html",
    "vue-html": "html"
  },
  "tailwindCSS.classAttributes": [
    "class",
    "className",
    "classList",
    "ngClass"
  ]
}
```

**Key Settings Explained:**

- `tailwindCSS.experimental.configFile` - Points to your CSS file containing `@import "tailwindcss"` and `@theme inline` directives
- `editor.quickSuggestions.strings` - Enables autocomplete in JSX/Vue template strings
- `tailwindCSS.includeLanguages` - Enables IntelliSense in Vue files
- `tailwindCSS.classAttributes` - Which attributes trigger IntelliSense

#### 2. Install/Update VSCode Extension

Ensure you have the latest Tailwind CSS IntelliSense extension:

- **Extension**: [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- **Minimum Version**: 0.14.3 or later (supports v4)

#### 3. Restart VSCode Extension Host

After updating settings:

1. Open Command Palette (`Cmd/Ctrl + Shift + P`)
2. Run: `Developer: Reload Window` or `Developer: Restart Extension Host`

### Alternative: Minimal Config File Approach

If the experimental setting doesn't work, create a minimal `tailwind.config.ts` for IntelliSense only:

```typescript
// tailwind.config.ts - Only for VSCode IntelliSense
// Actual theming is in src/style/css/my-styles.css
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "../**/*.{js,ts,jsx,tsx,vue}", // Adjust for your project structure
  ],
  theme: {
    extend: {
      // Empty - actual theme is defined in CSS with @theme inline
    },
  },
  plugins: [],
};
```

**Important**: This file is **only** for IntelliSense. Your actual configuration remains in CSS using `@theme inline`.

### Troubleshooting

#### IntelliSense Not Working

1. **Check Output Panel**
   - View → Output → Select "Tailwind CSS IntelliSense"
   - Look for errors or warnings

2. **Verify CSS File Path**
   ```json
   {
     "tailwindCSS.experimental.configFile": "./packages/shadcn-vue-design-system/src/style/css/my-styles.css"
   }
   ```
   Path should be relative to workspace root

3. **Clear Extension Cache**
   - Close VSCode
   - Delete extension cache: `~/.vscode/extensions/bradlc.vscode-tailwindcss-*/`
   - Reopen VSCode

4. **Check File Associations**
   ```json
   {
     "files.associations": {
       "*.css": "tailwindcss"
     }
   }
   ```

#### Custom Colors Not Showing

If your custom `success` and `warning` colors don't appear in IntelliSense:

1. Ensure they're defined in `@theme inline` block
2. Restart Extension Host
3. Try hovering over an existing class to trigger re-indexing

### Monorepo Configuration

For monorepo setups with **multiple CSS entrypoints**, use an object where each key is the CSS file path and each value is a glob pattern (or array of patterns) representing the files it applies to:

```json
{
  "tailwindCSS.experimental.configFile": {
    "packages/shadcn-vue-design-system/src/style/css/my-styles.css": "packages/shadcn-vue-design-system/**",
    "apps/web/src/styles/app.css": "apps/web/**",
    "apps/admin/src/styles/app.css": "apps/admin/**"
  }
}
```

For a **single shared CSS entrypoint** (like this design system), use a string:

```json
{
  "tailwindCSS.experimental.configFile": "packages/shadcn-vue-design-system/src/style/css/my-styles.css"
}
```

This will apply the design system's Tailwind configuration across your entire monorepo.

### Features You'll Get

Once configured properly:

- ✅ **Autocomplete** for all Tailwind utilities including custom colors
- ✅ **Hover previews** showing actual CSS values
- ✅ **Linting** for invalid class names
- ✅ **Color decorators** in your code
- ✅ **Custom color support** (`bg-success`, `text-warning`, etc.)

## Scripts

| Script | Description |
|--------|-------------|
| `lint` | `eslint .` |
| `lint:fix` | `eslint --fix .` |
| `types` | `tsc -p tsconfig.typecheck.json` |
| `test` | `cd ../../ && npm test -- packages/shadcn-vue-design-system` |

