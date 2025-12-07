"use client";

import { motion } from "framer-motion";
import { Marquee3DTestimonials } from "@nebutra/custom-ui/marketing";
import type { TestimonialItem } from "@nebutra/custom-ui/marketing";
import { testimonialsContent } from "@/lib/landing-content";

/**
 * Transform landing-content testimonials to TestimonialItem format
 */
const testimonialItems: TestimonialItem[] = testimonialsContent.items.map(
  (item, index) => ({
    id: `testimonial-${index}`,
    author: item.author,
    title: item.role,
    company: item.company,
    quote: item.quote,
    avatarUrl: item.avatar,
  }),
);

/**
 * TestimonialsSection - 3D Marquee testimonials
 *
 * Uses Marquee3DTestimonials from @nebutra/custom-ui for:
 * - 3D perspective scrolling cards
 * - Multi-column vertical marquee
 * - Auto-pause on hover
 */
export function TestimonialsSection() {
  return (
    <section className="relative w-full bg-background py-16 sm:py-20 md:py-32">
      {/* Subtle borders */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground md:text-4xl">
            {testimonialsContent.headline}
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground">
            See how teams are building faster with Nebutra Sailor.
          </p>
        </motion.div>

        {/* 3D Marquee testimonials - responsive height */}
        <div className="flex justify-center">
          <Marquee3DTestimonials
            items={testimonialItems}
            height={320}
            className="mx-auto h-[280px] sm:h-[320px] md:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}

TestimonialsSection.displayName = "TestimonialsSection";
