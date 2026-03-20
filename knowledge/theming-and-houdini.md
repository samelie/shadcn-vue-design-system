---
generated_at: 2026-03-19
source_hash: 0d4597c9
sources:
  - src/style/styles.css
  - src/style/css/main.css
  - src/style/css/tokens/component-vars.css
  - src/style/css/tokens/houdini.css
  - src/style/houdini/fallbacks.css
  - src/composables/useHoudini.ts
  - src/composables/houdini/worklets/squircle.js
  - src/composables/houdini/worklets/animated-gradient.js
  - src/composables/houdini/worklets/smooth-border.js
  - src/composables/houdini/worklets/confetti-background.js
  - src/composables/houdini/worklet-sources.ts
  - src/components/houdini/confetti-background/ConfettiBackground.vue
  - src/components/rad/HoudiniProvider.vue
---

## CSS theming architecture — three layers

1. **`@adddog/tailwind-theme`** (separate workspace package) — owns the actual color/radius/spacing tokens, Tailwind v4 `@theme inline` mapping, and theme variants (`.theme-stone`, etc.). The design system delegates ALL token definition here.

2. **`styles.css` → `css/main.css`** — entry point consumers import. Pulls in tailwind-theme, then adds design-system-specific layers: houdini tokens, component-vars, houdini fallbacks.

3. **`component-vars.css`** — per-component structural overrides via `[data-slot]` selectors. Unlayered CSS so it beats `@layer utilities`. Themes override `--button-radius`, `--dialog-padding`, etc.

**Consumer integration:**
```ts
// In app's style.css:
@import "@adddog/shadcn-vue-design-system/styles.css";
@source "../../../../packages/shadcn-vue-design-system/src/**/*.{vue,js,ts,jsx,tsx}";
```

## Two theming strategies (pick one, not both)

**Strategy 1 (current default):** Standalone — `styles.css` → `css/main.css` → `@adddog/tailwind-theme/theme.css`. Self-contained, no `@adddog/design-tokens` dependency.

**Strategy 2:** Design system integration — `styles.css` → `css/my-styles.css` → `@adddog/design-tokens`. Maps external tokens to shadcn semantic vars via `tokens/semantic.css`. Swap by editing `styles.css` import.

## Dark mode

Class-based: `.dark` on `<html>` or `<body>`. Tailwind custom variant: `@custom-variant dark (&:is(.dark *))`. Theme variants use `@variant dark { ... }` for dark overrides.

## Houdini CSS Paint API integration

Four paint worklets registered as a singleton:
- `squircle` — iOS-style superellipse corners
- `animated-gradient` — animatable multi-color gradients
- `smooth-border` — dots/dashes/wave border patterns
- `confetti-background` — animated confetti particles

### Worklet registration flow

`useHoudini()` composable (or `registerWorklets()` directly) → checks `CSS.paintWorklet` support → uses Vite `?url` imports to get resolved worklet URLs → `CSS.paintWorklet.addModule()` for all four → module-level singleton (registers once, reuses).

### Progressive enhancement pattern

Every Houdini feature has a CSS fallback:
- Fallback classes in `houdini/fallbacks.css` (`.houdini-squircle`, `.houdini-gradient`, `.houdini-border`)
- `@supports (background: paint(X))` blocks upgrade when supported
- `.houdini-supported` class toggled on `<html>` by `applyHoudiniClass()`
- Confetti component has its own `--fallback` / `--houdini` class states

### Houdini CSS tokens

`tokens/houdini.css` defines `:root` custom properties:
- Squircle: `--squircle-radius-{xs..2xl}`, `--squircle-smoothing-{low,default,high,ios}`
- Gradient: `--gradient-speed-{slow,default,fast}`, `--gradient-angle-*`, color palettes (blue-purple, sunset, ocean, forest, fire)
- Border: `--border-pattern-spacing-*`, `--border-pattern-size-*`
- Dark mode overrides for gradient colors

### ConfettiBackground component

`src/components/houdini/confetti-background/ConfettiBackground.vue` — slot wrapper. Props control count, speed, size, hue, saturation, lightness, seed, duration. Maps all props to CSS custom properties (`--confetti-*`). Uses `@property --confetti-time` for animatable custom property. Falls back to solid `var(--background)`.

### HoudiniProvider

At `src/components/rad/HoudiniProvider.vue`, re-exported from `rad/houdini-provider/index.ts`. Wraps app root to initialize worklets. Use in App.vue.

## Button "enhanced" variant — theme-aware

The button `cva` definition includes an `enhanced` variant that uses CSS custom properties for theme-controlled behavior:
```
bg-main text-main-foreground
border-[length:var(--theme-border-width,1px)]
shadow-theme
hover:translate-x/y via --theme-hover-offset-*
```
This enables neubrutalist/retro themes where buttons have visible borders and shadow offsets.
