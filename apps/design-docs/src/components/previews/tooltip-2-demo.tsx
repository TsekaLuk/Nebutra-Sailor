"use client";

import * as React from "react";
import { Tooltip2 } from "@nebutra/ui/primitives";

export function Tooltip2Demo() {
  return (
    <TooltipProvider>
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Button>即时显示 (Instant)</Button>
      </TooltipTrigger>
      <TooltipContent>立即显示内容 (Shows immediately)</TooltipContent>
    </Tooltip>
  </TooltipProvider>
  );
}
