/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

;
import { Bold } from "lucide-react";

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold" size="lg">
      <Bold className="size-4" />
    </Toggle>
  );
}
