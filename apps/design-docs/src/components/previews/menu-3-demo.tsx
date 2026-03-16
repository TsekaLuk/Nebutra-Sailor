/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Menu3Demo() {
  return (
    <>
<Menu.Root>
    <Menu.Trigger chevron>Actions</Menu.Trigger>
    <Menu.Content align="center" className="w-[180px]">
      <Menu.Item>Duplicate</Menu.Item>
      <Menu.Item disabled>Rename...</Menu.Item>
      <Menu.Item disabled>Delete</Menu.Item>
    </Menu.Content>
  </Menu.Root>
    </>
  );
}
