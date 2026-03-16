/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function DropdownMenu3Demo() {
  return (
    <>
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Sort by</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Sort order</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuRadioGroup value="asc">
      <DropdownMenuRadioItem value="asc">Ascending</DropdownMenuRadioItem>
      <DropdownMenuRadioItem value="desc">Descending</DropdownMenuRadioItem>
    </DropdownMenuRadioGroup>
  </DropdownMenuContent>
</DropdownMenu>
    </>
  );
}
