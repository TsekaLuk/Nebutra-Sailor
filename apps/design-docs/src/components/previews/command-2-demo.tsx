"use client";

import * as React from "react";
import { Command2 } from "@nebutra/ui/primitives";

export function Command2Demo() {
  return (
    <CommandDialog open={true}>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Pages">
        <CommandItem>Dashboard</CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
  );
}
