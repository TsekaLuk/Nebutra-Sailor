/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { ChevronDown } from "lucide-react"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@nebutra/ui/primitives"

export function Collapsible2Demo() {
  return (
    <Collapsible className="w-80 border rounded-md p-4 bg-background shadow-sm">
      <CollapsibleTrigger className="flex w-full items-center justify-between font-medium">
        Advanced Options
        <ChevronDown className="h-4 w-4" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="space-y-2 pt-4">
          <p className="text-sm text-muted-foreground">Advanced configuration here.</p>
          <div className="rounded-md border p-3 font-mono text-xs text-muted-foreground bg-muted/50">
            {"{ \"debug\": true, \"level\": \"verbose\" }"}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
