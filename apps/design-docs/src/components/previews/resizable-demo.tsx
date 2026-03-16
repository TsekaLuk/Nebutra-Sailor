/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
"use client";

import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@nebutra/ui/primitives";

export function ResizableDemo() {
  return (
    <ResizablePanelGroup direction="horizontal" className="h-[300px] w-full max-w-3xl rounded-lg border">
      <ResizablePanel defaultSize={20} minSize={15}>
        <div className="flex h-full items-center justify-center p-6 bg-muted/20">
          <span className="font-semibold">侧边栏 (Sidebar)</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={60}>
        <div className="flex h-full items-center justify-center p-6 bg-background">
          <span className="font-semibold text-lg max-w-[200px] text-center">主内容区域 (Main Content Area)</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={20} minSize={15}>
        <div className="flex h-full items-center justify-center p-6 bg-muted/20">
          <span className="font-semibold">右侧面板 (Right Panel)</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
