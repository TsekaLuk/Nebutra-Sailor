/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { Label, Textarea } from "@nebutra/ui/primitives";

export function LabelDescriptionDemo() {
  return (
    <div className="space-y-1 w-full max-w-sm">
    <Label htmlFor="bio">个人简介 (Bio)</Label>
    <p id="bio-hint" className="text-xs text-muted-foreground mb-2">
      请简要介绍一下您自己。最多 200 个字符。 (Tell us a bit about yourself. Max 200 characters.)
    </p>
    <Textarea id="bio" aria-describedby="bio-hint" maxLength={200} />
  </div>
  );
}
