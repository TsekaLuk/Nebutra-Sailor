"use client";

import { AnimateIn } from "@nebutra/ui/components";

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
  items: string[];
  indexOffset: number;
}) {
  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
        {label}
      </h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <AnimateIn
            key={item}
            preset="fadeUp"
            delay={(indexOffset + i) * 0.08}
            inView
          >
            <li className="border-l-2 border-[var(--color-accent)] pl-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
              {item}
            </li>
          </AnimateIn>
        ))}
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
  const visibleSections = preview
    ? sections.filter((s) => s.previewOnly)
    : sections;

  let globalIndex = 0;

  return (
    <div className="space-y-10">
      <p className="text-sm font-mono text-gray-400 dark:text-gray-500">
        {lastUpdatedLabel ?? "Last updated:"} {data.date}
      </p>

      {visibleSections.map((section) => {
        const items = data[section.key];
        if (!items || items.length === 0) return null;
        const offset = globalIndex;
        globalIndex += items.length;
        return (
          <NowSection
            key={section.key}
            label={section.label}
            items={items}
            indexOffset={offset}
          />
        );
      })}
    </div>
  );
}
