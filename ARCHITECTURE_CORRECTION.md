# Nebutra-Sailor Architecture Correction Plan

**Date:** 2026-03-05
**Based on:** ARCHITECTURE_REVIEW.md findings + stakeholder decisions
**Branch:** `claude/review-architecture-best-practices-OeL5c`

---

## Stakeholder Decisions (Inputs)

| Question | Decision |
|----------|----------|
| `@nebutra/ui` vs `@nebutra/ui` | **Merge into one package** |
| `@nebutra/custom-ui` in CLAUDE.md | **Old name for `@nebutra/ui`** — update all references |
| Multi-theme capability | **Keep** — 6 themes are product capability |
| 8 unused backend packages | **Keep but mark WIP** |

---

## Phase 1: Fix Broken Exports (P0 — Do First)

### 1.1 Clean `@nebutra/ui` package.json exports

**Problem:** 10+ phantom export paths point to non-existent files.

**Action:** Remove phantom exports, keep only what actually exists on disk.

```jsonc
// packages/ui/package.json — BEFORE (broken)
"exports": {
  ".": "./src/index.ts",
  "./primitives": "./src/primitives/index.ts",    // ❌ doesn't exist
  "./patterns": "./src/patterns/index.ts",         // ❌ doesn't exist
  "./marketing": "./src/marketing/index.ts",       // ❌ doesn't exist
  "./layouts/*": "./src/layouts/*.tsx",             // ❌ doesn't exist
  "./widgets/*": "./src/widgets/*.tsx",             // ❌ doesn't exist
  "./styles/globals.css": "./src/styles/globals.css",           // ❌
  "./styles/brand-override.css": "./src/styles/brand-override.css", // ❌
  "./tailwind.preset": "./src/tailwind.preset.ts", // ❌ doesn't exist
  "./lib/utils": "./src/utils/cn.ts"               // ❌ doesn't exist
}

// packages/ui/package.json — AFTER (matches disk)
"exports": {
  ".": "./src/index.ts",
  "./components": "./src/components/index.ts",
  "./components/*": "./src/components/*.tsx",
  "./icons": "./src/icons/index.ts",
  "./theme": "./src/theme/index.ts"
}
```

### 1.2 Fix `apps/web/tsconfig.json` path alias

```jsonc
// BEFORE
"@nebutra/custom-ui/*": ["../../packages/ui/src/*"]

// AFTER
"@nebutra/ui/*": ["../../packages/ui/src/*"]
```

### 1.3 Wire or unwire `@nebutra/billing` in api-gateway

**Option A (recommended):** Remove from `apps/api-gateway/package.json` dependencies since it's never imported.
**Option B:** If billing is imminent, add a `// TODO: wire billing routes` comment and keep the dep.

---

## Phase 2: Merge UI Packages (P1 — This Sprint)

### 2.1 Target State

Merge `@nebutra/ui` INTO `@nebutra/ui`. After merge:

```
packages/ui/
  src/
    index.ts                  ← unified barrel export
    components/               ← Lobe UI re-exports (existing)
    icons/                    ← AI provider icons (existing)
    theme/                    ← theme provider + tokens (existing)

    # ← Migrated from design-system:
    layout/
      Card.tsx
      Container.tsx
      Section.tsx
      PageHeader.tsx
      EmptyState.tsx
      LoadingState.tsx
      ErrorState.tsx
      DesignSystemProvider.tsx  → rename to LayoutProvider.tsx
    primitives/
      accessibility.ts
      layout.ts
      responsive.ts
      spacing.ts
      typography.ts
    typography/
      fonts.css
      fonts.ts
      tokens.ts
    utils/
      index.ts               ← cn(), merge from design-system utils
```

### 2.2 Export Strategy

After merge, `@nebutra/ui` exports:

```jsonc
"exports": {
  ".": "./src/index.ts",
  "./components": "./src/components/index.ts",
  "./layout": "./src/layout/index.ts",
  "./icons": "./src/icons/index.ts",
  "./theme": "./src/theme/index.ts",
  "./primitives": "./src/primitives/index.ts",
  "./typography": "./src/typography/index.ts",
  "./typography/fonts.css": "./src/typography/fonts.css",
  "./utils": "./src/utils/index.ts"
}
```

### 2.3 Migration Checklist

1. Copy `design-system/src/components/` → `ui/src/layout/`
2. Copy `design-system/src/primitives/` → `ui/src/primitives/`
3. Copy `design-system/src/typography/` → `ui/src/typography/`
4. Copy `design-system/src/utils/` → `ui/src/utils/`
5. Merge dependencies: Move `@primer/octicons-react` and `@primer/primitives` to `ui` deps (if still needed for icons)
6. Update all app imports: `@nebutra/ui/layout` → `@nebutra/ui/layout`
7. Update all app imports: `@nebutra/ui/typography` → `@nebutra/ui/typography`
8. Move `design-system/src/tokens/` ingestion system → `_archive/token-ingestion/` (no active consumers)
9. Move `design-system/src/governance/` → `_archive/governance/` (premature)
10. Delete `packages/design-system/` after all imports updated
11. Update `pnpm-workspace.yaml` — remove design-system entry

