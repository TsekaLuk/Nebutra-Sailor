"use client";

import { ScrollArea, ScrollBar } from "@nebutra/ui/primitives";

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="w-full max-w-[400px] whitespace-nowrap rounded-md border text-left mb-6">
      <div className="flex w-max space-x-4 p-4">
        {Array.from({ length: 10 }, (_, i) => (
          <figure key={i} className="shrink-0">
            <div className="h-40 w-40 rounded-md bg-muted flex items-center justify-center text-muted-foreground">Image {i + 1}</div>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
