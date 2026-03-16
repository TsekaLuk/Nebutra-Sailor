/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Menu5Demo() {
  return (
    <>
<Menu.Root>
    <Menu.Trigger className="h-10 w-10 shrink-0 select-none rounded-[var(--radius-full)] bg-[var(--neutral-4)] p-0 text-[var(--neutral-12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--blue-9)] focus-visible:ring-offset-2 flex items-center justify-center">
      <User className="h-5 w-5" />
    </Menu.Trigger>
    <Menu.Content align="end" className="w-[200px]">
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Preferences</Menu.Item>
    </Menu.Content>
  </Menu.Root>
    </>
  );
}
