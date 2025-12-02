"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Check, Copy, File, FileCode, FileText } from "lucide-react";
import { cn } from "../utils";

// =============================================================================
// Types
// =============================================================================

export interface CodeBlockFile {
  /** File name/title displayed in tab */
  title: string;
  /** Code content */
  code: string;
  /** Language for syntax highlighting (auto-detected from title if omitted) */
  language?: string;
}

export interface CodeBlockProps {
  /** Array of code files to display */
  files: CodeBlockFile[];
  /** Initially active file title */
  defaultTitle?: string;
  /** Additional CSS classes */
  className?: string;
  /** Maximum height of code area */
  maxHeight?: string | number;
  /** Show line numbers */
  showLineNumbers?: boolean;
}

// =============================================================================
// Themes
// =============================================================================

const lightTheme = {
  ...nightOwl,
  'pre[class*="language-"]': {
    ...nightOwl['pre[class*="language-"]'],
    background: "transparent",
  },
  'code[class*="language-"]': {
    ...nightOwl['code[class*="language-"]'],
    color: "hsl(var(--foreground))",
  },
  comment: {
    color: "hsl(var(--muted-foreground))",
    fontStyle: "italic",
  },
  punctuation: {
    color: "hsl(var(--foreground))",
  },
  property: {
    color: "#0550FF",
  },
  string: {
    color: "#14532D",
  },
  keyword: {
    color: "#9333EA",
  },
  function: {
    color: "#E45C3A",
  },
  boolean: {
    color: "#9333EA",
  },
  number: {
    color: "#9333EA",
  },
  operator: {
    color: "hsl(var(--foreground))",
  },
};

const darkTheme = {
  ...nightOwl,
  'pre[class*="language-"]': {
    ...nightOwl['pre[class*="language-"]'],
    background: "transparent",
  },
};

// =============================================================================
// Utilities
// =============================================================================

function getLanguageFromFileName(fileName: string): string {
  const ext = fileName.split(".").pop()?.toLowerCase();
  const languageMap: Record<string, string> = {
    js: "javascript",
    jsx: "jsx",
    ts: "typescript",
    tsx: "tsx",
    html: "html",
    css: "css",
    scss: "scss",
    json: "json",
    md: "markdown",
    py: "python",
    rb: "ruby",
    go: "go",
    rs: "rust",
    sh: "bash",
    bash: "bash",
    zsh: "bash",
    yaml: "yaml",
    yml: "yaml",
    sql: "sql",
    graphql: "graphql",
    gql: "graphql",
  };
  return languageMap[ext || ""] || "javascript";
}

function FileIcon({ fileName }: { fileName: string }) {
  const ext = fileName.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "js":
    case "jsx":
    case "ts":
    case "tsx":
      return <FileCode className="h-4 w-4" />;
    case "css":
    case "scss":
      return <FileText className="h-4 w-4" />;
    default:
      return <File className="h-4 w-4" />;
  }
}

// =============================================================================
// Component
// =============================================================================

/**
 * CodeBlock - Multi-file code display with syntax highlighting
 *
 * @description
 * A tabbed code viewer with syntax highlighting, copy functionality,
 * and automatic language detection. Supports light/dark themes.
 *
 * @example Single file
 * ```tsx
 * <CodeBlock
 *   files={[{
 *     title: "example.ts",
 *     code: `const greeting = "Hello World";`
 *   }]}
 * />
 * ```
 *
 * @example Multiple files
 * ```tsx
 * <CodeBlock
 *   files={[
 *     { title: "theme.ts", code: themeCode, language: "typescript" },
 *     { title: "styles.css", code: cssCode, language: "css" },
 *   ]}
 *   defaultTitle="theme.ts"
 * />
 * ```
 *
 * @example With custom height
 * ```tsx
 * <CodeBlock
 *   files={files}
 *   maxHeight={300}
 *   showLineNumbers
 * />
 * ```
 */
export function CodeBlock({
  files,
  defaultTitle,
  className,
  maxHeight = 400,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [activeTitle, setActiveTitle] = useState(
    defaultTitle || files[0]?.title,
  );
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode
  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const activeFile = files.find((file) => file.title === activeTitle);
  const code = activeFile?.code || "";
  const language =
    activeFile?.language || getLanguageFromFileName(activeTitle || "");

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div
      className={cn(
        "relative rounded-lg border bg-card text-card-foreground",
        "backdrop-blur-md",
        className,
      )}
    >
      {/* Tab header */}
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="flex gap-1 overflow-x-auto">
          {files.map(({ title }) => (
            <button
              key={title}
              type="button"
              onClick={() => setActiveTitle(title)}
              className={cn(
                "inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                title === activeTitle
                  ? "bg-secondary text-secondary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <FileIcon fileName={title} />
              <span className="hidden sm:inline">{title}</span>
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => copyToClipboard(code)}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground"
          aria-label="Copy code"
        >
          {copied ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <Check className="h-4 w-4" />
            </motion.div>
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Code content */}
      <div
        className="overflow-auto"
        style={{
          maxHeight:
            typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
        }}
      >
        <SyntaxHighlighter
          language={language}
          style={isDark ? darkTheme : lightTheme}
          showLineNumbers={showLineNumbers}
          customStyle={{
            margin: 0,
            padding: "1rem",
            background: "transparent",
            fontSize: "0.875rem",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
