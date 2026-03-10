"use client";

import * as React from "react";
import { Avatar, AvatarFallback } from "@nebutra/ui/primitives";

export function Avatar2Demo() {
  return (
    <Avatar size="md">
    <AvatarFallback size="md">NN</AvatarFallback>
  </Avatar>
  );
}
