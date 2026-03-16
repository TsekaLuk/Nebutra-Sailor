/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Drawer2Demo() {
  return (
    <>
<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Settings</Button>
  </DrawerTrigger>
  <DrawerContent className="p-4">
    <DrawerHeader>
      <DrawerTitle>Settings</DrawerTitle>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">Close</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
    </>
  );
}
