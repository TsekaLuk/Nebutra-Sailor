# UI Guidelines

This document defines the design system usage, visual standards, and component guidelines for Nebutra products.

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                     Apps (landing-page, web)                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────────┐  │
│  │ @nebutra/    │  │ @nebutra/    │  │ External/Experimental │  │
│  │ custom-ui    │  │ 21st         │  │ (HeroUI, etc.)        │  │
│  │ (Brand)      │  │ (Experimental)│  │                      │  │
│  └──────┬───────┘  └──────┬───────┘  └──────────┬───────────┘  │
│         │                 │                      │              │
│         └─────────────────┼──────────────────────┘              │
│                           │                                      │
│                           ▼                                      │
│              ┌────────────────────────┐                         │
│              │  @nebutra/design-system │ ← Single Source of     │
│              │  (SSOT / Primer-based)  │   Truth (SSOT)         │
│              └────────────────────────┘                         │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Layer Responsibilities

| Layer | Purpose | When to Use |
|-------|---------|-------------|
| **design-system** | SSOT for tokens, primitives, base components | Always - foundation for all UI |
| **custom-ui** | Brand-specific, domain-specific, complex UI | Production features, dashboards, domain logic |
| **21st** | Experimental, high-UX components | Prototypes, landing pages, feature experiments |
| **External** | Third-party UI libraries | Quick validation, one-off needs |

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

| Token | Value | Usage |
|-------|-------|-------|
| 0 | 0px | Reset |
| 1 | 4px | Tight spacing (icons, badges) |
| 2 | 8px | Compact spacing |
| 3 | 16px | Default spacing |
| 4 | 24px | Section spacing |
| 5 | 32px | Page sections |
| 6+ | 40px+ | Large gaps |

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
import '@nebutra/design-system/typography/fonts.css';

// Or with Next.js font optimization
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-primary' });
```

> 📖 **Full documentation:** See [TYPOGRAPHY.md](./TYPOGRAPHY.md) for complete font stacks, loading strategies, CJK support, and performance best practices.

### Breakpoints

Responsive design uses these breakpoints:

| Name | Min Width | Target Devices |
|------|-----------|----------------|
| xs | 0px | Small phones |
| sm | 544px | Large phones |
| md | 768px | Tablets |
| lg | 1012px | Laptops |
| xl | 1280px | Desktops |

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

External components (21st.dev, HeroUI) are appropriate for:

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
<Button sx={{ "&:focus-visible": focusRing }}>
  Click me
</Button>
```

## Responsive Design

### Mobile-First

Write styles mobile-first, enhance for larger screens:

```tsx
// Mobile-first responsive
<Box
  flexDirection={["column", "column", "row"]}
  gap={[2, 3, 4]}
/>
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
  return (
    <Button onClick={toggleMode}>
      Current: {mode}
    </Button>
  );
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

| Status | Description | Usage |
|--------|-------------|-------|
| `experimental` | Testing phase | Internal only |
| `beta` | Limited production | Feature flags |
| `stable` | Production ready | General use |
| `deprecated` | Being removed | Migration needed |

See [COMPONENT-LIBRARY-POLICY.md](./COMPONENT-LIBRARY-POLICY.md) for governance details.

## Related Documentation

- [Component Library Policy](./COMPONENT-LIBRARY-POLICY.md) - External component rules
- [@nebutra/design-system](../packages/design-system/README.md) - Base design system
- [@nebutra/custom-ui](../packages/custom-ui/README.md) - Brand-specific components
- [@nebutra/21st](../packages/21st/README.md) - Experimental components
