/**
 * Landing Page Section Components
 *
 * Vercel-style design with grid lines and structured sections.
 *
 * @see src/lib/landing-content.ts for content constants
 */

// =============================================================================
// Layout & Navigation Components
// =============================================================================

export { LandingPageWrapper, TrackedSection } from "./LandingPageWrapper";

// =============================================================================
// Active Section Components (Vercel-style redesign v2)
// =============================================================================

export { Navbar } from "./Navbar";
export { HeroSection } from "./HeroSection";
export { FeatureGrid } from "./FeatureGrid";
export { DarkFeatureSection } from "./DarkFeatureSection";
export { ToolkitGrid } from "./ToolkitGrid";
export { TestimonialsSection } from "./TestimonialsSection";
export { FinalCTA } from "./FinalCTA";
export { FooterMinimal } from "./FooterMinimal";

// =============================================================================
// Legacy Components (kept for reference, not used in current design)
// =============================================================================

export { TrustRibbon } from "./TrustRibbon";
export { FeatureStack } from "./FeatureStack";
export { TerminalDemo } from "./TerminalDemo";
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
  "FeatureGrid",
  "DarkFeatureSection",
  "ToolkitGrid",
  "TestimonialsSection",
  "FinalCTA",
  "FooterMinimal",
] as const;

export type LandingSection = (typeof LANDING_SECTIONS)[number];
