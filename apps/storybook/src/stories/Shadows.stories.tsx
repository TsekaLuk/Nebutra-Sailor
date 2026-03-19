import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Design Tokens/Shadows",
  tags: ["autodocs"],
};
export default meta;

export const ElevationScale: StoryObj = {
  name: "Elevation Scale",
  render: () => (
    <div className="p-8 bg-gray-100 grid grid-cols-3 gap-6 md:grid-cols-6">
      {(["xs", "sm", "md", "lg", "xl", "2xl"] as const).map((size) => (
        <div key={size} className="flex flex-col items-center gap-3">
          <div
            className="h-20 w-full rounded-lg bg-white"
            style={{ boxShadow: `var(--elevation-${size})` }}
          />
          <span className="font-mono text-xs text-gray-500">--elevation-{size}</span>
        </div>
      ))}
    </div>
  ),
};

export const BrandShadows: StoryObj = {
  name: "Brand Shadows",
  render: () => (
    <div className="p-8 bg-gray-900 grid grid-cols-2 gap-8">
      {[
        { name: "--elevation-brand", label: "Brand glow (small)" },
        { name: "--elevation-brand-lg", label: "Brand glow (large)" },
      ].map(({ name, label }) => (
        <div key={name} className="flex flex-col items-center gap-3">
          <div
            className="h-24 w-full rounded-lg bg-[#0033FE]"
            style={{ boxShadow: `var(${name})` }}
          />
          <span className="font-mono text-xs text-white/60">{name}</span>
          <span className="text-xs text-white/40">{label}</span>
        </div>
      ))}
    </div>
  ),
};
