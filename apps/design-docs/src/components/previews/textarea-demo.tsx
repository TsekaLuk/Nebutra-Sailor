"use client";

import { Label, Textarea } from "@nebutra/ui/primitives";
import * as React from "react";

export function TextareaDemo() {
  return (
    <div className="gap-1.5 flex w-full flex-col">
      <Label htmlFor="message">Message</Label>
      <Textarea id="message" placeholder="Write your message here..." rows={4} />
    </div>
  );
}
