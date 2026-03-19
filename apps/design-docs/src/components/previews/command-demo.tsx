"use client"
import { User, Search } from "lucide-react"

import * as React from "react"
import {
  CommandSeparator,
  Command,
  CommandList,
  CommandItem,
  Calendar,
  CommandShortcut,
  CommandGroup,
  CommandEmpty,
  CommandInput,
} from "@nebutra/ui/primitives"

export function CommandDemo() {
  return (
    <Command className="w-96 h-[300px] rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            Calendar
          </CommandItem>
          <CommandItem>
            <Search className="mr-2 h-4 w-4" />
            Search
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            Profile
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
