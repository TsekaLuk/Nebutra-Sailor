/**
 * Landing Page Section Components
 *
 * These components implement the landing page design specified in DESIGN.md.
 * Each section is a self-contained component that composes primitives from
 * @nebutra/custom-ui/marketing and @nebutra/design-system.
 *
 * @see apps/landing-page/DESIGN.md for full specification
 * @see src/lib/landing-content.ts for content constants
 *
 * Implementation Status:
 * - [ ] HeroSection
 * - [ ] TrustRibbon
 * - [ ] SplitNarrative
 * - [ ] ArchitectureShowcase
 * - [ ] FeatureBento
 * - [ ] StatsBreak
 * - [ ] TerminalDemo
 * - [ ] TestimonialsCarousel
 * - [ ] VisionSection
 * - [ ] PricingSection
 * - [ ] FAQSection
 * - [ ] FinalCTA
 * - [ ] FooterMinimal
 */

// =============================================================================
// Section Components (to be implemented)
// =============================================================================

// Hero Section
// Components: SmoothScrollHero, CosmicSpectrum, AnimatedHeadline
// export { HeroSection } from "./HeroSection";

// Trust Ribbon (Tech Stack Logos)
// Components: Marquee, LogoCloudSlider
// export { TrustRibbon } from "./TrustRibbon";

// Split Narrative (Problem ↔ Solution)
// Components: FeatureSplitSection (sticky-left variant)
// export { SplitNarrative } from "./SplitNarrative";

// Architecture Showcase (DX Proof)
// Components: Custom CodeBlock / FileTree
// export { ArchitectureShowcase } from "./ArchitectureShowcase";

// Feature Bento Grid (Asymmetric)
// Components: FeaturesBentoSection, BentoCards
// export { FeatureBento } from "./FeatureBento";

// Stats Break (Breathing Room + Numbers)
// Components: StatsCounter
// export { StatsBreak } from "./StatsBreak";

// Terminal Demo (Developer Immersion)
// Components: Custom TerminalDemo with animations
// export { TerminalDemo } from "./TerminalDemo";

// Testimonials Carousel (3D)
// Components: TestimonialsRegistry (variant: carousel3d)
// export { TestimonialsCarousel } from "./TestimonialsCarousel";

// Vision Section (Company Story)
// Components: GradientText, Philosophy Cards
// export { VisionSection } from "./VisionSection";

// Pricing Section (Two-Column)
// Components: PricingSection, BorderTrail
// export { PricingSection } from "./PricingSection";

// FAQ Section (Minimal)
// Components: FAQBlock
// export { FAQSection } from "./FAQSection";

// Final CTA (Climax)
// Components: CTASection, GridPattern, StatsCounter
// export { FinalCTA } from "./FinalCTA";

// Footer (Minimal)
// Components: Footer, SystemStatusButton
// export { FooterMinimal } from "./FooterMinimal";

// =============================================================================
// Placeholder Exports (remove when implementing)
// =============================================================================

export const LANDING_SECTIONS = [
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
