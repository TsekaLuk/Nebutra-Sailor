import type { Meta, StoryObj } from "@storybook/react";
import { SnippetStatus } from "./snippet-status";

const meta = {
  title: "Primitives/SnippetStatus",
  component: SnippetStatus,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Vercel-style code snippet with status-colored backgrounds, $ prompt prefix, and animated copy-to-clipboard.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: { control: "select", options: ["success", "warning", "error"] },
    prompt: { control: "boolean" },
    dark: { control: "boolean" },
  },
} satisfies Meta<typeof SnippetStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "npm install @nebutra/ui",
  },
  render: (args) => (
    <div className="w-80">
      <SnippetStatus {...args} />
    </div>
  ),
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <SnippetStatus text="npm install package" />
      <SnippetStatus text="Deployment complete — 42s" type="success" />
      <SnippetStatus text="Build timeout after 30s" type="warning" />
      <SnippetStatus text="Error: module not found" type="error" />
    </div>
  ),
};

export const DarkTheme: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80 p-4 bg-zinc-900 rounded-lg">
      <SnippetStatus text="npm run dev" dark />
      <SnippetStatus text="npm run build" dark />
    </div>
  ),
};

export const Multiline: Story = {
  render: () => (
    <div className="w-80">
      <SnippetStatus text={["npm install", "npm run build", "npm run start"]} />
    </div>
  ),
};

export const NoPrompt: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80">
      <SnippetStatus text="const x = 1" prompt={false} />
      <SnippetStatus
        text="NEXT_PUBLIC_API_URL=https://api.example.com"
        prompt={false}
      />
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="max-w-sm rounded-lg border bg-card p-4 space-y-3">
      <h3 className="font-semibold text-sm">Quick start</h3>
      <p className="text-xs text-muted-foreground">Install the package:</p>
      <SnippetStatus text="npm install @nebutra/ui" type="success" />
      <p className="text-xs text-muted-foreground">Start development:</p>
      <SnippetStatus text="npm run dev" />
    </div>
  ),
};
