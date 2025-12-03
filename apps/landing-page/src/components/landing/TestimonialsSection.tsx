"use client";

import { GridTestimonials } from "@nebutra/custom-ui/marketing";
import type { TestimonialItem } from "@nebutra/custom-ui/marketing";
import { testimonialsContent } from "@/lib/landing-content";

/**
 * Transform landing-content testimonials to GridTestimonials format
 */
const testimonialItems: TestimonialItem[] = testimonialsContent.items.map(
  (item) => ({
    author: item.author,
    title: item.role,
    company: item.company,
    quote: item.quote,
    avatarUrl: `https://i.pravatar.cc/150?u=${item.author.replace(/ /g, "")}`,
  }),
);

/**
 * TestimonialsSection - Clean grid layout testimonials
 *
 * Uses GridTestimonials from @nebutra/custom-ui for:
 * - Responsive 3-column grid
 * - Dashed border cards with grid pattern overlay
 * - Staggered fade-in animation
 */
export function TestimonialsSection() {
  return (
    <section className="relative w-full bg-background">
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <GridTestimonials
        items={testimonialItems}
        title={testimonialsContent.headline}
        description="See how teams are building faster with Nebutra Sailor."
        showHeader={true}
        className="py-24"
      />
    </section>
  );
}

TestimonialsSection.displayName = "TestimonialsSection";
