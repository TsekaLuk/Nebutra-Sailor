"use client";

import * as React from "react";
import { Label, Input } from "@nebutra/ui/primitives";

export function Label3Demo() {
  return (
    <div className="space-y-2 w-full max-w-sm">
    <Label htmlFor="disabled-input" className="opacity-50 cursor-not-allowed">
      禁用的字段 (Disabled field)
    </Label>
    <Input id="disabled-input" disabled />
  </div>
  );
}
