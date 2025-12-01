# @nebutra/design-system

Primer-based design system with brand extensibility for Nebutra SaaS applications.

## Overview

This package provides a unified UI foundation based on [GitHub's Primer Design System](https://primer.style/), with an extensibility layer for future brand customization.

**Current State**: Using Primer defaults for MVP rapid development.

**Future State**: Apply Nebutra brand tokens (colors, typography, etc.) via the brand override system.

## Installation

```bash
pnpm add @nebutra/design-system
```

## Quick Start

```tsx
// app/layout.tsx or _app.tsx
import { DesignSystemProvider } from "@nebutra/design-system";

export default function Layout({ children }) {
  return (
    <DesignSystemProvider>
      {children}
    </DesignSystemProvider>
  );
}
```

## Usage

### Components

```tsx
import {
  Box,
  Button,
  Text,
  Card,
  Container,
  PageHeader,
} from "@nebutra/design-system";

function Dashboard() {
  return (
    <Container>
      <PageHeader
        title="Dashboard"
        description="Welcome back"
        actions={<Button variant="primary">New Project</Button>}
      />
      <Card>
        <Text>Content goes here</Text>
      </Card>
    </Container>
  );
}
```

### Theme Mode

```tsx
import { useDesignSystem } from "@nebutra/design-system";

function ThemeToggle() {
  const { mode, toggleMode, resolvedMode } = useDesignSystem();

  return (
    <Button onClick={toggleMode}>
      Current: {resolvedMode}
    </Button>
  );
}
```

### Icons

```tsx
import { SearchIcon, IconSettings, iconSizes } from "@nebutra/design-system";

<SearchIcon size={iconSizes.md} />
<IconSettings size={24} />
```

## Exports

| Export | Description |
| ------ | ----------- |
| `@nebutra/design-system` | All exports |
| `@nebutra/design-system/theme` | Theme tokens and utilities |
| `@nebutra/design-system/components` | UI components |
| `@nebutra/design-system/icons` | Octicons re-exports |
| `@nebutra/design-system/utils` | Utility functions |
| `@nebutra/design-system/hooks` | React hooks |

## Architecture

```
src/
├── theme/              # Colors, spacing, breakpoints (Primer tokens)
│   ├── default.ts      # Primer baseline tokens
│   ├── brand.ts        # Brand override layer
│   └── index.ts
├── typography/         # Font system (SSOT for all text styling)
│   ├── tokens.ts       # fontFamilies, fontSizes, typeStyles
│   ├── fonts.ts        # Font loading utilities
│   ├── fonts.css       # Google Fonts imports
│   └── index.ts
├── primitives/         # Layout, spacing, a11y utilities
│   ├── layout.ts
│   ├── spacing.ts
│   ├── accessibility.ts
│   ├── responsive.ts
│   └── typography.ts   # [DEPRECATED] Use typography/ instead
├── components/         # Primer re-exports + custom components
│   ├── index.ts
│   ├── DesignSystemProvider.tsx
│   ├── Card.tsx
│   └── ...
├── icons/              # Octicons re-exports
├── utils/              # cn(), breakpoints, etc.
├── hooks/              # useDesignSystem, useTheme
├── governance/         # Component lifecycle types
└── index.ts
```

### Module Relationships

```
┌─────────────────────────────────────────────────────────────┐
│                    @nebutra/design-system                   │
├─────────────┬─────────────┬─────────────┬──────────────────┤
│   theme/    │ typography/ │ primitives/ │   components/    │
│  (Primer)   │  (Fonts)    │  (Layout)   │    (UI)          │
├─────────────┴─────────────┴─────────────┴──────────────────┤
│                     @primer/react                           │
└─────────────────────────────────────────────────────────────┘
```

- **theme/** - Extends Primer color/spacing tokens, adds brand overrides
- **typography/** - Independent font system using open-source fonts
- **primitives/** - Layout/a11y patterns that work with Primer's `sx` prop
- **components/** - Re-exports Primer components + Nebutra-specific ones

## Typography System

The design system includes a comprehensive font system:

```tsx
import {
  fontFamilies,    // Font stacks (Inter, JetBrains Mono, CJK)
  fontSizes,       // Type scale in rem (xs to 8xl)
  typeStyles,      // Pre-built styles (h1, body, code, etc.)
  getGoogleFontsUrl,
} from "@nebutra/design-system";

// Use font family
<Box sx={{ fontFamily: fontFamilies.primary }}>Text</Box>

// Use type preset
<Heading sx={typeStyles.h1}>Title</Heading>
```

See [Typography Documentation](../../docs/TYPOGRAPHY.md) for full details.

## Brand Customization

Brand customization happens at two levels:

### 1. Colors & Spacing (theme/brand.ts)

```ts
import { createTheme, brandColors } from "@nebutra/design-system";

const customTheme = createTheme("light", {
  colors: {
    accent: {
      fg: brandColors.primary[600],
      emphasis: brandColors.primary[500],
    },
  },
});
```

### 2. Typography (future brand fonts)

Currently using open-source fonts (Inter, JetBrains Mono). When brand fonts are ready:

1. Add font files to `typography/`
2. Update `fontFamilies.heading` in `tokens.ts`
3. Components automatically inherit changes

## Related

- [Typography System](../../docs/TYPOGRAPHY.md)
- [UI Guidelines](../../docs/UI-GUIDELINES.md)
- [Component Library Policy](../../docs/COMPONENT-LIBRARY-POLICY.md)
- [Primer React](https://primer.style/react)
- [Primer Primitives](https://primer.style/primitives)
