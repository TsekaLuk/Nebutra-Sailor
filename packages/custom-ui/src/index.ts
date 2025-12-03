/**
 * @nebutra/custom-ui
 *
 * Brand-specific UI components built on @nebutra/design-system.
 *
 * This package contains:
 * - Domain-specific components (dashboard widgets, data grids, commerce UI, Web3 UI)
 * - High-density / complex UI patterns
 * - Brand-customized wrappers around external components (promoted from experimental)
 * - Layout patterns specific to Nebutra products
 *
 * @see docs/UI-GUIDELINES.md for usage
 * @see docs/COMPONENT-LIBRARY-POLICY.md for governance
 */

// ─────────────────────────────────────────────────────────────────────────────
// Utils
// ─────────────────────────────────────────────────────────────────────────────
export { cn } from "./utils/cn";

// ─────────────────────────────────────────────────────────────────────────────
// Design Tokens
// ─────────────────────────────────────────────────────────────────────────────
export * from "./tokens";

// ─────────────────────────────────────────────────────────────────────────────
// Primitives - Atomic building blocks
// ─────────────────────────────────────────────────────────────────────────────
export { Box } from "./primitives/box";
export type { BoxProps } from "./primitives/box";
export { Stack } from "./primitives/stack";
export type { StackProps } from "./primitives/stack";
export { Flex } from "./primitives/flex";
export type { FlexProps } from "./primitives/flex";
export { Text } from "./primitives/text";
export type { TextProps } from "./primitives/text";
export { Heading } from "./primitives/heading";
export type { HeadingProps } from "./primitives/heading";
export { BorderTrail } from "./primitives/border-trail";
export type { BorderTrailProps } from "./primitives/border-trail";
export { MagicCard } from "./primitives/magic-card";
export type { MagicCardProps } from "./primitives/magic-card";
export { AvatarCircles } from "./primitives/avatar-circles";
export type {
  AvatarCirclesProps,
  AvatarCircleItem,
} from "./primitives/avatar-circles";
export { AnimatedBeam } from "./primitives/animated-beam";
export type { AnimatedBeamProps } from "./primitives/animated-beam";
export { BentoGrid, BentoCard } from "./primitives/bento-grid";
export type { BentoGridProps, BentoCardProps } from "./primitives/bento-grid";
export { Badge, badgeVariants } from "./primitives/badge";
export type { BadgeProps } from "./primitives/badge";
export { Snippet } from "./primitives/snippet";
export type { SnippetProps } from "./primitives/snippet";
export { FlickeringGrid } from "./primitives/flickering-grid";
export type { FlickeringGridProps } from "./primitives/flickering-grid";
export { DotPattern } from "./primitives/dot-pattern";
export type { DotPatternProps } from "./primitives/dot-pattern";
export { DottedMap } from "./primitives/dotted-map";
export type { DottedMapProps, DottedMapMarker } from "./primitives/dotted-map";
export { ShineBorder } from "./primitives/shine-border";
export type { ShineBorderProps } from "./primitives/shine-border";
export { Globe } from "./primitives/globe";
export type { GlobeProps, GlobeConfig, GlobeMarker } from "./primitives/globe";
export { AnimatedList, AnimatedListItem } from "./primitives/animated-list";
export type {
  AnimatedListProps,
  AnimatedListItemProps,
} from "./primitives/animated-list";
// Note: Terminal compound component is exported from ./patterns
// These are the simple animation primitives for Terminal content
export {
  Terminal as SimpleTerminal,
  TypingAnimation,
  AnimatedSpan,
} from "./primitives/terminal";
export type {
  TerminalProps as SimpleTerminalProps,
  TypingAnimationProps,
  AnimatedSpanProps,
} from "./primitives/terminal";

// ─────────────────────────────────────────────────────────────────────────────
// Patterns - Compound components
// ─────────────────────────────────────────────────────────────────────────────
export * from "./patterns";

// ─────────────────────────────────────────────────────────────────────────────
// Decorations - Background effects and visual embellishments
// ─────────────────────────────────────────────────────────────────────────────
export * from "./decorations";

// ─────────────────────────────────────────────────────────────────────────────
// Layouts - Product-specific layout patterns
// ─────────────────────────────────────────────────────────────────────────────
export * from "./layouts";

// ─────────────────────────────────────────────────────────────────────────────
// Components - Brand-specific UI components
// ─────────────────────────────────────────────────────────────────────────────
export * from "./components";

// ─────────────────────────────────────────────────────────────────────────────
// Widgets - Dashboard and data-heavy UI widgets
// ─────────────────────────────────────────────────────────────────────────────
export * from "./widgets";

// ─────────────────────────────────────────────────────────────────────────────
// Types - Shared type definitions
// ─────────────────────────────────────────────────────────────────────────────
export * from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// Hooks - Custom React hooks for UI behavior
// ─────────────────────────────────────────────────────────────────────────────
export * from "./hooks";

// ─────────────────────────────────────────────────────────────────────────────
// Navigation - Scroll spy and narrative navigation
// ─────────────────────────────────────────────────────────────────────────────
export * from "./navigation";

// ─────────────────────────────────────────────────────────────────────────────
// Marketing - Landing page and marketing site components
// ─────────────────────────────────────────────────────────────────────────────
export * as marketing from "./marketing";
