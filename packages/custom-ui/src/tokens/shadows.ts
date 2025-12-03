/**
 * Shadow Token System
 *
 * Defines elevation levels and glow effects for visual depth.
 *
 * @see apps/landing-page/DESIGN.md Section 10.10
 */

/**
 * Elevation shadow levels
 */
export const shadows = {
  none: "none",
  sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
} as const;

/**
 * Glow effects for brand elements
 */
export const glowShadows = {
  primary: "0 0 40px rgba(var(--primary-rgb), 0.3)",
  accent: "0 0 40px rgba(var(--accent-rgb), 0.3)",
  card: "0 8px 30px rgba(0, 0, 0, 0.12)",
} as const;

/**
 * Interactive state shadows
 */
export const interactiveShadows = {
  hover: "0 14px 28px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12)",
  active: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
} as const;

/**
 * Tailwind shadow class mappings
 */
export const shadowClasses = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
} as const;

export type ShadowLevel = keyof typeof shadows;
export type GlowType = keyof typeof glowShadows;
