/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@nebutra/ui/primitives"

export function HoverCard2Demo() {
  return (
    <HoverCard>
      <HoverCardTrigger className="inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-md)] text-sm font-medium transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2 cursor-pointer">
        Visit documentation
      </HoverCardTrigger>
      <HoverCardContent side="top" className="w-72">
        <div className="space-y-2">
          <h4 className="font-semibold">Nebutra Docs</h4>
          <p className="text-sm text-muted-foreground">Comprehensive guides and API references for building with Nebutra.</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
