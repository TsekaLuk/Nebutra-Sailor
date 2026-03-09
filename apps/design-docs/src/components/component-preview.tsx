"use client";

import React, { useState, isValidElement } from "react";
import type { ReactNode, ReactElement } from "react";
import { cn } from "@nebutra/ui/utils";

interface ComponentPreviewProps {
  children: ReactNode;
  code?: string;
  className?: string;
  name?: string; // Kept for backwards compatibility with any remaining usages
}

export function ComponentPreview({
  children,
  code: externalCode,
  className,
}: ComponentPreviewProps) {
  const [open, setOpen] = useState(false);

  // Extract <pre> tags from children (which Fumadocs MDX passes for code blocks)
  const previewContent: ReactNode[] = [];
  let codeElement: ReactElement | null = null;

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
      } else {
        previewContent.push(child);
      }
    } else {
      previewContent.push(child);
    }
  });

  const hasCode = !!codeElement || !!externalCode;

  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[var(--neutral-6)] bg-card shadow-sm">
      {/* Preview area with subtle dot grid background */}
      <div
        className={cn(
          "not-prose relative flex min-h-[350px] w-full flex-wrap items-center justify-center p-10",
          "bg-[radial-gradient(var(--neutral-6)_1px,transparent_1px)] [background-size:16px_16px]",
          className
        )}
      >
        {previewContent}
      </div>

      {/* Code toggle */}
      {hasCode && (
        <div className="border-t border-[var(--neutral-6)]">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex w-full items-center gap-2 px-4 py-3 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/30 active:bg-muted/50"
          >
            <svg
              className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            {open ? "Hide code" : "Show code"}
          </button>
          {open && (
            <div className="w-full overflow-hidden rounded-b-xl border-t border-[var(--neutral-6)]">
              {codeElement ? (
                <div className="w-full [&_figure]:m-0 [&_figure]:border-0 [&_figure]:rounded-none [&_code]:text-[13px] [&_code]:leading-relaxed">
                  {codeElement}
                </div>
              ) : (
                <pre className="p-4 text-sm bg-muted/50 overflow-x-auto text-muted-foreground w-full">
                  <code>
                    {externalCode?.split('\n').map((line, i) => (
                      <span key={i} className="block">{line || " "}</span>
                    ))}
                  </code>
                </pre>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
