/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function BasePopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Show Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[300px] text-sm space-y-2" side="top">
        <p className="font-medium">Premium Plan</p>
        <p className="text-muted-foreground">
          Advanced analytics provides deeper insights into your data, including trends, predictions, and detailed user behavior.
        </p>
        <p className="flex items-center space-x-1">
          <Badge variant="destructive" size="sm">Note!</Badge>
          <span className="text-xs text-muted-foreground">Plan upgrade is required.</span>
        </p>
      </PopoverContent>
    </Popover>
  )
}

export function BasePopoverDemo() {
  return null; // Update this with actual rendering logic
}
