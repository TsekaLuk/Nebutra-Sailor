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
