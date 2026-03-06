# Nebutra-Sailor — Claude Code Instructions

This file is the single source of truth for how Claude Code should work in this codebase.
Read it in full before writing any code.

---

## Project Structure

```
apps/
  landing-page/   Next.js 15 + Tailwind v4 — public marketing site
  web/            Next.js 15 + Tailwind v4 — authenticated dashboard
  storybook/      Storybook 8.x — component library documentation
  docs-hub/       Nextra/MDX — product documentation

packages/
  custom-ui/      PRIMARY component library — Radix + HeroUI + framer-motion
  design-system/  Layout/state wrapper components — NO Primer (removed)
  brand/          Brand colors, gradients, motion language (VI manual)
  theme/          CSS-only multi-theme engine (data-theme attribute)
  icons/          541 Geist icons as tree-shakable TSX components
  preset/         Feature-based SaaS starter config system
  tokens/         (inside custom-ui/src/tokens/) — 3-layer token system
```

---

## Component Generation Rules

### 1. Always import from the right package

```tsx
// New components and pages — use custom-ui
import { Button, Input, Card } from "@nebutra/ui/primitives";
import { AnimateIn, AnimateInGroup } from "@nebutra/ui/primitives";

// Layout wrapper components — use design-system
import { PageHeader, EmptyState, LoadingState, ErrorState } from "@nebutra/design-system/components";

// Icons — Geist icons from @nebutra/icons, Lucide for generic
import { Search, Settings } from "@nebutra/icons";
import { ChevronRight } from "lucide-react";

// NEVER import from @primer/react — it has been removed
```

### 2. Tailwind CSS — use semantic tokens, not raw values

```tsx
// ✅ Correct — semantic CSS variables
<div className="bg-[var(--neutral-1)] text-[var(--neutral-12)] border-[var(--neutral-7)]">

// ✅ Correct — Tailwind utility classes that map to tokens
<div className="bg-white text-gray-900 border-gray-200">

// ❌ Wrong — arbitrary values without semantic meaning
<div style={{ backgroundColor: "#f8fafc" }}>
```

**Key semantic tokens:**

| Token | Meaning | Light value |
|-------|---------|------------|
| `--neutral-1` | App background | #ffffff |
| `--neutral-2` | Subtle background | #f8fafc |
| `--neutral-7` | Default border | gray-300 |
| `--neutral-11` | Secondary text | gray-700 |
| `--neutral-12` | Primary text | gray-900 |
| `--blue-9` | Primary solid fill | #0033FE |
| `--blue-3` | Primary component bg | blue-200 |
| `--cyan-9` | Accent solid fill | #0BF1C3 |
| `--brand-gradient` | Blue→Cyan gradient | 135deg |

### 3. Brand gradients

```tsx
// Gradient text — standard pattern
<h1
  className="font-bold"
  style={{
    background: "var(--brand-gradient)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  }}
>
  Your headline
</h1>

// Gradient button
<button
  className="rounded-lg px-6 py-3 font-semibold text-white"
  style={{ background: "var(--brand-gradient)" }}
>
  Get Started
</button>

// Gradient border (outline variant)
<div className="rounded-lg p-[1px]" style={{ background: "var(--brand-gradient)" }}>
  <div className="rounded-[7px] bg-white px-6 py-3">
    Inner content
  </div>
</div>
```

### 4. Animation — ALWAYS use AnimateIn for entrance animations

```tsx
import { AnimateIn, AnimateInGroup } from "@nebutra/ui/primitives";

// Single element entrance
<AnimateIn preset="emerge">
  <YourComponent />
</AnimateIn>

// Staggered list — children enter one by one
<AnimateInGroup stagger="normal" className="grid grid-cols-3 gap-6">
  {items.map((item, i) => (
    <AnimateIn key={item.id} preset="fadeUp">
      <Card>{item.title}</Card>
    </AnimateIn>
  ))}
</AnimateInGroup>

// Scroll-triggered (for landing page sections)
<AnimateIn preset="emerge" inView>
  <FeatureSection />
</AnimateIn>
```

**Presets:** `emerge` (default, blur+rise), `flow` (slide left), `fade`, `fadeUp`, `scale`

**Never use raw `motion.div` with hardcoded values.** Always use `AnimateIn` or import from `packages/brand/src/motion.ts`.

