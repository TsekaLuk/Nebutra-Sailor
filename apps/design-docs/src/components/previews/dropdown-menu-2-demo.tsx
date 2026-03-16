/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function DropdownMenu2Demo() {
  return (
    <>
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Appearance</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Appearance</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuCheckboxItem checked={true}>
      Toolbar
    </DropdownMenuCheckboxItem>
    <DropdownMenuCheckboxItem checked={false}>
      Sidebar
    </DropdownMenuCheckboxItem>
  </DropdownMenuContent>
</DropdownMenu>
    </>
  );
}
