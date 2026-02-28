# docs-hub Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create `apps/docs-hub` as a Mintlify documentation site, migrate `packages/design-system` into it as a co-located sub-package, and scaffold all MDX pages for the full Design System — Foundations, UI Patterns, Fragment Components, and Atom Components.

**Architecture:** `apps/docs-hub/` is the Mintlify app root (mint.json + MDX pages). `apps/docs-hub/design-system/` is the migrated `@nebutra/design-system` package. `pnpm-workspace.yaml` gains `"apps/docs-hub/*"` so the nested package is still discoverable as a workspace package — consumers (`apps/web`, `apps/landing-page`, `packages/custom-ui`) require zero changes.

**Tech Stack:** Mintlify (docs platform), pnpm workspaces, TypeScript, MDX

---

## Phase 1 — Scaffold docs-hub app

### Task 1: Create docs-hub directory and package.json

**Files:**

- Create: `apps/docs-hub/package.json`

**Step 1: Create the directory**

```bash
mkdir -p apps/docs-hub
```

**Step 2: Create package.json**

```json
{
  "name": "@nebutra/docs-hub",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "mintlify dev",
    "build": "mintlify build"
  },
  "devDependencies": {
    "mintlify": "^4.0.0"
  }
}
```

**Step 3: Commit**

```bash
git add apps/docs-hub/package.json
git commit -m "feat(docs-hub): scaffold docs-hub app with package.json"
```

---

### Task 2: Create mint.json with full navigation

**Files:**

- Create: `apps/docs-hub/mint.json`

**Step 1: Create mint.json**

```json
{
  "$schema": "https://mintlify.com/schema.json",
  "name": "Nebutra Design System",
  "logo": {
    "light": "/logo/light.svg",
    "dark": "/logo/dark.svg"
  },
  "favicon": "/favicon.svg",
  "colors": {
    "primary": "#0070F3",
    "light": "#3291FF",
    "dark": "#0761D1",
    "background": {
      "light": "#FFFFFF",
      "dark": "#0A0A0A"
    }
  },
  "topbarLinks": [
    {
      "name": "GitHub",
      "url": "https://github.com/Nebutra-SaaS-Lab/Nebutra-Sailor"
    }
  ],
  "navigation": [
    {
      "group": "Getting Started",
      "pages": ["introduction", "how-to-use", "contributing"]
    },
    {
      "group": "Foundations",
      "pages": [
        "foundations/accessibility",
        "foundations/color",
        "foundations/typography",
        "foundations/theming",
        "foundations/tailwind",
        "foundations/icons",
        "foundations/copywriting"
      ]
    },
    {
      "group": "UI Patterns",
      "pages": [
        "ui-patterns/introduction",
        "ui-patterns/charts",
        "ui-patterns/empty-states",
        "ui-patterns/forms",
        "ui-patterns/layout",
        "ui-patterns/modality",
        "ui-patterns/navigation",
        "ui-patterns/tables"
      ]
    },
    {
      "group": "Fragment Components",
      "pages": [
        "fragment-components/introduction",
        "fragment-components/admonition",
        "fragment-components/assistant-chat",
        "fragment-components/confirmation-modal",
        "fragment-components/data-input",
        "fragment-components/empty-state",
        "fragment-components/filter-bar",
        "fragment-components/form-item-layout",
        "fragment-components/info-tooltip",
        "fragment-components/inner-side-menu",
        "fragment-components/logs-bar-chart",
        "fragment-components/metric-card",
        "fragment-components/modal",
        "fragment-components/multi-select",
        "fragment-components/page-container",
        "fragment-components/page-header",
        "fragment-components/page-section",
        "fragment-components/table-of-contents",
        "fragment-components/text-confirm-dialog"
      ]
    },
    {
      "group": "Atom Components",
      "pages": [
        "atom-components/introduction",
        "atom-components/accordion",
        "atom-components/alert",
        "atom-components/alert-dialog",
        "atom-components/aspect-ratio",
        "atom-components/avatar",
        "atom-components/badge",
        "atom-components/breadcrumb",
        "atom-components/button",
        "atom-components/calendar",
        "atom-components/card",
        "atom-components/carousel",
        "atom-components/checkbox",
        "atom-components/collapsible",
        "atom-components/combobox",
        "atom-components/command",
        "atom-components/command-menu",
        "atom-components/context-menu",
        "atom-components/date-picker",
        "atom-components/dialog",
        "atom-components/drawer",
        "atom-components/dropdown-menu",
        "atom-components/expanding-textarea",
        "atom-components/field",
        "atom-components/form",
        "atom-components/hover-card",
        "atom-components/input",
        "atom-components/input-otp",
        "atom-components/label",
        "atom-components/menubar",
        "atom-components/mermaid",
        "atom-components/nav-menu",
        "atom-components/navigation-menu",
        "atom-components/pagination",
        "atom-components/popover",
        "atom-components/progress",
        "atom-components/radio-group",
        "atom-components/radio-group-card",
        "atom-components/radio-group-stacked",
        "atom-components/resizable",
        "atom-components/scroll-area",
        "atom-components/select",
        "atom-components/separator",
        "atom-components/sheet",
        "atom-components/sidebar",
        "atom-components/skeleton",
        "atom-components/slider",
        "atom-components/sonner",
        "atom-components/switch",
        "atom-components/table",
        "atom-components/tabs",
        "atom-components/textarea",
        "atom-components/toggle",
        "atom-components/toggle-group",
        "atom-components/tooltip",
        "atom-components/tree-view"
      ]
    }
  ],
  "footerSocials": {
    "github": "https://github.com/Nebutra-SaaS-Lab/Nebutra-Sailor"
  }
}
```

