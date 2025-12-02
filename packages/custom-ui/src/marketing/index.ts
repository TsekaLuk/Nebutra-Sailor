/**
 * Marketing Module
 *
 * Reusable marketing components for landing pages and marketing sites.
 *
 * @see docs/MARKETING-INFRASTRUCTURE.md
 *
 * @example
 * ```tsx
 * import { Hero, Features, Pricing, FAQ } from "@nebutra/custom-ui/marketing";
 *
 * export default function LandingPage() {
 *   return (
 *     <>
 *       <Navbar />
 *       <Hero headline="Build faster" />
 *       <Features features={[...]} />
 *       <Pricing plans={[...]} />
 *       <FAQ items={[...]} />
 *       <CTA headline="Get started today" />
 *       <Footer />
 *     </>
 *   );
 * }
 * ```
 */

// =============================================================================
// Types
// =============================================================================
export * from "./types";

// =============================================================================
// Main Sections
// =============================================================================
export { Navbar } from "./Navbar";
export { Hero } from "./Hero";
export { Features } from "./Features";
export { UseCases } from "./UseCases";
export { SocialProof } from "./SocialProof";
export { Pricing } from "./Pricing";
export { Testimonials } from "./Testimonials";
export { FAQ } from "./FAQ";
export { CTA } from "./CTA";
export { Footer } from "./Footer";

// =============================================================================
// Subcomponents
// =============================================================================
export { GradientText } from "./components/GradientText";
export { LogoCloud } from "./components/LogoCloud";
export { StatsCounter } from "./components/StatsCounter";

// =============================================================================
// 21st.dev Migrated Components
// =============================================================================

// Decorative
export { GridPattern } from "./grid-pattern";
export type { GridPatternProps } from "./grid-pattern";

// Marquee
export { Marquee } from "./marquee";
export type { MarqueeProps } from "./marquee";

// CTA with Vertical Marquee
export {
  default as CTAWithVerticalMarquee,
  VerticalMarquee,
} from "./cta-with-text-marquee";
export type { CTAWithVerticalMarqueeProps } from "./cta-with-text-marquee";

// Stagger Testimonials
export { StaggerTestimonials } from "./stagger-testimonials";
export type {
  StaggerTestimonialsProps,
  StaggerTestimonialItem,
} from "./stagger-testimonials";

// Testimonials Registry (variant-based system)
export * from "./testimonials-registry";

// Auth Page (requires @clerk/nextjs)
export { AuthPage } from "./auth-page";
export type { AuthPageProps } from "./auth-page";

// FAQ Block
export {
  default as FAQBlock,
  FAQBlock as FAQBlockComponent,
} from "./faq-block";
export type { FAQBlockProps, FAQItem } from "./faq-block";

// Pricing Section
export {
  PricingSection,
  PricingFrequencyToggle,
  PricingCard,
  BorderTrail,
  DEFAULT_PRICING_PLANS,
} from "./pricing-section";
export type {
  PricingSectionProps,
  PricingFrequencyToggleProps,
  PricingCardProps,
  PricingPlan,
} from "./pricing-section";
