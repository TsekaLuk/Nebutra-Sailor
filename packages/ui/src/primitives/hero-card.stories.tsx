import type { Meta, StoryObj } from "@storybook/react";
import { HeroCard, HeroCardBody, HeroCardFooter, HeroCardHeader } from "./hero-card";

const meta = {
  title: "Primitives/HeroCard",
  component: HeroCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Beautiful card container from HeroUI. Supports blur effects, press interactions, and flexible header/body/footer slots.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    shadow: { control: "select", options: ["none", "sm", "md", "lg"] },
    radius: { control: "select", options: ["none", "sm", "md", "lg"] },
    isHoverable: { control: "boolean" },
    isPressable: { control: "boolean" },
    isBlurred: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
} satisfies Meta<typeof HeroCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HeroCard className="w-72">
      <HeroCardHeader>
        <h4 className="font-semibold">Card Title</h4>
      </HeroCardHeader>
      <HeroCardBody>
        <p className="text-sm text-foreground/80">
          Make beautiful websites regardless of your design experience.
        </p>
      </HeroCardBody>
      <HeroCardFooter>
        <button className="text-sm text-primary hover:underline">Learn more →</button>
      </HeroCardFooter>
    </HeroCard>
  ),
};

export const Hoverable: Story = {
  render: () => (
    <HeroCard isHoverable className="w-72 cursor-pointer">
      <HeroCardBody>
        <p className="text-sm">Hover over this card to see the lift effect.</p>
      </HeroCardBody>
    </HeroCard>
  ),
};

export const Pressable: Story = {
  render: () => (
    <HeroCard isPressable className="w-72">
      <HeroCardBody>
        <p className="text-sm">Click me! This card acts as a button.</p>
      </HeroCardBody>
    </HeroCard>
  ),
};

export const ShadowVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      {(["none", "sm", "md", "lg"] as const).map((shadow) => (
        <HeroCard key={shadow} shadow={shadow} className="w-40">
          <HeroCardBody>
            <p className="text-center text-xs text-muted-foreground">shadow={shadow}</p>
          </HeroCardBody>
        </HeroCard>
      ))}
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <HeroCard isHoverable className="w-72">
      <HeroCardHeader className="pb-0">
        <div className="h-32 w-full rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
      </HeroCardHeader>
      <HeroCardBody>
        <h4 className="font-semibold">Featured Post</h4>
        <p className="mt-1 text-sm text-foreground/70">
          A beautiful gradient card with image area.
        </p>
      </HeroCardBody>
      <HeroCardFooter className="flex justify-between text-xs text-muted-foreground">
        <span>March 2026</span>
        <button className="text-primary hover:underline">Read more</button>
      </HeroCardFooter>
    </HeroCard>
  ),
};

export const Disabled: Story = {
  render: () => (
    <HeroCard isDisabled className="w-72">
      <HeroCardBody>
        <p className="text-sm text-muted-foreground">This card is disabled.</p>
      </HeroCardBody>
    </HeroCard>
  ),
};
