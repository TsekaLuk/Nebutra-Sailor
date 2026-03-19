"use client";

import { motion } from "framer-motion";

interface NowData {
  date: string;
  building: string[];
  thinking: string[];
  shipped: string[];
  reading: string[];
}

interface SectionDef {
  key: keyof Omit<NowData, "date">;
  label: string;
  previewOnly?: boolean;
}

function NowSection({
  label,
  items,
  indexOffset,
}: {
  label: string;
  sectionKey: string;
  items: string[];
  indexOffset: number;
}) {
  return (
    <div className="mb-16 md:mb-24 relative">
      <h2 className="mb-8 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 sticky top-24 z-10 bg-background/80 backdrop-blur-md py-4">
        {label}
      </h2>
      <ul className="group relative border-t border-gray-200 dark:border-gray-800">
        {items.map((item, i) => {
          const globalIndex = indexOffset + i;
          return (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{
                type: "spring",
                stiffness: 70,
                damping: 20,
                delay: i * 0.05,
              }}
              className="group/item flex flex-col md:flex-row gap-4 border-b border-gray-200 dark:border-gray-800 py-6 md:py-8 transition-colors duration-500 hover:bg-gray-50/50 dark:hover:bg-gray-900/50"
            >
              <div className="md:w-24 shrink-0 pt-1">
                <span className="font-mono text-sm text-gray-300 dark:text-gray-600 transition-colors duration-300 group-hover/item:text-foreground">
                  {(globalIndex + 1).toString().padStart(2, "0")}
                </span>
              </div>
              <div className="flex-1">
                <p className="text-xl md:text-2xl font-medium tracking-tight leading-snug text-gray-700 dark:text-gray-300 transition-all duration-300 transform origin-left group-hover/item:text-foreground group-hover/item:scale-[1.01]">
                  {item}
                </p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}

export function NowEntryView({
  data,
  preview,
  sections,
  lastUpdatedLabel,
}: {
  data: NowData;
  preview: boolean;
  sections: SectionDef[];
  lastUpdatedLabel?: string;
}) {
  const visibleSections = preview ? sections.filter((s) => s.previewOnly) : sections;

  let globalIndex = 0;

  return (
    <div className="relative">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-12 font-mono text-xs tracking-widest text-gray-400 dark:text-gray-500 uppercase"
      >
        {lastUpdatedLabel ?? "Last updated:"} <span className="text-foreground">{data.date}</span>
      </motion.p>

      <div className="relative">
        {visibleSections.map((section) => {
          const items = data[section.key];
          if (!items || items.length === 0) return null;
          const offset = globalIndex;
          globalIndex += items.length;
          return (
            <NowSection
              key={section.key}
              label={section.label}
              sectionKey={section.key}
              items={items}
              indexOffset={offset}
            />
          );
        })}
      </div>
    </div>
  );
}
