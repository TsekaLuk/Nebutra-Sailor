"use client";

// ── Geist icons (tech logos) ─────────────────────────────────────────────────
import {
  AcronymApi,
  AcronymJs,
  AcronymMarkdown,
  AcronymTs,
  Agent,
  Agents,
  Analytics,
  BarChart,
  Brain,
  BrowserChrome,
  ChartActivity,
  ChartBarMiddle,
  ChartBarPeak,
  ChartBarRandom,
  ChartPie,
  ChartTrendingUp,
  Cloud,
  Code,
  CodeBlock,
  CodeBracket,
  Database,
  DataCache,
  DataPoint,
  Email,
  FunctionPython,
  Globe,
  Layers,
  LineChart,
  LogoAzure,
  LogoBun,
  LogoCloudflare,
  LogoFigma,
  LogoGoogle,
  LogoMeta,
  LogoNext,
  LogoNode,
  LogoPython,
  LogoPythonMonochrome,
  LogoReact,
  LogoRust,
  LogoSanity,
  LogoSlack,
} from "@nebutra/icons";
// ── Lobe icons (AI providers & dev tools) ────────────────────────────────────
import {
  Anthropic,
  Bilibili,
  Claude,
  ClaudeCode,
  DeepSeek,
  Flux,
  Gemini,
  Grok,
  HuggingFace,
  LangChain,
  LangGraph,
  Cursor as LobeCursor,
  Github as LobeGithub,
  Vercel as LobeVercel,
  MCP,
  Midjourney,
  Mistral,
  N8n,
  Ollama,
  OpenAI,
  OpenClaw,
  Qwen,
  Railway,
  SiliconCloud,
  Smithery,
} from "@nebutra/ui/icons";
import { cn } from "@nebutra/ui/utils";
import type { ReactNode } from "react";

// ── Icon registry ─────────────────────────────────────────────────────────────
// Keys are normalized tech names (lowercase, no version numbers).
// Values are render functions that return the icon node.
type RenderIcon = (size: number, colorful: boolean) => ReactNode;

