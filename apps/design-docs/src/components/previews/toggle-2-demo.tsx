"use client";

import * as React from "react";
import { Toggle2 } from "@nebutra/ui/primitives";

export function Toggle2Demo() {
  return (
    <Toggle aria-pressed="true" defaultPressed size="lg" className="w-[80px]">
    开启 (On)
  </Toggle>
  );
}
