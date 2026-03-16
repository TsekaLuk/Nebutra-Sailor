"use client";

import React, { useState, isValidElement, useEffect, useCallback } from "react";
import type { ReactNode, ReactElement } from "react";
import { cn } from "@nebutra/ui/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@nebutra/ui/primitives";
import { Copy, Check } from "@nebutra/icons";

interface ComponentPreviewProps {
  children: ReactNode;
  code?: string;
  className?: string;
  name?: string; // Kept for backwards compatibility with any remaining usages
}

function extractTextFromReactNode(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(extractTextFromReactNode).join("");
  }
  if (isValidElement(node)) {
    // Some implementations attach __rawString__ or raw directly as a prop
    const props = node.props as Record<string, unknown>;
    if (typeof props.__rawString__ === "string") {
      return props.__rawString__;
    }
    if (typeof props.raw === "string") {
      return props.raw;
    }
    return extractTextFromReactNode(props.children as ReactNode);
  }
  return "";
}

function CopyButton({ value }: { value: string }) {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(value);
      setHasCopied(true);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  }, [value]);

  return (
    <button
      onClick={copyToClipboard}
      className="absolute right-4 top-4 z-10 hidden items-center justify-center rounded-md border bg-muted/50 p-2 text-muted-foreground backdrop-blur opacity-0 transition-opacity hover:bg-muted group-hover:opacity-100 sm:flex"
      aria-label="Copy code to clipboard"
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

export function ComponentPreview({
  children,
  code: externalCode,
  className,
}: ComponentPreviewProps) {
  // Extract <pre> tags from children (which Fumadocs MDX passes for code blocks)
  const previewContent: ReactNode[] = [];
  let codeElement: ReactElement | null = null;
  let codeRawString = externalCode || "";

  React.Children.forEach(children, (child) => {
    if (isValidElement(child)) {
      const isCodeBlock =
        child.type === "pre" ||
        child.type === "figure" ||
        (typeof child.type === "function" && child.type.name === "CodeBlock") ||
        (child.props as Record<string, unknown>).mdxType === "pre" ||
        (child.props as Record<string, unknown>).mdxType === "CodeBlock" ||
        "allowCopy" in (child.props as Record<string, unknown>) ||
        "viewportProps" in (child.props as Record<string, unknown>) ||
        ((child.props as Record<string, unknown>).className as string)?.includes("shiki"); // FumaDocs / Rehype Pretty Code

      if (isCodeBlock) {
        codeElement = child;
        if (!codeRawString) {
          codeRawString = extractTextFromReactNode(child);
        }
      } else {
        previewContent.push(child);
      }
    } else {
      previewContent.push(child);
    }
  });

  const hasCode = !!codeElement || !!externalCode;

  if (!hasCode) {
    return (
      <div className="my-8 overflow-hidden rounded-xl border border-[var(--neutral-6)] bg-card shadow-sm">
        <div
          className={cn(
            "not-prose relative flex min-h-[350px] w-full flex-wrap items-center justify-center p-10",
            "bg-[radial-gradient(var(--neutral-6)_1px,transparent_1px)] [background-size:16px_16px]",
            className
          )}
        >
          {previewContent}
        </div>
      </div>
    );
  }

  return (
    <Tabs defaultValue="preview" className="my-8 relative w-full group">
      <div className="flex items-center justify-between pb-3">
        <TabsList variant="line" size="sm" className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="preview"
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[selected]:border-b-primary data-[selected]:text-foreground"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-medium text-muted-foreground shadow-none transition-none data-[selected]:border-b-primary data-[selected]:text-foreground"
          >
            Code
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="preview" className="m-0 overflow-hidden rounded-xl border border-border bg-card shadow-sm">
        <div
          className={cn(
            "not-prose relative flex min-h-[350px] w-full flex-wrap items-center justify-center p-10",
            "bg-[radial-gradient(var(--neutral-6)_1px,transparent_1px)] [background-size:16px_16px]",
            className
          )}
        >
          {previewContent}
        </div>
      </TabsContent>

      <TabsContent value="code" className="m-0 relative group">
        <div className="w-full overflow-hidden rounded-xl border border-border bg-muted/50">
          {codeRawString && <CopyButton value={codeRawString} />}
          {codeElement ? (
            <div className="w-full [&_figure]:m-0 [&_figure]:border-0 [&_figure]:rounded-none [&_code]:text-[13px] [&_code]:leading-relaxed [&_pre]:max-h-[600px] [&_pre]:overflow-auto">
              {codeElement}
            </div>
          ) : (
            <pre className="p-4 text-sm bg-transparent overflow-x-auto text-muted-foreground w-full max-h-[600px]">
              <code>
                {externalCode?.split('\n').map((line, i) => (
                  <span key={i} className="block">{line || " "}</span>
                ))}
              </code>
            </pre>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
