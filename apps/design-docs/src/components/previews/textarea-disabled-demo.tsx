"use client";

import { Textarea } from "@nebutra/ui/primitives";
import * as React from "react";

export function TextareaDisabledDemo() {
  return (
    <div className="w-full">
      <Textarea disabled value="This field is read-only" />
    </div>
  );
}
