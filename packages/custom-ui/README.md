# @nebutra/custom-ui

Brand-specific UI components built on top of `@nebutra/design-system`.

## Overview

This package contains UI components that are:

1. **Domain-specific** - Commerce, Web3, multi-tenant, dashboard widgets
2. **High-density/Complex** - Data grids, charts, activity feeds
3. **Promoted** - Components from external libraries (HeroUI/MagicUI, HeroUI) that passed review and were absorbed
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

## Tailwind Configuration

Some components require additional Tailwind configuration in consuming apps. Add these to your `tailwind.config.js`:

### ShineBorder

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        shine: "shine var(--duration) infinite linear",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "0% 0%" },
          "50%": { "background-position": "100% 100%" },
          to: { "background-position": "0% 0%" },
        },
      },
    },
  },
};
```

### NoisePatternCard

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        "noise-pattern": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 700'%3E%3Cdefs%3E%3Cfilter id='nnnoise-filter' x='-20%25' y='-20%25' width='140%25' height='140%25' filterUnits='objectBoundingBox' primitiveUnits='userSpaceOnUse' color-interpolation-filters='linearRGB'%3E%3CfeTurbulence type='turbulence' baseFrequency='0.167' numOctaves='4' seed='15' stitchTiles='stitch' x='0%25' y='0%25' width='100%25' height='100%25' result='turbulence'%3E%3C/feTurbulence%3E%3CfeSpecularLighting surfaceScale='28' specularConstant='0.75' specularExponent='20' lighting-color='%23fff' x='0%25' y='0%25' width='100%25' height='100%25' in='turbulence' result='specularLighting'%3E%3CfeDistantLight azimuth='3' elevation='100'%3E%3C/feDistantLight%3E%3C/feSpecularLighting%3E%3C/filter%3E%3C/defs%3E%3Crect width='700' height='700' fill='%2309090B'%3E%3C/rect%3E%3Crect width='700' height='700' fill='%23ffffff' filter='url(%23nnnoise-filter)'%3E%3C/rect%3E%3C/svg%3E")`,
      },
    },
  },
};
```

### AuroraText

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      animation: {
        aurora: "aurora 8s ease-in-out infinite alternate",
      },
      keyframes: {
        aurora: {
          "0%": {
            backgroundPosition: "0% 50%",
            transform: "rotate(-5deg) scale(0.9)",
          },
          "25%": {
            backgroundPosition: "50% 100%",
            transform: "rotate(5deg) scale(1.1)",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            transform: "rotate(-3deg) scale(0.95)",
          },
          "75%": {
            backgroundPosition: "50% 0%",
            transform: "rotate(3deg) scale(1.05)",
          },
          "100%": {
            backgroundPosition: "0% 50%",
            transform: "rotate(-5deg) scale(0.9)",
          },
        },
      },
    },
  },
};
```

## Component Lifecycle

Components in this package follow a strict lifecycle:

| Status         | Description                 |
| -------------- | --------------------------- |
| `experimental` | Testing, not for production |
| `beta`         | Limited production use      |
| `stable`       | Full production support     |
| `deprecated`   | Scheduled for removal       |

## Promoting External Components

When an external component (from HeroUI/MagicUI, HeroUI, etc.) is ready to be absorbed:

1. Review passes (see `docs/COMPONENT-LIBRARY-POLICY.md`)
2. Create wrapper in this package
3. Add to component registry
4. Update usage across apps
5. Document migration path

## Related

- [@nebutra/design-system](../design-system/) - Base design system
- [UI Guidelines](../../docs/UI-GUIDELINES.md)
- [Component Library Policy](../../docs/COMPONENT-LIBRARY-POLICY.md)
