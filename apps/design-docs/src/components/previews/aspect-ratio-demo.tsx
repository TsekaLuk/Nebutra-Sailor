"use client";

import { AspectRatio } from "@nebutra/ui/primitives";

export function AspectRatioDemo() {
  return (
    <div className="max-w-sm w-full">
      <AspectRatio
        ratio={16 / 9}
        className="overflow-hidden rounded-md bg-muted ring-1 ring-border"
      >
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop"
          alt="Example landscape from Unsplash"
          className="h-full w-full object-cover"
        />
      </AspectRatio>
    </div>
  );
}
