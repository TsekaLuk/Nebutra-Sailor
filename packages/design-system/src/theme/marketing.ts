/**
 * Marketing-specific design tokens
 *
 * Extended tokens for landing pages, marketing sites, and high-impact visuals.
 * These extend the base design-system tokens with marketing-specific values.
 *
 * @see docs/MARKETING-INFRASTRUCTURE.md
 */

// ============================================================================
// Spacing
// ============================================================================

export const marketingSpacing = {
  /** Section padding for marketing pages */
  section: {
    /** 64px - Mobile section padding */
    sm: "64px",
    /** 96px - Tablet section padding */
    md: "96px",
    /** 128px - Desktop section padding */
    lg: "128px",
    /** 160px - Large screen section padding */
    xl: "160px",
  },

  /** Hero section specific spacing */
  hero: {
    /** Minimum hero height */
    minHeight: "100vh",
    /** Maximum content width in hero */
    contentMaxWidth: "1200px",
  },

  /** Content container widths */
  container: {
    /** Narrow content (blog, legal pages) */
    narrow: "680px",
    /** Default content width */
    default: "1024px",
    /** Wide content (features, pricing) */
    wide: "1200px",
    /** Full width with padding */
    full: "1440px",
  },
} as const;

// ============================================================================
// Typography
// ============================================================================

export const marketingTypography = {
  /** Display text (hero headlines) */
  display: {
    fontSize: ["3rem", "4rem", "5rem", "6rem"] as const, // Responsive
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    fontWeight: 700,
  },

  /** Section headlines */
  headline: {
    fontSize: ["2rem", "2.5rem", "3rem"] as const,
    lineHeight: 1.2,
    letterSpacing: "-0.01em",
    fontWeight: 600,
  },

  /** Subheadlines / lead text */
  subheadline: {
    fontSize: ["1.125rem", "1.25rem", "1.5rem"] as const,
    lineHeight: 1.5,
    fontWeight: 400,
  },

  /** Feature titles */
  featureTitle: {
    fontSize: ["1.25rem", "1.5rem"] as const,
    lineHeight: 1.3,
    fontWeight: 600,
  },

  /** Card descriptions */
  cardText: {
    fontSize: "1rem",
    lineHeight: 1.6,
    fontWeight: 400,
  },

  /** Small labels / badges */
  label: {
    fontSize: "0.75rem",
    lineHeight: 1.4,
    fontWeight: 500,
    letterSpacing: "0.02em",
    textTransform: "uppercase" as const,
  },
} as const;

// ============================================================================
// Gradients
// ============================================================================

export const marketingGradients = {
  /** Primary brand gradient */
  primary:
    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #d946ef 100%)",

  /** Secondary gradient (cooler tones) */
  secondary:
    "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)",

  /** Subtle background gradient */
  subtle:
    "linear-gradient(180deg, rgba(99,102,241,0.1) 0%, transparent 100%)",

  /** Glass effect gradient */
  glass:
    "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",

  /** Mesh gradient for hero backgrounds */
  mesh: `
    radial-gradient(at 40% 20%, hsla(280,100%,70%,0.3) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189,100%,56%,0.3) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355,100%,93%,0.3) 0px, transparent 50%)
  `.trim(),

  /** Aurora effect */
  aurora: `
    radial-gradient(ellipse at 50% 0%, hsla(280,100%,70%,0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 100% 50%, hsla(189,100%,56%,0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 0% 100%, hsla(340,100%,70%,0.15) 0%, transparent 50%)
  `.trim(),

  /** Dark mode mesh */
  meshDark: `
    radial-gradient(at 40% 20%, hsla(280,100%,50%,0.2) 0px, transparent 50%),
    radial-gradient(at 80% 0%, hsla(189,100%,40%,0.2) 0px, transparent 50%),
    radial-gradient(at 0% 50%, hsla(355,100%,60%,0.2) 0px, transparent 50%)
  `.trim(),

  /** Text gradient (for gradient text effect) */
  text: "linear-gradient(135deg, #6366f1 0%, #d946ef 100%)",
} as const;

// ============================================================================
// Effects
// ============================================================================

