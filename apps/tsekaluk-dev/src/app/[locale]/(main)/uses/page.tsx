"use client";

import { useTranslations } from "next-intl";
import { AnimateIn, AnimateInGroup } from "@nebutra/ui/components";
import { Terminal, FileCode2, Cpu, Box } from "lucide-react";
import Apple from "@lobehub/icons/es/Apple";
import ClaudeCode from "@lobehub/icons/es/ClaudeCode";
import Cursor from "@lobehub/icons/es/Cursor";
import Antigravity from "@lobehub/icons/es/Antigravity";
import Codex from "@lobehub/icons/es/Codex";
import Trae from "@lobehub/icons/es/Trae";
import Gemini from "@lobehub/icons/es/Gemini";
import Minimax from "@lobehub/icons/es/Minimax";
import Notion from "@lobehub/icons/es/Notion";
import Midjourney from "@lobehub/icons/es/Midjourney";
import Flowith from "@lobehub/icons/es/Flowith";
import CherryStudio from "@lobehub/icons/es/CherryStudio";
import Ollama from "@lobehub/icons/es/Ollama";
import Poe from "@lobehub/icons/es/Poe";
import Perplexity from "@lobehub/icons/es/Perplexity";
import Lovart from "@lobehub/icons/es/Lovart";
import Lovable from "@lobehub/icons/es/Lovable";
import NotebookLM from "@lobehub/icons/es/NotebookLM";
import N8n from "@lobehub/icons/es/N8n";
import Dify from "@lobehub/icons/es/Dify";
import LobeHub from "@lobehub/icons/es/LobeHub";

// ── Types ──────────────────────────────────────────────────────────────────
type ToolItem = {
  icon: React.ReactNode;
  name: string;
  desc: string;
  tag?: string;
};

type AITool = {
  icon: React.ReactNode;
  name: string;
  label: string;
};

// ── Data ───────────────────────────────────────────────────────────────────
const EDITORS: ToolItem[] = [
  {
    icon: <ClaudeCode.Avatar size={40} />,
    name: "Claude Code",
    desc: "Primary agentic coding environment. Handles architecture-level tasks.",
    tag: "daily driver",
  },
  {
    icon: <Cursor.Avatar size={40} />,
    name: "Cursor",
    desc: "AI-native editor for focused implementation sprints.",
    tag: "daily driver",
  },
  {
    icon: <Antigravity.Avatar size={40} />,
    name: "Antigravity",
    desc: "Next-gen AI coding experience — still exploring the edges.",
  },
  {
    icon: <Codex.Avatar size={40} />,
    name: "OpenAI Codex",
    desc: "Cloud-based coding agent for async task delegation.",
  },
  {
    icon: <Trae.Avatar size={40} />,
    name: "Trae",
    desc: "ByteDance's AI IDE — useful for certain China-market integrations.",
  },
  {
    icon: <FileCode2 className="h-10 w-10 text-gray-400" />,
    name: "Sublime Text",
    desc: "Still the fastest plain-text editor. Config files, quick edits.",
  },
];

const TERMINALS: ToolItem[] = [
  {
    icon: <Terminal className="h-10 w-10 text-gray-400" />,
    name: "Warp",
    desc: "AI-native terminal with command history and team sharing.",
    tag: "daily driver",
  },
  {
    icon: <Terminal className="h-10 w-10 text-gray-400" />,
    name: "Hyper",
    desc: "Electron-based. Highly customizable. Good for plugin-heavy setups.",
  },
];

const AI_TOOLS: AITool[] = [
  { icon: <ClaudeCode.Avatar size={44} />, name: "ClaudeCode", label: "Claude Code" },
  { icon: <Cursor.Avatar size={44} />, name: "Cursor", label: "Cursor" },
  { icon: <Gemini.Avatar size={44} />, name: "Gemini", label: "Gemini" },
  { icon: <Codex.Avatar size={44} />, name: "Codex", label: "Codex" },
  { icon: <Midjourney.Avatar size={44} />, name: "Midjourney", label: "Midjourney" },
  { icon: <Perplexity.Avatar size={44} />, name: "Perplexity", label: "Perplexity" },
  { icon: <NotebookLM.Avatar size={44} />, name: "NotebookLM", label: "NotebookLM" },
  { icon: <Notion.Avatar size={44} />, name: "Notion", label: "Notion AI" },
  { icon: <CherryStudio.Avatar size={44} />, name: "CherryStudio", label: "Cherry Studio" },
  { icon: <LobeHub.Avatar size={44} />, name: "LobeHub", label: "LobeChat" },
  { icon: <Ollama.Avatar size={44} />, name: "Ollama", label: "Ollama" },
  { icon: <Flowith.Avatar size={44} />, name: "Flowith", label: "Flowith" },
  { icon: <Minimax.Avatar size={44} />, name: "Minimax", label: "Minimax" },
  { icon: <Lovable.Avatar size={44} />, name: "Lovable", label: "Lovable" },
  { icon: <Lovart.Avatar size={44} />, name: "Lovart", label: "Lovart" },
  { icon: <Poe.Avatar size={44} />, name: "Poe", label: "Poe" },
  { icon: <Dify.Avatar size={44} />, name: "Dify", label: "Dify" },
  { icon: <N8n.Avatar size={44} />, name: "N8n", label: "n8n" },
];

