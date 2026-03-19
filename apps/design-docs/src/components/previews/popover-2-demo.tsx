"use client";

import { Button, Popover, PopoverContent, PopoverTrigger } from "@nebutra/ui/primitives";
import * as React from "react";
export function Popover2Demo() {
  return (
    <Popover defaultOpen={true}>
      <PopoverTrigger asChild>
        <Button>Toggle Popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p className="mb-4 text-sm">Controlled popover content</p>
        <Button variant="outline" size="sm">
          Close
        </Button>
      </PopoverContent>
    </Popover>
  );
}
