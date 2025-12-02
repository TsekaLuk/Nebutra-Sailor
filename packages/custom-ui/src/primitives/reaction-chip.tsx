"use client";

import * as React from "react";
import { useState, useMemo } from "react";
import { cn } from "../utils/cn";

// =============================================================================
// Types
// =============================================================================

export interface ReactionChipProps {
  /** Callback when an emoji is selected */
  onSelect: (emoji: string) => void;
  /** Available emoji options */
  emojis?: string[];
  /** Currently selected emoji */
  selected?: string;
  /** Additional CSS classes */
  className?: string;
}

export interface ReactionBadgeProps {
  /** Emoji to display */
  emoji: string;
  /** Reaction count */
  count: number;
  /** Whether to show bump animation */
  bump?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export interface MessageWithReactionsProps {
  /** Message text content */
  text: string;
  /** Available emoji options for reactions */
  reactionOptions?: string[];
  /** Additional CSS classes */
  className?: string;
  /** Children to render instead of text */
  children?: React.ReactNode;
}

// =============================================================================
// ReactionChip Component
// =============================================================================

/**
 * ReactionChip - Floating emoji reaction picker
 *
 * A compact chip with emoji buttons for adding reactions.
 * Typically shown on hover over messages.
 *
 * @example Basic usage
 * ```tsx
 * <ReactionChip
 *   onSelect={(emoji) => console.log(emoji)}
 *   selected="👍"
 * />
 * ```
 *
 * @example Custom emojis
 * ```tsx
 * <ReactionChip
 *   emojis={["🔥", "💯", "🙌", "✨"]}
 *   onSelect={handleReaction}
 * />
 * ```
 */
export function ReactionChip({
  onSelect,
  className,
  emojis = ["👍", "❤️", "😂", "🎉"],
  selected,
}: ReactionChipProps) {
  return (
    <div
      className={cn(
        "pointer-events-auto flex items-center gap-1 rounded-full",
        "bg-card/90 px-2 py-1 shadow-sm ring-1 ring-border backdrop-blur",
        "transition-shadow",
        className,
      )}
      role="group"
      aria-label="Add reaction"
    >
      {emojis.map((em) => {
        const isActive = selected === em;
        return (
          <button
            key={em}
            type="button"
            onMouseDown={(evt) => evt.preventDefault()}
            onClick={(evt) => {
              const btn = evt.currentTarget as HTMLButtonElement;
              onSelect(em);
              setTimeout(() => btn.blur(), 0);
            }}
            aria-pressed={isActive}
            className={cn(
              "rounded-full p-1 text-base leading-none",
              "transition-transform duration-150 ease-out",
              "hover:scale-110 focus:scale-110 focus:outline-none",
              isActive && "bg-muted ring-1 ring-border dark:bg-muted/70",
            )}
            aria-label={`React with ${em}`}
            title={`React with ${em}`}
          >
            {em}
          </button>
        );
      })}
    </div>
  );
}

// =============================================================================
// ReactionBadge Component
// =============================================================================

/**
 * ReactionBadge - Display a single reaction with count
 *
 * @example
 * ```tsx
 * <ReactionBadge emoji="👍" count={5} />
 * ```
 */
export function ReactionBadge({
  emoji,
  count,
  bump = false,
  className,
}: ReactionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full",
        "bg-muted px-2 py-0.5 text-xs text-foreground/80 ring-1 ring-border",
        "transition-transform duration-200 ease-out",
        bump ? "scale-110" : "scale-100",
        className,
      )}
      aria-label={`${emoji} ${count}`}
      title={`${emoji} ${count}`}
    >
      <span aria-hidden="true">{emoji}</span>
      <span className="tabular-nums">{count}</span>
    </span>
  );
}

// =============================================================================
// MessageWithReactions Component
// =============================================================================

/**
 * MessageWithReactions - Message card with hover reaction picker
 *
 * A pre-composed message component that shows a reaction chip
 * when hovered, allowing users to react with emojis.
 *
 * @example Basic usage
 * ```tsx
 * <MessageWithReactions text="Great work on this feature!" />
 * ```
 *
 * @example With custom emojis
 * ```tsx
 * <MessageWithReactions
 *   text="Check out this new design"
 *   reactionOptions={["🔥", "💯", "🙌", "✨", "👀"]}
 * />
 * ```
 *
 * @example With children
 * ```tsx
 * <MessageWithReactions reactionOptions={["👍", "❤️"]}>
 *   <p>Custom content here</p>
 *   <img src="/screenshot.png" alt="Screenshot" />
 * </MessageWithReactions>
 * ```
 */
export function MessageWithReactions({
  text,
  reactionOptions = ["👍", "❤️", "😂", "🎉"],
  className,
  children,
}: MessageWithReactionsProps) {
  const [selectedReaction, setSelectedReaction] = useState<string | null>(null);
  const [bump, setBump] = useState(false);

  function handleSelect(emoji: string) {
    setSelectedReaction((prev) => {
      const next = prev === emoji ? null : emoji;
      if (next) {
        setBump(true);
        setTimeout(() => setBump(false), 180);
      }
      return next;
    });
  }

  const activeReactions = useMemo(() => {
    return selectedReaction ? [[selectedReaction, 1] as const] : [];
  }, [selectedReaction]);

  return (
    <div
      className={cn(
        "group relative inline-block max-w-sm",
        "rounded-lg border border-border bg-card px-3 py-2",
        "text-sm text-foreground shadow-sm",
        className,
      )}
    >
      {children || <p className="text-pretty">{text}</p>}

      {/* Reactions row */}
      {activeReactions.length > 0 && (
        <div
          className="mt-2 flex flex-wrap items-center gap-1.5"
          aria-live="polite"
          aria-atomic="false"
        >
          {activeReactions.map(([emoji, count]) => (
            <ReactionBadge
              key={emoji}
              emoji={emoji}
              count={count}
              bump={bump}
            />
          ))}
        </div>
      )}

      {/* Hover reaction chip */}
      <div
        className={cn(
          "pointer-events-none absolute -top-3 right-0 z-10",
          "translate-y-1 opacity-0",
          "transition-all duration-200 ease-out",
          "group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
          "focus-within:pointer-events-auto focus-within:translate-y-0 focus-within:opacity-100",
        )}
      >
        <ReactionChip
          onSelect={handleSelect}
          emojis={reactionOptions}
          selected={selectedReaction ?? undefined}
        />
      </div>
    </div>
  );
}
