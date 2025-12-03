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
// HeroUI/MagicUI Migrated Components
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

// Upgrade Banner
export { UpgradeBanner } from "./upgrade-banner";
export type { UpgradeBannerProps } from "./upgrade-banner";

// Banner (with Grid pattern)
export { Banner } from "./banner";
export type { BannerProps } from "./banner";

// CTA Section (with decorative borders)
export { CTASection } from "./cta-section";
export type { CTASectionProps } from "./cta-section";

// Customers Section (logo cloud with animation)
export { CustomersSection } from "./customers-section";
export type { CustomersSectionProps, CustomerLogo } from "./customers-section";

// Logo Cloud Slider (infinite slider)
export { LogoCloudSlider } from "./logo-cloud";
export type { LogoCloudSliderProps, Logo } from "./logo-cloud";

// Features Grid (gradient cards)
export {
  FeaturesGrid,
  DecorativeGrid,
  DEFAULT_FEATURES,
} from "./features-grid";
export type { FeaturesGridProps, FeatureItem } from "./features-grid";

// Feature Carousel
export { FeatureCarousel } from "./feature-carousel";
export type { FeatureCarouselProps, CarouselSlide } from "./feature-carousel";

// Logo Cloud Grid (decorative grid layout)
export { LogoCloudGrid } from "./logo-cloud-grid";
export type { LogoCloudGridProps, LogoCloudGridLogo } from "./logo-cloud-grid";

// Feature Split Section (two-column layout)
export { FeatureSplitSection } from "./feature-split-section";
export type {
  FeatureSplitSectionProps,
  FeatureSplitItem,
} from "./feature-split-section";

// Database REST API Visualization
export { DatabaseRestApi } from "./database-rest-api";
export type { DatabaseRestApiProps } from "./database-rest-api";

// Features Showcase (image + feature grid)
export { FeaturesShowcase } from "./features-showcase";
export type {
  FeaturesShowcaseProps,
  ShowcaseFeature,
} from "./features-showcase";

// Features Bento (6-card bento grid)
export { FeaturesBentoSection } from "./features-bento";
export type {
  FeaturesBentoSectionProps,
  BentoStatCard,
  BentoFeatureCard,
  BentoTeamMember,
} from "./features-bento";

// Featured Dashboard Section (2x2 grid layout)
export {
  FeaturedDashboardSection,
  DashboardPanelHeader,
} from "./featured-dashboard-section";
export type {
  FeaturedDashboardSectionProps,
  DashboardPanelHeaderProps,
} from "./featured-dashboard-section";

// Feature Cards Section (bento-style with circular UI)
export { FeatureCardsSection, CircularUIRow } from "./feature-cards-section";
export type {
  FeatureCardsSectionProps,
  FeatureCardItem,
  CircularUIRowProps,
} from "./feature-cards-section";

// Bento Cards (plus-icon grid)
export { BentoCards, PlusCard, PlusIcon, CornerPlusIcons } from "./bento-cards";
export type {
  BentoCardsProps,
  BentoCardItem,
  PlusCardProps,
} from "./bento-cards";

// Footer Components (atomic footer building blocks)
export {
  FooterLinkColumn,
  FooterSocialLinks,
  SystemStatusButton,
  DEFAULT_SOCIAL_LINKS,
} from "./footer-links";

// Animated Headline (cycling gradient text)
export { AnimatedHeadline } from "./animated-headline";
export type {
  AnimatedHeadlineProps,
  AnimatedHeadlineWord,
} from "./animated-headline";

// Cosmic Spectrum (scroll-animated spectrum)
export { CosmicSpectrum, COSMIC_SPECTRUM_COLORS } from "./cosmic-spectrum";
export type {
  CosmicSpectrumProps,
  CosmicSpectrumColorTheme,
} from "./cosmic-spectrum";
export type {
  FooterLink,
  FooterDropdown,
  FooterDropdownItem,
  FooterLinkGroup,
  FooterSocialLink,
  FooterLinkColumnProps,
  FooterSocialLinksProps,
  SystemStatus,
  SystemStatusButtonProps,
} from "./footer-links";

// Smooth Scroll Hero (parallax clip-path reveal)
export { SmoothScrollHero } from "./smooth-scroll-hero";
export type { SmoothScrollHeroProps } from "./smooth-scroll-hero";

// Award Badge (Product Hunt awards with 3D effect)
export { AwardBadge, AWARD_BADGE_TITLES } from "./award-badge";
export type { AwardBadgeProps, AwardBadgeType } from "./award-badge";

// Terminal Control Section (animated code diff showcase)
export {
  TerminalControlSectionAnimated,
  CodeDiff,
  DEFAULT_TERMINAL_ITEMS,
} from "./terminal-control-section-animated";
export type {
  TerminalControlSectionAnimatedProps,
  CodeDiffProps,
  DiffBlock,
  DiffLine,
  BulletItem,
} from "./terminal-control-section-animated";

// Globe (animated SVG illustration)
export { Globe } from "./globe";
export type { GlobeProps } from "./globe";

// Highlight Card (animated metrics card with color themes)
export { HighlightCard, HIGHLIGHT_CARD_THEMES } from "./highlight-card";
export type { HighlightCardProps, HighlightCardColor } from "./highlight-card";
