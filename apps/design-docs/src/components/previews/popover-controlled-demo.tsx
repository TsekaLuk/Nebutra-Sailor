/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { PopoverTrigger, PopoverContent, Popover } from "@nebutra/ui/primitives";
import { BaseButton as Button } from "@nebutra/ui/primitives";

export function PopoverControlledDemo() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(true);
  }, []);

  return (
    <Popover open={open} onOpenChange={setOpen}>
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
