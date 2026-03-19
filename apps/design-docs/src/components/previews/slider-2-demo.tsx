"use client";

import { Slider } from "@nebutra/ui/primitives";
import * as React from "react";
export function Slider2Demo() {
  return (
    <div className="w-full">
      <Slider defaultValue={50} min={0} max={100} step={5} />
    </div>
  );
}
