/**
 * @nebutra/marketing
 *
 * Marketing infrastructure for Nebutra - Product Hunt integration,
 * testimonials, social proof, and attribution tracking.
 *
 * ## CSS Setup
 *
 * Import the CSS tokens for proper theming:
 * ```tsx
 * import "@nebutra/marketing/styles/tokens.css";
 * ```
 *
 * @example
 * ```tsx
 * import {
 *   ProductHuntBadge,
 *   LaunchBanner,
 *   TestimonialsWall,
 *   SocialProofBar,
 *   useAttribution,
 * } from "@nebutra/marketing";
 *
 * // Display Product Hunt badge
 * <ProductHuntBadge postSlug="nebutra" theme="light" size="medium" />
 *
 * // Show launch banner
 * <LaunchBanner
 *   title="We're live on Product Hunt!"
 *   ctaText="Support us"
 *   ctaLink="https://producthunt.com/posts/nebutra"
 *   variant="top"
 *   theme="product-hunt"
 * />
 *
 * // Display testimonials
 * <TestimonialsWall testimonials={testimonials} variant="grid" columns={3} />
 *
 * // Show social proof stats
 * <SocialProofBar
 *   stats={{ users: 1000, rating: 4.8, productHuntUpvotes: 500 }}
 *   variant="badges"
 * />
 *
 * // Track attribution
 * const { isFromProductHunt, source, campaign } = useAttribution();
 * ```
 */

// ============================================
// Components
// ============================================
export {
  // Product Hunt
  ProductHuntBadge,
  ProductHuntEmbedBadge,
  ProductHuntUpvoteBadge,
  ProductHuntTextBadge,
  // Launch Banners
  LaunchBanner,
  LaunchBannerTop,
  LaunchBannerFloating,
  LaunchBannerInline,
  // Testimonials
  TestimonialsWall,
  TestimonialCard,
  RatingStars,
  SourceBadge,
  // Social Proof
  SocialProofBar,
  TrustBadges,
  FeaturedIn,
  AnimatedNumber,
  StatItem,
} from "./components";

export type { FeaturedInProps } from "./components";

// ============================================
// Hooks
// ============================================
export {
  useAttribution,
  useProductHuntSource,
  useLaunchBannerState,
  useCountdown,
  useInView,
  useMarketingEvents,
} from "./hooks";

// ============================================
// Utilities
// ============================================
export {
  // UTM
  parseUTMParams,
  hasUTMParams,
  addUTMParams,
  removeUTMParams,
  createProductHuntUTM,
  // Source Detection
  detectSourceFromReferrer,
  detectMedium,
  // Attribution
  initAttribution,
  getAttribution,
  saveAttribution,
  getFirstTouchAttribution,
  generateSessionId,
  // Event Tracking
  trackMarketingEvent,
  getMarketingEvents,
  clearMarketingEvents,
  trackProductHuntVisit,
  trackSignup,
  trackConversion,
  // URL Utilities
  createTrackedLink,
  createProductHuntLink,
  cleanUrlForAnalytics,
} from "./utils";

// ============================================
// Configuration
// ============================================
export {
  // Defaults
  defaultMarketingConfig,
  defaultProductHuntConfig,
  // Creators
  createMarketingConfig,
  createProductHuntConfig,
  // URL Builders
  getProductHuntUrl,
  getProductHuntBadgeUrl,
  getProductHuntUpvoteUrl,
  generateShareUrls,
  // Constants
  PRODUCT_HUNT_COLORS,
  TESTIMONIAL_SOURCE_ICONS,
  TESTIMONIAL_SOURCE_NAMES,
} from "./config";

export type { ShareUrls } from "./config";

// ============================================
// Types
// ============================================
export type {
  // Product Hunt
  ProductHuntConfig,
  ProductHuntBadgeTheme,
  ProductHuntBadgeSize,
  ProductHuntBadgeProps,
  // Testimonials
  TestimonialSource,
  Testimonial,
  TestimonialsWallProps,
  // Social Proof
  SocialProofStats,
  SocialProofBarProps,
  TrustBadge,
  TrustBadgesProps,
  // Launch Banner
  LaunchBannerProps,
  // Attribution
  UTMParams,
  AttributionData,
  MarketingEvent,
  // Config
  MarketingConfig,
} from "./types";