**Step 2: Commit**

```bash
git add apps/docs-hub/mint.json
git commit -m "feat(docs-hub): add mint.json with full navigation structure"
```

---

## Phase 2 — Migrate packages/design-system

### Task 3: Move design-system into docs-hub

**Files:**

- Move: `packages/design-system/` → `apps/docs-hub/design-system/`

**Step 1: Move the directory**

```bash
mv packages/design-system apps/docs-hub/design-system
```

**Step 2: Verify the package.json name is unchanged**

```bash
cat apps/docs-hub/design-system/package.json | grep '"name"'
# Expected: "name": "@nebutra/design-system"
```

**Step 3: Commit**

```bash
git add -A
git commit -m "feat(docs-hub): migrate packages/design-system to apps/docs-hub/design-system"
```

---

### Task 4: Update pnpm-workspace.yaml

**Files:**

- Modify: `pnpm-workspace.yaml`

**Step 1: Open and edit pnpm-workspace.yaml**

Current content:

```yaml
packages:
  - "apps/*"
  - "packages/*"
  - "services/*"
```

Updated content:

```yaml
packages:
  - "apps/*"
  - "apps/docs-hub/*"
  - "packages/*"
  - "services/*"
```

**Step 2: Reinstall to relink workspace**

```bash
pnpm install
```

Expected: pnpm resolves `@nebutra/design-system` from `apps/docs-hub/design-system`. No errors.

**Step 3: Verify consumers still typecheck**

```bash
pnpm --filter @nebutra/landing-page typecheck
pnpm --filter @nebutra/web typecheck
pnpm --filter @nebutra/custom-ui typecheck
```

Expected: All pass with zero errors.

**Step 4: Commit**

```bash
git add pnpm-workspace.yaml pnpm-lock.yaml
git commit -m "feat(docs-hub): update pnpm-workspace to include apps/docs-hub/* packages"
```

---

## Phase 3 — Getting Started MDX pages

### Task 5: Create Getting Started pages

**Files:**

- Create: `apps/docs-hub/introduction.mdx`
- Create: `apps/docs-hub/how-to-use.mdx`
- Create: `apps/docs-hub/contributing.mdx`

**Step 1: Create introduction.mdx**

