/**
 * Marketing components for landing page
 *
 * These are wrapper components that integrate @nebutra/marketing
 * with specific landing page needs and configurations.
 */

export { ProductHuntSection } from "./ProductHuntSection";
export { TestimonialsSection, sampleTestimonials } from "./TestimonialsSection";
export { LaunchBannerWrapper } from "./LaunchBannerWrapper";

export type SocialProofStats = {
  users?: number;
  rating?: number;
  productHuntUpvotes?: number;
};
