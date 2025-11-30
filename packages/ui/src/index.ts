/**
 * @nebutra/ui
 *
 * Unified UI package built on Lobe UI + Lucide Icons + Nebutra design tokens
 *
 * @example
 * ```tsx
 * import { NebutraThemeProvider, tokens } from "@nebutra/ui";
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

// Theme exports
export {
  NebutraThemeProvider,
  tokens,
  colors,
  spacing,
  borderRadius,
  shadows,
  typography,
} from "./theme/index.js";

export type { NebutraThemeProviderProps, NebutraTokens } from "./theme/index.js";

// Re-export everything from subpaths for convenience
// (Users can also import directly from subpaths for smaller bundles)

// Components
export * from "./components/index.js";

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
} from "./icons/index.js";
