"use client";

import * as React from "react";
import { Input } from "@nebutra/ui/primitives"; // Usually Input is exported

export function InputWithAddonsDemo() {
  return (
    <div className="flex flex-col gap-4">
      {/* Domain hint */}
      <Input suffix={<span className="text-xs text-muted-foreground">@nebutra.com</span>} placeholder="username" />

      {/* Currency */}
      <Input
        prefix={<span className="text-xs text-muted-foreground">$</span>}
        suffix={<span className="text-xs font-medium border-l pl-2 text-muted-foreground">USD</span>}
        type="number"
        placeholder="0.00"
      />
    </div>
  );
}
