"use client";

import * as React from "react";
import { Menu } from "@nebutra/ui/primitives";

export function MenuDemo() {
  return (
    <Menu.Root>
    <Menu.Trigger chevron>Account</Menu.Trigger>
    <Menu.Content align="center" className="w-[200px]">
      <Menu.Label>My Account</Menu.Label>
      <Menu.Separator />
      <Menu.Item prefix={<User className="h-4 w-4" />}>Profile</Menu.Item>
      <Menu.Item prefix={<Settings className="h-4 w-4" />} suffix="⌘S">Settings</Menu.Item>
      <Menu.Item prefix={<Command className="h-4 w-4" />}>Keyboard shortcuts</Menu.Item>
      <Menu.Separator />
      <Menu.Item prefix={<LogOut className="h-4 w-4" />} className="text-destructive focus:bg-destructive focus:text-destructive-foreground">
        Log out
      </Menu.Item>
    </Menu.Content>
  </Menu.Root>
  );
}
