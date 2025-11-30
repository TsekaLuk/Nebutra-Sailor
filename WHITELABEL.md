# White-label Guide

This guide explains how to customize the Nebutra Sailor template for your own brand.

## Quick Start

```bash
# 1. Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# 2. Run the brand initialization wizard
pnpm brand:init

# 3. Add your logo assets (see Asset Requirements below)

# 4. Apply your branding
pnpm brand:apply

# 5. Install dependencies and start development
pnpm install
pnpm dev
```

## What Gets Customized

The white-label system updates the following:

| Component | Changes |
|-----------|---------|
| **README.md** | Brand name, tagline, repository URLs, badges |
| **README.zh-CN.md** | Chinese version with same updates |
| **packages/brand/src/metadata.ts** | Brand constants, colors, domains |
| **packages/brand/assets/** | Logo files, favicons |
| **package.json files** | NPM scope (`@nebutra` → `@yourbrand`) |
| **.env.example** | Domain URLs |

## Configuration Options

### brand.config.ts

After running `pnpm brand:init`, you'll have a `brand.config.ts` file with these options:

```typescript
const config: BrandConfig = {
  // Brand Identity
  brand: {
    name: "MyBrand",
    tagline: "The Open-Source Enterprise SaaS Platform",
    description: "AI-native enterprise platform",
    vision: {
      pillars: [
        { word: "My", meaning: "Your unique value" },
        { word: "Brand", meaning: "Your story" },
      ],
    },
  },

  // Company Info
  company: {
    name: "My Company Inc.",
    nameCN: "我的公司",  // Optional Chinese name
    email: "hello@mybrand.com",
    year: 2024,
  },

  // Domains
  domains: {
    landing: "mybrand.com",
    app: "app.mybrand.com",
    api: "api.mybrand.com",
    studio: "studio.mybrand.com",
    cdn: "cdn.mybrand.com",
  },

  // Social Links
  social: {
    twitter: "https://twitter.com/mybrand",
    github: "https://github.com/mybrand/platform",
    discord: "https://discord.gg/mybrand",
  },

  // GitHub Repository (for badges)
  repo: {
    owner: "mybrand",
    name: "platform",
  },

  // Colors (hex values)
  colors: {
    primary: { 500: "#6366f1", ... },
    accent: { 500: "#14b8a6", ... },
    neutral: { 900: "#18181b", ... },
  },

  // Feature Toggles
  features: {
    web3: false,        // Disable blockchain features
    ecommerce: false,   // Disable Shopify integration
    recsys: false,      // Disable recommendation system
    content: true,      // Keep content/feed system
    stripe: true,       // Keep Stripe payments
    resend: true,       // Keep email service
  },

  // NPM Scope
  packageScope: "@mybrand",

  // License
  license: {
    type: "MIT + Commons Clause",
    commercialExempt: ["My Company Inc."],
  },
};
```

## Asset Requirements

Place your custom assets in `brand.config/assets/`:

```
brand.config/
└── assets/
    ├── logo/
    │   ├── logo-color.svg        # Main colorful logo
    │   ├── logo-inverse.svg      # White version (for dark backgrounds)
    │   ├── logo-mono.svg         # Monochrome version
    │   ├── logo-horizontal-en.svg   # Horizontal layout (English)
    │   └── logo-horizontal-zh.svg   # Horizontal layout (Chinese)
    └── favicon/
        ├── favicon.ico           # 32x32 ICO
        ├── favicon.svg           # SVG favicon
        ├── apple-touch-icon.png  # 180x180 PNG
        ├── android-chrome-192x192.png
        └── android-chrome-512x512.png
```

### Logo Specifications

| Asset | Dimensions | Format | Usage |
|-------|------------|--------|-------|
| `logo-color.svg` | Any | SVG | Primary logo |
| `logo-inverse.svg` | Any | SVG | Dark mode / dark backgrounds |
| `logo-mono.svg` | Any | SVG | Monochrome contexts |
| `logo-horizontal-*.svg` | ~320×80 | SVG | README header |

### Favicon Specifications

| Asset | Dimensions | Format |
|-------|------------|--------|
| `favicon.ico` | 32×32 | ICO |
| `favicon.svg` | Any | SVG |
| `apple-touch-icon.png` | 180×180 | PNG |
| `android-chrome-192x192.png` | 192×192 | PNG |
| `android-chrome-512x512.png` | 512×512 | PNG |

## Feature Toggles

Disable features you don't need in your deployment:

```typescript
features: {
  // Disable blockchain features
  web3: false,
  
  // Disable e-commerce integration
  ecommerce: false,
  
  // Disable recommendation system
  recsys: false,
}
```

When a feature is disabled:
- Related services won't be built
- Documentation references are adjusted
- Environment variables are commented out

## Color Customization

The color system uses Tailwind's 50-950 scale. At minimum, define the `500` shade for each color:

```typescript
colors: {
  primary: {
    50: "#f0f9ff",
    100: "#e0f2fe",
    // ... more shades
    500: "#3b82f6",  // ← Your main brand color
    // ... darker shades
    950: "#172554",
  },
  accent: {
    // Secondary/accent color scale
    500: "#10b981",
  },
}
```

**Tip:** Use [Tailwind Color Generator](https://uicolors.app/) to generate a full scale from a single color.

## Manual Customization

Some elements require manual updates:

### Hero Banners

The README uses hero banners from `packages/brand/assets/hero/`. Create your own:
- `hero-light.svg` (1200×420)
- `hero-dark.svg` (1200×420)
- `hero-zh-light.svg` (Chinese, 1200×420)
- `hero-zh-dark.svg` (Chinese, 1200×420)

### Feature Icons

Custom icons in `packages/brand/assets/icons/`:
- `ai.svg`
- `tenants.svg`
- `enterprise.svg`
- `workflows.svg`
- `security.svg`
- `toolkit.svg`

## Re-applying Changes

After modifying `brand.config.ts`, run:

```bash
pnpm brand:apply
```

This is non-destructive and can be run multiple times.

## Updating from Upstream

To get updates from the original Nebutra Sailor repository:

```bash
# Add upstream remote (one time)
git remote add upstream https://github.com/TsekaLuk/Nebutra-Sailor.git

# Fetch and merge updates
git fetch upstream
git merge upstream/main

# Re-apply your branding
pnpm brand:apply
```

## Troubleshooting

### Brand config not loading

Ensure `brand.config.ts` is in the root directory and exports a default config:

```typescript
import type { BrandConfig } from "./scripts/brand-types";
const config: BrandConfig = { ... };
export default config;
```

### Assets not updating

1. Check that assets are in `brand.config/assets/` (not directly in `packages/brand/assets/`)
2. Run `pnpm brand:apply` again
3. Clear build caches: `pnpm clean`

### Package scope issues

After changing `packageScope`, you may need to:

```bash
# Clean and reinstall
pnpm clean
rm -rf node_modules
pnpm install
```

## Support

For questions about white-labeling:
- Open an issue on [GitHub](https://github.com/TsekaLuk/Nebutra-Sailor/issues)
- Tag with `white-label` label
