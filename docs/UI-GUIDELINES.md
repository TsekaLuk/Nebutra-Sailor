# UI Guidelines

This document defines the design system usage, visual standards, and component guidelines for Nebutra products.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         Apps (Consumer Layer)                                │
│  ┌─────────────────────┐              ┌─────────────────────┐               │
│  │    landing-page     │              │        web          │               │
│  │    (Marketing)      │              │    (Dashboard)      │               │
│  └──────────┬──────────┘              └──────────┬──────────┘               │
│             │                                    │                          │
├─────────────┼────────────────────────────────────┼──────────────────────────┤
│             │         UI Extension Layer         │                          │
│             ▼                                    ▼                          │
│  ┌────────────────────────────────────┐  ┌──────────────────────┐          │
│  │  @nebutra/custom-ui               │  │ @nebutra/ui          │          │
│  │  (Brand/Domain + shadcn-style)    │  │ (Lobe-style)         │          │
│  └──────────────────┬─────────────────┘  └──────────┬───────────┘          │
│                     │                               │                      │
│                     └───────────────────────────────┘                      │
│                                    │                                       │
│                                    ▼                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│                    SSOT (Single Source of Truth)                            │
│                                                                             │
│              ┌──────────────────────────────────────────┐                   │
│              │        @nebutra/design-system            │                   │
│              ├──────────────────────────────────────────┤                   │
│              │  theme/        │ typography/  │ primitives/                  │
│              │  ├─ default    │ ├─ tokens    │ ├─ layout                    │
│              │  ├─ brand      │ ├─ fonts     │ ├─ spacing                   │
│              │  └─ marketing ★│ └─ fonts.css │ └─ a11y                      │
│              ├──────────────────────────────────────────┤                   │
│              │  components/   │ icons/       │ hooks/                       │
│              └──────────────────────────────────────────┘                   │
│                               │                                             │
│                               ▼                                             │
│              ┌──────────────────────────────────────────┐                   │
│              │            @primer/react                 │                   │
│              │      (GitHub Primer Design System)       │                   │
│              └──────────────────────────────────────────┘                   │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Layer Responsibilities

| Layer          | Package                  | Purpose                             | When to Use                     |
| -------------- | ------------------------ | ----------------------------------- | ------------------------------- |
| **Foundation** | `@primer/react`          | GitHub's base UI library            | Never import directly           |
| **SSOT**       | `@nebutra/design-system` | Tokens, primitives, base components | Always - foundation for all UI  |
| **Extensions** | `@nebutra/ui`            | Lobe-style general components       | Common UI patterns              |
|                | `@nebutra/custom-ui`     | Brand/domain + shadcn-style UI      | Production features, dashboards |
| **External**   | HeroUI, Magic UI, etc.   | Third-party UI libraries            | Quick validation, one-off needs |

### Theme Module Structure

| Module              | Purpose                                                          | Use Case                     |
| ------------------- | ---------------------------------------------------------------- | ---------------------------- |
| `theme/default`     | Primer baseline tokens                                           | All apps                     |
| `theme/brand`       | Brand color overrides                                            | White-label, customization   |
| `theme/marketing` ★ | Marketing-specific tokens (gradients, effects, large typography) | Landing pages, hero sections |

## Design Tokens

### Colors

Use semantic color tokens, never hard-coded values:

```tsx
// ✅ Good - semantic token
<Box bg="canvas.default" color="fg.default" />

// ❌ Bad - hard-coded color
<Box bg="#ffffff" color="#000000" />
```

**Semantic Color Categories:**

- `canvas.*` - Background surfaces
- `fg.*` - Foreground/text colors
- `border.*` - Border colors
- `accent.*` - Brand accent colors
- `success.*`, `warning.*`, `danger.*` - State colors

### Spacing

Use the spacing scale (based on 4px unit):

| Token | Value | Usage                         |
| ----- | ----- | ----------------------------- |
| 0     | 0px   | Reset                         |
| 1     | 4px   | Tight spacing (icons, badges) |
| 2     | 8px   | Compact spacing               |
| 3     | 16px  | Default spacing               |
| 4     | 24px  | Section spacing               |
| 5     | 32px  | Page sections                 |
| 6+    | 40px+ | Large gaps                    |

```tsx
// ✅ Good - token-based
<Box p={3} gap={2} />

// ❌ Bad - arbitrary values
<Box padding="15px" gap="7px" />
```

### Typography

The typography system provides comprehensive font management with open-source fonts:

**Font Stacks:**

