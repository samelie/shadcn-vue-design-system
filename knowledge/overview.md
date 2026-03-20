---
generated_at: 2026-03-19
source_hash: 0d4597c9
sources:
  - package.json
  - components.json
  - src/index.ts
  - src/lib/utils.ts
  - src/lib/utils/cn.ts
  - src/composables/index.ts
  - src/composables/useHoudini.ts
  - src/other/index.ts
  - src/style/styles.css
  - src/style/css/main.css
  - src/style/README.md
---

## What is @adddog/shadcn-vue-design-system

Vue 3 component library following the shadcn/ui pattern: source-distributed (no build step), Reka UI primitives, Tailwind CSS v4, class-variance-authority for variant definitions. Published as `@adddog/shadcn-vue-design-system`, consumed by multiple Vue apps in the monorepo.

Key difference from upstream shadcn-vue: two component layers (`ui/` and `rad/`), CSS Houdini paint worklet integration, and theming delegated to `@adddog/tailwind-theme`.

## Files that matter vs boilerplate

**Key entry points:**
- `src/index.ts` — barrel export: components, composables, lib, other
- `src/lib/utils/cn.ts` — `cn()` (clsx + tailwind-merge) and `valueUpdater()` for TanStack Table
- `src/composables/useHoudini.ts` — singleton Houdini paint worklet registration
- `src/style/styles.css` — CSS entry point, currently delegates to `css/main.css`
- `src/style/css/main.css` — imports `@adddog/tailwind-theme/theme.css` + houdini tokens + component-vars + fallbacks
- `src/style/css/tokens/component-vars.css` — per-component CSS vars via `[data-slot]` selectors
- `src/style/css/tokens/houdini.css` — CSS custom props for squircle, gradient, border worklets
- `src/style/houdini/fallbacks.css` — progressive enhancement CSS for non-Houdini browsers
- `src/components/rad/` — **consumer-facing layer** — wraps `ui/`, adds `data-slot` attrs
- `src/components/ui/` — raw shadcn-vue components (upstream-compatible)
- `src/components/houdini/confetti-background/` — Houdini paint component
- `src/components/custom/IconButtonTooltip.vue` — compound utility component
- `components.json` — shadcn-vue CLI config (style: new-york, icon: lucide)

**Skip / boilerplate:**
- `example-app/` — Vite dev playground, not published
- `src/style/README.md` — human docs, already captured here
- `tsconfig*.json` — auto-generated
- `README.md`, `LICENSE` — standard

## Package identity and distribution

- Name: `@adddog/shadcn-vue-design-system`
- Version: 0.1.0, published to npm (public)
- **No build step** — distributes raw `.vue` + `.ts` + `.css` source. Consumers' Vite handles compilation.
- Exports: `"."` (barrel), `"./components/*"`, `"./composables/*"`, `"./lib/utils"`, `"./lib/*"`, `"./styles.css"`, `"./houdini/*"`, `"./other/*"`, `"./postcss.config"` (re-export from tailwind-theme)

## Commands

```bash
pnpm -F "@adddog/shadcn-vue-design-system" types    # vue-tsc --noEmit
pnpm -F "@adddog/shadcn-vue-design-system" lint      # eslint
pnpm -F "@adddog/shadcn-vue-design-system" lint:fix  # eslint --fix
pnpm -F "@adddog/shadcn-vue-design-system" knip      # unused exports check
pnpm -F "@adddog/shadcn-vue-design-system" example   # cd example-app && vite
# No tests — test script echoes a warning
```

## Dependencies graph

```
@adddog/shadcn-vue-design-system
├── @adddog/tailwind-theme (workspace) — CSS theme tokens, Tailwind v4 mapping
├── @adddog/design-tokens (optional peer) — external design token source
├── reka-ui — headless UI primitives (Radix Vue successor)
├── class-variance-authority — variant definition (cva)
├── clsx + tailwind-merge — class merging via cn()
├── lucide-vue-next — icon library
├── @tanstack/vue-table — table utilities (valueUpdater)
├── @internationalized/date — calendar/date components
├── embla-carousel-vue — carousel
├── vaul-vue — drawer
├── vee-validate — form validation
├── vue-sonner — toast notifications
├── vue-input-otp — OTP input
└── tw-animate-css — animation utilities
```
