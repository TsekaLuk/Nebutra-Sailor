# @nebutra/custom-ui

Brand-specific UI components built on top of `@nebutra/design-system`.

## Overview

This package contains UI components that are:

1. **Domain-specific** - Commerce, Web3, multi-tenant, dashboard widgets
2. **High-density/Complex** - Data grids, charts, activity feeds
3. **Promoted** - Components from external libraries (21st.dev, HeroUI) that passed review and were absorbed
4. **Brand-customized** - Wrappers with Nebutra-specific styling and behavior

## Architecture

```
@nebutra/design-system (SSOT)
        ↓
@nebutra/custom-ui (Brand Layer)
        ↓
Apps (landing-page, web, etc.)
```

## Installation

```bash
pnpm add @nebutra/custom-ui
```

## Usage

```tsx
import { StatsCard, DashboardLayout } from "@nebutra/custom-ui";

function Dashboard() {
  return (
    <DashboardLayout>
      <StatsCard
        title="Revenue"
        value="$12,345"
        trend={{ direction: "up", value: 12 }}
      />
    </DashboardLayout>
  );
}
```

## Component Lifecycle

Components in this package follow a strict lifecycle:

| Status | Description |
|--------|-------------|
| `experimental` | Testing, not for production |
| `beta` | Limited production use |
| `stable` | Full production support |
| `deprecated` | Scheduled for removal |

## Promoting External Components

When an external component (from 21st.dev, HeroUI, etc.) is ready to be absorbed:

1. Review passes (see `docs/COMPONENT-LIBRARY-POLICY.md`)
2. Create wrapper in this package
3. Add to component registry
4. Update usage across apps
5. Document migration path

## Related

- [@nebutra/design-system](../design-system/) - Base design system
- [@nebutra/21st](../21st/) - 21st.dev compatible experimental components
- [UI Guidelines](../../docs/UI-GUIDELINES.md)
- [Component Library Policy](../../docs/COMPONENT-LIBRARY-POLICY.md)
