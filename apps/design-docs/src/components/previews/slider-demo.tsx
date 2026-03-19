"use client";

import { Slider } from "@nebutra/ui/primitives";
import * as React from "react";

export function SliderDemo() {
  return (
    <div className="space-y-4 w-full">
      <Slider defaultValue={50} max={100} step={1} />
    </div>
  );
}
