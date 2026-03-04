import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Design Tokens/Colors",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "All brand and semantic colors. Override `--nebutra-blue-*` and `--nebutra-cyan-*` CSS variables in your `globals.css` to rebrand.",
      },
    },
  },
};
export default meta;

// ── helpers ──────────────────────────────────────────────────

function Swatch({ name, cssVar, hex }: { name: string; cssVar: string; hex?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <div
        className="h-12 w-full rounded-md border border-black/10"
        style={{ background: hex ?? `var(${cssVar})` }}
      />
      <p className="text-xs font-medium text-gray-900">{name}</p>
      <p className="font-mono text-[11px] text-gray-500">{cssVar}</p>
      {hex && <p className="font-mono text-[11px] text-gray-400">{hex}</p>}
    </div>
  );
}

function ColorRow({
  label,
  swatches,
}: {
  label: string;
  swatches: Array<{ name: string; cssVar: string; hex?: string }>;
}) {
  return (
    <div className="mb-8">
      <h3 className="mb-3 text-sm font-semibold text-gray-700">{label}</h3>
      <div className="grid grid-cols-6 gap-3 md:grid-cols-11">
        {swatches.map((s) => (
          <Swatch key={s.cssVar} {...s} />
        ))}
      </div>
    </div>
  );
}

// ── story ─────────────────────────────────────────────────────

export const BrandColors: StoryObj = {
  name: "Brand Scales",
  render: () => (
    <div className="p-6 bg-white">
      <ColorRow
        label="云毓蓝 — Primary Brand (--nebutra-blue-*)"
        swatches={[
          { name: "50",  cssVar: "--nebutra-blue-50",  hex: "#f0f4ff" },
          { name: "100", cssVar: "--nebutra-blue-100", hex: "#dbe4ff" },
          { name: "200", cssVar: "--nebutra-blue-200", hex: "#bac8ff" },
          { name: "300", cssVar: "--nebutra-blue-300", hex: "#91a7ff" },
          { name: "400", cssVar: "--nebutra-blue-400", hex: "#5c7cfa" },
          { name: "500", cssVar: "--nebutra-blue-500", hex: "#0033FE" },
          { name: "600", cssVar: "--nebutra-blue-600", hex: "#002ad4" },
          { name: "700", cssVar: "--nebutra-blue-700", hex: "#0021ab" },
          { name: "800", cssVar: "--nebutra-blue-800", hex: "#001882" },
          { name: "900", cssVar: "--nebutra-blue-900", hex: "#000f59" },
          { name: "950", cssVar: "--nebutra-blue-950", hex: "#000830" },
        ]}
      />
      <ColorRow
        label="云毓青 — Secondary Accent (--nebutra-cyan-*)"
        swatches={[
          { name: "50",  cssVar: "--nebutra-cyan-50",  hex: "#e6fff8" },
          { name: "100", cssVar: "--nebutra-cyan-100", hex: "#b3ffec" },
          { name: "200", cssVar: "--nebutra-cyan-200", hex: "#80ffe0" },
          { name: "300", cssVar: "--nebutra-cyan-300", hex: "#4dfcd4" },
          { name: "400", cssVar: "--nebutra-cyan-400", hex: "#1af7c8" },
          { name: "500", cssVar: "--nebutra-cyan-500", hex: "#0BF1C3" },
          { name: "600", cssVar: "--nebutra-cyan-600", hex: "#09c9a3" },
          { name: "700", cssVar: "--nebutra-cyan-700", hex: "#07a183" },
          { name: "800", cssVar: "--nebutra-cyan-800", hex: "#057963" },
          { name: "900", cssVar: "--nebutra-cyan-900", hex: "#035143" },
          { name: "950", cssVar: "--nebutra-cyan-950", hex: "#012923" },
        ]}
      />
    </div>
  ),
};

export const SemanticColors: StoryObj = {
  name: "Semantic Scale (12-step)",
  render: () => (
    <div className="p-6 bg-white">
      <p className="mb-4 text-sm text-gray-500">
        Geist-style 12-step scales. Steps 1–2 = backgrounds, 3–5 = component states,
        6–8 = borders, 9–10 = solid fills, 11–12 = text.
      </p>
      {(["blue", "cyan", "neutral"] as const).map((color) => (
        <ColorRow
          key={color}
          label={`--${color}-1 → --${color}-12`}
          swatches={Array.from({ length: 12 }, (_, i) => ({
            name: String(i + 1),
            cssVar: `--${color}-${i + 1}`,
          }))}
        />
      ))}
    </div>
  ),
};

export const Gradients: StoryObj = {
  name: "Brand Gradients",
  render: () => (
    <div className="p-6 bg-white grid grid-cols-2 gap-4 md:grid-cols-4">
      {[
        { name: "Default", cssVar: "--brand-gradient" },
        { name: "Reverse", cssVar: "--brand-gradient-reverse" },
        { name: "Vertical", cssVar: "--brand-gradient-vertical" },
        { name: "Radial",   cssVar: "--brand-gradient-radial" },
      ].map(({ name, cssVar }) => (
        <div key={cssVar} className="flex flex-col gap-2">
          <div
            className="h-24 rounded-lg"
            style={{ background: `var(${cssVar})` }}
          />
          <p className="text-sm font-medium text-gray-900">{name}</p>
          <p className="font-mono text-[11px] text-gray-500">{cssVar}</p>
        </div>
      ))}
    </div>
  ),
};

export const DarkMode: StoryObj = {
  name: "Dark Mode Preview",
  parameters: { backgrounds: { default: "dark" } },
  render: () => (
    <div className="dark p-6 bg-[var(--neutral-1)] min-h-64">
      <p className="mb-4 text-sm" style={{ color: "var(--neutral-11)" }}>
        All semantic tokens switch automatically in dark mode.
      </p>
      <div className="grid grid-cols-4 gap-3">
        {["--neutral-1","--neutral-2","--neutral-3","--neutral-4",
          "--neutral-9","--neutral-10","--neutral-11","--neutral-12",
          "--blue-9","--blue-3","--cyan-9","--cyan-3",
        ].map((cssVar) => (
          <div key={cssVar} className="flex flex-col gap-1">
            <div
              className="h-10 w-full rounded border border-white/10"
              style={{ background: `var(${cssVar})` }}
            />
            <p className="font-mono text-[10px] text-white/60">{cssVar}</p>
          </div>
        ))}
      </div>
    </div>
  ),
};
