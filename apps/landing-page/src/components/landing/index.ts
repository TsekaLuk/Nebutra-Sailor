/**
 * Landing Page Section Components
 *
 * These components implement the landing page design specified in DESIGN.md.
 * Each section is a self-contained component that composes primitives from
 * @nebutra/custom-ui/marketing and @nebutra/design-system.
 *
 * @see apps/landing-page/DESIGN.md for full specification
 * @see src/lib/landing-content.ts for content constants
 */

// =============================================================================
// Layout & Navigation Components
// =============================================================================

export { LandingPageWrapper, TrackedSection } from "./LandingPageWrapper";

// =============================================================================
// Section Components
// =============================================================================

export { Navbar } from "./Navbar";
export { HeroSection } from "./HeroSection";
export { TrustRibbon } from "./TrustRibbon";
export { SplitNarrative } from "./SplitNarrative";
export { ArchitectureShowcase } from "./ArchitectureShowcase";
export { FeatureBento } from "./FeatureBento";
export { StatsBreak } from "./StatsBreak";
export { TerminalDemo } from "./TerminalDemo";
export { TestimonialsSection } from "./TestimonialsSection";
export { VisionSection } from "./VisionSection";
export { PricingSection } from "./PricingSection";
export { FAQSection } from "./FAQSection";
export { FinalCTA } from "./FinalCTA";
export { FooterMinimal } from "./FooterMinimal";

// =============================================================================
// Section List
// =============================================================================

export const LANDING_SECTIONS = [
  "Navbar",
  "HeroSection",
  "TrustRibbon",
  "SplitNarrative",
  "ArchitectureShowcase",
  "FeatureBento",
  "StatsBreak",
  "TerminalDemo",
  "TestimonialsCarousel",
  "VisionSection",
  "PricingSection",
  "FAQSection",
  "FinalCTA",
  "FooterMinimal",
] as const;

export type LandingSection = (typeof LANDING_SECTIONS)[number];

// =============================================================================
// Component Dependencies Map (for reference)
// =============================================================================

export const COMPONENT_DEPENDENCIES = {
  HeroSection: [
    "@nebutra/custom-ui/marketing/SmoothScrollHero",
    "@nebutra/custom-ui/marketing/CosmicSpectrum",
    "@nebutra/custom-ui/marketing/AnimatedHeadline",
  ],
  TrustRibbon: [
    "@nebutra/custom-ui/marketing/Marquee",
    "@nebutra/custom-ui/marketing/LogoCloudSlider",
  ],
  SplitNarrative: ["@nebutra/custom-ui/marketing/FeatureSplitSection"],
  ArchitectureShowcase: ["Custom CodeBlock/FileTree with framer-motion"],
  FeatureBento: [
    "@nebutra/custom-ui/marketing/FeaturesBentoSection",
    "@nebutra/custom-ui/marketing/BentoCards",
  ],
  StatsBreak: ["@nebutra/custom-ui/marketing/StatsCounter"],
  TerminalDemo: ["Custom component with framer-motion"],
  TestimonialsCarousel: ["@nebutra/custom-ui/marketing/TestimonialsRegistry"],
  VisionSection: ["@nebutra/custom-ui/marketing/GradientText"],
  PricingSection: [
    "@nebutra/custom-ui/marketing/PricingSection",
    "@nebutra/custom-ui/marketing/BorderTrail",
  ],
  FAQSection: ["@nebutra/custom-ui/marketing/FAQBlock"],
  FinalCTA: [
    "@nebutra/custom-ui/marketing/CTASection",
    "@nebutra/custom-ui/marketing/GridPattern",
  ],
  FooterMinimal: [
    "@nebutra/custom-ui/marketing/Footer",
    "@nebutra/custom-ui/marketing/SystemStatusButton",
  ],
} as const;
