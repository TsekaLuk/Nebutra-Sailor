import type { PresetDefinition } from "../config";
import { PresetId } from "../config";
import { aiSaas } from "./ai-saas";
import { marketing } from "./marketing";
import { dashboard } from "./dashboard";
import { overseas } from "./overseas";
import { growth } from "./growth";
import { creative } from "./creative";
import { blogPortfolio } from "./blog-portfolio";
import { community } from "./community";
import { onePerson } from "./one-person";
import { full } from "./full";

export const presets: Record<string, PresetDefinition> = {
  "ai-saas": aiSaas,
  marketing: marketing,
  dashboard: dashboard,
  overseas: overseas,
  growth: growth,
  creative: creative,
  "blog-portfolio": blogPortfolio,
  community: community,
  "one-person": onePerson,
  full: full,
};

export function getPreset(id: string): PresetDefinition {
  const parsed = PresetId.parse(id);
  const preset = presets[parsed];
  if (!preset) {
    throw new Error(`Unknown preset: ${id}`);
  }
  return preset;
}
