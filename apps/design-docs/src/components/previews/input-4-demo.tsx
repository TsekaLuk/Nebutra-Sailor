"use client";

import * as React from "react";
import { Label, Input } from "@nebutra/ui/primitives";

export function Input4Demo() {
  return (
    <div className="flex flex-col gap-1.5 w-full">
    <Label htmlFor="email-err">Email address</Label>
    <Input
      id="email-err"
      type="email"
      defaultValue="not-an-email"
      className="border-destructive focus-visible:ring-destructive"
      aria-invalid="true"
      aria-describedby="email-error"
    />
    <div id="email-error" className="text-xs text-destructive">
      Please enter a valid email address.
    </div>
  </div>
  );
}
