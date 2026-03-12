"use client";

import * as React from "react";
import { Separator } from "@nebutra/ui/primitives";

export function SeparatorWithTextI18nDemo() {
  return (
    <div className="relative w-full">
    <Separator />
    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-fd-background px-2 text-xs text-muted-foreground">
      或 (OR)
    </span>
  </div>
  );
}