const ICON_REGISTRY: Record<string, RenderIcon> = {
  // ── Python & data science ──────────────────────────────────────────────────
  python: (s, c) =>
    c ? <LogoPython width={s} height={s} /> : <LogoPythonMonochrome width={s} height={s} />,
  "function python": (s) => <FunctionPython width={s} height={s} />,
  pandas: (s) => <LogoPython width={s} height={s} />,
  numpy: (s) => <LogoPython width={s} height={s} />,
  asyncio: (s) => <FunctionPython width={s} height={s} />,
  "async/await": (s) => <FunctionPython width={s} height={s} />,
  async: (s) => <FunctionPython width={s} height={s} />,
  "async pipeline": (s) => <FunctionPython width={s} height={s} />,

  // ── JavaScript / TypeScript ────────────────────────────────────────────────
  typescript: (s) => <AcronymTs width={s} height={s} />,
  javascript: (s) => <AcronymJs width={s} height={s} />,
  "vscode api": (s) => <CodeBracket width={s} height={s} />,
  "vscode extension": (s) => <CodeBracket width={s} height={s} />,
  "developer tool": (s) => <Code width={s} height={s} />,

  // ── Frontend frameworks ────────────────────────────────────────────────────
  react: (s) => <LogoReact width={s} height={s} />,
  "next.js": (s) => <LogoNext width={s} height={s} />,
  nextjs: (s) => <LogoNext width={s} height={s} />,
  "next.js 16": (s) => <LogoNext width={s} height={s} />,

  // ── Backend & runtime ──────────────────────────────────────────────────────
  node: (s) => <LogoNode width={s} height={s} />,
  nodejs: (s) => <LogoNode width={s} height={s} />,
  bun: (s) => <LogoBun width={s} height={s} />,
  rust: (s) => <LogoRust width={s} height={s} />,

  // ── Infra & deployment ─────────────────────────────────────────────────────
  vercel: (s) => <LobeVercel size={s} />,
  github: (s) => <LobeGithub size={s} />,
  "open source": (s) => <LobeGithub size={s} />,
  railway: (s) => <Railway size={s} />,
  docker: (s) => <Cloud width={s} height={s} />,
  azure: (s) => <LogoAzure width={s} height={s} />,
  cloudflare: (s) => <LogoCloudflare width={s} height={s} />,

  // ── Database & storage ─────────────────────────────────────────────────────
  postgresql: (s) => <Database width={s} height={s} />,
  postgres: (s) => <Database width={s} height={s} />,
  prisma: (s) => <Database width={s} height={s} />,
  supabase: (s) => <Database width={s} height={s} />,
  redis: (s) => <DataCache width={s} height={s} />,
  "upstash qstash": (s) => <DataCache width={s} height={s} />,
  "upstash redis": (s) => <DataCache width={s} height={s} />,
  upstash: (s) => <DataCache width={s} height={s} />,

  // ── AI Providers (Lobe) ────────────────────────────────────────────────────
  anthropic: (s) => <Anthropic size={s} />,
  claude: (s, c) => (c ? <Claude.Color size={s} /> : <Claude size={s} />),
  "claude code": (s, c) => (c ? <ClaudeCode.Color size={s} /> : <ClaudeCode size={s} />),
  gemini: (s, c) => (c ? <Gemini.Color size={s} /> : <Gemini size={s} />),
  "gemini 2.5": (s, c) => (c ? <Gemini.Color size={s} /> : <Gemini size={s} />),
  "gemini 2.5 flash": (s, c) => (c ? <Gemini.Color size={s} /> : <Gemini size={s} />),
  openai: (s) => <OpenAI size={s} />,
  "openai gpt": (s) => <OpenAI size={s} />,
  deepseek: (s, c) => (c ? <DeepSeek.Color size={s} /> : <DeepSeek size={s} />),
  "deepseek llm": (s, c) => (c ? <DeepSeek.Color size={s} /> : <DeepSeek size={s} />),
  qwen: (s, c) => (c ? <Qwen.Color size={s} /> : <Qwen size={s} />),
  "qwen vl": (s, c) => (c ? <Qwen.Color size={s} /> : <Qwen size={s} />),
  "qwen-vl": (s, c) => (c ? <Qwen.Color size={s} /> : <Qwen size={s} />),
  qwen3: (s, c) => (c ? <Qwen.Color size={s} /> : <Qwen size={s} />),
  "qwen3:1.7b": (s, c) => (c ? <Qwen.Color size={s} /> : <Qwen size={s} />),
  ollama: (s) => <Ollama size={s} />,
  mistral: (s, c) => (c ? <Mistral.Color size={s} /> : <Mistral size={s} />),
  grok: (s) => <Grok size={s} />,
  meta: (s) => <LogoMeta width={s} height={s} />,
  huggingface: (s, c) => (c ? <HuggingFace.Color size={s} /> : <HuggingFace size={s} />),
  flux: (s) => <Flux size={s} />,
  midjourney: (s) => <Midjourney size={s} />,
  siliconcloud: (s, c) => (c ? <SiliconCloud.Color size={s} /> : <SiliconCloud size={s} />),
  siliconflow: (s, c) => (c ? <SiliconCloud.Color size={s} /> : <SiliconCloud size={s} />),
  "siliconflow api": (s, c) => (c ? <SiliconCloud.Color size={s} /> : <SiliconCloud size={s} />),

  // ── Dev tools (Lobe) ──────────────────────────────────────────────────────
  cursor: (s) => <LobeCursor size={s} />,
  "cursor ide": (s) => <LobeCursor size={s} />,
  smithery: (s, c) => (c ? <Smithery.Color size={s} /> : <Smithery size={s} />),
  mcp: (s) => <MCP size={s} />,
  openclaw: (s, c) => (c ? <OpenClaw.Color size={s} /> : <OpenClaw size={s} />),
  langchain: (s, c) => (c ? <LangChain.Color size={s} /> : <LangChain size={s} />),
  langgraph: (s, c) => (c ? <LangGraph.Color size={s} /> : <LangGraph size={s} />),
  n8n: (s, c) => (c ? <N8n.Color size={s} /> : <N8n size={s} />),
  bilibili: (s, c) => (c ? <Bilibili.Color size={s} /> : <Bilibili size={s} />),

  // ── Data & analytics (Geist) ──────────────────────────────────────────────
  analytics: (s) => <Analytics width={s} height={s} />,
  "bar chart": (s) => <BarChart width={s} height={s} />,
  "line chart": (s) => <LineChart width={s} height={s} />,
  "chart activity": (s) => <ChartActivity width={s} height={s} />,
  sem: (s) => <ChartTrendingUp width={s} height={s} />,
  "nsga-iii": (s) => <ChartBarPeak width={s} height={s} />,
  "system dynamics": (s) => <ChartActivity width={s} height={s} />,
  lightgbm: (s) => <ChartBarMiddle width={s} height={s} />,
  pso: (s) => <ChartBarRandom width={s} height={s} />,
  "arimax-garch": (s) => <ChartTrendingUp width={s} height={s} />,
  prophet: (s) => <ChartTrendingUp width={s} height={s} />,
  lasso: (s) => <ChartBarMiddle width={s} height={s} />,
  "data quality": (s) => <DataPoint width={s} height={s} />,
  "3d evaluation": (s) => <Layers width={s} height={s} />,
  "3dgs": (s) => <Layers width={s} height={s} />,
  "quality assurance": (s) => <DataPoint width={s} height={s} />,

  // ── Infra & comms (Geist) ─────────────────────────────────────────────────
  pusher: (s) => <Email width={s} height={s} />,
  turborepo: (s) => <LogoNext width={s} height={s} />,
  "enterprise saas": (s) => <Analytics width={s} height={s} />,
  enterprise: (s) => <Analytics width={s} height={s} />,
  "multi-modal": (s) => <Brain width={s} height={s} />,
  "video ai": (s) => <Agent width={s} height={s} />,
  "agent protocol": (s) => <Agents width={s} height={s} />,
  llm: (s) => <Brain width={s} height={s} />,
  vlm: (s) => <Brain width={s} height={s} />,
  "context engineering": (s) => <Brain width={s} height={s} />,
  "code audit": (s) => <CodeBlock width={s} height={s} />,
  automation: (s) => <Agent width={s} height={s} />,
  playwright: (s) => <BrowserChrome width={s} height={s} />,
  "anti-bot": (s) => <BrowserChrome width={s} height={s} />,
  "local llm": (s) => <Ollama size={s} />,

  nlp: (s) => <Brain width={s} height={s} />,
  pdf: (s) => <AcronymMarkdown width={s} height={s} />,
  markdown: (s) => <AcronymMarkdown width={s} height={s} />,
  "rest api": (s) => <AcronymApi width={s} height={s} />,
  graphql: (s) => <AcronymApi width={s} height={s} />,
  websocket: (s) => <AcronymApi width={s} height={s} />,
  web: (s) => <Globe width={s} height={s} />,
  iot: (s) => <Globe width={s} height={s} />,
  "data viz": (s) => <ChartPie width={s} height={s} />,
  figma: (s) => <LogoFigma width={s} height={s} />,
  google: (s) => <LogoGoogle width={s} height={s} />,
  slack: (s) => <LogoSlack width={s} height={s} />,
  sanity: (s) => <LogoSanity width={s} height={s} />,
};

