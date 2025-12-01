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
