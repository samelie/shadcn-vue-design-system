---
name: upstream-sync
description: "Check for and apply upstream shadcn-vue component updates. Manages the ui/ → rad/ update pipeline: diff checking, viewing upstream source, intelligent merging, and rad/ wrapper adjustments. Triggers: update components, sync upstream, check for updates, shadcn update, component diff, upstream changes, migrate components, refresh ui components."
---

# Upstream Sync Skill

Manages shadcn-vue upstream updates for `@adddog/shadcn-vue-design-system`.

**Architecture reminder:** `ui/` = upstream shadcn-vue (do not hand-edit). `rad/` = our wrapper layer (public API). Updates flow: upstream registry → `ui/` → verify `rad/` compatibility.

## Prerequisites

Read these before any update operation:
- `packages/shadcn-vue-design-system/README.md` — architecture + conventions
- `packages/shadcn-vue-design-system/knowledge/rad-vs-ui-component-layers.md` — wrapper patterns
- `packages/shadcn-vue-design-system/components.json` — CLI config (style: new-york)

## CLI Reference (shadcn-vue v2.7+)

All commands run from `packages/shadcn-vue-design-system/`.

**IMPORTANT:** `--dry-run`, `--diff <file>`, and `--view` flags on `add` are NOT YET IMPLEMENTED despite being in shadcn-vue docs. Use the standalone commands below instead.

### Search available components
```bash
npx shadcn-vue@latest search @shadcn
npx shadcn-vue@latest search @shadcn -q <query>
```

### Diff a component against upstream
```bash
npx shadcn-vue@latest diff <component>
```
Returns "No updates found" if current, or shows a diff if changes exist.

### View upstream component source (JSON with file contents)
```bash
npx shadcn-vue@latest view <component>
```

### Apply update (overwrites ui/ files)
```bash
npx shadcn-vue@latest add <component> --overwrite
```
**NEVER run --overwrite without explicit user approval.**

### Check available migrations
```bash
npx shadcn-vue@latest migrate --list
```

### Run a migration
```bash
npx shadcn-vue@latest migrate <migration> [path]
```

### Project info
```bash
npx shadcn-vue@latest info
```

## Update Workflow

### Phase 1: Discovery

1. **Check reka-ui version** — compare installed vs latest:
   ```bash
   pnpm -F @adddog/shadcn-vue-design-system list reka-ui
   npm view reka-ui version
   ```

2. **Check available migrations**:
   ```bash
   npx shadcn-vue@latest migrate --list
   ```

3. **List all available upstream components** to find new ones:
   ```bash
   npx shadcn-vue@latest search @shadcn
   ```
   Compare against local: `ls src/components/ui/`

### Phase 2: Per-Component Diff

Batch-check all installed components:

```javascript
// Run diff for each local component
for (const comp of localUiComponents) {
  const result = execSync(`npx shadcn-vue@latest diff ${comp} 2>&1`);
  // "No updates found" = current, anything else = has changes
}
```

For components with changes:

1. **View upstream source** to understand what changed:
   ```bash
   npx shadcn-vue@latest view <component>
   ```

2. **Compare against local file** by reading both:
   - Upstream: parse JSON from `view` output
   - Local: read `src/components/ui/<component>/` files

3. **Classify changes**:
   - **Style-only** (class changes, Tailwind updates) → safe, rad/ unaffected
   - **Props/emits changed** → rad/ wrapper MAY need update
   - **Slots renamed/removed** → rad/ wrapper WILL need update
   - **Sub-components added/removed** → rad/ index.ts re-exports need update
   - **New dependency** → package.json needs update

### Phase 3: Apply + Adapt rad/

For each approved component update:

1. **Apply upstream update**:
   ```bash
   npx shadcn-vue@latest add <component> --overwrite
   ```

2. **Check rad/ wrapper compatibility**:
   - Read `src/components/rad/<component>/` files
   - Verify all forwarded props/emits still exist
   - Verify all slot names still match
   - Verify index.ts re-exports cover all sub-components

3. **Fix rad/ if needed** — two patterns:

   **Passthrough wrapper** (most components):
   ```vue
   <script setup lang="ts">
   import OriginalX from "../../ui/<component>/X.vue"
   defineOptions({ inheritAttrs: false })
   </script>
   <template>
     <OriginalX v-bind="$attrs" data-slot="<component>">
       <template v-for="(_, name) in $slots" #[name]="slotProps">
         <slot :name="name" v-bind="slotProps ?? {}" />
       </template>
     </OriginalX>
   </template>
   ```

   **Re-export** (sub-components without data-slot needs):
   ```typescript
   export { default as SubComponent } from "../../ui/<component>/SubComponent.vue"
   ```

4. **Update component-vars.css** if new data-slot targets needed:
   ```
   src/style/css/tokens/component-vars.css
   ```

### Phase 4: Verify

1. **Type check**: `pnpm -F @adddog/shadcn-vue-design-system types`
2. **Lint**: `pnpm -F @adddog/shadcn-vue-design-system lint`
3. **Knip** (unused exports/deps): `pnpm -F @adddog/shadcn-vue-design-system knip`
4. **Tests**: `pnpm -F @adddog/shadcn-vue-design-system test`
5. **Check consuming apps** — search for imports of updated component:
   ```bash
   grep -r "rad/<component>" --include="*.vue" --include="*.ts" .
   ```

## Batch Update (All Components)

To check ALL installed components for upstream changes:

1. Get local component list: `ls src/components/ui/`
2. For each, run `npx shadcn-vue@latest diff <component>` — collect which have changes
3. Present summary table to user: component name, change summary
4. User selects which to update
5. Apply Phase 3-4 per selected component

## Known Registry Gaps

These local components error on `diff` (not in upstream registry):
- `input-otp` — may have been renamed or moved to separate registry
- `native-select` — may have been renamed or moved to separate registry

Skip gracefully and report when encountered.

## Adding New Upstream Components

When a new component exists upstream but not locally:

1. Install: `npx shadcn-vue@latest add <component>`
2. Create rad/ wrapper directory: `src/components/rad/<component>/`
3. Create passthrough wrappers for sub-components needing `data-slot`
4. Re-export remaining sub-components in rad/ `index.ts`
5. Add to barrel export: `src/components/index.ts`
6. Add component-scoped CSS vars if needed

## Critical Rules

- **NEVER --overwrite without user approval**
- **NEVER hand-edit ui/ files** — they get overwritten on update
- **ALL customization lives in rad/ layer**
- **Skip components that error on diff** — report and move on
- **Always type-check after updates**
- **Test in at least one consuming app** if props/slots changed
- **Do NOT use `add --dry-run`, `add --diff`, or `add --view`** — not implemented in CLI despite being in docs
