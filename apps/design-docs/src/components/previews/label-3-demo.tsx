/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Label3Demo() {
  return (
    <>
<div className="space-y-1 w-full max-w-sm">
  <Label htmlFor="bio">Bio</Label>
  <p id="bio-hint" className="text-xs text-muted-foreground mb-2">
    Tell us a bit about yourself. Max 200 characters.
  </p>
  <Textarea id="bio" aria-describedby="bio-hint" maxLength={200} />
</div>
    </>
  );
}
