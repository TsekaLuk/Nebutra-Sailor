import type { ResolvedConfig } from "./config";

const APP_PACKAGE_MAP: Record<string, string> = {
  web: "@nebutra/web",
  "landing-page": "@nebutra/landing-page",
  blog: "@nebutra/blog",
  admin: "@nebutra/admin",
  "api-gateway": "@nebutra/api-gateway",
  studio: "@nebutra/studio",
  storybook: "@nebutra/storybook",
  "docs-hub": "@nebutra/docs-hub",
};

export function getFeatureEnvVars(config: ResolvedConfig): Record<string, string> {
  const vars: Record<string, string> = {};

  for (const [feature, enabled] of Object.entries(config.features)) {
    const envKey = `FEATURE_FLAG_${feature.toUpperCase().replace(/-/g, "_")}`;
    vars[envKey] = String(enabled);
  }

  vars.NEBUTRA_THEME = config.theme;
  vars.NEBUTRA_LOCALES = config.locales.join(",");
  vars.NEBUTRA_DEFAULT_LOCALE = config.defaultLocale;

  return vars;
}

export function getActiveApps(config: ResolvedConfig): string[] {
  return Object.entries(config.apps)
    .filter(([, enabled]) => enabled)
    .map(([app]) => app);
}

export function getActivePackages(config: ResolvedConfig): string[] {
  return getActiveApps(config).map((app) => APP_PACKAGE_MAP[app]!);
}
