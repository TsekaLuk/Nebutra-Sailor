/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Menu4Demo() {
  return (
    <>
<Menu.Root>
    <Menu.Trigger chevron>External Links</Menu.Trigger>
    <Menu.Content align="center" className="w-[180px]">
      <Menu.Item href="https://github.com/cloud-orion" suffix={<ChevronRight className="h-4 w-4" />}>
        GitHub Repo
      </Menu.Item>
      <Menu.Item href="https://nebutra.dev" suffix={<ChevronRight className="h-4 w-4" />}>
        Documentation
      </Menu.Item>
    </Menu.Content>
  </Menu.Root>
    </>
  );
}
