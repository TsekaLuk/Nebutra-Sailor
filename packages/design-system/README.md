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
├── theme/
│   ├── default.ts      # Primer baseline tokens
│   ├── brand.ts        # Brand override layer (TODO)
│   └── index.ts
├── components/
│   ├── index.ts        # Primer re-exports + custom components
│   ├── DesignSystemProvider.tsx
│   ├── Card.tsx
│   ├── Container.tsx
│   └── ...
├── icons/
│   └── index.ts        # Octicons re-exports
├── utils/
│   └── index.ts        # cn(), breakpoints, etc.
├── hooks/
│   └── index.ts        # useDesignSystem, useTheme
└── index.ts
```

## Brand Customization (Future)

When ready to apply Nebutra branding:

```ts
// theme/brand.ts
export const brandColors = {
  primary: {
    50: "#eef2ff",
    // ... define brand palette
    900: "#1e1b4b",
  },
};

// Use createTheme with overrides
const customTheme = createTheme("light", {
  colors: {
    accent: {
      fg: brandColors.primary[600],
      emphasis: brandColors.primary[500],
    },
  },
  typography: {
    fontFamily: {
      normal: '"Inter", sans-serif',
    },
  },
});
```

## Related

- [Primer React](https://primer.style/react)
- [Primer Primitives](https://primer.style/primitives)
- [Octicons](https://primer.style/octicons)
