"use client";

import * as React from "react";
import {
  ScrollSpyProvider,
  StoryProgress,
  useRegisterSection,
} from "@nebutra/custom-ui";

/**
 * LandingPageWrapper - Provides scroll spy context and story progress for landing page
 *
 * Wraps the landing page with narrative navigation features:
 * - Scroll progress tracking
 * - Active section detection
 * - Fixed story progress indicator
 */
export function LandingPageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollSpyProvider offset={100} rootMargin="-30% 0px -50% 0px">
      {children}
      <StoryProgress position="right" showLabels />
    </ScrollSpyProvider>
  );
}

/**
 * TrackedSection - A section that registers itself with the scroll spy
 *
 * @example
 * <TrackedSection id="hero" label="Hero">
 *   <HeroSection />
 * </TrackedSection>
 */
export interface TrackedSectionProps {
  /** Unique section ID */
  id: string;
  /** Display label for navigation */
  label: string;
  /** Section content */
  children: React.ReactNode;
  /** Additional className */
  className?: string;
}

export function TrackedSection({
  id,
  label,
  children,
  className,
}: TrackedSectionProps) {
  useRegisterSection({ id, label });

  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
}

LandingPageWrapper.displayName = "LandingPageWrapper";
TrackedSection.displayName = "TrackedSection";