### 5. Component variants — use CVA

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@nebutra/ui/lib/utils";

const cardVariants = cva(
  "rounded-lg border bg-white shadow-sm transition-shadow",
  {
    variants: {
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      interactive: {
        true: "cursor-pointer hover:shadow-md",
        false: "",
      },
    },
    defaultVariants: { size: "md", interactive: false },
  }
);

interface CardProps extends VariantProps<typeof cardVariants> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ size, interactive, children, className }: CardProps) {
  return (
    <div className={cn(cardVariants({ size, interactive }), className)}>
      {children}
    </div>
  );
}
```

### 6. Accessibility requirements

Every interactive component must have:
- `type="button"` on all `<button>` elements
- `aria-label` on icon-only buttons
- `role` attribute where semantic HTML isn't possible
- Keyboard navigation support (focus rings via `focus:outline-none focus:ring-2 focus:ring-[var(--blue-9)] focus:ring-offset-1`)

```tsx
// ✅ Accessible icon button
<button
  type="button"
  aria-label="Close dialog"
  className="rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-[var(--blue-9)] focus:ring-offset-1"
>
  <X className="h-4 w-4" />
</button>
```

---

## Adding New Components

### Step 1: Choose the right layer

| Component type | Package | Location |
|---------------|---------|----------|
| Generic UI primitive (button, input, badge) | `custom-ui` | `src/primitives/` |
| Complex pattern (data table, command palette) | `custom-ui` | `src/patterns/` |
| Marketing section (hero, feature grid) | `custom-ui` | `src/marketing/` |
| Dashboard layout wrapper | `design-system` | `src/components/` |

### Step 2: File structure

```
src/primitives/
  my-component.tsx          ← component implementation
  my-component.stories.tsx  ← Storybook stories (REQUIRED)
  index.ts                  ← re-export (update existing file)
```

### Step 3: Required story structure

Every new component MUST have a Storybook story:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "./my-component";

const meta: Meta<typeof MyComponent> = {
  title: "Primitives/MyComponent",   // or "Patterns/", "Marketing/"
  component: MyComponent,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof MyComponent>;

export const Default: Story = { args: { /* ... */ } };
export const AllVariants: Story = { render: () => ( /* showcase */ ) };
```

### Step 4: Export from index.ts

After creating the component, add to `packages/custom-ui/src/primitives/index.ts`:
```ts
export { MyComponent, type MyComponentProps } from "./my-component";
```

---

## Rebranding (no Figma required)

To change the brand colors, edit `packages/custom-ui/src/styles/brand-override.css`.
The entire design system cascades from two CSS variable scales.

Or use the palette generator:
```bash
node scripts/generate-palette.mjs --primary=#7C3AED --secondary=#F59E0B
```

This generates a complete `brand-override.css` from any two hex colors.

---

## What NOT to do

```tsx
// ❌ Never import from @primer/react
import { Box, Button } from "@primer/react";

// ❌ Never use inline px/hex values for brand colors
<div style={{ color: "#0033FE" }}>

// ❌ Never use raw motion.div with hardcoded animation values
<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>

// ❌ Never add new HeroUI imports unless Radix has NO equivalent
import { HeroNewComponent } from "@heroui/new-component";

// ❌ Never create a component without a Storybook story
// ❌ Never use console.log in production code (use @nebutra/logger)
// ❌ Never hardcode secrets or API keys
```

---

## Design Token Reference

View ALL tokens visually in Storybook:
```bash
pnpm --filter @nebutra/storybook dev
# → http://localhost:6006 → Design Tokens section
```

The **Design Tokens** section in Storybook shows:
- All brand colors (blue + cyan scales)
- Semantic 12-step scales
- Brand gradients
- Typography scale
- Motion presets
- Shadow/elevation system

---

## Package Commands

```bash
pnpm --filter @nebutra/ui build        # build component library
pnpm --filter @nebutra/storybook dev          # start Storybook
pnpm --filter @nebutra/storybook typecheck    # typecheck stories
pnpm --filter @nebutra/landing-page dev       # start landing page
pnpm --filter @nebutra/web dev                # start dashboard
node scripts/generate-palette.mjs --primary=#HEX --secondary=#HEX  # rebrand
```
