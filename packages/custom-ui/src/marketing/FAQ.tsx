/**
 * FAQ - Frequently Asked Questions Section
 *
 * Display common questions and answers in an expandable format.
 *
 * @see docs/MARKETING-INFRASTRUCTURE.md#faq
 *
 * ## Features (TODO)
 * - [ ] Section title + subtitle
 * - [ ] Expandable accordion items
 * - [ ] Category filtering (optional)
 * - [ ] Search/filter functionality
 * - [ ] Markdown support in answers
 *
 * ## Layouts (TODO)
 * - [ ] accordion: classic expandable list
 * - [ ] two-column: split Q&A layout
 * - [ ] cards: card-based layout
 *
 * ## Animation (TODO)
 * - [ ] Smooth expand/collapse animation
 * - [ ] Entrance animation on scroll
 *
 * ## Accessibility (TODO)
 * - [ ] ARIA attributes for accordion
 * - [ ] Keyboard navigation (Enter, Space, Arrow keys)
 * - [ ] Focus management
 */

"use client";

import * as React from "react";
import type { FAQProps } from "./types";

export function FAQ({
  locale = "en",
  items = [],
  showCategories = false,
  layout = "accordion",
  title,
  subtitle,
  className,
  id,
  density = "normal",
}: FAQProps) {
  // TODO: Implement expanded state
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  // TODO: Implement category filter state
  // const [activeCategory, setActiveCategory] = React.useState<string | null>(null);

  // Get unique categories
  const categories = React.useMemo(() => {
    const cats = new Set(items.map((item) => item.category).filter(Boolean));
    return Array.from(cats);
  }, [items]);

  return (
    <section id={id} className={className} data-density={density}>
      {/* TODO: Section Header */}
      <div data-slot="header">
        {title && <h2 data-slot="title">{title}</h2>}
        {subtitle && <p data-slot="subtitle">{subtitle}</p>}
      </div>

      {/* TODO: Category Filter */}
      {showCategories && categories.length > 0 && (
        <div data-slot="categories">
          <button data-active={true}>All</button>
          {categories.map((category) => (
            <button key={category}>{category}</button>
          ))}
        </div>
      )}

      {/* TODO: FAQ Items */}
      <div data-slot="faq-list" data-layout={layout}>
        {items.map((item, index) => (
          <div
            key={index}
            data-slot="faq-item"
            data-expanded={expandedIndex === index}
          >
            {/* TODO: Use FAQItem component */}
            <button
              data-slot="question"
              onClick={() =>
                setExpandedIndex(expandedIndex === index ? null : index)
              }
              aria-expanded={expandedIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              {item.question}
              <span data-slot="icon">
                {/* TODO: Plus/minus or chevron icon */}
                {expandedIndex === index ? "−" : "+"}
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              data-slot="answer"
              role="region"
              hidden={expandedIndex !== index}
            >
              {/* TODO: Support markdown rendering */}
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

FAQ.displayName = "FAQ";