```mdx
---
title: "Introduction"
description: "Nebutra Design System — a unified UI foundation extracted from production Nebutra applications."
---

## What is this?

The Nebutra Design System is an abstraction of the UI patterns, tokens, and components already proven in our production applications. It is not a new design language — it is a formalisation of what already exists.

**This documentation is the single source of truth.** No parallel design documents or verbal conventions exist.

## What it covers

<CardGroup cols={2}>
  <Card title="Foundations" icon="palette" href="/foundations/color">
    Color, typography, spacing, theming, and accessibility guidelines.
  </Card>
  <Card title="UI Patterns" icon="layout-grid" href="/ui-patterns/introduction">
    High-level patterns for forms, tables, navigation, and modality.
  </Card>
  <Card
    title="Fragment Components"
    icon="puzzle"
    href="/fragment-components/introduction"
  >
    Composed UI blocks used across pages.
  </Card>
  <Card
    title="Atom Components"
    icon="circle"
    href="/atom-components/introduction"
  >
    Primitive building blocks: buttons, inputs, badges, and more.
  </Card>
</CardGroup>

## Principles

- **Source of truth** — Specs originate from existing implementations, never invented
- **Reuse first** — Existing atoms are catalogued and promoted, not duplicated
- **Abstract, don't refactor** — New code follows the system; old code migrates gradually
- **No inline CSS** — Tokens, Tailwind classes, or component Props only
- **Minimal scope** — Only high-frequency, cross-page UI is formalised
```

**Step 2: Create how-to-use.mdx**

````mdx
---
title: "How to Use"
description: "Install and consume the design system in your app."
---

## Installation

The design system is a workspace package. Add it to your app:

```json
{
  "dependencies": {
    "@nebutra/design-system": "workspace:*"
  }
}
```
````

## Setup

Wrap your app with `DesignSystemProvider`:

```tsx
import { DesignSystemProvider } from "@nebutra/design-system";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DesignSystemProvider>{children}</DesignSystemProvider>;
}
```

## Importing components

```tsx
import { Button, Card, PageHeader } from "@nebutra/design-system";
import { fontFamilies, typeStyles } from "@nebutra/design-system/typography";
import { marketingGradients } from "@nebutra/design-system/theme";
```

## Theme mode

```tsx
import { useDesignSystem } from "@nebutra/design-system";

function ThemeToggle() {
  const { toggleMode, resolvedMode } = useDesignSystem();
  return <button onClick={toggleMode}>Mode: {resolvedMode}</button>;
}
```

````

**Step 3: Create contributing.mdx**

```mdx
---
title: "Contribution Guidelines"
description: "How to add or update components in the design system."
---

## Rules

<Warning>
  Do not introduce new visual styles not already present in the codebase. If a pattern does not exist in production, it does not belong in the Design System.
</Warning>

1. **Extract, don't invent** — All additions must be extracted from existing app implementations
2. **No inline CSS** — Use Design Tokens, Tailwind classes, or component Props
3. **No duplicate semantics** — Consolidate overlapping components before adding new ones
4. **Document first** — Add the MDX page before or alongside the implementation

## Adding a new atom component

1. Identify it in `packages/custom-ui/src/primitives/` or an app
2. Ensure it has no semantic overlap with existing components
3. Add `atom-components/<name>.mdx` with Demo / Usage / Props / Examples / Accessibility sections
4. Export it from `@nebutra/design-system` if it belongs at that layer

## Adding a new fragment component

1. Identify the composed pattern in app code
2. Add `fragment-components/<name>.mdx` with When to use / Structure / Composition / Examples / Related sections
3. Ensure all constituent atoms are documented

## Updating an existing component

1. Update the MDX page
2. Update the component source in `apps/docs-hub/design-system/src/`
3. Run `pnpm --filter @nebutra/design-system build` to verify
````

**Step 4: Commit**

```bash
git add apps/docs-hub/introduction.mdx apps/docs-hub/how-to-use.mdx apps/docs-hub/contributing.mdx
git commit -m "feat(docs-hub): add getting started pages (introduction, how-to-use, contributing)"
```

---

## Phase 4 — Foundations MDX pages

### Task 6: Create Foundations pages

**Files:**

- Create: `apps/docs-hub/foundations/color.mdx`
- Create: `apps/docs-hub/foundations/typography.mdx`
- Create: `apps/docs-hub/foundations/theming.mdx`
- Create: `apps/docs-hub/foundations/tailwind.mdx`
- Create: `apps/docs-hub/foundations/icons.mdx`
- Create: `apps/docs-hub/foundations/accessibility.mdx`
- Create: `apps/docs-hub/foundations/copywriting.mdx`

**Step 1: Create the foundations/ directory**

```bash
mkdir -p apps/docs-hub/foundations
```

**Step 2: Create color.mdx** (content sourced from `apps/docs-hub/design-system/src/theme/`)

````mdx
---
title: "Color"
description: "Color system built on Primer primitives with Nebutra brand overrides."
---

## Overview

Colors are provided via `@primer/react`'s theme system, extended with Nebutra brand tokens.
All color values are consumed through CSS variables — never hardcoded hex values.

## Design Rationale

The color system is layered:

1. **Primer baseline** (`theme/default.ts`) — GitHub's production-tested semantic color tokens
2. **Brand overrides** (`theme/brand.ts`) — Nebutra accent colors applied over the baseline
3. **Marketing extended** (`theme/marketing.ts`) — Gradient and effect tokens for landing pages only

## Usage Guidelines

```tsx
// ✅ Use semantic tokens via sx prop
<Box sx={{ color: "fg.default", bg: "canvas.default" }} />

