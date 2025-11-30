/**
 * @nebutra/brand
 * 
 * Centralized brand assets and identity for Nebutra monorepo
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
