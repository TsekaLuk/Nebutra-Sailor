"use client";

import * as React from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "../utils/cn";

const snippetVariants = {
  flat: "bg-muted",
  bordered: "border-2 border-border bg-transparent",
  shadow: "shadow-md bg-background",
  solid: "bg-foreground text-background",
} as const;

const snippetColors = {
  default: "",
  primary: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-secondary/10 text-secondary border-secondary/20",
  success:
    "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400",
  warning:
    "bg-amber-500/10 text-amber-600 border-amber-500/20 dark:text-amber-400",
  danger: "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400",
} as const;

const snippetSizes = {
  sm: "text-xs px-2 py-1 gap-1",
  md: "text-sm px-3 py-1.5 gap-2",
  lg: "text-base px-4 py-2 gap-3",
} as const;

const snippetRadius = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
} as const;

export type SnippetVariant = keyof typeof snippetVariants;
export type SnippetColor = keyof typeof snippetColors;
export type SnippetSize = keyof typeof snippetSizes;
export type SnippetRadius = keyof typeof snippetRadius;

/**
 * Props for the Snippet component
 */
export interface SnippetProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "onCopy"
> {
  /** Code content (string or array for multiline) */
  children?: React.ReactNode;
  /** Code string for copying (if different from children) */
  codeString?: string;
  /** Visual variant */
  variant?: SnippetVariant;
  /** Color scheme */
  color?: SnippetColor;
  /** Size */
  size?: SnippetSize;
  /** Border radius */
  radius?: SnippetRadius;
  /** Symbol prefix (default: "$") */
  symbol?: string | React.ReactNode;
  /** Hide the symbol */
  hideSymbol?: boolean;
  /** Hide the copy button */
  hideCopyButton?: boolean;
  /** Disable copy functionality */
  disableCopy?: boolean;
  /** Custom copy icon */
  copyIcon?: React.ReactNode;
  /** Custom check/copied icon */
  checkIcon?: React.ReactNode;
  /** Timeout for showing copied state (ms) */
  timeout?: number;
  /** Callback when code is copied */
  onCopy?: (value: string) => void;
}

/**
 * Snippet - Code snippet display with copy functionality
 *
 * A component for displaying inline or multiline code snippets
 * with an optional copy-to-clipboard button.
 *
 * @example Basic usage
 * ```tsx
 * <Snippet>npm install @heroui/react</Snippet>
 * ```
 *
 * @example Without symbol
 * ```tsx
 * <Snippet hideSymbol>const x = 1;</Snippet>
 * ```
 *
 * @example Custom symbol
 * ```tsx
 * <Snippet symbol=">">{`git clone repo`}</Snippet>
 * ```
 *
 * @example Multiline
 * ```tsx
 * <Snippet>
 *   npm install package
 *   yarn add package
 *   pnpm add package
 * </Snippet>
 * ```
 *
 * @example Colored variants
 * ```tsx
 * <Snippet color="success">Success message</Snippet>
 * <Snippet color="danger">Error message</Snippet>
 * ```
 *
 * @example Without copy button
 * ```tsx
 * <Snippet hideCopyButton>Read-only snippet</Snippet>
 * ```
 */
export function Snippet({
  children,
  codeString,
  variant = "flat",
  color = "default",
  size = "md",
  radius = "lg",
  symbol = "$",
  hideSymbol = false,
  hideCopyButton = false,
  disableCopy = false,
  copyIcon,
  checkIcon,
  timeout = 2000,
  onCopy,
  className,
  ...props
}: SnippetProps) {
  const [copied, setCopied] = React.useState(false);

  const getTextContent = (): string => {
    if (codeString) return codeString;
    if (typeof children === "string") return children;
    if (Array.isArray(children)) {
      return children
        .map((child) => (typeof child === "string" ? child : ""))
        .join("\n");
    }
    return "";
  };

  const handleCopy = async () => {
    if (disableCopy) return;

    const text = getTextContent();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      onCopy?.(text);
      setTimeout(() => setCopied(false), timeout);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const renderContent = () => {
    if (typeof children === "string") {
      const lines = children.split("\n").filter((line) => line.trim());
      if (lines.length > 1) {
        return lines.map((line, index) => (
          <div key={index} className="flex items-center gap-2">
            {!hideSymbol && (
              <span className="select-none opacity-50">{symbol}</span>
            )}
            <span>{line}</span>
          </div>
        ));
      }
      return (
        <div className="flex items-center gap-2">
          {!hideSymbol && (
            <span className="select-none opacity-50">{symbol}</span>
          )}
          <span>{children}</span>
        </div>
      );
    }

    if (Array.isArray(children)) {
      return children.map((child, index) => (
        <div key={index} className="flex items-center gap-2">
          {!hideSymbol && (
            <span className="select-none opacity-50">{symbol}</span>
          )}
          <span>{child}</span>
        </div>
      ));
    }

    return (
      <div className="flex items-center gap-2">
        {!hideSymbol && (
          <span className="select-none opacity-50">{symbol}</span>
        )}
        <span>{children}</span>
      </div>
    );
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-between font-mono",
        snippetVariants[variant],
        color !== "default" && snippetColors[color],
        snippetSizes[size],
        snippetRadius[radius],
        className,
      )}
      {...props}
    >
      <pre className="m-0 flex flex-col overflow-x-auto whitespace-pre">
        {renderContent()}
      </pre>

      {!hideCopyButton && (
        <button
          type="button"
          onClick={handleCopy}
          disabled={disableCopy}
          className={cn(
            "ml-2 flex-shrink-0 rounded p-1 transition-colors",
            "hover:bg-foreground/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            "disabled:cursor-not-allowed disabled:opacity-50",
          )}
          aria-label={copied ? "Copied" : "Copy to clipboard"}
        >
          {copied
            ? checkIcon || <Check className="size-4 text-green-500" />
            : copyIcon || <Copy className="size-4 opacity-70" />}
        </button>
      )}
    </div>
  );
}
