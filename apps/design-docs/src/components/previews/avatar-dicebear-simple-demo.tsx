/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";
import { DiceBearAvatar } from "@nebutra/ui/primitives";

export function AvatarDicebearSimpleDemo() {
  return (
    <div className="flex gap-4">
      <DiceBearAvatar seed="rauchg" avatarStyle="bottts-neutral" size="md" />
      <DiceBearAvatar
        seed="user@example.com"
        avatarStyle="pixel-art"
        options={{ radius: 50 }}
        size="md"
      />
      <DiceBearAvatar seed="guest-session-123" avatarStyle="fun-emoji" size="md" />
      <DiceBearAvatar seed="my-bot-agent" avatarStyle="bottts" size="md" />
    </div>
  );
}
