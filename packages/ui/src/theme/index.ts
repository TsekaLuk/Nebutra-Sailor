/**
 * @nebutra/ui/theme — Lobe UI theme integration
 *
 * Exports the NebutraThemeProvider (wraps Lobe UI with brand tokens).
 *
 * For runtime CSS tokens, import from @nebutra/tokens instead:
 *   import { ThemeProvider } from "@nebutra/tokens";
 *   @import "@nebutra/tokens/styles.css";
 */

export { NebutraThemeProvider } from "./provider";
export type { NebutraThemeProviderProps } from "./provider";

/**
 * @internal — Re-exported for backward compatibility only.
 * App code should NOT import these; use CSS variables from @nebutra/tokens instead.
 * @deprecated Use CSS variables from @nebutra/tokens/styles.css
 */
export {
  tokens,
  colors,
  spacing,
  borderRadius,
  shadows,
  typography,
} from "./tokens";
export type { NebutraTokens } from "./tokens";

/**
 * Theme mode type used by DesignSystemProvider / layout components.
 * Matches next-themes convention.
 */
export type ThemeMode = "light" | "dark" | "system";
