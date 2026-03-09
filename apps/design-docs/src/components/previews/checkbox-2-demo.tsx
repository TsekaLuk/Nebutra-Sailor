"use client";

import * as React from "react";
import { Checkbox2 } from "@nebutra/ui/primitives";

export function Checkbox2Demo() {
  return (
    <div className="flex items-center gap-2">
    <Checkbox indeterminate id="i1" />
    <Label htmlFor="i1">选项 1 (Option 1)</Label>
  </div>
  );
}
