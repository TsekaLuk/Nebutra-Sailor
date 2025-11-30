# Brand Assets

Place your brand assets in this directory.

## Required Files

### Social Media / SEO
```
/og-image.png          # Open Graph image (1200x630px)
/twitter-image.png     # Twitter card (1200x600px) - optional, uses og-image if missing
```

### Favicon & App Icons
```
/favicon.ico           # Browser tab icon (32x32)
/icon.png              # App icon (512x512)
/apple-icon.png        # Apple touch icon (180x180)
```

### Logo Variations
```
/brand/logo.svg            # Primary logo (vector)
/brand/logo-dark.svg       # Logo for dark backgrounds
/brand/logo-light.svg      # Logo for light backgrounds
/brand/logo-icon.svg       # Icon only (square)
/brand/logo-wordmark.svg   # Text only
```

### Different Sizes (for downloads/press kit)
```
/brand/logo-256.png
/brand/logo-512.png
/brand/logo-1024.png
```

## Specifications

### Open Graph Image (og-image.png)
- **Size:** 1200 x 630 px
- **Format:** PNG or JPG
- **Content:** Logo + tagline + visual
- **Used by:** Facebook, LinkedIn, Slack, Discord, iMessage

### Twitter Card (twitter-image.png)
- **Size:** 1200 x 600 px (or use og-image)
- **Format:** PNG or JPG

### Favicon (favicon.ico)
- **Size:** 32 x 32 px (can be multi-size .ico)
- **Format:** ICO

### Apple Touch Icon (apple-icon.png)
- **Size:** 180 x 180 px
- **Format:** PNG (no transparency)

## Usage in Next.js

Next.js automatically handles these files:

```
public/
├── favicon.ico          → /favicon.ico (auto-detected)
├── icon.png             → /icon.png (app manifest)
├── apple-icon.png       → /apple-icon.png
├── og-image.png         → Used in metadata
└── brand/
    └── logo.svg         → <Image src="/brand/logo.svg" />
```

## Design Guidelines

- **Primary Color:** #2563EB (Blue 600)
- **Secondary Color:** #1E40AF (Blue 800)
- **Background:** #FFFFFF / #0F172A (slate-900)
- **Font:** Inter (headings), system-ui (body)
