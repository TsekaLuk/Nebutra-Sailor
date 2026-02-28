/**
 * Landing Page Section Components
 *
 * 5-section minimal design: Navbar → Hero → LogoStrip → FeatureCards → FinalCTA → Footer
 */

export { Navbar } from "./Navbar";
export { HeroSection } from "./HeroSection";
export { LogoStrip } from "./LogoStrip";
export { FeatureCards } from "./FeatureCards";
export { FinalCTA } from "./FinalCTA";
export { FooterMinimal } from "./FooterMinimal";

export const LANDING_SECTIONS = [
  "Navbar",
  "HeroSection",
  "LogoStrip",
  "FeatureCards",
  "FinalCTA",
  "FooterMinimal",
] as const;

export type LandingSection = (typeof LANDING_SECTIONS)[number];
