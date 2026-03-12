import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  BarChart2,
  Globe,
  Settings,
  Star,
  User,
  CreditCard,
  LogOut,
  HelpCircle,
  Bell,
} from "lucide-react";
import { Menu } from "./menu";

const meta = {
  title: "Primitives/Menu",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Dropdown menu assembled via Radix. Supports keyboard and mouse navigation. " +
          "Built on top of DropdownMenu primitives with semantic slots: " +
          "prefix, suffix, locked, href.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

// =============================================================================
// Default
// =============================================================================

export const Default: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger>Menu</Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item>Team</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Sign out</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  ),
};

// =============================================================================
// With Chevron
// =============================================================================

export const WithChevron: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger chevron>Menu</Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Item>Team</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Sign out</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  ),
};

// =============================================================================
// Disabled Items
// =============================================================================

export const DisabledItems: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger>Menu</Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item disabled>Settings</Menu.Item>
        <Menu.Item>Team</Menu.Item>
        <Menu.Separator />
        <Menu.Item disabled>Billing</Menu.Item>
        <Menu.Item>Sign out</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  ),
};

// =============================================================================
// Locked Items
// =============================================================================

export const LockedItems: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger>Menu</Menu.Trigger>
      <Menu.Content>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item locked>Analytics</Menu.Item>
        <Menu.Item locked>Audit log</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Sign out</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  ),
};

// =============================================================================
// Link Items
// =============================================================================

export const LinkItems: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger>Menu</Menu.Trigger>
      <Menu.Content>
        <Menu.Item href="#">Documentation</Menu.Item>
        <Menu.Item href="#">Changelog</Menu.Item>
        <Menu.Item href="#">GitHub</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Sign out</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  ),
};

// =============================================================================
// Custom Trigger
// =============================================================================

export const CustomTrigger: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger
        className="h-8 w-8 rounded-full bg-muted p-0 flex items-center justify-center"
        aria-label="Open menu"
      >
        <Star className="h-4 w-4" />
      </Menu.Trigger>
      <Menu.Content>
        <Menu.Item>Profile</Menu.Item>
        <Menu.Item>Settings</Menu.Item>
        <Menu.Separator />
        <Menu.Item>Sign out</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  ),
};

// =============================================================================
// Prefix and Suffix
// =============================================================================

export const PrefixAndSuffix: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger chevron>Account</Menu.Trigger>
      <Menu.Content>
        <Menu.Item prefix={<User className="h-4 w-4" />}>Profile</Menu.Item>
        <Menu.Item
          prefix={<Bell className="h-4 w-4" />}
          suffix={<span className="rounded-full bg-destructive px-1.5 py-0.5 text-[10px] font-medium text-destructive-foreground">3</span>}
        >
          Notifications
        </Menu.Item>
        <Menu.Item
          prefix={<CreditCard className="h-4 w-4" />}
          suffix="Pro"
        >
          Billing
        </Menu.Item>
        <Menu.Item prefix={<Settings className="h-4 w-4" />}>Settings</Menu.Item>
        <Menu.Separator />
        <Menu.Item prefix={<HelpCircle className="h-4 w-4" />} href="#">
          Help
        </Menu.Item>
        <Menu.Item prefix={<LogOut className="h-4 w-4" />}>Sign out</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  ),
};

// =============================================================================
// Menu Position
// =============================================================================

export const MenuPosition: Story = {
  render: () => (
    <div className="flex gap-6">
      {(["start", "center", "end"] as const).map((align) => (
        <Menu.Root key={align}>
          <Menu.Trigger chevron>{align}</Menu.Trigger>
          <Menu.Content align={align}>
            <Menu.Item prefix={<BarChart2 className="h-4 w-4" />}>Analytics</Menu.Item>
            <Menu.Item prefix={<Globe className="h-4 w-4" />}>Domains</Menu.Item>
            <Menu.Item prefix={<Settings className="h-4 w-4" />}>Settings</Menu.Item>
          </Menu.Content>
        </Menu.Root>
      ))}
    </div>
  ),
};

// =============================================================================
// Full Kitchen Sink
// =============================================================================

export const KitchenSink: Story = {
  render: () => (
    <Menu.Root>
      <Menu.Trigger chevron>Options</Menu.Trigger>
      <Menu.Content className="w-56">
        <Menu.Label>Navigation</Menu.Label>
        <Menu.Item prefix={<User className="h-4 w-4" />} href="#">
          Profile
        </Menu.Item>
        <Menu.Item
          prefix={<BarChart2 className="h-4 w-4" />}
          suffix="New"
          locked
        >
          Analytics
        </Menu.Item>
        <Menu.Item prefix={<CreditCard className="h-4 w-4" />} disabled>
          Billing
        </Menu.Item>
        <Menu.Separator />
        <Menu.Label>Actions</Menu.Label>
        <Menu.Item prefix={<Settings className="h-4 w-4" />}>Settings</Menu.Item>
        <Menu.Item prefix={<LogOut className="h-4 w-4" />}>Sign out</Menu.Item>
      </Menu.Content>
    </Menu.Root>
  ),
};
