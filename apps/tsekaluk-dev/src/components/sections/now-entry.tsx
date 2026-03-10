import fs from "node:fs";
import path from "node:path";

interface NowData {
  date: string;
  building: string[];
  thinking: string[];
  shipped: string[];
  reading: string[];
}

const SECTIONS: {
  key: keyof Omit<NowData, "date">;
  label: string;
  previewOnly?: boolean;
}[] = [
  { key: "building", label: "Building", previewOnly: true },
  { key: "shipped", label: "Shipped", previewOnly: true },
  { key: "thinking", label: "Thinking" },
  { key: "reading", label: "Reading" },
];

function getLatestNowEntry(): NowData | null {
  const contentDir = path.join(process.cwd(), "content", "now");

  if (!fs.existsSync(contentDir)) {
    return null;
  }

  const files = fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .reverse();

  if (files.length === 0) {
    return null;
  }

  try {
    const raw = fs.readFileSync(path.join(contentDir, files[0]!), "utf-8");
    const parsed = JSON.parse(raw) as Record<string, unknown>;

    return {
      date: typeof parsed.date === "string" ? parsed.date : "",
      building: Array.isArray(parsed.building) ? parsed.building : [],
      thinking: Array.isArray(parsed.thinking) ? parsed.thinking : [],
      shipped: Array.isArray(parsed.shipped) ? parsed.shipped : [],
      reading: Array.isArray(parsed.reading) ? parsed.reading : [],
    };
  } catch {
    return null;
  }
}

function NowSection({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
        {label}
      </h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="border-l-2 border-[var(--color-accent)] pl-4 text-base leading-relaxed text-gray-700 dark:text-gray-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function NowEntry({ preview = false }: { preview?: boolean }) {
  const data = getLatestNowEntry();

  if (!data) {
    return <p className="text-gray-400 dark:text-gray-500">No updates yet.</p>;
  }

  const visibleSections = preview
    ? SECTIONS.filter((s) => s.previewOnly)
    : SECTIONS;

  return (
    <div className="space-y-10">
      <p className="text-sm font-mono text-gray-400 dark:text-gray-500">
        Last updated: {data.date}
      </p>

      {visibleSections.map((section) => {
        const items = data[section.key];
        if (!items || items.length === 0) return null;
        return (
          <NowSection key={section.key} label={section.label} items={items} />
        );
      })}
    </div>
  );
}
