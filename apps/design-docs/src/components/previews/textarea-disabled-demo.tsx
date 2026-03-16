/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { Textarea } from "@nebutra/ui/primitives";

export function TextareaDisabledDemo() {
  return (
    <div className="w-full">
    <Textarea disabled value="This field is read-only" />
  </div>
  );
}
