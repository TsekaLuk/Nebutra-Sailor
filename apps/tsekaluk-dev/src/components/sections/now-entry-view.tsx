"use client";

import Image from "next/image";
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

const SECTION_IMAGES: Record<string, string[]> = {
  building: [
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=500",
  ],
  shipped: [
    "https://images.unsplash.com/photo-1555529733-0e670560f8e1?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500",
  ],
  thinking: [
    "https://images.unsplash.com/photo-1506506200949-df6c1593c6f4?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1513258496099-48166314a108?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=500",
  ],
  reading: [
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=500",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=500",
  ],
};

function NowSection({
  label,
  sectionKey,
  items,
  indexOffset,
}: {
  label: string;
  sectionKey: string;
  items: string[];
  indexOffset: number;
}) {
  const images = SECTION_IMAGES[sectionKey] || SECTION_IMAGES["thinking"];
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
            <li className="flex flex-col sm:flex-row gap-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm">
              <div className="relative h-40 w-full sm:h-24 sm:w-32 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src={images[i % images.length]!}
                  alt={label}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 128px"
                />
              </div>
              <div className="flex flex-1 items-center">
                <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
                  {item}
                </p>
              </div>
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
            sectionKey={section.key}
            items={items}
            indexOffset={offset}
          />
        );
      })}
    </div>
  );
}
