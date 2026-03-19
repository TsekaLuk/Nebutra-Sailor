"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
} from "@nebutra/ui/primitives"

export function Menu3Demo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Actions</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[180px]">
        <DropdownMenuItem>Duplicate</DropdownMenuItem>
        <DropdownMenuItem disabled>Rename...</DropdownMenuItem>
        <DropdownMenuItem disabled>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
