/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@nebutra/ui/primitives";

export function InputPasswordRevealDemo() {
  const [shown, setShown] = useState(false);
  const Icon = shown ? EyeOff : Eye;

  return (
    <div className="relative w-full">
      <Input
        type={shown ? "text" : "password"}
        className="pr-9"
        placeholder="Password…"
      />
      <button
        type="button"
        aria-label={shown ? "Hide password" : "Show password"}
        onClick={() => setShown((v) => !v)}
        className="absolute right-2 top-1/2 -translate-y-1/2 flex h-5 w-5 items-center justify-center rounded text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <Icon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
