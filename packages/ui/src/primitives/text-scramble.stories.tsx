import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { TextScramble } from "./text-scramble";

const meta = {
  title: "Primitives/TextScramble",
  component: TextScramble,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Characters scramble through random symbols before resolving to final text. Trigger on mount, hover, or any event.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    duration: {
      control: { type: "range", min: 0.2, max: 3, step: 0.1 },
      description: "Total scramble duration in seconds",
    },
    speed: {
      control: { type: "range", min: 0.01, max: 0.2, step: 0.01 },
      description: "Character update interval in seconds",
    },
    trigger: {
      control: "boolean",
      description: "Flip to true to replay animation",
    },
  },
} satisfies Meta<typeof TextScramble>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Hello World",
    className: "font-mono text-2xl",
  },
};

export const CyberCharSet: Story = {
  args: {
    children: "Cyber Mode",
    characterSet: "░▒▓█▀▄▌▐",
    duration: 1.5,
    className: "font-mono text-2xl",
  },
};

export const SlowMotion: Story = {
  args: {
    children: "Slow Reveal",
    duration: 2.5,
    speed: 0.08,
    className: "text-2xl font-bold",
  },
};

export const HoverTrigger: Story = {
  name: "Hover Trigger",
  render: () => {
    const [trigger, setTrigger] = useState(false);
    return (
      <TextScramble
        as="span"
        trigger={trigger}
        onScrambleComplete={() => setTrigger(false)}
        onHoverStart={() => setTrigger(true)}
        className="cursor-pointer font-mono text-2xl"
      >
        Hover me
      </TextScramble>
    );
  },
};
