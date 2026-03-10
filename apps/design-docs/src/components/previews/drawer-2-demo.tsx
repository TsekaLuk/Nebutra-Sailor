"use client";

import * as React from "react";
import { DrawerTitle, DrawerTrigger, DrawerContent, DrawerHeader, Drawer, Button } from "@nebutra/ui/primitives";

export function Drawer2Demo() {
  return (
    <Drawer direction="right">
    <DrawerTrigger asChild>
      <Button>打开侧边栏 (Open Sidebar)</Button>
    </DrawerTrigger>
    <DrawerContent className="w-80 h-full p-4 mt-0 ml-auto mr-0 mb-0">
      <DrawerHeader>
        <DrawerTitle>导航 (Navigation)</DrawerTitle>
      </DrawerHeader>
    </DrawerContent>
  </Drawer>
  );
}
