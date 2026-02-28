# Design System — Geist Quality Upgrade

**Date:** 2026-02-28
**Status:** Approved
**Scope:** `packages/custom-ui`, `apps/storybook` (new), `apps/docs-hub`

## Problem

The existing design system has 129+ components with strong coverage but falls short of Geist-level quality in two dimensions:

1. **Visual inconsistency** — spacing, sizing, border-radius, shadows, and focus rings are defined in multiple places with different values, making components look slightly off relative to each other.
2. **Documentation experience** — docs-hub lacks live interactive demos (Show code toggle, copy button) and the page style doesn't match the professional aesthetic of Geist's docs.

## Goals

- Establish a 3-layer design token architecture that becomes the single source of truth for all visual values
- Upgrade 5 core primitive components (Button, Avatar, Input, Card, Badge) to Geist-level quality
- Add Storybook for isolated component development and visual testing
- Add `ComponentPreview` and `PropsTable` to docs-hub for interactive documentation

## Non-Goals

- Extracting tokens into a separate `@nebutra/tokens` package (Phase 2)
- Migrating all 129 components in one go (incremental, starting with 5)
- Replacing Radix UI or existing dependency stack

---

## Architecture

### Token 3-Layer System

```
packages/custom-ui/src/tokens/
├── primitive.ts          Raw values (numbers, color hex, unitless)
├── semantic.ts           Light/dark semantic mapping → CSS variable names
├── components/           Per-component design decisions
│   ├── button.ts
│   ├── avatar.ts
│   ├── input.ts
│   ├── card.ts
│   └── badge.ts
└── index.ts              Unified export
```

**Data flow:**

```
primitive.blue500 = '#3b82f6'
  → semantic.light['color-primary'] = primitive.blue500
    → globals.css  → --color-primary: #3b82f6
      → tailwind   → bg-primary / text-primary
        → button.ts → Button variant="primary"
```

### Storybook App

```
apps/storybook/
├── .storybook/
│   ├── main.ts           Loads stories from packages/custom-ui/src/**/*.stories.tsx
│   └── preview.tsx       Injects globals.css + dark mode toggle
└── package.json          @storybook/react-vite
```

Stories live alongside components:

```
packages/custom-ui/src/primitives/
├── button.tsx
├── button.stories.tsx    ← new
├── avatar.tsx
├── avatar.stories.tsx    ← new
```

### docs-hub Additions

Two new components in `apps/docs-hub/`:

- **`ComponentPreview`** — live rendered preview + animated Show/Hide code + copy button
- **`PropsTable`** — API documentation table (prop / type / default / description)

---

## Design Token Values

### Unified Scale (all 5 components)

| Property           | sm   | md   | lg   |
| ------------------ | ---- | ---- | ---- |
| Height             | 32px | 40px | 48px |
| Horizontal padding | 12px | 16px | 20px |
| Border radius      | 4px  | 6px  | 8px  |
| Font size          | 12px | 14px | 16px |

### Global Refinements (globals.css)

| Token            | Before          | After                                                  | Reason                      |
| ---------------- | --------------- | ------------------------------------------------------ | --------------------------- |
| Default radius   | 4px             | 6px                                                    | More rounded, matches Geist |
| Border color     | gray-200 approx | `hsl(240 5.9% 90%)`                                    | Precise neutral scale       |
| Transition speed | inconsistent    | 150ms ease-out universal                               | Consistent feel             |
| Focus ring       | inconsistent    | `0 0 0 2px var(--color-ring)`                          | Unified a11y                |
| Font stack       | Inter           | `Inter, -apple-system, BlinkMacSystemFont, sans-serif` | Better fallback             |

---

## Component Specifications

### Button

**New variants:** `outline` (missing today)

**Changes:**

- Heights strictly: sm=32px md=40px lg=48px
- Ghost hover: `border border-transparent hover:border-border`
- New `loading` prop with spinner icon replacing leading content
- Unified focus ring via `--color-ring`