// ✅ Use brand colors
import { brandColors } from "@nebutra/design-system/theme"
<Box sx={{ color: brandColors.primary[600] }} />

// ❌ Never hardcode hex values
<Box sx={{ color: "#1a1a1a" }} />
```
````

## Token Reference

| Token            | Light         | Dark          | Usage                |
| ---------------- | ------------- | ------------- | -------------------- |
| `fg.default`     | `#1F2328`     | `#E6EDF3`     | Primary text         |
| `fg.muted`       | `#656D76`     | `#8D96A0`     | Secondary text       |
| `canvas.default` | `#FFFFFF`     | `#0D1117`     | Page background      |
| `canvas.subtle`  | `#F6F8FA`     | `#161B22`     | Subtle backgrounds   |
| `accent.fg`      | Brand primary | Brand primary | Interactive elements |

## Do / Don't

<Columns cols={2}>
  <div>
    ✅ **Do** — Use semantic color tokens
    ```tsx
    sx={{ color: "fg.muted" }}
    ```
  </div>
  <div>
    ❌ **Don't** — Hardcode colors or use Tailwind color classes outside design tokens
    ```tsx
    style={{ color: "#888888" }}
    className="text-gray-500"
    ```
  </div>
</Columns>
```

**Step 3: Create typography.mdx** (content sourced from `apps/docs-hub/design-system/src/typography/`)

````mdx
---
title: "Typography"
description: "Font system built on Inter, JetBrains Mono, and CJK fallbacks."
---

## Overview

Typography is managed exclusively in `@nebutra/design-system/typography`. Do not set font families or sizes outside this system.

## Design Rationale

Three font stacks cover all use cases:

- **Primary (Inter)** — UI text, body, labels
- **Mono (JetBrains Mono)** — Code, technical values, terminal output
- **CJK** — Chinese, Japanese, Korean glyphs

## Font Families

```tsx
import { fontFamilies } from "@nebutra/design-system/typography";

fontFamilies.primary; // Inter, system-ui, sans-serif
fontFamilies.mono; // JetBrains Mono, Fira Code, monospace
fontFamilies.cjk; // Noto Sans CJK, PingFang SC, ...
```
````

## Type Scale

```tsx
import { fontSizes } from "@nebutra/design-system/typography";

// xs → 8xl (rem values)
fontSizes.xs; // 0.75rem
fontSizes.sm; // 0.875rem
fontSizes.base; // 1rem
fontSizes.lg; // 1.125rem
fontSizes.xl; // 1.25rem
fontSizes.h1; // 2.25rem
```

## Type Presets

```tsx
import { typeStyles } from "@nebutra/design-system/typography"

<Heading sx={typeStyles.h1}>Page Title</Heading>
<Text sx={typeStyles.body}>Body content</Text>
<Text sx={typeStyles.code}>console.log()</Text>
<Text sx={typeStyles.caption}>Helper text</Text>
```

## Do / Don't

✅ Use `typeStyles` presets for consistency.
❌ Do not set `fontSize`, `fontFamily`, or `lineHeight` ad-hoc via `sx` or `style`.

````

**Step 4: Create theming.mdx**

```mdx
---
title: "Theming"
description: "Light/dark mode and brand customisation."
---

