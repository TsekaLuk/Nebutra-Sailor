"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "fumadocs-ui/components/tabs";
import type { ReactNode } from "react";

interface ComponentPreviewProps {
  children: ReactNode;
  code?: string;
  className?: string;
}

export function ComponentPreview({
  children,
  code,
  className,
}: ComponentPreviewProps) {
  return (
    <Tabs defaultValue="preview" className="my-6">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        {code && <TabsTrigger value="code">Code</TabsTrigger>}
      </TabsList>
      <TabsContent
        value="preview"
        className={`rounded-lg border bg-background p-6 ${className ?? ""}`}
      >
        {children}
      </TabsContent>
      {code && (
        <TabsContent value="code">
          <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
            <code>{code}</code>
          </pre>
        </TabsContent>
      )}
    </Tabs>
  );
}
