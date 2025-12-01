# Typography System

This document defines the font system, typography tokens, and text styling guidelines for Nebutra products.

## Overview

Nebutra uses a **open-source font stack** designed for:

- **Screen legibility** - Optimized for digital displays
- **Multi-language support** - Chinese, Japanese, Korean (CJK) fallbacks
- **Performance** - Fast loading with proper font-display strategies
- **Brand evolution** - Easy to swap fonts as brand matures

## Font Stack

### Primary Fonts

| Purpose | Font | License | Notes |
|---------|------|---------|-------|
| **UI & Body** | Inter | OFL 1.1 | High x-height, screen-optimized |
| **Fallback** | Public Sans | OFL 1.1 | US Web Design System font |
| **Code** | JetBrains Mono | OFL 1.1 | Developer-friendly ligatures |
| **CJK** | Noto Sans SC | OFL 1.1 | Pan-CJK coverage |

### Font Stacks

```typescript
import { fontFamilies } from "@nebutra/design-system";

// Primary UI text
fontFamilies.primary
// "Inter", "Public Sans", -apple-system, BlinkMacSystemFont, ...

// Headings (same as primary, can be customized)
fontFamilies.heading

// Code and monospace
fontFamilies.mono
// "JetBrains Mono", "Fira Code", ui-monospace, ...

// Chinese/Japanese/Korean
fontFamilies.cjk
// "Source Han Sans SC", "Noto Sans CJK SC", "PingFang SC", ...

// Primary + CJK for multilingual content
fontFamilies.primaryCJK
```

## Type Scale

Based on a 1.25 modular scale with 16px base:

| Token | Size | Pixels | Usage |
|-------|------|--------|-------|
| `xs` | 0.75rem | 12px | Badges, micro text |
| `sm` | 0.875rem | 14px | Captions, labels |
| `base` | 1rem | 16px | Body text |
| `lg` | 1.125rem | 18px | Lead paragraphs |
| `xl` | 1.25rem | 20px | H6, subtitles |
| `2xl` | 1.5rem | 24px | H5, H4 |
| `3xl` | 1.875rem | 30px | H3 |
| `4xl` | 2.25rem | 36px | H2 |
| `5xl` | 3rem | 48px | H1 |
| `6xl` | 3.75rem | 60px | Display/Hero |

## Type Styles

Pre-defined combinations of font properties:

```typescript
import { typeStyles } from "@nebutra/design-system";

// Page title
<h1 style={typeStyles.h1}>Welcome</h1>

// Body text
<p style={typeStyles.body}>Content here</p>

// Code
<code style={typeStyles.code}>const x = 1;</code>

// Overline / Label
<span style={typeStyles.overline}>CATEGORY</span>
```

Available presets:
- `display` - Hero headlines (60px)
- `h1` - Page titles (48px)
- `h2` - Section titles (36px)
- `h3` - Subsections (30px)
- `h4` - Cards (24px)
- `h5` - Widgets (20px)
- `h6` - Small headings (18px)
- `body` - Default text (16px)
- `bodyLarge` - Lead text (18px)
- `bodySmall` - Secondary (14px)
- `caption` - Timestamps (12px)
- `label` - Form labels (14px)
- `button` - Button text (14px)
- `code` - Inline code (14px)
- `codeBlock` - Code blocks (14px)
- `overline` - ALL CAPS labels (12px)

## Usage

### In CSS

```css
/* Import fonts */
@import "@nebutra/design-system/typography/fonts.css";

body {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-normal);
}
```

### In React/Styled Components

```tsx
import {
  fontFamilies,
  fontSizes,
  typeStyles,
} from "@nebutra/design-system";

const Title = styled.h1`
  font-family: ${fontFamilies.heading};
  font-size: ${fontSizes["5xl"]};
  font-weight: 700;
  line-height: 1.25;
`;

// Or use presets
const Body = styled.p({
  ...typeStyles.body,
});
```

### In Next.js

