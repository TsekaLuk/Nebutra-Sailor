/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import { Edit2, Trash2, Copy } from "lucide-react"

<ContextMenu.Root>
  <ContextMenu.Trigger asChild>
    <div className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">Right-click here</div>
  </ContextMenu.Trigger>
  <ContextMenu.Content>
    <ContextMenu.Item prefix={<Edit2 className="h-4 w-4" />} onSelect={() => {}}>
      Edit
    </ContextMenu.Item>
    <ContextMenu.Item prefix={<Copy className="h-4 w-4" />} onSelect={() => {}}>
      Copy
    </ContextMenu.Item>
    <ContextMenu.Separator />
    <ContextMenu.Item prefix={<Trash2 className="h-4 w-4" />} onSelect={() => {}}>
      Delete
    </ContextMenu.Item>
  </ContextMenu.Content>
</ContextMenu.Root>

export function ContextMenuWithIconsDemo() {
  return null; // Update this with actual rendering logic
}
