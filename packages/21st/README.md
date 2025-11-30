# @nebutra/21st

> 21st.dev compatible UI components for Nebutra - shadcn/ui style components with Radix UI + Tailwind CSS

## Overview

This package provides a foundation for using [21st.dev](https://21st.dev) community components in Nebutra. It includes:

- **shadcn/ui compatible infrastructure** - `cn()` utility, CSS variables, CVA variants
- **Radix UI primitives** - Accessible headless components
- **Tailwind CSS 4 support** - Modern CSS-first configuration
- **Nebutra design tokens** - Colors, spacing, typography aligned with `@nebutra/ui`

## Installation

```bash
pnpm add @nebutra/21st
```

## Setup

### 1. Import the global styles

In your app's `globals.css` or main CSS file:

```css
/* Option 1: Import the full theme */
@import "@nebutra/21st/styles/globals.css";

/* Option 2: Or just add the CSS variables and use your own Tailwind setup */
```

### 2. Use components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Dialog } from "@nebutra/21st";
import { cn } from "@nebutra/21st/lib/utils";

export function MyComponent() {
  return (
    <Card className={cn("w-full max-w-md")}>
      <CardHeader>
        <CardTitle>Welcome to Nebutra</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="gradient" size="lg">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}
```

## Available Components

### UI Components (`@nebutra/21st/components/ui`)

- **Button** - Multiple variants (default, secondary, outline, ghost, link, gradient, success, warning, destructive)
- **Card** - Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- **Dialog** - Modal dialogs with Radix UI
- **Input** - Form input with consistent styling
- **Badge** - Status indicators and labels

### Hooks (`@nebutra/21st/components/hooks`)

- **useMediaQuery** - Responsive design hook

### Blocks (`@nebutra/21st/components/blocks`)

Marketing blocks for landing pages (extensible with 21st.dev components):
- Hero sections
- Feature grids
- Pricing tables
- Testimonials
- CTA sections

## Button Variants

```tsx
<Button>Default (Primary)</Button>
<Button variant="secondary">Secondary (Purple)</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button variant="gradient">Gradient (Primary → Secondary)</Button>
<Button variant="success">Success</Button>
<Button variant="warning">Warning</Button>
<Button variant="destructive">Destructive</Button>

{/* Sizes */}
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon"><IconComponent /></Button>

{/* With loading state */}
<Button loading>Submitting...</Button>

{/* As child (for Next.js Link) */}
<Button asChild>
  <Link href="/dashboard">Go to Dashboard</Link>
</Button>
```

## CSS Variables (Theme)

The theme uses HSL color values for easy customization:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --secondary: 270 91% 65%;
  --muted: 210 40% 96.1%;
  --accent: 210 40% 96.1%;
  --destructive: 0 84.2% 60.2%;
  --success: 160 84% 39%;
  --warning: 38 92% 50%;
  --border: 214.3 31.8% 91.4%;
  --ring: 221.2 83.2% 53.3%;
  --radius: 0.5rem;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... dark mode values */
}
```

## Using with 21st.dev Components

To add components from [21st.dev](https://21st.dev):

1. Browse components on 21st.dev
2. Copy the component code
3. Place in `packages/21st/src/components/ui/` or `packages/21st/src/components/blocks/`
4. Update the component imports to use local `cn` utility:

```tsx
// Change this:
import { cn } from "@/lib/utils";

// To this:
import { cn } from "../../lib/utils.js";
```

5. Export from the appropriate index file

## Design Tokens

Access Nebutra design tokens programmatically:

```tsx
import { nebutraColors, nebutraSpacing, nebutraPreset } from "@nebutra/21st";

// Use in JS/TS
const primaryColor = nebutraColors.primary[500]; // "#3B82F6"
const spacing = nebutraSpacing.lg; // "1.5rem"
```

## Integration with @nebutra/ui

This package complements `@nebutra/ui`:

- **@nebutra/ui** - Lobe UI + Ant Design components for AI chat interfaces
- **@nebutra/21st** - shadcn/ui style components for general UI and marketing pages

Use both together based on your needs:

```tsx
// AI Chat interface
import { ChatList, ChatInputArea } from "@nebutra/ui/components";

// Landing page / Dashboard
import { Button, Card } from "@nebutra/21st";
```

## Contributing

When adding new components:

1. Follow shadcn/ui patterns
2. Use Radix UI primitives for accessibility
3. Use CVA for variants
4. Include TypeScript types
5. Add JSDoc comments with examples

## License

MIT
