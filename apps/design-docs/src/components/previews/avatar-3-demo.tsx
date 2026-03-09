"use client";

import * as React from "react";
import { AvatarGroup } from "@nebutra/ui/primitives";

export function Avatar3Demo() {
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
