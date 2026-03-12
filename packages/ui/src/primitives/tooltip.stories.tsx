import type { Meta, StoryObj } from "@storybook/react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./tooltip";

const meta = {
  title: "Primitives/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Compact hover/focus hint for dense control surfaces.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            className="rounded-md border border-border px-3 py-2 text-sm"
          >
            Hover me
          </button>
        </TooltipTrigger>
        <TooltipContent>
          Enable MFA before promoting this user to admin.
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
