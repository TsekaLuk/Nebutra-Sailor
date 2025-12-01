/**
 * Features - Product Features Section
 *
 * Showcase product features with icons, descriptions, and optional CTAs.
 *
 * @see docs/MARKETING-INFRASTRUCTURE.md#features
 *
 * ## Features (TODO)
 * - [ ] Section title + subtitle
 * - [ ] Feature cards with icon/image
 * - [ ] Feature title + description
 * - [ ] Optional badges ("New", "Beta")
 * - [ ] Optional link to detail page
 * - [ ] Hover effects / micro-interactions
 *
 * ## Layouts (TODO)
 * - [ ] grid: 2/3/4 column grid
 * - [ ] bento: asymmetric bento box layout
 * - [ ] alternating: image-left / image-right rows
 * - [ ] tabs: tabbed feature showcase
 *
 * ## Animation (TODO)
 * - [ ] Staggered entrance on scroll
 * - [ ] Hover lift effect
 * - [ ] Icon animation on hover
 * - [ ] prefers-reduced-motion support
 */

"use client";

import * as React from "react";
import type { FeaturesProps } from "./types";

export function Features({
  locale = "en",
  layout = "grid",
  columns = 3,
  showIcons = true,
  features = [],
  title,
  subtitle,
  className,
  id,
  density = "normal",
}: FeaturesProps) {
  return (
    <section id={id} className={className} data-density={density}>
      {/* TODO: Section Header */}
      <div data-slot="header">
        {title && <h2 data-slot="title">{title}</h2>}
        {subtitle && <p data-slot="subtitle">{subtitle}</p>}
      </div>

      {/* TODO: Features Grid/Layout */}
      <div data-slot="features" data-layout={layout} data-columns={columns}>
        {features.map((feature) => (
          <div key={feature.id} data-slot="feature-card">
            {/* TODO: Use FeatureCard component */}
            {showIcons && feature.icon && (
              <div data-slot="icon">
                {/* TODO: Render icon from design-system */}
                {feature.icon}
              </div>
            )}
            {feature.image && (
              <div data-slot="image">
                {/* TODO: Optimized image */}
              </div>
            )}
            <h3 data-slot="feature-title">
              {feature.title}
              {feature.badge && <span data-badge>{feature.badge}</span>}
            </h3>
            <p data-slot="feature-description">{feature.description}</p>
            {feature.href && (
              <a href={feature.href} data-slot="feature-link">
                Learn more →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

Features.displayName = "Features";
