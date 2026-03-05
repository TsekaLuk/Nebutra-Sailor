"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Lock } from "lucide-react";
import { cn } from "../utils/cn";

// =============================================================================
// Types
// =============================================================================

export interface MenuTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Adds a rotating ChevronDown icon to the right of the label */
  chevron?: boolean;
}

export interface MenuContentProps
  extends React.ComponentPropsWithoutRef<
    typeof DropdownMenuPrimitive.Content
  > {}

export interface MenuItemProps {
  /** Icon or element rendered to the left of the label */
  prefix?: React.ReactNode;
  /**
   * Element rendered to the right of the label.
   * Overridden by the lock icon when `locked` is true.
   */
  suffix?: React.ReactNode;
  /** Grays out the item and removes pointer events */
  disabled?: boolean;
  /**
   * Marks the item as permission-gated. Renders a lock icon suffix and
   * prevents interaction — distinct from `disabled` semantically.
   */
  locked?: boolean;
  /** Renders the item as an anchor tag navigating to this URL */
  href?: string;
  /** Click / keyboard select handler */
  onSelect?: (event: Event) => void;
  children: React.ReactNode;
  className?: string;
}

export interface MenuLabelProps {
  children: React.ReactNode;
  className?: string;
}

export interface MenuSeparatorProps {
  className?: string;
}

// =============================================================================
// MenuRoot
// =============================================================================

function MenuRoot(
  props: React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Root>,
) {
  return <DropdownMenuPrimitive.Root {...props} />;
}
MenuRoot.displayName = "Menu";

// =============================================================================
// MenuTrigger
// =============================================================================

const MenuTrigger = React.forwardRef<HTMLButtonElement, MenuTriggerProps>(
  ({ chevron = false, className, children, ...props }, ref) => (
    <DropdownMenuPrimitive.Trigger asChild>
      <button
        ref={ref}
        type="button"
        className={cn(
          "inline-flex items-center gap-1.5 rounded-[var(--radius-md)] px-3 py-1.5 text-sm font-medium",
          "bg-[var(--neutral-3)] text-[var(--neutral-12)]",
          "hover:bg-[var(--neutral-4)] transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-[var(--blue-9)] focus:ring-offset-1",
          // Rotate chevron when open via Radix data-state on the Trigger
          "[&[data-state=open]>svg:last-child]:rotate-180",
          className,
        )}
        {...props}
      >
        {children}
        {chevron && (
          <ChevronDown
            className="h-4 w-4 shrink-0 transition-transform duration-200"
            aria-hidden="true"
          />
        )}
      </button>
    </DropdownMenuPrimitive.Trigger>
  ),
);
MenuTrigger.displayName = "Menu.Trigger";

// =============================================================================
// MenuContent
// =============================================================================

const MenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  MenuContentProps
>(({ className, sideOffset = 4, align = "start", ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      align={align}
      className={cn(
        "z-50 min-w-40 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--neutral-6)]",
        "bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className,
      )}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
MenuContent.displayName = "Menu.Content";

// =============================================================================
// MenuItem
// =============================================================================

const itemBaseClass = cn(
  "relative flex cursor-default select-none items-center gap-2",
  "rounded-[var(--radius-md)] px-2 py-1.5 text-sm outline-none",
  "transition-colors",
  "focus:bg-accent focus:text-accent-foreground",
  "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
);

function MenuItem({
  prefix,
  suffix,
  disabled = false,
  locked = false,
  href,
  onSelect,
  children,
  className,
}: MenuItemProps) {
  const isUnavailable = disabled || locked;
  const resolvedSuffix = locked ? (
    <Lock className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
  ) : (
    suffix
  );

  const inner = (
    <>
      {prefix && (
        <span className="shrink-0 text-muted-foreground" aria-hidden="true">
          {prefix}
        </span>
      )}
      <span className="flex-1">{children}</span>
      {resolvedSuffix && (
        <span className="ml-auto shrink-0 text-muted-foreground text-xs">
          {resolvedSuffix}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <DropdownMenuPrimitive.Item
        asChild
        disabled={isUnavailable}
        onSelect={onSelect}
        className={cn(itemBaseClass, className)}
      >
        <a href={href}>{inner}</a>
      </DropdownMenuPrimitive.Item>
    );
  }

  return (
    <DropdownMenuPrimitive.Item
      disabled={isUnavailable}
      onSelect={onSelect}
      className={cn(itemBaseClass, className)}
    >
      {inner}
    </DropdownMenuPrimitive.Item>
  );
}
MenuItem.displayName = "Menu.Item";

// =============================================================================
// MenuLabel
// =============================================================================

function MenuLabel({ children, className }: MenuLabelProps) {
  return (
    <DropdownMenuPrimitive.Label
      className={cn(
        "px-2 py-1.5 text-xs font-medium text-muted-foreground",
        className,
      )}
    >
      {children}
    </DropdownMenuPrimitive.Label>
  );
}
MenuLabel.displayName = "Menu.Label";

// =============================================================================
// MenuSeparator
// =============================================================================

function MenuSeparator({ className }: MenuSeparatorProps) {
  return (
    <DropdownMenuPrimitive.Separator
      className={cn("-mx-1 my-1 h-px bg-[var(--neutral-6)]", className)}
    />
  );
}
MenuSeparator.displayName = "Menu.Separator";

// =============================================================================
// Compound export
// =============================================================================

export const Menu = {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Content: MenuContent,
  Item: MenuItem,
  Label: MenuLabel,
  Separator: MenuSeparator,
} as const;
