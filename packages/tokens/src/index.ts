export { ThemeProvider, useTheme } from "next-themes";
export type { ThemeProviderProps } from "next-themes";

export const THEME_IDS = ["light", "dark"] as const;
export type ThemeId = (typeof THEME_IDS)[number];

export const DEFAULT_THEME: ThemeId = "dark";
