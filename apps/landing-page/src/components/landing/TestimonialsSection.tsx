"use client";

import { motion } from "framer-motion";
import { StaggerTestimonials } from "@nebutra/custom-ui/marketing";
import type { StaggerTestimonialItem } from "@nebutra/custom-ui/marketing";
import { testimonialsContent } from "@/lib/landing-content";

/**
 * Transform landing-content testimonials to StaggerTestimonials format
 */
const testimonialItems: StaggerTestimonialItem[] =
  testimonialsContent.items.map((item, index) => ({
    tempId: index,
    testimonial: item.quote,
    by: `${item.author}, ${item.role} at ${item.company}`,
    imgSrc: `https://i.pravatar.cc/150?u=${item.author.replace(/ /g, "")}-${index}`,
  }));

/**
 * TestimonialsSection - Interactive staggered testimonials carousel
 *
 * Uses StaggerTestimonials from @nebutra/custom-ui for:
 * - Staggered card layout with depth
 * - Click-to-navigate interaction
 * - Smooth card transitions
 */
export function TestimonialsSection() {
  return (
    <section className="relative w-full bg-background">
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      {/* Section header */}
      <div className="mx-auto max-w-4xl px-6 pt-24 pb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl font-bold text-foreground md:text-4xl"
        >
          {testimonialsContent.headline}
        </motion.h2>
      </div>

      {/* Staggered testimonials carousel */}
      <StaggerTestimonials
        items={testimonialItems}
        height={550}
        className="bg-transparent"
      />
    </section>
  );
}

TestimonialsSection.displayName = "TestimonialsSection";
