"use client"

import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  Button,
} from "@nebutra/ui/primitives"
import { ChevronRight } from "lucide-react"

export function Menu4Demo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">External Links</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-[180px]">
        <DropdownMenuItem>
          GitHub Repo
          <ChevronRight className="h-4 w-4 ml-auto" />
        </DropdownMenuItem>
        <DropdownMenuItem>
          Documentation
          <ChevronRight className="h-4 w-4 ml-auto" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
