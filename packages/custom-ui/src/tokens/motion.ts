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

/**
 * Section-specific motion signatures
 *
 * Each section has a unique motion signature that encodes meaning:
 * - Hero: Slow reveal + float (spring) - establishes identity
 * - Architecture: Line-draw + typewriter (steps) - technical precision
 * - Features: Stagger pop-in (spring) - abundance of capabilities
 * - Stats: Number burst + scale (easeOutBack) - impressive metrics
 * - Terminal: Tick + scanline (steps) - authentic developer feel
 * - Testimonials: 3D carousel (easeInOut) - depth and credibility
 * - Vision: Floating type weight shift (easeInOut) - contemplation
 * - Pricing: BorderTrail morph (linear) - clarity and order
 * - CTA: Pulse + glow (loop) - urgency and action
 *
 * @see apps/landing-page/DESIGN.md Section 11.4
 */
export const sectionMotions: Record<string, Variants> = {
  // Hero: Slow reveal with floating effect
  hero: {
    initial: { opacity: 0, y: 30, scale: 0.98 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: [0.34, 1.56, 0.64, 1], // spring
      },
    },
  },

  // Architecture: Line-draw effect (for SVG paths)
  lineDraw: {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "linear" },
        opacity: { duration: 0.3 },
      },
    },
  },

  // Architecture: Typewriter effect
  typewriter: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "steps(30)",
      },
    },
  },

  // Features: Stagger pop-in with spring
  featureStagger: {
    initial: { opacity: 0, y: 20, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  },

  // Stats: Number burst with scale
  statsBurst: {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.175, 0.885, 0.32, 1.275], // easeOutBack
      },
    },
  },

  // Terminal: Tick effect (discrete steps)
  terminalTick: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.1,
        ease: "steps(1)",
      },
    },
  },

  // Testimonials: 3D card entrance
  card3D: {
    initial: {
      opacity: 0,
      rotateY: -15,
      z: -100,
    },
    animate: {
      opacity: 1,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1], // easeInOut
      },
    },
  },

  // Vision: Floating type with weight shift feel
  visionText: {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  },

  // CTA: Pulse with glow (for attention)
  ctaPulse: {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },
};

/**
 * Stagger container variants with section-specific timing
 */
export const sectionStaggerContainers: Record<string, Variants> = {
  fast: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  },
  normal: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  slow: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  },
};

/**
 * Scanline animation for terminal sections
 */
export const scanlineAnimation = {
  initial: { top: "0%" },
  animate: {
    top: ["0%", "100%", "0%"],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

/**
 * Number counter animation config
 * Use with a counting library or custom implementation
 */
export const numberCounterConfig = {
  duration: 2,
  delay: 0.3,
  ease: [0.175, 0.885, 0.32, 1.275], // easeOutBack
};

export type Duration = keyof typeof durations;
export type Easing = keyof typeof easings;
