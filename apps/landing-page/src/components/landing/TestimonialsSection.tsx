"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonialsContent } from "@/lib/landing-content";
import { ThemedSection, useScrollDwell, DwellHint } from "@nebutra/custom-ui";
import { useRef, useCallback, useState } from "react";

/**
 * 3D card hover effect for depth gallery per DESIGN.md Section 11.5
 */
function Testimonial3DCard({
  testimonial,
  index,
}: {
  testimonial: (typeof testimonialsContent.items)[number];
  index: number;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Limit rotation to ±8 degrees for subtle effect
    setRotateY(((x - centerX) / centerX) * 8);
    setRotateX(-((y - centerY) / centerY) * 8);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: 0.1 * index }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
        transition: "transform 0.1s ease-out",
      }}
      className="group relative overflow-hidden rounded-2xl border border-border/10 bg-card/50 p-6 transition-all hover:border-border/20 hover:shadow-xl"
    >
      {/* Depth shadow layer */}
      <div
        className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 blur-xl transition-opacity group-hover:opacity-100"
        style={{ transform: "translateZ(-20px)" }}
        aria-hidden="true"
      />

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
          <p className="font-medium text-foreground">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground/80">
            {testimonial.role} @ {testimonial.company}
          </p>
        </div>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-primary)]/5 to-[var(--brand-accent)]/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.div>
  );
}

/**
 * TestimonialsSection - Social proof with 3D perspective cards
 *
 * @see DESIGN.md Section 8 & Section 11.5 "Depth Gallery"
 */
export function TestimonialsSection() {
  const { headline, items } = testimonialsContent;
  const sectionRef = useRef<HTMLElement>(null);

  // Dwell hint state
  const handleDwell = useCallback(() => {}, []);
  const { isDwelling } = useScrollDwell(sectionRef, {
    threshold: 1200,
    cooldown: 8000,
    onDwell: handleDwell,
  });

  return (
    <ThemedSection
      ref={sectionRef}
      theme="testimonials"
      className="py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Dwell Hint */}
        <DwellHint
          show={isDwelling}
          message="Real teams. Real results."
          position="bottom"
        />
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

        {/* Testimonials Grid with 3D cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {items.map((testimonial, index) => (
            <Testimonial3DCard
              key={testimonial.author}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </ThemedSection>
  );
}

TestimonialsSection.displayName = "TestimonialsSection";
