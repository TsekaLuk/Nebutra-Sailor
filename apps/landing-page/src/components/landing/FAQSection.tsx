"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqContent } from "@/lib/landing-content";
import { cn } from "@/lib/utils";

/**
 * FAQSection - Frequently asked questions
 *
 * @see DESIGN.md Section 11
 */
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { items } = faqContent;

  return (
    <section className="relative w-full bg-gradient-to-b from-black to-zinc-950 py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.05 * index }}
              className="overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-medium text-white">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 text-white/50 transition-transform",
                    openIndex === index && "rotate-180",
                  )}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="border-t border-white/10 px-6 py-4 text-sm text-white/60">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

FAQSection.displayName = "FAQSection";
