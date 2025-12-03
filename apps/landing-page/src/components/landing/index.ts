/**
 * Landing Page Section Components
 *
 * Vercel-style minimal design with vertical stacked sections.
 *
 * @see src/lib/landing-content.ts for content constants
 */

// =============================================================================
// Layout & Navigation Components
// =============================================================================

export { LandingPageWrapper, TrackedSection } from "./LandingPageWrapper";

// =============================================================================
// Active Section Components (Vercel-style redesign)
// =============================================================================

export { Navbar } from "./Navbar";
export { HeroSection } from "./HeroSection";
export { TrustRibbon } from "./TrustRibbon";
export { FeatureStack } from "./FeatureStack";
export { TerminalDemo } from "./TerminalDemo";
export { TestimonialsSection } from "./TestimonialsSection";
export { FinalCTA } from "./FinalCTA";
export { FooterMinimal } from "./FooterMinimal";

// =============================================================================
// Legacy Components (kept for reference, not used in current design)
// =============================================================================

export { SplitNarrative } from "./SplitNarrative";
export { ArchitectureShowcase } from "./ArchitectureShowcase";
export { FeatureBento } from "./FeatureBento";
export { StatsBreak } from "./StatsBreak";
export { VisionSection } from "./VisionSection";
export { PricingSection } from "./PricingSection";
export { FAQSection } from "./FAQSection";

// =============================================================================
// Section List (Active sections only)
// =============================================================================

export const LANDING_SECTIONS = [
  "Navbar",
  "HeroSection",
  "TrustRibbon",
  "FeatureStack",
  "TerminalDemo",
  "TestimonialsSection",
  "FinalCTA",
  "FooterMinimal",
] as const;

export type LandingSection = (typeof LANDING_SECTIONS)[number];
