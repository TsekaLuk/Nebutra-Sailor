"use client";

import { motion } from "framer-motion";
import { splitNarrativeContent } from "@/lib/landing-content";
import { Terminal, Heading, Text, Flex } from "@nebutra/custom-ui";

/**
 * SplitNarrative - Problem/Solution split section with terminal demo
 * Refactored to use Terminal compound component from @nebutra/custom-ui
 *
 * @see DESIGN.md Section 3 & Section 10
 */
export function SplitNarrative() {
  const { terminal, headline, subheadline, features, taglines } =
    splitNarrativeContent;

  return (
    <section className="relative w-full bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Terminal - using Terminal compound component */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <Terminal variant="glass" className="shadow-2xl border-border/10">
              <Terminal.Header title="terminal" />
              <Terminal.Body>
                {/* Command line */}
                <Terminal.Line prompt="$" highlight>
                  {terminal.command}
                </Terminal.Line>

                {/* Output lines with staggered animation */}
                {terminal.lines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.2 }}
                  >
                    <Terminal.Line output>{line}</Terminal.Line>
                  </motion.div>
                ))}

                {/* Blinking cursor */}
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 }}
                  className="mt-4 inline-block h-4 w-2 animate-pulse bg-[var(--brand-accent)]"
                />
              </Terminal.Body>
            </Terminal>
          </motion.div>

          {/* Right: Content - using Heading and Text primitives */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <Heading level={2} className="text-3xl md:text-4xl lg:text-5xl">
              {headline}
            </Heading>
            <Text
              color="muted"
              className="mt-2 text-2xl font-light md:text-3xl"
            >
              {subheadline}
            </Text>

            {/* Feature Pills */}
            <Flex wrap gap={3} className="mt-8">
              {features.map((feature, index) => (
                <motion.span
                  key={feature}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="rounded-full border border-border/10 bg-foreground/5 px-4 py-2 text-sm text-foreground/80"
                >
                  {feature}
                </motion.span>
              ))}
            </Flex>

            {/* Taglines */}
            <div className="mt-8 space-y-1">
              {taglines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-lg font-medium text-[var(--brand-accent)]"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

SplitNarrative.displayName = "SplitNarrative";
