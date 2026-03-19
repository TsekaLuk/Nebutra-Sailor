/**
 * Landing Page Section Components
 */

export { FeatureCards } from "./FeatureCards";
export { FinalCTA } from "./FinalCTA";
export { FooterMinimal } from "./FooterMinimal";
export { HeroSection } from "./HeroSection";
export { LogoStrip } from "./LogoStrip";
export { Navbar } from "./Navbar";
export { PricingHintSection } from "./PricingHintSection";
export { ProductDemoSection } from "./ProductDemoSection";
export { TestimonialsSection } from "./TestimonialsSection";
export { WorkflowSection } from "./WorkflowSection";

export const LANDING_SECTIONS = [
  "Navbar",
  "HeroSection",
  "LogoStrip",
  "ProductDemoSection",
  "FeatureCards",
  "WorkflowSection",
  "TestimonialsSection",
  "PricingHintSection",
  "FinalCTA",
  "FooterMinimal",
] as const;

export type LandingSection = (typeof LANDING_SECTIONS)[number];