const NO_ICON_TOOLS = ["Seedance", "Kiro", "Tencent Ima"];

// ── Sub-components ─────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <AnimateIn preset="fade" inView>
      <h2 className="mb-6 font-serif italic text-2xl text-gray-400 dark:text-gray-500">
        {children}
      </h2>
    </AnimateIn>
  );
}

function ToolRow({ item }: { item: ToolItem }) {
  return (
    <AnimateIn preset="fadeUp" inView>
      <div className="flex items-center gap-5 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-sm">
        <div className="shrink-0">{item.icon}</div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-foreground">{item.name}</p>
            {item.tag && (
              <span className="rounded-full bg-[var(--color-accent)]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-accent-dark)]">
                {item.tag}
              </span>
            )}
          </div>
          <p className="mt-0.5 text-xs leading-relaxed text-gray-500 dark:text-gray-400">{item.desc}</p>
        </div>
      </div>
    </AnimateIn>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function UsesPage() {
  const t = useTranslations("pages.uses");

  return (
    <section className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      {/* Header */}
      <div className="mb-16">
        <AnimateIn preset="fade">
          <p className="font-serif italic text-lg text-gray-400 dark:text-gray-500">{t("label")}</p>
        </AnimateIn>
        <AnimateIn preset="fadeUp" delay={0.1}>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {t("headline")}
          </h1>
        </AnimateIn>
        <AnimateIn preset="fadeUp" delay={0.2}>
          <p className="mt-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {t("description")}
          </p>
        </AnimateIn>
      </div>

      {/* Workstation */}
      <div className="mb-16">
        <SectionLabel>{t("section_workstation")}</SectionLabel>
        <AnimateIn preset="fadeUp" inView>
          <div className="flex items-center gap-6 rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-800">
              <Apple size={36} className="text-gray-700 dark:text-gray-300" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-foreground">
                MacBook Air 15&quot;
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Apple M4 · 24 GB · macOS 26
              </p>
              <p className="mt-2 text-xs leading-relaxed text-gray-400 dark:text-gray-500">
                The right balance of portability and power for shipping AI-native products. M4 handles local model inference without complaint.
              </p>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Editors */}
      <div className="mb-16">
        <SectionLabel>{t("section_editors")}</SectionLabel>
        <AnimateInGroup stagger="normal" inView className="space-y-3">
          {EDITORS.map((item) => (
            <ToolRow key={item.name} item={item} />
          ))}
        </AnimateInGroup>
      </div>

      {/* Terminal */}
      <div className="mb-16">
        <SectionLabel>{t("section_terminal")}</SectionLabel>
        <AnimateInGroup stagger="normal" inView className="space-y-3">
          {TERMINALS.map((item) => (
            <ToolRow key={item.name} item={item} />
          ))}
        </AnimateInGroup>
      </div>

      {/* AI Toolkit */}
      <div className="mb-16">
        <SectionLabel>{t("section_ai_toolkit")}</SectionLabel>
        <AnimateIn preset="fade" inView>
          <p className="mb-6 text-sm text-gray-400 dark:text-gray-500">
            {t("ai_toolkit_desc")}
          </p>
        </AnimateIn>
        <AnimateInGroup
          stagger="normal"
          inView
          className="grid grid-cols-5 gap-3 sm:grid-cols-6 md:grid-cols-9"
        >
          {AI_TOOLS.map((tool) => (
            <AnimateIn key={tool.name} preset="scale" inView>
              <div className="group flex flex-col items-center gap-2">
                <div className="transition-transform duration-200 group-hover:-translate-y-1">
                  {tool.icon}
                </div>
                <span className="text-center text-[9px] font-medium text-gray-400 dark:text-gray-500 leading-tight">
                  {tool.label}
                </span>
              </div>
            </AnimateIn>
          ))}
          {/* Tools without official icons */}
          {NO_ICON_TOOLS.map((name) => (
            <AnimateIn key={name} preset="scale" inView>
              <div className="group flex flex-col items-center gap-2">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 transition-transform duration-200 group-hover:-translate-y-1">
                  <Box className="h-5 w-5 text-gray-400" />
                </div>
                <span className="text-center text-[9px] font-medium text-gray-400 dark:text-gray-500 leading-tight">
                  {name}
                </span>
              </div>
            </AnimateIn>
          ))}
        </AnimateInGroup>
      </div>

      {/* Dogfooding */}
      <div className="mb-16">
        <SectionLabel>{t("section_dogfooding")}</SectionLabel>
        <AnimateIn preset="fadeUp" inView>
          <div className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
                <Cpu className="h-5 w-5 text-[var(--color-accent-dark)]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Nebutra-Sailor</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Internal monorepo framework
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              Every new project starts with Nebutra-Sailor — the same monorepo powering this site. Next.js 16, Tailwind v4, Turbo, shared UI + token system. Build once, deploy everywhere. This forces me to maintain the framework by actually living in it.
            </p>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
