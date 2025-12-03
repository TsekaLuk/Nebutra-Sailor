"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonialsContent } from "@/lib/landing-content";

/**
 * TestimonialsSection - Social proof with user quotes
 *
 * @see DESIGN.md Section 8
 */
export function TestimonialsSection() {
  const { headline, items } = testimonialsContent;

  return (
    <section className="relative w-full bg-gradient-to-b from-background via-card to-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {headline}
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * index }}
              className="group relative overflow-hidden rounded-2xl border border-border/10 bg-card/50 p-6 transition-all hover:border-border/20"
            >
              {/* Quote Icon */}
              <Quote className="absolute right-4 top-4 h-8 w-8 text-foreground/5" />

              {/* Quote */}
              <p className="relative z-10 mb-6 text-lg text-foreground/80">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-primary)]/20 to-[var(--brand-accent)]/20">
                  <span className="text-sm font-medium text-foreground">
                    {testimonial.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-accent)]/5 opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

TestimonialsSection.displayName = "TestimonialsSection";
