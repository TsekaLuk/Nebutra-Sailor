/**
 * Design Token System
 *
 * 3-layer architecture:
 *   Layer 1 — primitive.ts  : raw values (hex, px numbers)
 *   Layer 2 — semantic.ts   : light/dark semantic mapping → CSS variables
 *   Layer 3 — components/*  : per-component design decisions
 *
 * VI Reference: packages/brand/assets/vi/full.md
 *
 * @see apps/landing-page/DESIGN.md Section 10
 */

// ─── Layer 1: Primitive Tokens ────────────────────────────────────────────────
export {
  primitiveColors,
  primitiveGradients,
  primitiveSpacing,
  primitiveSizing,
  primitiveRadius,
  primitiveFontSize,
  primitiveFontWeight,
  primitiveFontFamily,
  primitiveShadow,
  primitiveTransition,
  primitiveFocusRing,
  type PrimitiveColor,
  type PrimitiveGradient,
  type PrimitiveSpacing,
  type PrimitiveSizing,
  type PrimitiveRadius,
  type PrimitiveFontSize,
  type PrimitiveFontWeight,
  type PrimitiveFontFamily,
  type PrimitiveShadow,
} from "./primitive";

// ─── Layer 2: Semantic Tokens ─────────────────────────────────────────────────
export {
  semanticLight,
  semanticDark,
  semanticGradients,
  semanticGlobals,
  type SemanticColorScale,
  type SemanticGradient,
  type SemanticTheme,
} from "./semantic";

// ─── Layer 3: Component Tokens ────────────────────────────────────────────────
export {
  buttonTokens,
  avatarTokens,
  inputTokens,
  cardTokens,
  badgeTokens,
  type ButtonSize,
  type AvatarSize,
  type CardPadding,
} from "./components";

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