/** Normalize a tech name to a registry lookup key */
function normalize(tech: string): string {
  return tech
    .toLowerCase()
    .replace(/\s*v?\d+(\.\d+)*(\.\d+)*/g, "") // strip version numbers
    .replace(/\s+/g, " ")
    .trim();
}

/** Look up the icon renderer for a tech string */
function getRenderer(tech: string): RenderIcon | null {
  const key = normalize(tech);
  if (ICON_REGISTRY[key]) return ICON_REGISTRY[key];
  // Try prefix match (e.g. "Python 3.11+" → "python")
  for (const [k, v] of Object.entries(ICON_REGISTRY)) {
    if (key.startsWith(k) || k.startsWith(key)) return v;
  }
  return null;
}

// ── Component ─────────────────────────────────────────────────────────────────

interface TechBadgeProps {
  /** Technology name — matched against icon registry */
  tech: string;
  /** "tag" = small inline pill (tags strip), "card" = larger grid card */
  variant?: "tag" | "card";
  /** Show colored version of icons that support it */
  colorful?: boolean;
  className?: string;
}

export function TechBadge({ tech, variant = "tag", colorful = false, className }: TechBadgeProps) {
  const renderer = getRenderer(tech);
  const isCard = variant === "card";
  const iconSize = isCard ? 28 : 14;

  if (isCard) {
    return (
      <div
        className={cn(
          "flex flex-col items-center gap-2 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900/50 px-3 py-4 text-center transition-colors hover:border-gray-200 dark:hover:border-gray-700",
          className,
        )}
      >
        {renderer ? (
          <span className="flex h-8 w-8 items-center justify-center text-gray-700 dark:text-gray-300">
            {renderer(iconSize, colorful)}
          </span>
        ) : (
          <Code className="h-5 w-5 text-gray-400" />
        )}
        <span className="text-[11px] font-medium leading-tight text-gray-600 dark:text-gray-400 max-w-[72px] break-words">
          {tech}
        </span>
      </div>
    );
  }

  // tag variant
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-gray-100 dark:border-gray-800 bg-gray-50/70 dark:bg-gray-800/70 px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400",
        className,
      )}
    >
      {renderer && (
        <span className="flex items-center text-gray-500 dark:text-gray-400 shrink-0">
          {renderer(iconSize, colorful)}
        </span>
      )}
      {tech}
    </span>
  );
}
