/**
 * @nebutra/brand
 *
 * Centralized brand assets and identity for Nebutra monorepo
 * Based on: 云毓智能品牌视觉识别手册 (Nebutra Brand Visual Identity Manual)
 */

// Components
export { Logo, Logomark, Wordmark } from "./components/Logo";
export type { LogoProps, LogoVariant, LogoEdition } from "./components/Logo";

// Inline SVG components (no public folder required, fill="currentColor")
export { LogomarkSVG, WordmarkEnSVG, LogoEnSVG } from "./components/LogoSVG";
export type { LogoEnSVGProps } from "./components/LogoSVG";

// Metadata & Constants
export {
  brand,
  colors,
  typography,
  logoAssets,
  fontAssets,
  faviconAssets,
  ogImageDimensions,
} from "./metadata";

export type { BrandColors, BrandTypography, LogoAssets } from "./metadata";

// Brand Guidelines (品牌使用规范)
export {
  // Logo guidelines
  logoSafetyZone,
  logoMinSize,
  logoVariants,
  logoEditions,
  logoColorUsage,
  logoProhibitedUses,
  logoGrid,
  logoSpecialVersions,
  // Color guidelines
  nebutraBlue,
  nebutraCyan,
  brandGradient,
  neutralColors,
  colorProhibitedUses,
  allowedColorCombinations,
  generateColorScale,
  // Complete color scales (11 steps: 50-950)
  nebutraBlueScale,
  nebutraCyanScale,
  nebutraNeutralScale,
  semanticColors,
  // Unified guidelines object
  brandGuidelines,
} from "./guidelines";

export type {
  LogoVariant as LogoVariantGuideline,
  LogoProhibitedUse,
  ColorProhibitedUse,
  AllowedColorCombination,
  BrandGuidelines,
} from "./guidelines";

// Brand Motion Language (品牌运动语言)
export {
  brandMotion,
  brandEasing,
  brandDuration,
  brandSpring,
  emerge,
  flow,
  pulse,
  stagger,
  interactive,
  viewport,
} from "./motion";
