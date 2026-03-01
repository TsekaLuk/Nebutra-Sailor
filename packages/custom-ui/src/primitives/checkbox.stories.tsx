import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox-group";

const meta = {
  title: "Primitives/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A control that toggles between two options, checked or unchecked. Supports indeterminate state and disabled combinations.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox isSelected={checked} onValueChange={setChecked}>
        Option 1
      </Checkbox>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox isDisabled>Disabled</Checkbox>
      <Checkbox isSelected isDisabled>
        Disabled Checked
      </Checkbox>
      <Checkbox isIndeterminate isDisabled>
        Disabled Indeterminate
      </Checkbox>
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => <Checkbox isIndeterminate>Option 1</Checkbox>,
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm">Small</Checkbox>
      <Checkbox size="md">Medium</Checkbox>
      <Checkbox size="lg">Large</Checkbox>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox isSelected color="default">
        Default
      </Checkbox>
      <Checkbox isSelected color="primary">
        Primary
      </Checkbox>
      <Checkbox isSelected color="success">
        Success
      </Checkbox>
      <Checkbox isSelected color="warning">
        Warning
      </Checkbox>
      <Checkbox isSelected color="danger">
        Danger
      </Checkbox>
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox isSelected radius="none">
        None
      </Checkbox>
      <Checkbox isSelected radius="sm">
        Small
      </Checkbox>
      <Checkbox isSelected radius="md">
        Medium
      </Checkbox>
      <Checkbox isSelected radius="full">
        Full
      </Checkbox>
    </div>
  ),
};