## Overview

Theming is handled by `DesignSystemProvider` which wraps `@primer/react`'s `ThemeProvider`.
Modes: `light`, `dark`, `auto` (follows system preference).

## Usage

```tsx
import { DesignSystemProvider, useDesignSystem } from "@nebutra/design-system"

// Wrap at root
<DesignSystemProvider defaultMode="auto">
  <App />
</DesignSystemProvider>

// Read and toggle mode
const { mode, resolvedMode, toggleMode, setMode } = useDesignSystem()
````

## Brand Customisation

```tsx
import { createTheme, brandColors } from "@nebutra/design-system/theme";

const customTheme = createTheme("light", {
  colors: {
    accent: {
      fg: brandColors.primary[600],
      emphasis: brandColors.primary[500],
    },
  },
});
```

## Marketing Tokens

For landing pages and hero sections only — do not use in app UI:

```tsx
import {
  marketingGradients,
  marketingEffects,
  marketingTypography,
  marketingTokens,
} from "@nebutra/design-system/theme"

<Box sx={{ background: marketingGradients.mesh }} />
<Card sx={marketingEffects.glass} />
<Heading sx={marketingTypography.display}>Hero</Heading>
```

````

**Step 5: Create remaining foundations pages as stubs**

```bash
# tailwind.mdx
cat > apps/docs-hub/foundations/tailwind.mdx << 'EOF'
---
title: "Tailwind Classes"
description: "Tailwind utility usage within the design system."
---

## Overview

<!-- TODO: Extract from packages/custom-ui tailwind.preset.ts -->

## Design Rationale

## Usage Guidelines

## Do / Don't
EOF

# icons.mdx
cat > apps/docs-hub/foundations/icons.mdx << 'EOF'
---
title: "Icons"
description: "Icon system using Octicons and Lucide."
---

## Overview

<!-- TODO: Extract from packages/design-system/src/icons/ and packages/ui/src/icons/ -->

## Design Rationale

## Usage

## Do / Don't
EOF

# accessibility.mdx
cat > apps/docs-hub/foundations/accessibility.mdx << 'EOF'
---
title: "Accessibility"
description: "Accessibility patterns and ARIA usage."
---

## Overview

<!-- TODO: Extract from packages/design-system/src/primitives/accessibility.ts -->

## Design Rationale

## Usage Guidelines

## Do / Don't
EOF

# copywriting.mdx
cat > apps/docs-hub/foundations/copywriting.mdx << 'EOF'
---
title: "Copywriting"
description: "Voice, tone, and writing guidelines for UI text."
---

## Overview

## Design Rationale

## Usage Guidelines

## Do / Don't
EOF
````

**Step 6: Commit**

```bash
git add apps/docs-hub/foundations/
git commit -m "feat(docs-hub): add foundations pages (color, typography, theming, tailwind, icons, a11y, copywriting)"
```

---

## Phase 5 — UI Patterns MDX pages

### Task 7: Create UI Patterns pages

**Files:**

- Create: `apps/docs-hub/ui-patterns/` (8 files)

**Step 1: Create directory and introduction.mdx**

```bash
mkdir -p apps/docs-hub/ui-patterns
```

```mdx
---
title: "UI Patterns"
description: "High-level composition patterns for recurring UI problems."
---

UI Patterns describe **how components combine** to solve specific UI problems.
They are not components themselves — they are structural templates and guidelines.

<CardGroup cols={2}>
  <Card title="Charts" href="/ui-patterns/charts">
    Data visualisation patterns
  </Card>
  <Card title="Empty States" href="/ui-patterns/empty-states">
    Zero-data and loading states
  </Card>
  <Card title="Forms" href="/ui-patterns/forms">
    Data collection patterns
  </Card>
  <Card title="Layout" href="/ui-patterns/layout">
    Page and section composition
  </Card>
  <Card title="Modality" href="/ui-patterns/modality">
    Dialogs, drawers, sheets
  </Card>
  <Card title="Navigation" href="/ui-patterns/navigation">
    Routing and wayfinding
  </Card>
  <Card title="Tables" href="/ui-patterns/tables">
    Tabular data display
  </Card>
</CardGroup>
```

