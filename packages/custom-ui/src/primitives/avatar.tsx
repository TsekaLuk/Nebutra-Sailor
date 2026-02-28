"use client";

import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../utils/cn";

// ─── Size Map ─────────────────────────────────────────────────────────────────
// Matches avatarTokens: xs=20 sm=32 md=40 lg=56 xl=80

const sizeClasses = {
  xs: { root: "h-5 w-5", fallback: "text-[8px]" },
  sm: { root: "h-8 w-8", fallback: "text-xs" },
  md: { root: "h-10 w-10", fallback: "text-sm" },
  lg: { root: "h-14 w-14", fallback: "text-xl" },
  xl: { root: "h-20 w-20", fallback: "text-2xl" },
} as const;

type AvatarSize = keyof typeof sizeClasses;

// ─── Avatar ───────────────────────────────────────────────────────────────────

export interface AvatarProps extends React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Root
> {
  /** Size preset — xs=20px sm=32px md=40px lg=56px xl=80px */
  size?: AvatarSize;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  AvatarProps
>(({ className, size = "md", ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex shrink-0 overflow-hidden rounded-full",
      sizeClasses[size].root,
      className,
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

// ─── AvatarImage ──────────────────────────────────────────────────────────────

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// ─── AvatarFallback ───────────────────────────────────────────────────────────

export interface AvatarFallbackProps extends React.ComponentPropsWithoutRef<
  typeof AvatarPrimitive.Fallback
> {
  /** Pass the same size as the parent Avatar for correct font size */
  size?: AvatarSize;
}

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  AvatarFallbackProps
>(({ className, size = "md", ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground",
      sizeClasses[size].fallback,
      className,
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

// ─── AvatarGroup ──────────────────────────────────────────────────────────────

export interface AvatarGroupItem {
  src?: string;
  alt: string;
  fallback: string;
}

export interface AvatarGroupProps {
  items: AvatarGroupItem[];
  /** Maximum avatars to show before collapsing to "+N" */
  max?: number;
  /** Size of each avatar in the group */
  size?: AvatarSize;
  className?: string;
}

function AvatarGroup({
  items,
  max = 4,
  size = "sm",
  className,
}: AvatarGroupProps) {
  const visible = items.slice(0, max);
  const remaining = items.length - max;

  return (
    <div className={cn("flex -space-x-2", className)}>
      {visible.map((item) => (
        <Avatar
          key={item.alt}
          size={size}
          className="border-2 border-background"
        >
          {item.src && <AvatarImage src={item.src} alt={item.alt} />}
          <AvatarFallback size={size}>{item.fallback}</AvatarFallback>
        </Avatar>
      ))}
      {remaining > 0 && (
        <Avatar size={size} className="border-2 border-background">
          <AvatarFallback
            size={size}
            className="bg-muted text-muted-foreground"
          >
            +{remaining}
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup };
