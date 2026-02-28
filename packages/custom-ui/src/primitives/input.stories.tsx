import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta = {
  title: "Primitives/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Text input control. h-10 (40px) locked per component tokens. Focus ring uses brand-blue.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "search", "tel", "url"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="w-72">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Base States ──────────────────────────────────────────────────────────────

export const Default: Story = {
  args: { placeholder: "Enter value…", type: "text" },
};

export const WithValue: Story = {
  args: { defaultValue: "hello@nebutra.com", type: "email" },
};

export const Password: Story = {
  args: { placeholder: "Password", type: "password" },
};

export const Disabled: Story = {
  args: { placeholder: "Disabled input", disabled: true },
};

// ─── Labelled Field ───────────────────────────────────────────────────────────

export const WithLabel: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-sm font-medium text-foreground"
        htmlFor="email-field"
      >
        Email address
      </label>
      <Input id="email-field" type="email" placeholder="hello@nebutra.com" />
    </div>
  ),
};

export const WithError: Story = {
  render: () => (
    <div className="flex flex-col gap-1.5">
      <label
        className="text-sm font-medium text-foreground"
        htmlFor="error-field"
      >
        Email address
      </label>
      <Input
        id="error-field"
        type="email"
        defaultValue="not-an-email"
        className="border-destructive focus-visible:ring-destructive"
        aria-invalid="true"
      />
      <p className="text-xs text-destructive">
        Please enter a valid email address.
      </p>
    </div>
  ),
};

// ─── All Types ────────────────────────────────────────────────────────────────

export const AllTypes: Story = {
  name: "All Types",
  render: () => (
    <div className="flex flex-col gap-3 w-72">
      <Input type="text" placeholder="Text" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Number" />
      <Input type="search" placeholder="Search…" />
      <Input type="tel" placeholder="Phone" />
      <Input type="url" placeholder="https://…" />
    </div>
  ),
};