**API additions:** `loading?: boolean`, `loadingText?: string`

---

### Avatar

**New sizes:** xs=20px sm=32px md=40px lg=56px xl=80px

**Changes:**

- New `AvatarGroup` component with `max` prop (shows +N overflow badge)
- Fallback initials scale with avatar size
- Image load failure → initials → generic icon fallback chain

**New exports:** `AvatarGroup`, `AvatarGroupItem`

---

### Input

**Changes:**

- Height locked to md=40px (current varies)
- New `prefix` and `suffix` slots for icons/text
- Error state: `--color-destructive` ring + red border
- New `clearable` prop with × button

**API additions:** `prefix?: ReactNode`, `suffix?: ReactNode`, `clearable?: boolean`, `error?: string`

---

### Card

**Changes:**

- Standardized padding: `p-4` (sm) / `p-6` (md, default) / `p-8` (lg)
- Shadow: `shadow-sm` default, `shadow-md` on hover
- New `interactive` prop: hover border highlight + cursor-pointer

**API additions:** `interactive?: boolean`, `padding?: 'sm' | 'md' | 'lg'`

---

### Badge

**Changes:**

- Colors tied to semantic tokens: success/warning/destructive/info
- New `dot` variant: colored dot + text label
- Typography: `text-xs font-medium` universally

**New variants:** `success`, `warning`, `info`, `dot`

---

## Implementation Phases

| Phase | Scope                                  | Key Files                                                         |
| ----- | -------------------------------------- | ----------------------------------------------------------------- |
| 1     | Token 3-layer architecture             | `packages/custom-ui/src/tokens/`                                  |
| 2     | globals.css + tailwind.preset update   | `packages/custom-ui/src/styles/globals.css`, `tailwind.preset.ts` |
| 3     | Storybook app setup                    | `apps/storybook/` (new)                                           |
| 4     | 5 component stories                    | `packages/custom-ui/src/primitives/*.stories.tsx`                 |
| 5     | docs-hub ComponentPreview + PropsTable | `apps/docs-hub/components/`                                       |
| 6     | Button refinement                      | `packages/custom-ui/src/primitives/button.tsx`                    |
| 7     | Avatar + AvatarGroup refinement        | `packages/custom-ui/src/primitives/avatar.tsx`                    |
| 8     | Input refinement                       | `packages/custom-ui/src/primitives/input.tsx`                     |
| 9     | Card refinement                        | `packages/custom-ui/src/primitives/card.tsx`                      |
| 10    | Badge refinement                       | `packages/custom-ui/src/primitives/badge.tsx`                     |

---

## Verification

For each phase, verify:

1. **Token phase:** Run `pnpm typecheck` in `packages/custom-ui` — zero type errors; visually inspect `globals.css` CSS variable chain in browser DevTools
2. **Storybook:** `pnpm dev` in `apps/storybook` — all 5 stories render without error; dark mode toggle works
3. **docs-hub:** ComponentPreview show/hide animation runs; code copy button works; PropsTable renders correctly
4. **Each component:** Visual diff in Storybook against Geist screenshots; all variants × all sizes render; disabled state works; focus ring visible on keyboard navigation; dark mode correct

---

## Key Files

- `packages/custom-ui/src/tokens/` — all new token files
- `packages/custom-ui/src/styles/globals.css` — CSS variable source
- `packages/custom-ui/src/tailwind.preset.ts` — Tailwind extension
- `packages/custom-ui/src/primitives/button.tsx` — current component
- `packages/custom-ui/src/primitives/avatar.tsx` — current component
- `packages/custom-ui/src/primitives/input.tsx` — current component
- `packages/custom-ui/src/primitives/card.tsx` — current component
- `packages/custom-ui/src/primitives/badge.tsx` — current component
- `apps/docs-hub/` — documentation site