```tsx
// app/layout.tsx
import { getGoogleFontsUrl, defaultFonts } from "@nebutra/design-system";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="stylesheet"
          href={getGoogleFontsUrl(defaultFonts)}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## Font Loading

### Strategy

We use `font-display: swap` for optimal loading:

1. **Initial render**: System fonts (instant)
2. **Font loaded**: Swap to web font (minimal FOUT)
3. **Timeout**: Keep system font if load fails

### Preloading Critical Fonts

```tsx
import { getFontPreloadLinks } from "@nebutra/design-system";

// In <head>
{getFontPreloadLinks(["inter"]).map((link) => (
  <link key={link} {...link} />
))}
```

### Checking Font Load Status

```tsx
import { waitForFonts } from "@nebutra/design-system";

// Wait for fonts with 3s timeout
const loaded = await waitForFonts(["Inter", "JetBrains Mono"]);
if (loaded) {
  // Fonts ready
}
```

## Responsive Typography

### Fluid Sizes

For smooth scaling across viewports:

```typescript
import { fluidFontSizes } from "@nebutra/design-system";

const HeroTitle = styled.h1`
  font-size: ${fluidFontSizes.display};
  /* clamp(2.25rem, 5vw + 1rem, 4.5rem) */
  /* 36px → 72px responsive */
`;
```

### Breakpoint-Based

```css
/* Mobile-first approach */
h1 {
  font-size: 2rem;   /* 32px base */
}

@media (min-width: 768px) {
  h1 {
    font-size: 2.5rem; /* 40px tablet */
  }
}

@media (min-width: 1012px) {
  h1 {
    font-size: 3rem;   /* 48px desktop */
  }
}
```

## CJK (Chinese) Support

For content with Chinese, Japanese, or Korean:

```typescript
// Use CJK-aware font stack
fontFamilies.primaryCJK

// Or via CSS
:lang(zh) {
  font-family: "Inter", "Source Han Sans SC", "Noto Sans CJK SC", sans-serif;
}
```

Enable CJK fonts in `fonts.css`:

```css
/* Uncomment in fonts.css */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&display=swap');
```

## Performance Best Practices

### 1. Subset Fonts

Only load weights you need:

```typescript
// Default: 300, 400, 500, 600, 700
// Minimal: 400, 600, 700
const minimalFonts = ["inter"]; // Customize weights in fonts.ts
```

### 2. Self-Host for Production

For better performance, self-host fonts:

```css
@font-face {
  font-family: 'Inter';
  font-weight: 400;
  font-display: swap;
  src: url('/fonts/Inter-Regular.woff2') format('woff2');
}
```

### 3. Preconnect

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

### 4. Variable Fonts

Inter supports variable fonts (fewer requests):

```css
@font-face {
  font-family: 'Inter';
  font-weight: 100 900;
  font-display: swap;
  src: url('/fonts/Inter-Variable.woff2') format('woff2');
}
```

## Font Feature Settings

Inter supports OpenType features:

```typescript
import { fontFeatureSettings } from "@nebutra/design-system";

// Tabular figures (aligned numbers)
style={{ fontFeatureSettings: fontFeatureSettings.tabular }}

// Case-sensitive forms
style={{ fontFeatureSettings: fontFeatureSettings.case }}
```

```css
/* In tables */
.tabular-nums {
  font-feature-settings: "tnum" 1;
}

/* ALL CAPS */
.case-sensitive {
  font-feature-settings: "case" 1;
}
```

## Future: Brand Fonts

When ready to add custom brand fonts:

1. Add font config to `fonts.ts`
2. Update `fontFamilies.heading` in `tokens.ts`
3. Update `theme/brand.ts` override
4. Test across all apps

The system supports seamless font replacement without breaking layouts.

## License Compliance

All fonts are **SIL Open Font License (OFL) 1.1**:

- ✅ Free for commercial use
- ✅ Can be modified
- ✅ Can be redistributed
- ✅ Can be embedded in apps

```typescript
import { fontLicenseNotice } from "@nebutra/design-system";
console.log(fontLicenseNotice);
```

## Related

- [UI Guidelines](./UI-GUIDELINES.md) - Design tokens overview
- [@nebutra/design-system/typography](../packages/design-system/src/typography/) - Source code
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- [Google Fonts - JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)
