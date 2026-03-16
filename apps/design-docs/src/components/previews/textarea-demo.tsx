/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { Label, Textarea } from "@nebutra/ui/primitives";

export function TextareaDemo() {
  return (
    <div className="flex flex-col gap-1.5 w-full">
    <Label htmlFor="message">Message</Label>
    <Textarea
      id="message"
      placeholder="Write your message here..."
      rows={4}
    />
  </div>
  );
}
