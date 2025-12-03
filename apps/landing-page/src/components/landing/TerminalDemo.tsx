"use client";

import { motion } from "framer-motion";
import { Copy, Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { terminalDemoContent } from "@/lib/landing-content";
import { cn } from "@/lib/utils";
import { ThemedSection } from "@nebutra/custom-ui";

/**
 * TerminalDemo - Interactive terminal experience
 *
 * @see DESIGN.md Section 7
 */
export function TerminalDemo() {
  const [copied, setCopied] = useState(false);
  const { headline, command, steps, ctaPrimary, ctaSecondary } =
    terminalDemoContent;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ThemedSection theme="terminal" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">
            {headline}
          </h2>
        </motion.div>

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="overflow-hidden rounded-xl border border-border/10 bg-card/90 shadow-2xl"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between border-b border-border/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <span className="font-mono text-xs text-muted-foreground/60">
              zsh
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-6">
            {/* Command Line */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-[var(--brand-accent)]">$</span>
              <code className="flex-1 font-mono text-foreground">
                {command}
              </code>
              <button
                onClick={handleCopy}
                className="rounded-md p-2 text-muted-foreground/80 transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-[var(--brand-accent)]" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Output Steps */}
            <div className="mt-6 space-y-3">
              {steps.map((step, index) => (
                <motion.div
                  key={step.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  className="flex items-center gap-3 font-mono text-sm"
                >
                  {step.status === "done" ? (
                    <Check className="h-4 w-4 text-[var(--brand-accent)]" />
                  ) : (
                    <Loader2 className="h-4 w-4 animate-spin text-[var(--brand-primary)]" />
                  )}
                  <span
                    className={cn(
                      step.status === "done"
                        ? "text-muted-foreground"
                        : "text-foreground",
                    )}
                  >
                    {step.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-lg bg-foreground/10 px-6 py-3 font-medium text-foreground transition-all hover:bg-foreground/20"
          >
            <Copy className="h-4 w-4" />
            {ctaPrimary}
          </button>
          <a
            href="https://github.com/TsekaLuk/Nebutra-Sailor"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            {ctaSecondary}
          </a>
        </motion.div>
      </div>
    </ThemedSection>
  );
}

TerminalDemo.displayName = "TerminalDemo";
