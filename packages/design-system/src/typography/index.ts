/**
 * Typography Module
 *
 * Centralized typography system for the design system.
 *
 * @example
 * ```tsx
 * import {
 *   fontFamilies,
 *   fontSizes,
 *   typeStyles,
 *   getGoogleFontsUrl,
 * } from "@nebutra/design-system/typography";
 *
 * // Use font family
 * const style = { fontFamily: fontFamilies.primary };
 *
 * // Use type preset
 * const headingStyle = typeStyles.h1;
 *
 * // Get Google Fonts URL
 * const fontsUrl = getGoogleFontsUrl(["inter", "jetbrainsMono"]);
 * ```
 */

// Tokens - Font families, sizes, weights, etc.
export {
  // Font families
  FONT_FAMILY_PRIMARY,
  FONT_FAMILY_HEADING,
  FONT_FAMILY_MONO,
  FONT_FAMILY_CJK,
  fontFamilies,

  // Type scale
  fontSizes,
  fontSizesPx,

  // Line heights
  lineHeights,

  // Font weights
  fontWeights,

  // Letter spacing
  letterSpacing,

  // Combined type styles
  typeStyles,

  // Fluid typography
  fluidFontSizes,

  // Types
  type FontFamily,
  type FontSize,
  type LineHeight,
  type FontWeight,
  type LetterSpacing,
  type TypeStyle,
} from "./tokens";

// Font configuration and loading
export {
  // Font configs
  fonts,
  defaultFonts,
  cjkFonts,
  allFonts,
  type FontConfig,

  // URL builders
  getGoogleFontsUrl,
  getGoogleFontsLink,
  getFontPreloadLinks,

  // Loading utilities
  areFontsLoaded,
  waitForFonts,

  // CSS helpers
  fontSmoothing,
  fontFeatureSettings,

  // License info
  getFontLicenses,
  fontLicenseNotice,
} from "./fonts";