**Step 2: Create each pattern page as structured stub**

Template for each pattern page — replace `[Pattern Name]` and content:

```mdx
---
title: "[Pattern Name]"
description: "[One line description]"
---

## When to Use

<!-- TODO: Extract from app usage patterns in apps/web/src/ and apps/landing-page/src/ -->

## Structure

## Composition

## Examples

## Related Components
```

Create all 7 pattern pages (charts, empty-states, forms, layout, modality, navigation, tables) using this template.

**Step 3: Commit**

```bash
git add apps/docs-hub/ui-patterns/
git commit -m "feat(docs-hub): add ui-patterns pages (introduction + 7 patterns)"
```

---

## Phase 6 — Fragment Components MDX pages

### Task 8: Create Fragment Component pages

**Files:**

- Create: `apps/docs-hub/fragment-components/` (19 files)

**Sources to extract from:**

- `packages/custom-ui/src/components/` — `empty-state.tsx`, `onboarding-checklist.tsx`, `team-chat.tsx`
- `packages/custom-ui/src/patterns/` — `Card/`, `CommandBox.tsx`, `Terminal/`
- `packages/custom-ui/src/layouts/` — `SectionContainer.tsx`, `bento-grid.tsx`
- `apps/web/src/` — modal patterns, filter bars, page headers

**Step 1: Create directory and introduction.mdx**

```bash
mkdir -p apps/docs-hub/fragment-components
```

```mdx
---
title: "Fragment Components"
description: "Composed UI blocks combining multiple atoms into purpose-specific patterns."
---

Fragment components are pre-assembled combinations of atom components for specific business contexts.
Unlike UI Patterns (structural guidelines), Fragments are **concrete, importable components**.

<Info>
  Fragment components are implemented in `@nebutra/custom-ui`. They are
  documented here but may reference atoms from `@nebutra/design-system` or
  `@nebutra/ui`.
</Info>
```

**Step 2: Create each fragment page as structured stub**

Template for each fragment:

````mdx
---
title: "[Component Name]"
description: "[One line description]"
---

## Demo

<!-- TODO: Extract demo from packages/custom-ui or apps/web -->

## Usage

```tsx
import {} from "@nebutra/custom-ui";
```
````

## Props

<!-- TODO: Extract from component source -->

## Examples

## Accessibility

````

Create all 18 fragment pages using this template:
`admonition`, `assistant-chat`, `confirmation-modal`, `data-input`, `empty-state`,
`filter-bar`, `form-item-layout`, `info-tooltip`, `inner-side-menu`, `logs-bar-chart`,
`metric-card`, `modal`, `multi-select`, `page-container`, `page-header`, `page-section`,
`table-of-contents`, `text-confirm-dialog`

**Step 3: Commit**

```bash
git add apps/docs-hub/fragment-components/
git commit -m "feat(docs-hub): add fragment-components pages (introduction + 18 fragments)"
````

---

## Phase 7 — Atom Components MDX pages

### Task 9: Create Atom Component pages

**Files:**

- Create: `apps/docs-hub/atom-components/` (54 files — introduction + 53 atoms)

**Sources to extract from:**

- `packages/custom-ui/src/primitives/` — the primary source (100+ primitives)
- `packages/ui/src/components/index.ts` — Lobe UI re-exports

**Step 1: Create directory and introduction.mdx**

```bash
mkdir -p apps/docs-hub/atom-components
```

```mdx
---
title: "Atom Components"
description: "Primitive UI building blocks — the smallest reusable units."
---

Atom components are the foundation of the design system. They are:

- **Self-contained** — no business logic
- **Composable** — designed to combine into fragments
- **Accessible** — ARIA attributes baked in

<Info>
  Atoms are implemented in `packages/custom-ui/src/primitives/`. Import them via
  `@nebutra/custom-ui/primitives`.
