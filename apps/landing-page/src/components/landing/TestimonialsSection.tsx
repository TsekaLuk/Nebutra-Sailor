"use client";

import { motion } from "framer-motion";
import { testimonialsContent } from "@/lib/landing-content";

/**
 * TestimonialsSection - Single large quote, Vercel style
 *
 * Design: One prominent testimonial, centered, maximum whitespace
 */
export function TestimonialsSection() {
  // Pick the most impactful testimonial
  const featured = testimonialsContent.items[0];

  return (
    <section className="relative w-full bg-background py-32 md:py-40">
      {/* Subtle top border */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="text-2xl font-medium text-foreground leading-relaxed md:text-3xl lg:text-4xl">
            &ldquo;{featured.quote}&rdquo;
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="mt-10"
        >
          <p className="text-base font-medium text-foreground">
            {featured.author}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            {featured.role}, {featured.company}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

TestimonialsSection.displayName = "TestimonialsSection";
