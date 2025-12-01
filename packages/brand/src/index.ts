/**
 * @nebutra/brand
 * 
 * Centralized brand assets and identity for Nebutra monorepo
 * Based on: 云毓智能品牌视觉识别手册 (Nebutra Brand Visual Identity Manual)
 */

// Components
export { Logo, Logomark, Wordmark } from "./components/Logo";
export type { LogoProps, LogoVariant } from "./components/Logo";

// Metadata & Constants
export {
  brand,
  colors,
  typography,
  logoAssets,
  faviconAssets,
  ogImageDimensions,
} from "./metadata";

export type {
  BrandColors,
  BrandTypography,
  LogoAssets,
} from "./metadata";

// Brand Guidelines (品牌使用规范)
export {
  // Logo guidelines
  logoSafetyZone,
  logoMinSize,
  logoVariants,
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
