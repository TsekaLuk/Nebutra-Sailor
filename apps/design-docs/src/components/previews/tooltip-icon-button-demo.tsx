/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";
import { GeistTooltip as Tooltip } from "@nebutra/ui/primitives";
import { Button } from "@nebutra/ui/primitives";
import { Plus } from "lucide-react";

export function TooltipIconButtonDemo() {
  return (
    <div className="flex items-center justify-center p-8">
      <Tooltip text="Add item">
        <Button variant="outline" size="icon">
          <Plus className="w-4 h-4" />
        </Button>
      </Tooltip>
    </div>
  );
}
