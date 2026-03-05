import * as React from "react";
import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AnimateIn, AnimateInGroup } from "@nebutra/ui/primitives";

const meta: Meta = {
  title: "Design Tokens/Motion",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Brand motion language. Use `<AnimateIn>` for entrances. Three core concepts: 涌现 (emerge), 流动 (flow), 脉动 (pulse).",
      },
    },
  },
};
export default meta;

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-24 w-48 items-center justify-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-700 shadow-sm">
      {children}
    </div>
  );
}

function ReplayButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-6 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
    >
      Replay ↺
    </button>
  );
}

export const AllPresets: StoryObj = {
  name: "All Presets",
  render: () => {
    const [key, setKey] = useState(0);
    return (
      <div className="p-8 bg-gray-50">
        <div className="flex flex-wrap gap-6">
          {(["emerge", "flow", "fade", "fadeUp", "scale"] as const).map(
            (preset, i) => (
              <div key={`${preset}-${key}`} className="flex flex-col items-center gap-2">
                <AnimateIn preset={preset} delay={i * 0.1}>
                  <Card>{preset}</Card>
                </AnimateIn>
                <span className="font-mono text-xs text-gray-400">{preset}</span>
              </div>
            )
          )}
        </div>
        <ReplayButton onClick={() => setKey((k) => k + 1)} />
      </div>
    );
  },
};

export const Stagger: StoryObj = {
  name: "AnimateInGroup — Stagger",
  render: () => {
    const [key, setKey] = useState(0);
    return (
      <div className="p-8 bg-gray-50">
        <AnimateInGroup key={key} stagger="normal" className="flex gap-4">
          {["One", "Two", "Three", "Four", "Five"].map((label) => (
            <AnimateIn key={label} preset="fadeUp">
              <Card>{label}</Card>
            </AnimateIn>
          ))}
        </AnimateInGroup>
        <ReplayButton onClick={() => setKey((k) => k + 1)} />
      </div>
    );
  },
};

export const DurationScale: StoryObj = {
  name: "Duration Scale",
  render: () => (
    <div className="p-8 bg-white space-y-3">
      {[
        { name: "instant", ms: "0ms",    token: "--duration-instant" },
        { name: "fast",    ms: "100ms",  token: "--duration-fast" },
        { name: "normal",  ms: "150ms",  token: "--duration-normal" },
        { name: "slow",    ms: "300ms",  token: "--duration-slow" },
        { name: "slower",  ms: "500ms",  token: "--duration-slower" },
        { name: "slowest", ms: "1000ms", token: "--duration-slowest" },
      ].map(({ name, ms, token }) => (
        <div key={name} className="flex items-center gap-4">
          <span className="w-20 font-mono text-xs text-gray-500">{name}</span>
          <div className="h-2 rounded-full bg-blue-500" style={{ width: ms, maxWidth: "100%" }} />
          <span className="font-mono text-xs text-gray-400">{ms}</span>
          <span className="font-mono text-[10px] text-gray-300">{token}</span>
        </div>
      ))}
    </div>
  ),
};
