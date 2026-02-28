import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta = {
  title: "Primitives/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Compact label for status, category, or count. Pill shape, xs font, semibold weight per badge tokens.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "Visual style — maps to semantic color tokens",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Variants ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: { children: "Default", variant: "default" },
};

export const Secondary: Story = {
  args: { children: "Secondary", variant: "secondary" },
};

export const Destructive: Story = {
  args: { children: "Destructive", variant: "destructive" },
};

export const Outline: Story = {
  args: { children: "Outline", variant: "outline" },
};

// ─── Semantic Status ──────────────────────────────────────────────────────────

export const SemanticStatus: Story = {
  name: "Semantic Status",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge className="bg-success text-success-foreground border-transparent">
        Success
      </Badge>
      <Badge className="bg-warning text-warning-foreground border-transparent">
        Warning
      </Badge>
      <Badge className="bg-info text-info-foreground border-transparent">
        Info
      </Badge>
      <Badge variant="destructive">Error</Badge>
    </div>
  ),
};

// ─── All Variants Showcase ────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  ),
};

// ─── With Content ─────────────────────────────────────────────────────────────

export const WithDot: Story = {
  name: "Status Dot",
  render: () => (
    <div className="flex flex-wrap gap-2">
      {[
        { label: "Live", color: "bg-success" },
        { label: "Pending", color: "bg-warning" },
        { label: "Offline", color: "bg-muted-foreground" },
      ].map(({ label, color }) => (
        <Badge key={label} variant="outline" className="gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full ${color}`} />
          {label}
        </Badge>
      ))}
    </div>
  ),
};
