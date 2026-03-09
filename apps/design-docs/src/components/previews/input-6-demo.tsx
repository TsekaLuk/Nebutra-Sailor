"use client";

import * as React from "react";
import { Input6 } from "@nebutra/ui/primitives";

export function Input6Demo() {
  return (
    {/* Domain hint */}
  <Input suffix={<span className="text-xs">@nebutra.com</span>} placeholder="username" />

  {/* Currency */}
  <Input
    prefix={<span className="text-xs">$</span>}
    suffix={<span className="text-xs font-medium border-l pl-2">USD</span>}
    type="number"
    placeholder="0.00"
  />
  );
}
