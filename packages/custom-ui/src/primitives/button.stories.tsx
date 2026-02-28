import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
  title: "Primitives/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Interactive element for triggering actions. Follows VI brand standards with brand-blue primary and Geist-quality sizing.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      description: "Visual style variant",
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
      description: "Size preset — maps to 32/40/48px heights",
    },
    disabled: { control: "boolean" },
    loading: {
      control: "boolean",
      description: "Show loading spinner + disable",
    },
    asChild: { table: { disable: true } },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Variants ─────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: { children: "Button", variant: "default", size: "default" },
};

export const Outline: Story = {
  args: { children: "Button", variant: "outline", size: "default" },
};

export const Secondary: Story = {
  args: { children: "Button", variant: "secondary", size: "default" },
};

export const Ghost: Story = {
  args: { children: "Button", variant: "ghost", size: "default" },
};

export const Destructive: Story = {
  args: { children: "Delete", variant: "destructive", size: "default" },
};

export const Link: Story = {
  args: { children: "Learn more", variant: "link", size: "default" },
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

// ─── States ───────────────────────────────────────────────────────────────────

export const Disabled: Story = {
  args: { children: "Button", disabled: true },
};

export const Loading: Story = {
  args: { children: "Saving…", loading: true, variant: "default" },
};

export const LoadingVariants: Story = {
  name: "Loading States",
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button loading>Saving…</Button>
      <Button loading variant="outline">
        Uploading…
      </Button>
      <Button loading size="sm">
        Loading
      </Button>
      <Button loading size="lg">
        Processing…
      </Button>
    </div>
  ),
};

// ─── All Variants Showcase ────────────────────────────────────────────────────

export const AllVariants: Story = {
  name: "All Variants",
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button variant="default" disabled>
          Default
        </Button>
        <Button variant="outline" disabled>
          Outline
        </Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
        <Button variant="ghost" disabled>
          Ghost
        </Button>
      </div>
    </div>
  ),
};
