/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function HoverCardDemo() {
  return (
    <>
<HoverCard>
    <HoverCardTrigger className="text-sm font-medium underline underline-offset-4 cursor-pointer">
      @johndoe
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/johndoe.png" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@johndoe</h4>
          <p className="text-sm text-muted-foreground">Full-stack engineer. Building great products.</p>
          <p className="text-xs text-muted-foreground">Joined January 2022</p>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
    </>
  );
}
