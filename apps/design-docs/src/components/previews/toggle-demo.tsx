"use client";

import { Toggle } from "@nebutra/ui/primitives";
import { Bold } from "lucide-react";

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold" size="lg">
      <Bold className="size-4" />
    </Toggle>
  );
}
