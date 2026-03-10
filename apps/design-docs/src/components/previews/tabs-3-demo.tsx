"use client";

import * as React from "react";
import { Tabs, TabsTrigger, TabsList, TabsContent } from "@nebutra/ui/primitives";

export function Tabs3Demo() {
  return (
    <Tabs defaultValue="tab1" className="w-[400px]">
    <TabsList shape="pill" className="w-full grid-cols-2 grid">
      <TabsTrigger value="tab1">选项卡 1 (Tab 1)</TabsTrigger>
      <TabsTrigger value="tab2">选项卡 2 (Tab 2)</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1" className="p-4 mt-2">选项卡 1 内容 (Tab 1 Content)</TabsContent>
    <TabsContent value="tab2" className="p-4 mt-2">选项卡 2 内容 (Tab 2 Content)</TabsContent>
  </Tabs>
  );
}
