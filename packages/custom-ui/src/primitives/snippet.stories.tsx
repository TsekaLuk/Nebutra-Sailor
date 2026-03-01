import type { Meta, StoryObj } from "@storybook/react";
import { Snippet } from "./snippet";

const meta = {
  title: "Primitives/Snippet",
  component: Snippet,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Code snippet with copy-to-clipboard, $ prefix, multiple variants, and multiline support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["flat", "bordered", "shadow", "solid"],
    },
    color: {
      control: "select",
      options: [
        "default",
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
      ],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    radius: { control: "select", options: ["none", "sm", "md", "lg", "full"] },
    hideSymbol: { control: "boolean" },
    hideCopyButton: { control: "boolean" },
    symbol: { control: "text" },
  },
} satisfies Meta<typeof Snippet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "npm install @nebutra/custom-ui",
  },
};

export const NoSymbol: Story = {
  args: {
    hideSymbol: true,
    children: "const x = 42;",
  },
};

export const CustomSymbol: Story = {
  args: {
    symbol: ">",
    children: "git clone https://github.com/org/repo",
  },
};

export const Multiline: Story = {
  render: () => (
    <Snippet className="w-72">
      {`npm install package\nyarn add package\npnpm add package`}
    </Snippet>
  ),
};

export const VisualVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-72">
      <Snippet variant="flat">Flat variant</Snippet>
      <Snippet variant="bordered">Bordered variant</Snippet>
      <Snippet variant="shadow">Shadow variant</Snippet>
      <Snippet variant="solid">Solid variant</Snippet>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-72">
      <Snippet color="success" hideSymbol>
        Deployment successful
      </Snippet>
      <Snippet color="danger" hideSymbol>
        Build failed: missing module
      </Snippet>
      <Snippet color="warning" hideSymbol>
        Deprecated API usage detected
      </Snippet>
      <Snippet color="primary" hideSymbol>
        npm install @nebutra/ui
      </Snippet>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Snippet size="sm">Small snippet</Snippet>
      <Snippet size="md">Medium snippet</Snippet>
      <Snippet size="lg">Large snippet</Snippet>
    </div>
  ),
};

export const NoCopyButton: Story = {
  args: {
    hideCopyButton: true,
    children: "Read-only snippet",
  },
};
