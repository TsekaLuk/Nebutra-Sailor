"use client";

import { ToggleGroup, ToggleGroupItem } from "@nebutra/ui/primitives";
import * as React from "react";

export function ToggleGroupSingleDemo() {
  return (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left">左 (Left)</ToggleGroupItem>
      <ToggleGroupItem value="center">中 (Center)</ToggleGroupItem>
      <ToggleGroupItem value="right">右 (Right)</ToggleGroupItem>
    </ToggleGroup>
  );
}
