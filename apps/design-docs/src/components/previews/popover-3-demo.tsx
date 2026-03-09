"use client";

import * as React from "react";
import { Popover3 } from "@nebutra/ui/primitives";

export function Popover3Demo() {
  return (
    <Popover defaultOpen={true}>
    <PopoverTrigger asChild>
      <Button>Toggle Popover</Button>
    </PopoverTrigger>
    <PopoverContent>
      <p className="mb-4 text-sm">Controlled popover content</p>
      <Button variant="outline" size="sm">Close</Button>
    </PopoverContent>
  </Popover>
  );
}