- **Primary:** Inter, Public Sans, system fallbacks
- **Monospace:** JetBrains Mono, Fira Code, system mono
- **CJK:** Source Han Sans SC, Noto Sans CJK SC, PingFang SC

```tsx
import { typeStyles, fontFamilies, TYPE_SCALE } from "@nebutra/design-system";

// Pre-defined type styles (recommended)
<Heading sx={typeStyles.display}>Hero Title</Heading>
<Text sx={typeStyles.body}>Body content</Text>
<Text sx={typeStyles.caption}>Secondary info</Text>
<code style={typeStyles.code}>const x = 1;</code>

// Direct token usage
<Box sx={{
  fontFamily: fontFamilies.primary,
  fontSize: TYPE_SCALE.lg,
}}>
  Custom styled text
</Box>
```

**Type Scale (rem-based):**
| Token | Size | Usage |
|-------|------|-------|
| `xs` | 0.75rem | Fine print |
| `sm` | 0.875rem | Captions, labels |
| `base` | 1rem | Body text |
| `lg` | 1.125rem | Emphasized body |
| `xl` - `4xl` | 1.25-2.25rem | Headings |
| `5xl` - `8xl` | 3-6rem | Display titles |

**Font Loading:**

```tsx
// In _app.tsx or layout.tsx
import "@nebutra/design-system/typography/fonts.css";

// Or with Next.js font optimization
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-primary" });
```

> 📖 **Full documentation:** See [TYPOGRAPHY.md](./TYPOGRAPHY.md) for complete font stacks, loading strategies, CJK support, and performance best practices.

### Breakpoints

Responsive design uses these breakpoints:

| Name | Min Width | Target Devices |
| ---- | --------- | -------------- |
| xs   | 0px       | Small phones   |
| sm   | 544px     | Large phones   |
| md   | 768px     | Tablets        |
| lg   | 1012px    | Laptops        |
| xl   | 1280px    | Desktops       |

```tsx
// Responsive values (array format)
<Box display={["none", "none", "block"]} />
// xs: none, sm: none, md+: block
```

## Component Usage

### Base Components (design-system)

Always prefer design-system components:

```tsx
import {
  Box,
  Button,
  Text,
  Card,
  Container,
  PageHeader,
} from "@nebutra/design-system";
```

### When to Use External Components

External components (HeroUI, MagicUI, etc.) are appropriate for:

1. **Prototyping** - Quick UI validation
2. **Landing pages** - High-visual-impact marketing
3. **Experiments** - A/B testing new patterns
4. **One-off features** - Non-reusable UI

**NOT appropriate for:**

- Core product UI
- Reusable patterns
- Data-heavy dashboards
- Multi-tenant features

## Accessibility (a11y)

### Requirements

All UI must meet WCAG 2.1 AA standards:

- **Color contrast**: 4.5:1 for normal text, 3:1 for large text
- **Touch targets**: Minimum 44x44px
- **Keyboard navigation**: All interactive elements focusable
- **Screen readers**: Proper ARIA labels and semantic HTML

### Patterns

```tsx
import { visuallyHidden, ariaPatterns } from "@nebutra/design-system";

// Hidden but accessible
<span style={visuallyHidden}>Screen reader only</span>

// Loading state
<div {...ariaPatterns.loading}>Loading...</div>

// Required field
<input {...ariaPatterns.required} />
```

### Focus Management

```tsx
import { focusRing } from "@nebutra/design-system";

// Custom focus styles
<Button sx={{ "&:focus-visible": focusRing }}>Click me</Button>;
```

## Responsive Design

### Mobile-First

Write styles mobile-first, enhance for larger screens:

```tsx
// Mobile-first responsive
<Box flexDirection={["column", "column", "row"]} gap={[2, 3, 4]} />
```

### Responsive Patterns

```tsx
import { responsivePatterns } from "@nebutra/design-system";

// Hide on mobile
<Box sx={responsivePatterns.hideOnMobile}>
  Desktop only content
</Box>

// Stack to row
<Box sx={responsivePatterns.stackToRow}>
  <Child />
  <Child />
</Box>
```

## Density Modes

For data-heavy UIs, use density modes:

```tsx
import { getDensitySpacing } from "@nebutra/design-system";

// Compact mode for dense data
<Box sx={getDensitySpacing("compact")}>
  <DataTable />
</Box>

// Spacious mode for marketing
<Box sx={getDensitySpacing("spacious")}>
  <HeroSection />
</Box>
```

## Do's and Don'ts

### ✅ Do

- Use design tokens for all visual properties
- Import from `@nebutra/design-system` first
- Test on multiple screen sizes
- Include ARIA attributes for interactive elements
- Use semantic HTML elements
- Keep component props minimal and focused

