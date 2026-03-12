"use client";

import * as React from "react";
import { TooltipTrigger, Tooltip, TooltipProvider, TooltipContent, Button } from "@nebutra/ui/primitives";

export function TooltipInstantDemo() {
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
