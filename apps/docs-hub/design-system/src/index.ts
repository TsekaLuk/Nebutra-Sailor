/**
 * @nebutra/design-system
 *
 * Primer-based design system with brand extensibility.
 * Uses GitHub's Primer defaults for MVP, with hooks for
 * future brand customization.
 *
 * Export Strategy:
 * - Named exports for controlled public API
 * - Namespace imports for sub-modules when needed
 * - No `export *` to prevent naming conflicts
 */

// ============================================
// Theme (colors, spacing, etc.)
// ============================================
export {
  // Default theme object
  defaultTheme,
  colorPrimitives,
  semanticColorsLight,
  semanticColorsDark,
  typography,
  spacing,
  radii,
  shadows,
  breakpoints,
  zIndex,
  animation,
  type DefaultTheme,
  // Brand customization
  brandColors,
  createTheme,
  lightTheme,
  darkTheme,
  type BrandColors,
  type BrandOverrides,
  type BrandTheme,
  type ThemeMode,
  type ThemeConfig,
} from "./theme";

// ============================================
// Typography (SSOT for fonts)
// ============================================
export {
  // Font family constants
  FONT_FAMILY_PRIMARY,
  FONT_FAMILY_HEADING,
  FONT_FAMILY_MONO,
  FONT_FAMILY_CJK,
  fontFamilies,
  // Type scale (rem-based)
  fontSizes,
  fontSizesPx,
  lineHeights,
  fontWeights,
  letterSpacing,
  // Pre-built type styles
  typeStyles,
  fluidFontSizes,
  // Types
  type FontFamily,
  type FontSize,
  type LineHeight,
  type FontWeight,
  type LetterSpacing,
  type TypeStyle,
  // Font loading
  fonts,
  defaultFonts,
  cjkFonts,
  allFonts,
  type FontConfig,
  getGoogleFontsUrl,
  getGoogleFontsLink,
  getFontPreloadLinks,
  areFontsLoaded,
  waitForFonts,
  fontSmoothing,
  fontFeatureSettings,
  getFontLicenses,
  fontLicenseNotice,
} from "./typography";

// ============================================
// Primitives (layout, a11y, responsive)
// ============================================
export {
  // Layout
  flexLayouts,
  gridLayouts,
  containerWidths,
  zIndex as layoutZIndex,
  // Spacing utilities
  spacing as primitiveSpacing,
  spacingPatterns,
  getSpacing,
  spacingToCss,
  getDensitySpacing,
  type SpacingKey,
  type SpacingValue,
  type DensityMode,
  // Accessibility
  visuallyHidden,
  focusRing,
  skipLinkStyle,
  ariaPatterns,
  minTouchTarget,
  prefersReducedMotion,
  contrastRequirements,
  // Responsive
  breakpoints as primitiveBreakpoints,
  mediaQueries,
  isBreakpoint,
  getCurrentBreakpoint,
  responsive,
  responsivePatterns,
  type Breakpoint,
  type BreakpointValue,
  // Legacy typography (deprecated)
  textStyles,
  type TextStyle,
} from "./primitives";

// ============================================
// Components (Primer + custom)
// ============================================
export * from "./components";

// ============================================
// Icons
// ============================================
export * from "./icons";

// ============================================
// Utilities
// ============================================
export * from "./utils";

// ============================================
// Hooks
// ============================================
export * from "./hooks";

// ============================================
// Governance
// ============================================
export * from "./governance";
