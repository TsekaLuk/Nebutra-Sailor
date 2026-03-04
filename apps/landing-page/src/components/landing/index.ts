/**
 * Landing Page Section Components
 */

export { Navbar } from "./Navbar";
export { HeroSection } from "./HeroSection";
export { LogoStrip } from "./LogoStrip";
export { ProductDemoSection } from "./ProductDemoSection";
export { FeatureCards } from "./FeatureCards";
export { WorkflowSection } from "./WorkflowSection";
export { TestimonialsSection } from "./TestimonialsSection";
export { PricingHintSection } from "./PricingHintSection";
export { FinalCTA } from "./FinalCTA";
export { FooterMinimal } from "./FooterMinimal";

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
