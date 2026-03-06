import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

const meta = {
  title: "Primitives/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Binary toggle built on HeroUI switch with controlled/uncontrolled support.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Switch defaultSelected>Enable notifications</Switch>,
};

export const Controlled: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(true);
    return (
      <div className="flex items-center gap-3">
        <Switch isSelected={enabled} onValueChange={setEnabled}>
          Usage alerts
        </Switch>
        <span className="text-sm text-[color:var(--neutral-11)]">
          {enabled ? "On" : "Off"}
        </span>
      </div>
    );
  },
};
