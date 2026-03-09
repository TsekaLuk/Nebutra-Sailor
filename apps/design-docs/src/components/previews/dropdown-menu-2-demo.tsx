"use client";

import * as React from "react";
import { DropdownMenu2 } from "@nebutra/ui/primitives";

export function DropdownMenu2Demo() {
  return (
    <DropdownMenu>
    <DropdownMenuTrigger asChild>
      <Button variant="outline">排序方式 (Sort by)</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuLabel>排序顺序 (Sort order)</DropdownMenuLabel>
      <DropdownMenuSeparator />
      <DropdownMenuRadioGroup value="asc">
        <DropdownMenuRadioItem value="asc">升序 (Ascending)</DropdownMenuRadioItem>
        <DropdownMenuRadioItem value="desc">降序 (Descending)</DropdownMenuRadioItem>
      </DropdownMenuRadioGroup>
    </DropdownMenuContent>
  </DropdownMenu>
  );
}
