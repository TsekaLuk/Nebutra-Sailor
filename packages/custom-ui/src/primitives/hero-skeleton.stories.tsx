import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { HeroSkeleton } from "./hero-skeleton";

const meta = {
  title: "Primitives/HeroSkeleton",
  component: HeroSkeleton,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Loading placeholder from HeroUI that takes the shape of its children. Use isLoaded to transition from skeleton to real content.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isLoaded: { control: "boolean" },
    disableAnimation: { control: "boolean" },
  },
} satisfies Meta<typeof HeroSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HeroSkeleton>
      <div className="h-24 w-64 rounded-lg bg-muted" />
    </HeroSkeleton>
  ),
};

export const TextLines: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-3">
      <HeroSkeleton className="h-3 w-3/5 rounded-lg" />
      <HeroSkeleton className="h-3 w-4/5 rounded-lg" />
      <HeroSkeleton className="h-3 w-2/5 rounded-lg" />
    </div>
  ),
};

export const ProfileSkeleton: Story = {
  render: () => (
    <div className="flex w-64 items-center gap-3">
      <HeroSkeleton className="h-12 w-12 flex-shrink-0 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <HeroSkeleton className="h-3 w-4/5 rounded-lg" />
        <HeroSkeleton className="h-3 w-3/5 rounded-lg" />
      </div>
    </div>
  ),
};

export const WithLoadedState: Story = {
  render: () => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-3 w-64">
          <HeroSkeleton isLoaded={isLoaded} className="rounded-lg">
            <div className="h-24 rounded-lg bg-gradient-to-r from-primary/30 to-primary/10 flex items-center justify-center">
              <span className="text-sm font-medium">Loaded content</span>
            </div>
          </HeroSkeleton>
          <HeroSkeleton isLoaded={isLoaded} className="h-3 w-3/5 rounded-lg">
            <div className="h-3 w-3/5 rounded-lg bg-foreground/10" />
          </HeroSkeleton>
          <HeroSkeleton isLoaded={isLoaded} className="h-3 w-4/5 rounded-lg">
            <div className="h-3 w-4/5 rounded-lg bg-foreground/10" />
          </HeroSkeleton>
        </div>
        <button
          onClick={() => setIsLoaded((p) => !p)}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          Toggle loaded: {isLoaded ? "Loaded" : "Loading"}
        </button>
      </div>
    );
  },
};

export const NoAnimation: Story = {
  render: () => (
    <div className="flex w-64 flex-col gap-3">
      <HeroSkeleton disableAnimation className="h-4 w-full rounded-lg" />
      <HeroSkeleton disableAnimation className="h-4 w-4/5 rounded-lg" />
      <HeroSkeleton disableAnimation className="h-4 w-3/5 rounded-lg" />
    </div>
  ),
};
