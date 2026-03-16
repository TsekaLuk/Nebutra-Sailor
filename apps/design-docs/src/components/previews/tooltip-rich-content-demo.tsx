/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";
import { GeistTooltip as Tooltip } from "@nebutra/ui/primitives";
import { Button } from "@nebutra/ui/primitives";

export function TooltipRichContentDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <Tooltip text={<>The <b>Evil Rabbit</b> Jumped over the <i>Fence</i>.</>}>
        <Button variant="outline">Rich Content</Button>
      </Tooltip>
    </div>
  );
}
