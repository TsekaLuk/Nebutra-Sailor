"use client";

import * as React from "react";
import { Textarea2 } from "@nebutra/ui/primitives";

export function Textarea2Demo() {
  return (
    <div className="flex flex-col gap-1 w-full">
    <Textarea
      defaultValue=""
      placeholder="Type here..."
      maxLength={500}
    />
    <span className="text-xs text-muted-foreground text-right w-full">
      0/500
    </span>
  </div>
  );
}
