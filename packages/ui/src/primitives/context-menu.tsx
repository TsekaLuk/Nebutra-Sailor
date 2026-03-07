"use client";

import * as React from "react";
import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import { cn } from "../utils/cn";

// =============================================================================
// Types
// =============================================================================

export interface ContextMenuItemProps {
  /** Menu item label */
  children?: React.ReactNode;
  /**
   * Called when the item is selected (click or keyboard Enter/Space).
   * Maps to Radix's onSelect — fires for both pointer and keyboard interactions.
   * When `href` is set, navigation itself is the selection action and onSelect is not wired.
   */
  onSelect?: (event: Event) => void;
  /** Disable the item */
  disabled?: boolean;
  /** Navigate to this URL when selected (renders as <a>) */
  href?: string;
  /** Element rendered before the label (icon, avatar, etc.) */
  prefix?: React.ReactNode;
  /** Element rendered after the label (shortcut, badge, etc.) */
  suffix?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export interface ContextMenuLabelProps {
  children?: React.ReactNode;
  className?: string;
}

export interface ContextMenuSeparatorProps {
  className?: string;
}

export type ContextMenuContentProps = React.ComponentPropsWithoutRef<
  typeof ContextMenuPrimitive.Content
>;

// =============================================================================
// ContextMenuRoot
// =============================================================================

const ContextMenuRoot = ContextMenuPrimitive.Root;
ContextMenuRoot.displayName = "ContextMenu";

// =============================================================================
// ContextMenuTrigger
// =============================================================================

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;
ContextMenuTrigger.displayName = "ContextMenu.Trigger";

// =============================================================================
// ContextMenuContent
// =============================================================================

const ContextMenuContent = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Content>,
  ContextMenuContentProps
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Portal>
    <ContextMenuPrimitive.Content
      ref={ref}
      className={cn(
        "z-50 min-w-[10rem] overflow-hidden rounded-[var(--radius-md)] border bg-popover",
        "p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = "ContextMenu.Content";

// =============================================================================
// ContextMenuGroup
// =============================================================================

const ContextMenuGroup = ContextMenuPrimitive.Group;
ContextMenuGroup.displayName = "ContextMenu.Group";

// =============================================================================
// ContextMenuLabel
// =============================================================================

const ContextMenuLabel = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Label>,
  ContextMenuLabelProps
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Label
    ref={ref}
    className={cn(
      "px-2 py-1 text-xs font-medium text-muted-foreground",
      className,
    )}
    {...props}
  />
));
ContextMenuLabel.displayName = "ContextMenu.Label";

// =============================================================================
// ContextMenuSeparator
// =============================================================================

const ContextMenuSeparator = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Separator>,
  ContextMenuSeparatorProps
>(({ className, ...props }, ref) => (
  <ContextMenuPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
));
ContextMenuSeparator.displayName = "ContextMenu.Separator";

// =============================================================================
// ContextMenuItem
// =============================================================================

const ContextMenuItem = React.forwardRef<
  React.ElementRef<typeof ContextMenuPrimitive.Item>,
  ContextMenuItemProps
>(({ children, onSelect, disabled, href, prefix, suffix, className }, ref) => {
  const inner = (
    <>
      {prefix && (
        <span className="mr-2 flex shrink-0 items-center text-muted-foreground">
          {prefix}
        </span>
      )}
      <span className="flex-1">{children}</span>
      {suffix && (
        <span className="ml-auto flex shrink-0 items-center text-muted-foreground">
          {suffix}
        </span>
      )}
    </>
  );

  return (
    <ContextMenuPrimitive.Item
      ref={ref}
      {...(disabled !== undefined && { disabled })}
      {...(onSelect && !href ? { onSelect } : {})}
      className={cn(
        "relative flex cursor-default select-none items-center rounded-[var(--radius-md)] px-2 py-1.5",
        "text-sm outline-none transition-colors",
        "focus:bg-accent focus:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      asChild={!!href}
    >
      {href ? <a href={href}>{inner}</a> : inner}
    </ContextMenuPrimitive.Item>
  );
});
ContextMenuItem.displayName = "ContextMenu.Item";

// =============================================================================
// Compound Export
// =============================================================================

/**
 * ContextMenu — Geist-style right-click context menu.
 *
 * @example
 * ```tsx
 * <ContextMenu.Root>
 *   <ContextMenu.Trigger asChild>
 *     <div className="rounded border p-8">Right-click here</div>
 *   </ContextMenu.Trigger>
 *   <ContextMenu.Content>
 *     <ContextMenu.Item onSelect={() => {}}>Edit</ContextMenu.Item>
 *     <ContextMenu.Item onSelect={() => {}}>Delete</ContextMenu.Item>
 *   </ContextMenu.Content>
 * </ContextMenu.Root>
 * ```
 */
export const ContextMenu = {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Content: ContextMenuContent,
  Group: ContextMenuGroup,
  Item: ContextMenuItem,
  Label: ContextMenuLabel,
  Separator: ContextMenuSeparator,
} as const;
