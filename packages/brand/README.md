# @nebutra/brand

Centralized brand assets and identity components for the Nebutra monorepo.

## Installation

```bash
pnpm add @nebutra/brand
```

## Usage

### React Components

```tsx
import { Logo, Logomark, Wordmark } from "@nebutra/brand";

// Full logo with text
<Logo variant="color" size={120} />
<Logo variant="inverse" className="h-8 w-auto" />

// Icon only
<Logomark size={32} variant="color" />

// Text only
<Wordmark size={100} variant="mono" />
```

### Brand Metadata

```tsx
import { brand, colors, typography } from "@nebutra/brand";

// Brand info
console.log(brand.name);        // "Nebutra"
console.log(brand.domains.app); // "app.nebutra.com"

// Colors
const primary = colors.primary[500]; // "#6366f1"
const accent = colors.accent[500];   // "#14b8a6"

// Typography
const fontFamily = typography.fontFamily.sans;
```

### Static Assets

For static file access (e.g., favicon, OG images):

```tsx
// Import asset paths
import { logoAssets, faviconAssets } from "@nebutra/brand";

// Or access directly from package
// node_modules/@nebutra/brand/assets/logo/logo-color.svg
// node_modules/@nebutra/brand/assets/favicon/favicon.ico
```

### Sync to App Public Directory

Run the sync script to copy assets to your app's public folder:

```bash
pnpm brand:sync
```

## Asset Structure

```
assets/
├── logo/
│   ├── logo-color.svg       # Default colored logo
│   ├── logo-inverse.svg     # White/light logo for dark backgrounds
│   ├── logo-mono.svg        # Monochrome logo
│   ├── logo-en.svg          # English text logo
│   ├── logo-zh.svg          # Chinese text logo
│   ├── logo-zh-en.svg       # Bilingual logo
│   ├── logo-horizontal-en.svg
│   ├── logo-horizontal-zh.svg
│   ├── logo-vertical-en.svg
│   └── logo-vertical-zh.svg
└── favicon/
    ├── favicon.ico
    ├── favicon.svg
    ├── apple-touch-icon.png
    ├── android-chrome-192x192.png
    └── android-chrome-512x512.png
```

## Logo Variants

| Variant | Use Case |
|---------|----------|
| `color` | Default, light backgrounds |
| `inverse` | Dark backgrounds |
| `mono` | Print, grayscale contexts |
| `en` | English-only contexts |
| `zh` | Chinese-only contexts |
| `zh-en` | Bilingual contexts |
| `horizontal-*` | Wide layouts (headers) |
| `vertical-*` | Stacked layouts (cards) |

## Colors

### Primary (Indigo)
- Light: `#eef2ff` → Dark: `#1e1b4b`
- Main: `#6366f1`

### Accent (Teal)
- Light: `#f0fdfa` → Dark: `#042f2e`
- Main: `#14b8a6`

### Semantic
- Success: `#22c55e`
- Warning: `#f59e0b`
- Error: `#ef4444`
- Info: `#3b82f6`

## Typography

- **Sans:** Inter, system fonts
- **Mono:** JetBrains Mono, Fira Code
- **Display:** Cal Sans, Inter
