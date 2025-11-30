/**
 * Nebutra Brand Metadata
 * Central source of truth for brand identity
 */

export const brand = {
  name: "Nebutra",
  tagline: "Enterprise SaaS Platform",
  description: "AI-native enterprise platform for multi-tenant systems",
  
  // Official domains
  domains: {
    landing: "nebutra.com",
    app: "app.nebutra.com",
    api: "api.nebutra.com",
    studio: "studio.nebutra.com",
    cdn: "cdn.nebutra.com",
  },
  
  // Social links
  social: {
    twitter: "https://twitter.com/nebutra",
    github: "https://github.com/nebutra",
    discord: "https://discord.gg/nebutra",
    linkedin: "https://linkedin.com/company/nebutra",
  },
} as const;

/**
 * Brand Colors
 * Primary palette derived from design system
 */
export const colors = {
  // Primary brand colors
  primary: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1", // Main primary
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b",
  },
  
  // Secondary / Accent
  accent: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6", // Main accent
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e",
  },
  
  // Semantic colors
  success: "#22c55e",
  warning: "#f59e0b",
  error: "#ef4444",
  info: "#3b82f6",
  
  // Neutrals
  neutral: {
    0: "#ffffff",
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
    950: "#09090b",
  },
} as const;

/**
 * Typography
 */
export const typography = {
  fontFamily: {
    sans: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", Consolas, monospace',
    display: '"Cal Sans", "Inter", sans-serif',
  },
  
  // Font weights
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

/**
 * Logo asset paths (relative to package)
 */
export const logoAssets = {
  // Default logo
  default: "assets/logo/logo-color.svg",
  
  // Variants
  color: "assets/logo/logo-color.svg",
  inverse: "assets/logo/logo-inverse.svg",
  mono: "assets/logo/logo-mono.svg",
  
  // Localized
  en: "assets/logo/logo-en.svg",
  zh: "assets/logo/logo-zh.svg",
  zhEn: "assets/logo/logo-zh-en.svg",
  
  // Layouts
  horizontalEn: "assets/logo/logo-horizontal-en.svg",
  horizontalZh: "assets/logo/logo-horizontal-zh.svg",
  verticalEn: "assets/logo/logo-vertical-en.svg",
  verticalZh: "assets/logo/logo-vertical-zh.svg",
} as const;

/**
 * Favicon assets
 */
export const faviconAssets = {
  ico: "assets/favicon/favicon.ico",
  svg: "assets/favicon/favicon.svg",
  apple: "assets/favicon/apple-touch-icon.png",
  android192: "assets/favicon/android-chrome-192x192.png",
  android512: "assets/favicon/android-chrome-512x512.png",
} as const;

/**
 * OG Image dimensions
 */
export const ogImageDimensions = {
  default: { width: 1200, height: 630 },
  twitter: { width: 1200, height: 600 },
  square: { width: 1200, height: 1200 },
} as const;

export type BrandColors = typeof colors;
export type BrandTypography = typeof typography;
export type LogoAssets = typeof logoAssets;
