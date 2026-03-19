"use client";

import { AvatarGroup } from "@nebutra/ui/primitives";
import * as React from "react";

export function AvatarGroupSimpleDemo() {
  return (
    <AvatarGroup
      items={[
        { alt: "user1", fallback: "U1" },
        { alt: "user2", fallback: "U2" },
        { alt: "user3", fallback: "U3" },
        { alt: "user4", fallback: "U4" },
        { alt: "user5", fallback: "U5" },
      ]}
      max={4}
      size="sm"
    />
  );
}
