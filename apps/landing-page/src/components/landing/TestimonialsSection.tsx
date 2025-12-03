"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { testimonialsContent } from "@/lib/landing-content";

/**
 * TestimonialsSection - Dark section with quote and grid lines
 *
 * Vercel-style: Dark background, large quote, author info with company logo
 */
export function TestimonialsSection() {
  const featured = testimonialsContent.items[0];

  return (
    <section className="relative w-full bg-background">
      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex justify-center">
          <div className="flex w-full max-w-7xl">
            <div className="flex-1 border-x border-border/30" />
            <div className="flex-1 border-r border-border/30" />
            <div className="hidden md:block flex-1 border-r border-border/30" />
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid md:grid-cols-3">
          {/* Empty left column for grid alignment */}
          <div className="hidden md:block" />

          {/* Quote content - spans 2 columns */}
          <div className="md:col-span-2 px-6 py-16 md:py-24">
            {/* Quote mark */}
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl text-muted-foreground/30"
            >
              &ldquo;
            </motion.span>

            {/* Quote text */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-4"
            >
              <p className="text-lg text-foreground leading-relaxed md:text-xl">
                {featured.quote}
              </p>
            </motion.blockquote>

            {/* Author info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="mt-8 flex items-center justify-between"
            >
              <div>
                <p className="font-medium text-foreground">
                  {featured.author},{" "}
                  <span className="text-muted-foreground">{featured.role}</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-muted">
                    <span className="text-[10px] font-bold">
                      {featured.company.charAt(0)}
                    </span>
                  </span>
                  {featured.company}
                </p>
              </div>

              {/* Arrow button */}
              <button className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-border transition-colors hover:border-foreground hover:bg-foreground hover:text-background">
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-border/50" />
    </section>
  );
}

TestimonialsSection.displayName = "TestimonialsSection";
