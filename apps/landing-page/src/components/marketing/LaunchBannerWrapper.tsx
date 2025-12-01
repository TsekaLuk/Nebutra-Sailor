"use client";

import {
  LaunchBanner,
  useLaunchBannerState,
  getProductHuntUrl,
} from "@nebutra/marketing";

interface LaunchBannerWrapperProps {
  postSlug: string;
  launchDate?: string;
  isLaunching?: boolean;
}

/**
 * Launch banner wrapper with dismissal state management
 */
export function LaunchBannerWrapper({
  postSlug,
  launchDate,
  isLaunching = false,
}: LaunchBannerWrapperProps) {
  const { isDismissed, dismiss } = useLaunchBannerState("product-hunt-launch");

  // Don't show if not launching or dismissed
  if (!isLaunching || isDismissed) {
    return null;
  }

  const phUrl = getProductHuntUrl(postSlug);
  const hasCountdown = !!launchDate && new Date(launchDate) > new Date();

  return (
    <LaunchBanner
      title="We're live on Product Hunt!"
      subtitle="Support us and help spread the word"
      ctaText="Vote Now 🚀"
      ctaLink={phUrl}
      variant="top"
      theme="product-hunt"
      dismissible
      onDismiss={dismiss}
      showCountdown={hasCountdown}
      countdownEndDate={launchDate}
    />
  );
}

export default LaunchBannerWrapper;
