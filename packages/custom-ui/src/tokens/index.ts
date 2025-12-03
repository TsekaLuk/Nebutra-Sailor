/**
 * Design Token System
 *
 * Centralized export for all design tokens.
 *
 * @see apps/landing-page/DESIGN.md Section 10
 */

// Spacing
export {
  spacing,
  semanticSpacing,
  containerWidths,
  type SpacingScale,
  type SemanticSpacing,
  type ContainerWidth,
} from "./spacing";

// Typography
export {
  fontSizes,
  fontWeights,
  lineHeights,
  textStyles,
  textColors,
  type FontSize,
  type FontWeight,
  type LineHeight,
  type TextStyle,
  type TextColor,
} from "./typography";

// Shadows
export {
  shadows,
  glowShadows,
  interactiveShadows,
  shadowClasses,
  type ShadowLevel,
  type GlowType,
} from "./shadows";

// Motion
export {
  durations,
  easings,
  transitions,
  motionVariants,
  interactiveVariants,
  viewportSettings,
  staggerDelay,
  type Duration,
  type Easing,
} from "./motion";
