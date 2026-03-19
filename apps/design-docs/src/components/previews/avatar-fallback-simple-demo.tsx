"use client";

import { Avatar, AvatarFallback } from "@nebutra/ui/primitives";
import * as React from "react";

export function AvatarFallbackSimpleDemo() {
  return (
    <Avatar size="md">
      <AvatarFallback size="md">NN</AvatarFallback>
    </Avatar>
  );
}
