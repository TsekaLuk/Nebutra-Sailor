"use client";
import { Volume2 } from "lucide-react";

import * as React from "react";
import { Slider } from "@nebutra/ui/primitives";

export function Slider2Demo() {
  return (
    <div className="flex items-center gap-3 w-full">
    <Volume2 className="h-4 w-4 shrink-0 text-muted-foreground" />
    <Slider defaultValue={70} max={100} step={1} />
  </div>
  );
}
