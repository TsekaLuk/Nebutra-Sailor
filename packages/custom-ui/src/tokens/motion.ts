/**
 * Motion Token System
 *
 * Defines animation durations, easings, and Framer Motion variants.
 *
 * @see apps/landing-page/DESIGN.md Section 10.8
 */

import type { Variants, Transition } from "framer-motion";

/**
 * Duration scale in milliseconds
 */
export const durations = {
  instant: 0,
  fast: 150,
  normal: 300,
  slow: 500,
  slower: 700,
  slowest: 1000,
} as const;

/**
 * Easing functions
 */
export const easings = {
  linear: "linear",
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: [0.34, 1.56, 0.64, 1],
  bounce: [0.68, -0.6, 0.32, 1.6],
} as const;

/**
 * Standard transition presets
 */
export const transitions: Record<string, Transition> = {
  fast: { duration: durations.fast / 1000, ease: easings.easeOut },
  normal: { duration: durations.normal / 1000, ease: easings.easeOut },
  slow: { duration: durations.slow / 1000, ease: easings.easeOut },
  spring: { type: "spring", stiffness: 120, damping: 18 },
};

/**
 * Framer Motion animation variants
 */
export const motionVariants: Record<string, Variants> = {
  // Fade in from bottom
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
  },

  // Fade in from left
  fadeInLeft: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
  },

  // Fade in from right
  fadeInRight: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 10 },
  },

  // Scale in
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  },

  // Stagger container (for parent elements)
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },

  // Stagger item (for child elements)
  staggerItem: {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
  },
};

/**
 * Interactive hover/tap variants
 */
export const interactiveVariants = {
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
  hoverLift: { y: -4 },
  hoverGlow: { boxShadow: "0 0 20px rgba(var(--accent-rgb), 0.3)" },
} as const;

/**
 * Viewport settings for scroll-triggered animations
 */
export const viewportSettings = {
  once: { once: true, margin: "-100px" },
  always: { once: false, margin: "-50px" },
} as const;

/**
 * Helper to create staggered delay
 */
export const staggerDelay = (index: number, base = 0.1) => ({
  transition: { delay: index * base },
});

export type Duration = keyof typeof durations;
export type Easing = keyof typeof easings;
