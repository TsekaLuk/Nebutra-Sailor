"use client";

import { motion } from "framer-motion";
import { visionContent } from "@/lib/landing-content";
import { ThemedSection, useScrollDwell, DwellHint } from "@nebutra/custom-ui";
import { useRef, useCallback, useEffect, useState } from "react";
import { useInView } from "framer-motion";

/**
 * WeightShiftText - Text that morphs font weight on scroll/view
 * Per DESIGN.md Section 11.5 "Contemplation Space"
 */
function WeightShiftText({ children }: { children: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });
  const [weight, setWeight] = useState(300);

  useEffect(() => {
    if (!isInView) return;

    // Animate weight: light → bold → light cycle
    let frame = 0;
    const interval = setInterval(() => {
      frame++;
      // Sine wave between 300-700 over 6 seconds
      const w = 500 + Math.sin(frame * 0.05) * 200;
      setWeight(Math.round(w));
    }, 50);

    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <span
      ref={ref}
      className="inline-block transition-all"
      style={{
        fontVariationSettings: `"wght" ${weight}`,
        fontWeight: weight,
      }}
    >
      {children}
    </span>
  );
}

/**
 * VisionSection - Company vision with contemplation space design
 *
 * @see DESIGN.md Section 9 & Section 11.5 "Contemplation Space"
 */
export function VisionSection() {
  const {
    companyName,
    headline,
    headlineHighlight,
    description,
    philosophyCards,
    visionLabel,
    visionStatement,
    closingLines,
    cta,
    ctaHref,
  } = visionContent;

  const sectionRef = useRef<HTMLElement>(null);

  // Dwell hint state
  const handleDwell = useCallback(() => {}, []);
  const { isDwelling } = useScrollDwell(sectionRef, {
    threshold: 1500,
    cooldown: 8000,
    onDwell: handleDwell,
  });

  return (
    <ThemedSection ref={sectionRef} theme="vision" className="py-24 md:py-32">
      {/* Dwell Hint */}
      <DwellHint
        show={isDwelling}
        message="Small teams. Big leverage."
        position="bottom"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Company Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-accent)]/20 bg-[var(--brand-accent)]/5 px-4 py-2 text-sm font-medium text-[var(--brand-accent)]">
            Why we built this
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="mb-6 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {headline}
            <br />
            <span className="bg-[image:var(--brand-gradient)] bg-clip-text text-transparent">
              {headlineHighlight}
            </span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="mx-auto mb-12 max-w-2xl text-center text-lg text-muted-foreground"
        >
          {description}
        </motion.p>

        {/* Philosophy Cards */}
        <div className="mb-12 grid gap-4 md:grid-cols-2">
          {philosophyCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="rounded-xl border border-border/10 bg-card/50 p-6 text-center"
            >
              <p className="text-sm italic text-foreground/70">
                &ldquo;{card.quote}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement with weight-shift effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground/60">
            {visionLabel}
          </p>
          <p className="font-mono text-lg text-[var(--brand-accent)] md:text-xl">
            <WeightShiftText>{visionStatement}</WeightShiftText>
          </p>
        </motion.div>

        {/* Closing Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.7 }}
          className="mb-8 text-center"
        >
          {closingLines.map((line, index) => (
            <p
              key={index}
              className={
                line ? "text-lg text-muted-foreground" : "h-4" // Empty line spacer
              }
            >
              {line}
            </p>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <a
            href={ctaHref}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {cta}
          </a>
        </motion.div>
      </div>
    </ThemedSection>
  );
}

VisionSection.displayName = "VisionSection";
