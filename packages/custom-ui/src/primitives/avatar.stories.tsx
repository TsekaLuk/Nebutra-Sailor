import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

const meta = {
  title: "Primitives/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "User identity display via image with initials fallback. Built on Radix Avatar primitive.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Base ─────────────────────────────────────────────────────────────────────

export const WithImage: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

export const WithFallback: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="/broken-image.png" alt="broken" />
      <AvatarFallback>NB</AvatarFallback>
    </Avatar>
  ),
};

// ─── Sizes ────────────────────────────────────────────────────────────────────

export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-3">
      {/* xs — 20px */}
      <Avatar className="h-5 w-5">
        <AvatarFallback className="text-[10px]">XS</AvatarFallback>
      </Avatar>
      {/* sm — 32px */}
      <Avatar className="h-8 w-8">
        <AvatarFallback className="text-xs">SM</AvatarFallback>
      </Avatar>
      {/* md — 40px (default) */}
      <Avatar>
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      {/* lg — 56px */}
      <Avatar className="h-14 w-14">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
      {/* xl — 80px */}
      <Avatar className="h-20 w-20">
        <AvatarFallback className="text-xl">XL</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// ─── Group ────────────────────────────────────────────────────────────────────

export const Group: Story = {
  render: () => (
    <div className="flex -space-x-2">
      {[
        { src: "https://github.com/shadcn.png", alt: "shadcn", fallback: "SC" },
        { src: "/broken.png", alt: "user2", fallback: "AB" },
        { src: "/broken.png", alt: "user3", fallback: "CD" },
        { src: "/broken.png", alt: "user4", fallback: "EF" },
      ].map((user) => (
        <Avatar key={user.alt} className="h-8 w-8 border-2 border-background">
          <AvatarImage src={user.src} alt={user.alt} />
          <AvatarFallback className="text-xs">{user.fallback}</AvatarFallback>
        </Avatar>
      ))}
      <Avatar className="h-8 w-8 border-2 border-background">
        <AvatarFallback className="text-xs bg-muted text-muted-foreground">
          +9
        </AvatarFallback>
      </Avatar>
    </div>
  ),
};