export const marketingEffects = {
  /** Glassmorphism effect (light mode) */
  glass: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.2)",
  },

  /** Glassmorphism effect (dark mode) */
  glassDark: {
    background: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },

  /** Frosted glass */
  frosted: {
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(20px) saturate(180%)",
    WebkitBackdropFilter: "blur(20px) saturate(180%)",
  },

  /** Glow effect */
  glow: {
    boxShadow: "0 0 60px rgba(99, 102, 241, 0.3)",
  },

  /** Strong glow */
  glowStrong: {
    boxShadow: "0 0 80px rgba(99, 102, 241, 0.5)",
  },

  /** Card shadow */
  cardShadow: {
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },

  /** Elevated card shadow */
  cardShadowElevated: {
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },

  /** Hover lift effect */
  hoverLift: {
    transform: "translateY(-4px)",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
} as const;

// ============================================================================
// Border Radius
// ============================================================================

export const marketingRadii = {
  /** Small cards / tags */
  sm: "8px",
  /** Default cards */
  card: "16px",
  /** Large cards / hero elements */
  cardLg: "24px",
  /** Extra large (modals, full sections) */
  xl: "32px",
  /** Pill buttons for CTAs */
  button: "9999px",
  /** Circle (avatars, icons) */
  full: "50%",
} as const;

// ============================================================================
// Transitions
// ============================================================================

export const marketingTransitions = {
  /** Fast micro-interactions */
  fast: "150ms ease",
  /** Default transitions */
  default: "200ms ease",
  /** Smooth transitions */
  smooth: "300ms cubic-bezier(0.4, 0, 0.2, 1)",
  /** Emphasized transitions */
  emphasized: "400ms cubic-bezier(0.4, 0, 0.2, 1)",
  /** Slow, dramatic transitions */
  slow: "500ms cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

// ============================================================================
// Z-Index Scale
// ============================================================================

export const marketingZIndex = {
  /** Background elements */
  background: -1,
  /** Default content */
  base: 0,
  /** Slightly elevated (cards on hover) */
  elevated: 10,
  /** Sticky elements */
  sticky: 100,
  /** Navigation */
  nav: 1000,
  /** Dropdowns / Popovers */
  dropdown: 1100,
  /** Modals / Dialogs */
  modal: 1200,
  /** Toasts / Notifications */
  toast: 1300,
  /** Tooltips */
  tooltip: 1400,
} as const;

// ============================================================================
// Combined Export
// ============================================================================

export const marketingTokens = {
  spacing: marketingSpacing,
  typography: marketingTypography,
  gradients: marketingGradients,
  effects: marketingEffects,
  radii: marketingRadii,
  transitions: marketingTransitions,
  zIndex: marketingZIndex,
} as const;

export type MarketingTokens = typeof marketingTokens;

// ============================================================================
// CSS Custom Properties Generator
// ============================================================================

/**
 * Generate CSS custom properties from marketing tokens
 * Useful for injecting into :root or a specific scope
 */
export function generateMarketingCSSVars(): string {
  return `
    /* Marketing Spacing */
    --marketing-section-sm: ${marketingSpacing.section.sm};
    --marketing-section-md: ${marketingSpacing.section.md};
    --marketing-section-lg: ${marketingSpacing.section.lg};
    --marketing-section-xl: ${marketingSpacing.section.xl};
    --marketing-hero-min-height: ${marketingSpacing.hero.minHeight};
    --marketing-content-max-width: ${marketingSpacing.hero.contentMaxWidth};
    
    /* Marketing Radii */
    --marketing-radius-sm: ${marketingRadii.sm};
    --marketing-radius-card: ${marketingRadii.card};
    --marketing-radius-card-lg: ${marketingRadii.cardLg};
    --marketing-radius-xl: ${marketingRadii.xl};
    --marketing-radius-button: ${marketingRadii.button};
    
    /* Marketing Transitions */
    --marketing-transition-fast: ${marketingTransitions.fast};
    --marketing-transition-default: ${marketingTransitions.default};
    --marketing-transition-smooth: ${marketingTransitions.smooth};
    --marketing-transition-emphasized: ${marketingTransitions.emphasized};
    --marketing-transition-slow: ${marketingTransitions.slow};
  `.trim();
}