### 2.4 What NOT to Migrate

| Directory | Reason | Action |
|-----------|--------|--------|
| `design-system/src/tokens/ingestion/` | Zero consumers, premature (Figma/Framer/Lottie) | Archive |
| `design-system/src/governance/` | Registry system with no enforcement | Archive |
| `design-system/src/hooks/` | Inspect contents — likely empty or trivial | Drop if empty |
| `design-system/src/icons/` | Check if it overlaps with `ui/src/icons/` | Merge or drop |
| `design-system/src/theme/brand.ts`, `marketing.ts` | May conflict with `@nebutra/brand` package | Evaluate, likely drop |

---

## Phase 3: Unify Token/Theme Pipeline (P1 — This Sprint)

### 3.1 Problem Statement

Three independent token systems exist with incompatible color spaces:

| Source | Color Space | Consumers |
|--------|------------|-----------|
| `@nebutra/theme/themes.css` | oklch() | Apps (via Tailwind v4 @theme) |
| `@nebutra/ui/src/theme/tokens.ts` | hex | `@nebutra/ui` internal |
| `@nebutra/ui/src/theme/` | Primer scales | `@nebutra/ui` |

### 3.2 Target Architecture

```
┌─────────────────────────────────────────────────┐
│  @nebutra/brand                                  │
│  (brand colors, gradients, motion — source data) │
└──────────────────────┬──────────────────────────┘
                       │ defines brand primitives
                       ▼
┌─────────────────────────────────────────────────┐
│  @nebutra/theme                                  │
│  themes.css — CSS custom properties (oklch)      │
│  6 theme variants via [data-theme="..."]         │
│  next-themes re-export                           │
│  ★ SINGLE SOURCE OF TRUTH for runtime tokens     │
└──────────────────────┬──────────────────────────┘
                       │ consumed via CSS variables
                       ▼
┌─────────────────────────────────────────────────┐
│  @nebutra/ui                                     │
│  Components use var(--color-primary) etc.        │
│  NO internal token definitions                   │
│  NO hex color values — everything from theme     │
└─────────────────────────────────────────────────┘
```

### 3.3 Actions

1. **Delete `packages/ui/src/theme/tokens.ts`** — Replace all internal hex references with CSS variable references (`var(--color-primary)`, etc.)
2. **Simplify `packages/ui/src/theme/provider.tsx`** — Should delegate to `@nebutra/theme`'s ThemeProvider, not define its own token system
3. **Delete `@nebutra/ui/src/theme/`** entirely — After merge, theme comes from `@nebutra/theme`
4. **Add `--brand-gradient` to `themes.css`** — Currently defined in CLAUDE.md but not in the actual theme CSS. Each theme variant should define its own gradient.
5. **Add semantic aliases** to `themes.css` to support CLAUDE.md's `--neutral-1` through `--neutral-12` scale:

```css
@theme {
  /* Map neutral scale to theme tokens */
  --neutral-1: var(--color-background);
  --neutral-2: color-mix(in oklch, var(--color-background), var(--color-muted) 30%);
  --neutral-7: var(--color-border);
  --neutral-11: var(--color-muted-foreground);
  --neutral-12: var(--color-foreground);

  /* Brand */
  --blue-9: var(--color-primary);
  --cyan-9: var(--color-secondary);
  --brand-gradient: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
}
```

### 3.4 Token Naming Convention (Final)

| Category | CSS Variable | Tailwind Class |
|----------|-------------|----------------|
| Background | `--color-background` | `bg-background` |
| Text | `--color-foreground` | `text-foreground` |
| Primary | `--color-primary` | `bg-primary`, `text-primary` |
| Muted | `--color-muted` | `bg-muted` |
| Border | `--color-border` | `border-border` |
| Card | `--color-card` | `bg-card` |
| Destructive | `--color-destructive` | `bg-destructive` |
| Success | `--color-success` | `bg-success` |

These are already defined in `themes.css` — the goal is to ensure ALL components use these and nothing else.

---

## Phase 4: Mark WIP Packages (P2 — This Quarter)

### 4.1 Add README.md to Each WIP Package

For each of the 8 unused packages, add a `README.md`:

```markdown
# @nebutra/{package-name}

> **Status: WIP — Not yet integrated**
>
> This package is under development and not currently consumed by any app.
> Do not import in production code until this notice is removed.

## Planned Purpose
{description}

## Integration Milestone
{when it's expected to be needed}
```