</Info>
```

**Step 2: Create each atom page as structured stub**

Template:

````mdx
---
title: "[Component Name]"
description: "[One line description]"
---

## Demo

```tsx
// TODO: Extract from packages/custom-ui/src/primitives/[name].tsx
```
````

## Usage

```tsx
import { [ComponentName] } from "@nebutra/custom-ui/primitives"
```

## Props

| Prop       | Type              | Default | Description |
| ---------- | ----------------- | ------- | ----------- |
| `children` | `React.ReactNode` | —       | Content     |

## Examples

## Accessibility

````

Create all 53 atom pages:
`accordion`, `alert`, `alert-dialog`, `aspect-ratio`, `avatar`, `badge`, `breadcrumb`,
`button`, `calendar`, `card`, `carousel`, `checkbox`, `collapsible`, `combobox`,
`command`, `command-menu`, `context-menu`, `date-picker`, `dialog`, `drawer`,
`dropdown-menu`, `expanding-textarea`, `field`, `form`, `hover-card`, `input`,
`input-otp`, `label`, `menubar`, `mermaid`, `nav-menu`, `navigation-menu`,
`pagination`, `popover`, `progress`, `radio-group`, `radio-group-card`,
`radio-group-stacked`, `resizable`, `scroll-area`, `select`, `separator`, `sheet`,
`sidebar`, `skeleton`, `slider`, `sonner`, `switch`, `table`, `tabs`, `textarea`,
`toggle`, `toggle-group`, `tooltip`, `tree-view`

**Step 3: Commit**

```bash
git add apps/docs-hub/atom-components/
git commit -m "feat(docs-hub): add atom-components pages (introduction + 53 atoms)"
````

---

## Phase 8 — Install dependencies and verify

### Task 10: Install mintlify and verify dev server

**Step 1: Install dependencies**

```bash
pnpm --filter @nebutra/docs-hub install
```

**Step 2: Verify mintlify CLI is available**

```bash
pnpm --filter @nebutra/docs-hub exec mintlify --version
```

Expected output: mintlify version number (e.g. `4.x.x`)

**Step 3: Start dev server**

```bash
cd apps/docs-hub && pnpm dev
```

Expected: Mintlify dev server starts at `http://localhost:3000` with no errors.
Check that all navigation links resolve (no 404s in the console).

**Step 4: Final commit**

```bash
git add pnpm-lock.yaml
git commit -m "feat(docs-hub): install mintlify dev dependency and verify setup"
```

---

## Phase 9 — Update turbo.json (optional)

### Task 11: Add docs-hub to turbo pipeline

**Files:**

- Modify: `turbo.json`

**Step 1: Check existing turbo.json pipeline**

```bash
cat turbo.json
```

**Step 2: Ensure `build` and `dev` tasks include docs-hub**

If turbo.json uses `"pipeline"` or `"tasks"`, the existing `build` and `dev` tasks
will automatically include `@nebutra/docs-hub` since it matches the workspace glob.
No changes needed unless docs-hub should be excluded.

**Step 3: Commit if changes were made**

```bash
git add turbo.json
git commit -m "chore: include docs-hub in turbo pipeline"
```

---

## Verification Checklist

After all tasks complete:

- [ ] `pnpm install` runs clean from repo root
- [ ] `pnpm --filter @nebutra/landing-page typecheck` passes
- [ ] `pnpm --filter @nebutra/web typecheck` passes
- [ ] `pnpm --filter @nebutra/custom-ui typecheck` passes
- [ ] `cd apps/docs-hub && pnpm dev` starts without errors
- [ ] All mint.json pages resolve in the browser (no 404s)
- [ ] `apps/docs-hub/design-system/` contains `package.json` with `"name": "@nebutra/design-system"`
- [ ] `packages/design-system/` no longer exists

---

## Content Population (Post-scaffold)

MDX stubs are created in this plan. Content population is a separate ongoing effort:

| Priority | Section                                    | Source                                                      |
| -------- | ------------------------------------------ | ----------------------------------------------------------- |
| P1       | Foundations: Color, Typography, Theming    | `design-system/src/theme/`, `design-system/src/typography/` |
| P1       | Atom: Button, Input, Card, Badge           | `custom-ui/src/primitives/`                                 |
| P2       | Fragment: Page Header, Page Section, Modal | `custom-ui/src/components/`, app code                       |
| P2       | UI Patterns: Forms, Tables, Layout         | `apps/web/src/`                                             |
| P3       | Remaining atoms and fragments              | `custom-ui/src/primitives/`                                 |
