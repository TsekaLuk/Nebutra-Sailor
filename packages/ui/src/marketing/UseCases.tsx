/**
 * UseCases - Use Cases / Solutions Section
 *
 * Showcase different use cases, target audiences, or solutions.
 *
 * @see docs/MARKETING-INFRASTRUCTURE.md#use-cases
 *
 * ## Features (TODO)
 * - [ ] Section title + subtitle
 * - [ ] Use case cards with audience/industry
 * - [ ] Benefits list per use case
 * - [ ] Icon or illustration
 * - [ ] Link to detail page
 *
 * ## Layouts (TODO)
 * - [ ] tabs: tabbed navigation with content
 * - [ ] carousel: swipeable cards
 * - [ ] grid: card grid
 * - [ ] cards: large feature cards
 *
 * ## Animation (TODO)
 * - [ ] Tab transition animation
 * - [ ] Carousel slide animation
 * - [ ] Entrance animation on scroll
 */

"use client";

import * as React from "react";
import type { UseCasesProps } from "./types";

export function UseCases({
  locale = "en",
  layout = "tabs",
  useCases = [],
  title,
  subtitle,
  className,
  id,
  density = "normal",
}: UseCasesProps) {
  // TODO: Implement active tab state for tabs layout
  // const [activeTab, setActiveTab] = React.useState(useCases[0]?.id);

  return (
    <section id={id} className={className} data-density={density}>
      {/* TODO: Section Header */}
      <div data-slot="header">
        {title && <h2 data-slot="title">{title}</h2>}
        {subtitle && <p data-slot="subtitle">{subtitle}</p>}
      </div>

      {/* TODO: Use Cases Layout */}
      <div data-slot="use-cases" data-layout={layout}>
        {layout === "tabs" && (
          <>
            {/* TODO: Tab Navigation */}
            <div data-slot="tab-nav">
              {useCases.map((useCase) => (
                <button key={useCase.id} data-slot="tab-button">
                  {useCase.title}
                </button>
              ))}
            </div>
            {/* TODO: Tab Content */}
            <div data-slot="tab-content">
              {/* TODO: Render active use case content */}
            </div>
          </>
        )}

        {(layout === "grid" || layout === "cards") && (
          <div data-slot="grid">
            {useCases.map((useCase) => (
              <div key={useCase.id} data-slot="use-case-card">
                {useCase.icon && <div data-slot="icon">{useCase.icon}</div>}
                <h3 data-slot="title">{useCase.title}</h3>
                <p data-slot="audience">{useCase.audience}</p>
                <p data-slot="description">{useCase.description}</p>
                {useCase.benefits && (
                  <ul data-slot="benefits">
                    {useCase.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                )}
                {useCase.href && (
                  <a href={useCase.href} data-slot="link">
                    Learn more →
                  </a>
                )}
              </div>
            ))}
          </div>
        )}

        {layout === "carousel" && (
          <div data-slot="carousel">
            {/* TODO: Implement carousel with:
              - Swipeable cards
              - Navigation arrows
              - Pagination dots
              - Auto-play option
            */}
          </div>
        )}
      </div>
    </section>
  );
}

UseCases.displayName = "UseCases";
