"use client";

import * as React from "react";
import { Menu } from "@nebutra/ui/primitives";

export function Menu2Demo() {
  return (
    <Menu.Root>
    <Menu.Trigger chevron>Workspace</Menu.Trigger>
    <Menu.Content align="center" className="w-[220px]">
      <Menu.Item>General</Menu.Item>
      <Menu.Item>Members</Menu.Item>
      <Menu.Separator />
      <Menu.Label>Admin Settings</Menu.Label>
      <Menu.Item locked>Billing & Plans</Menu.Item>
      <Menu.Item locked>Security Logs</Menu.Item>
    </Menu.Content>
  </Menu.Root>
  );
}
