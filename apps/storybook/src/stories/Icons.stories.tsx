/**
 * Geist Icon Gallery — 541 icons from @nebutra/icons
 *
 * Features:
 * - Live search across all icon names
 * - Click any icon to copy its import statement
 * - Group-aware layout (icon name prefix as category)
 */
import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "@nebutra/icons";
import type { IconProps } from "@nebutra/icons";
import { useState, useCallback } from "react";

type IconComponent = React.ComponentType<IconProps>;

// All named exports except the type-only IconProps
const iconEntries = (Object.entries(Icons) as [string, IconComponent][]).filter(
  ([, val]) => typeof val === "function",
);

const TOTAL = iconEntries.length;

// ── Styles ────────────────────────────────────────────────────────────────────

const styles = {
  root: {
    fontFamily: "var(--font-geist-sans, ui-sans-serif, system-ui, sans-serif)",
    padding: "32px 24px",
    background: "#fff",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "16px",
    marginBottom: "32px",
  },
  heading: {
    fontSize: "22px",
    fontWeight: 600,
    letterSpacing: "-0.02em",
    margin: 0,
    color: "#111",
  },
  searchRow: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  searchInput: {
    width: "100%",
    maxWidth: "360px",
    height: "36px",
    padding: "0 12px",
    border: "1px solid #e1e1e1",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
    background: "#fafafa",
    color: "#111",
    transition: "border-color 0.15s",
  },
  count: {
    fontSize: "13px",
    color: "#888",
    flexShrink: 0,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(108px, 1fr))",
    gap: "6px",
  },
  card: (copied: boolean) => ({
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "8px",
    padding: "14px 6px 10px",
    border: `1px solid ${copied ? "#86efac" : "transparent"}`,
    borderRadius: "10px",
    background: copied ? "#f0fdf4" : "transparent",
    cursor: "pointer",
    transition: "background 0.1s, border-color 0.1s",
    textAlign: "center" as const,
  }),
  cardHover: {
    background: "#f4f4f5",
    borderColor: "#e4e4e7",
  },
  label: (copied: boolean) => ({
    fontSize: "11px",
    lineHeight: "1.4",
    color: copied ? "#16a34a" : "#555",
    wordBreak: "break-word" as const,
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap" as const,
  }),
  empty: {
    padding: "48px 0",
    textAlign: "center" as const,
    fontSize: "14px",
    color: "#888",
  },
} as const;

// ── Icon card ────────────────────────────────────────────────────────────────

function IconCard({
  name,
  Icon,
  copied,
  onCopy,
}: {
  name: string;
  Icon: IconComponent;
  copied: boolean;
  onCopy: (name: string) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      title={`import { ${name} } from "@nebutra/icons"`}
      onClick={() => onCopy(name)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.card(copied),
        ...(hovered && !copied ? styles.cardHover : {}),
        // reset browser button styles
        border: `1px solid ${copied ? "#86efac" : hovered ? "#e4e4e7" : "transparent"}`,
        fontFamily: "inherit",
      }}
    >
      <Icon size={20} aria-hidden />
      <span style={styles.label(copied)}>{copied ? "Copied!" : name}</span>
    </button>
  );
}

// ── Gallery ──────────────────────────────────────────────────────────────────

function IconGallery() {
  const [search, setSearch] = useState("");
  const [copied, setCopied] = useState<string | null>(null);

  const filtered =
    search.trim() === ""
      ? iconEntries
      : iconEntries.filter(([name]) =>
          name.toLowerCase().includes(search.toLowerCase()),
        );

  const handleCopy = useCallback((name: string) => {
    const text = `import { ${name} } from "@nebutra/icons";`;
    navigator.clipboard.writeText(text).catch(() => {
      /* silent — clipboard may not be available in all envs */
    });
    setCopied(name);
    setTimeout(() => setCopied(null), 1500);
  }, []);

  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <h2 style={styles.heading}>Icons</h2>
        <div style={styles.searchRow}>
          <input
            type="search"
            placeholder={`Search ${TOTAL} icons…`}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={styles.searchInput}
            aria-label="Search icons"
          />
          <span style={styles.count}>
            {filtered.length === TOTAL
              ? `${TOTAL} icons`
              : `${filtered.length} / ${TOTAL}`}
          </span>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div style={styles.empty}>No icons match "{search}"</div>
      ) : (
        <div style={styles.grid}>
          {filtered.map(([name, Icon]) => (
            <IconCard
              key={name}
              name={name}
              Icon={Icon}
              copied={copied === name}
              onCopy={handleCopy}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Story ────────────────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Foundation/Icons",
  component: IconGallery,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `
Complete Geist icon set — **${TOTAL} icons** sourced from vercel.com/geist/icons, packaged as TypeScript React components in \`@nebutra/icons\`.

**Usage:**
\`\`\`tsx
import { ArrowDown, LogoVercel } from "@nebutra/icons";

<ArrowDown size={16} />
\`\`\`

**Click any icon** in the gallery to copy its import statement to the clipboard.
        `.trim(),
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Gallery: Story = {
  name: "Gallery (all icons)",
};
