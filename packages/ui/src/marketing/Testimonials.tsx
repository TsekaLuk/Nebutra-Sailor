/**
 * Testimonials - Customer Testimonials Section
 *
 * Display customer quotes, reviews, and social proof.
 *
 * @see docs/MARKETING-INFRASTRUCTURE.md#testimonials
 *
 * ## Features (TODO)
 * - [ ] Section title + subtitle
 * - [ ] Testimonial cards with:
 *   - [ ] Quote text
 *   - [ ] Author name, title, company
 *   - [ ] Author avatar
 *   - [ ] Star rating (optional)
 * - [ ] Featured testimonial highlight
 *
 * ## Layouts (TODO)
 * - [ ] carousel: swipeable testimonials
 * - [ ] grid: card grid
 * - [ ] masonry: Pinterest-style layout
 * - [ ] single: one large featured quote
 *
 * ## Animation (TODO)
 * - [ ] Carousel auto-rotate
 * - [ ] Card entrance animation
 * - [ ] Quote reveal animation
 */

"use client";

import * as React from "react";
import type { TestimonialsProps } from "./types";

export function Testimonials({
  locale = "en",
  testimonials = [],
  layout = "carousel",
  autoRotate = true,
  title,
  subtitle,
  className,
  id,
  density = "normal",
}: TestimonialsProps) {
  // TODO: Implement carousel state
  // const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <section id={id} className={className} data-density={density}>
      {/* TODO: Section Header */}
      <div data-slot="header">
        {title && <h2 data-slot="title">{title}</h2>}
        {subtitle && <p data-slot="subtitle">{subtitle}</p>}
      </div>

      {/* TODO: Testimonials Layout */}
      <div data-slot="testimonials" data-layout={layout}>
        {layout === "carousel" && (
          <div data-slot="carousel">
            {/* TODO: Implement carousel with:
              - Swipeable cards
              - Navigation arrows
              - Pagination dots
              - Auto-rotate (if enabled)
            */}
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} data-slot="testimonial-card">
                {/* TODO: Use TestimonialCard component */}
                <blockquote data-slot="quote">
                  "{testimonial.quote}"
                </blockquote>
                {testimonial.rating && (
                  <div data-slot="rating">
                    {/* TODO: Star rating component */}
                    {"★".repeat(testimonial.rating)}
                  </div>
                )}
                <div data-slot="author">
                  {testimonial.author.avatar && (
                    <div data-slot="avatar">
                      {/* TODO: Avatar image */}
                    </div>
                  )}
                  <div data-slot="author-info">
                    <span data-slot="name">{testimonial.author.name}</span>
                    <span data-slot="title">
                      {testimonial.author.title}, {testimonial.author.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {(layout === "grid" || layout === "masonry") && (
          <div data-slot={layout}>
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                data-slot="testimonial-card"
                data-featured={testimonial.featured}
              >
                <blockquote data-slot="quote">
                  "{testimonial.quote}"
                </blockquote>
                {testimonial.rating && (
                  <div data-slot="rating">
                    {"★".repeat(testimonial.rating)}
                  </div>
                )}
                <div data-slot="author">
                  <span data-slot="name">{testimonial.author.name}</span>
                  <span data-slot="title">
                    {testimonial.author.title}, {testimonial.author.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {layout === "single" && testimonials[0] && (
          <div data-slot="single">
            {/* TODO: Large featured testimonial */}
            <blockquote data-slot="quote">
              "{testimonials[0].quote}"
            </blockquote>
            <div data-slot="author">
              <span data-slot="name">{testimonials[0].author.name}</span>
              <span data-slot="title">
                {testimonials[0].author.title}, {testimonials[0].author.company}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

Testimonials.displayName = "Testimonials";
