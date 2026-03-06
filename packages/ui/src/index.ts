/**
 * @nebutra/ui
 *
 * Unified UI package built on Lobe UI + Lucide Icons + Nebutra design tokens.
 *
 * Token architecture:
 *   @nebutra/brand    → brand primitives (source data)
 *   @nebutra/tokens   → runtime CSS variables (@import styles.css)
 *   @nebutra/theme    → multi-theme presets (oklch, 6 variants)
 *   @nebutra/ui/theme → Lobe UI Ant Design bridge (internal)
 *
 * @example
 * ```tsx
 * import { NebutraThemeProvider } from "@nebutra/ui";
 * import { Button, ChatList } from "@nebutra/ui/components";
 * import { OpenAI, Settings } from "@nebutra/ui/icons";
 *
 * function App() {
 *   return (
 *     <NebutraThemeProvider>
 *       <Button>Click me</Button>
 *       <OpenAI size={24} />
 *     </NebutraThemeProvider>
 *   );
 * }
 * ```
 */

// Theme — Lobe UI integration
export { NebutraThemeProvider } from "./theme";
export type { NebutraThemeProviderProps, ThemeMode } from "./theme";

/**
 * @deprecated — Use CSS variables from `@nebutra/tokens/styles.css` instead.
 * These JS token objects are an internal Lobe UI bridge and will be removed in v1.0.
 */
export {
  tokens,
  colors,
  spacing,
  borderRadius,
  shadows,
  typography,
} from "./theme";
export type { NebutraTokens } from "./theme";

// Re-export everything from subpaths for convenience
// (Users can also import directly from subpaths for smaller bundles)

// Components
export * from "./components";

// Layout (migrated from @nebutra/design-system)
export * from "./layout";

// Icons (selective re-export to avoid bundle bloat)
export {
  // Most common AI icons
  OpenAI,
  Anthropic,
  Google,
  Claude,
  Gemini,
  // Most common UI icons
  Menu,
  X,
  Settings,
  Search,
  Plus,
  Check,
  Loader2,
  Sun,
  Moon,
  Bot,
  Sparkles,
} from "./icons";
