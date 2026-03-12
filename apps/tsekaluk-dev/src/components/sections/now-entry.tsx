import fs from "node:fs";
import path from "node:path";
import { getTranslations } from "next-intl/server";
import { NowEntryView } from "./now-entry-view";

interface NowData {
  date: string;
  building: string[];
  thinking: string[];
  shipped: string[];
  reading: string[];
}

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

export async function NowEntry({ preview = false }: { preview?: boolean }) {
  const t = await getTranslations("now");
  const data = getLatestNowEntry();

  const sections: {
    key: keyof Omit<NowData, "date">;
    label: string;
    previewOnly?: boolean;
  }[] = [
    { key: "building", label: t("sections.building"), previewOnly: true },
    { key: "shipped", label: t("sections.shipped"), previewOnly: true },
    { key: "thinking", label: t("sections.thinking") },
    { key: "reading", label: t("sections.reading") },
  ];

  if (!data) {
    return <p className="text-gray-400 dark:text-gray-500">{t("no_updates")}</p>;
  }

  return <NowEntryView data={data} preview={preview} sections={sections} lastUpdatedLabel={t("last_updated")} />;
}
