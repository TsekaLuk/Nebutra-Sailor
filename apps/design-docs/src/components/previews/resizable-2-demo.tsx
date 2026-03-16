/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import * as React from "react";

export function Resizable2Demo() {
  return (
    <>
<ResizablePanelGroup direction="horizontal" className="h-[300px] w-full max-w-3xl rounded-lg border">
  <ResizablePanel defaultSize={20} minSize={15}>
    <div className="flex h-full items-center justify-center p-6 bg-muted/20">
      <span className="font-semibold">Sidebar</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={60}>
    <div className="flex h-full items-center justify-center p-6 bg-background">
      <span className="font-semibold text-lg max-w-[200px] text-center">Main Content Area</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={20} minSize={15}>
    <div className="flex h-full items-center justify-center p-6 bg-muted/20">
      <span className="font-semibold">Right Panel</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>
    </>
  );
}