**Packages to mark:**
- `packages/saga/` — Distributed transaction orchestration
- `packages/event-bus/` — In-memory pub/sub messaging
- `packages/feature-flags/` — Feature flag evaluation
- `packages/audit/` — Audit logging
- `packages/ai-providers/` — Multi-provider AI routing
- `packages/mcp/` — Model Context Protocol integration
- `packages/captcha/` — CAPTCHA React component
- `packages/legal/` — GDPR/CCPA compliance

### 4.2 Exclude from CI Typecheck

Add to `turbo.json` a filter or ensure these packages are excluded from the default `typecheck` pipeline to reduce CI noise:

```jsonc
// Option: add "typecheck": false to each WIP package's turbo config
// Or: use turbo --filter='!@nebutra/saga' --filter='!@nebutra/event-bus' ...
```

---

## Phase 5: Housekeeping (P2)

### 5.1 Remove Orphaned Directories

- Delete `apps/docs-hub/` — empty, contains only a dangling symlink
- Remove `services/*` from `pnpm-workspace.yaml` — directory doesn't exist

### 5.2 Standardize TypeScript Target

All apps and packages → `ES2022`:

```
apps/web/tsconfig.json            → "target": "ES2022"
apps/design-docs/tsconfig.json    → "target": "ES2022"
```

### 5.3 Add Security Headers to design-docs

Copy the CSP and X-Frame-Options configuration from `apps/landing-page/next.config.ts` to `apps/design-docs/next.config.ts`.

### 5.4 Standardize Build Strategy

**Decision: Ship source for all internal packages.**

Rationale:
- This is a private monorepo — no npm publishing
- Next.js `transpilePackages` handles compilation
- Reduces build pipeline complexity
- Removes tsup as a dev dependency from most packages

Actions:
- Remove `"build": "tsup"` scripts from packages that don't need them
- Ensure all apps have the consuming packages in `transpilePackages` config
- Keep tsup only for packages that produce standalone CLI tools or need CJS output

### 5.5 Remove Primer Dependencies (If Not Used by Icons)

After merging design-system into ui, check if `@primer/octicons-react` and `@primer/primitives` are still referenced anywhere. If not, remove from dependencies.

---

## Phase 6: Update CLAUDE.md (Do After Phase 2 Merge)

### Changes Required

1. **Replace all `@nebutra/custom-ui` → `@nebutra/ui`**
2. **Remove `@nebutra/ui` references** — all layout components now live in `@nebutra/ui/layout`
3. **Update import examples:**

```tsx
// BEFORE (CLAUDE.md current)
import { Button, Input, Card } from "@nebutra/custom-ui/primitives";
import { PageHeader, EmptyState } from "@nebutra/ui/layout";

// AFTER
import { Button, Input, Card } from "@nebutra/ui/components";
import { PageHeader, EmptyState } from "@nebutra/ui/layout";
```

4. **Update token references** to use the `themes.css` variable names (`--color-primary` etc.) instead of the `--neutral-N` / `--blue-N` aliases (or add both, explaining the mapping)
5. **Update Project Structure** section to reflect merged packages
6. **Update Package Commands** section

---

## Execution Order

```
Phase 1 (Day 1)       Fix broken exports + tsconfig
                       ↓
Phase 2 (Day 2-3)     Merge design-system → ui
                       ↓
Phase 3 (Day 3-4)     Unify token pipeline
                       ↓
Phase 6 (Day 4)       Update CLAUDE.md
                       ↓
Phase 4 (Week 2)      Mark WIP packages
                       ↓
Phase 5 (Week 2)      Housekeeping
```

Each phase is independently deployable. No phase depends on a later phase.

---

## Risk Assessment

| Risk | Mitigation |
|------|-----------|
| Merging breaks Storybook stories | Run `pnpm --filter @nebutra/storybook typecheck` after each migration step |
| Lobe UI re-exports break with new barrel | Keep `./components` export path unchanged — only ADD new paths |
| Theme token rename breaks existing pages | Do NOT rename `themes.css` variables — they're already the target naming |
| WIP packages start failing CI | Exclude from typecheck pipeline before marking |

---

## Success Criteria

- [ ] `pnpm typecheck` passes across all apps
- [ ] Zero phantom exports in any `package.json`
- [ ] Single import path for all UI components: `@nebutra/ui/*`
- [ ] `@nebutra/ui` no longer exists as a package
- [ ] All tokens flow from `@nebutra/theme/themes.css` — no competing definitions
- [ ] CLAUDE.md accurately reflects the actual codebase structure
- [ ] 8 WIP packages clearly documented with status and milestone