### ❌ Don't

- Hard-code colors, spacing, or font sizes
- Mix multiple UI libraries in the same component
- Skip accessibility testing
- Use `!important` overrides
- Create one-off styles that could be tokens
- Nest Box components excessively

## Theming

### Dark Mode

The design system supports light/dark modes:

```tsx
import { useDesignSystem } from "@nebutra/design-system";

function ThemeToggle() {
  const { mode, toggleMode } = useDesignSystem();
  return <Button onClick={toggleMode}>Current: {mode}</Button>;
}
```

### Brand Customization

For brand overrides (future):

```tsx
import { createTheme } from "@nebutra/design-system";

const brandTheme = createTheme("light", {
  colors: {
    accent: {
      fg: "#6366f1",
      emphasis: "#4f46e5",
    },
  },
});
```

## Component Lifecycle

Components follow a strict lifecycle:

| Status         | Description        | Usage            |
| -------------- | ------------------ | ---------------- |
| `experimental` | Testing phase      | Internal only    |
| `beta`         | Limited production | Feature flags    |
| `stable`       | Production ready   | General use      |
| `deprecated`   | Being removed      | Migration needed |

See [COMPONENT-LIBRARY-POLICY.md](./COMPONENT-LIBRARY-POLICY.md) for governance details.

## Logo & Icon Resources

### Tech Stack Logos (SVGL)

**Primary source for tech/brand SVG logos:** [SVGL](https://svgl.app)

| Feature        | Details                                                    |
| -------------- | ---------------------------------------------------------- |
| **License**    | MIT (free & open source)                                   |
| **Collection** | 300+ tech logos (frameworks, tools, services)              |
| **Variants**   | Light/dark mode versions                                   |
| **Format**     | SVG with optional wordmarks                                |
| **CDN**        | `https://svgl.app/library/{filename}.svg`                  |
| **Source**     | [github.com/pheralb/svgl](https://github.com/pheralb/svgl) |

**Included logos:** Next.js, React, TypeScript, Prisma, Supabase, Stripe, Clerk, Vercel, Cloudflare, Inngest, TailwindCSS, Redis, Hono, OpenAI, Terraform, Docker, Kubernetes, Railway, FastAPI, Python, Go, Rust, Sentry, Sanity, Resend, Dub, Turborepo, Framer, and many more.

**Usage:**

```tsx
// Direct CDN usage
<img src="https://svgl.app/library/inngest-dark.svg" alt="Inngest" />;

// With helper from landing-content.ts
import {
  techStackLogos,
  getLogoUrl,
  getAllLogoUrls,
} from "@/lib/landing-content";

// Single logo
const url = getLogoUrl(techStackLogos[0], "dark");
// => https://svgl.app/library/nextjs_icon_dark.svg

// All logos for a theme
const logos = getAllLogoUrls("dark");
// => [{ name: "Next.js", url: "..." }, ...]
```

**Finding logo filenames:**

1. Browse [svgl.app](https://svgl.app) and click on a logo
2. Check [src/data/svgs.ts](https://github.com/pheralb/svgl/blob/main/src/data/svgs.ts) in the repo
3. Light/dark variants typically follow pattern: `{name}.svg`, `{name}_dark.svg`, `{name}-light.svg`

### Fallback: Simple Icons

For logos not in SVGL, use [Simple Icons](https://simpleicons.org):

```tsx
// CDN: https://cdn.simpleicons.org/{slug}/{color}
<img src="https://cdn.simpleicons.org/github/white" alt="GitHub" />
```

### Icon Library Priorities

| Priority | Source                   | Use Case                     |
| -------- | ------------------------ | ---------------------------- |
| 1        | `@primer/octicons-react` | UI icons (via design-system) |
| 2        | `lucide-react`           | Additional UI icons          |
| 3        | SVGL                     | Tech/brand logos             |
| 4        | Simple Icons CDN         | Fallback for missing logos   |
| 5        | Local SVGs               | Custom/proprietary icons     |

### Local Logo Storage

For logos requiring local hosting:

```
apps/landing-page/public/logos/
├── nebutra-logo.svg      # Brand logo
├── custom-partner.svg    # Partner logos
└── ...
```

## Related Documentation

- [Component Library Policy](./COMPONENT-LIBRARY-POLICY.md) - External component rules
- [@nebutra/design-system](../packages/design-system/README.md) - Base design system
- [@nebutra/custom-ui](../packages/custom-ui/README.md) - Brand-specific & shadcn-style components
