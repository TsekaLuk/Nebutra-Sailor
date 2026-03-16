/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";
import { GeistTooltip as Tooltip } from "@nebutra/ui/primitives";
import { Button } from "@nebutra/ui/primitives";

export function TooltipDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <Tooltip text="The Evil Rabbit Jumped over the Fence">
        <Button variant="outline">Hover me</Button>
      </Tooltip>
    </div>
  );
}
