"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "../utils/cn";

export type SheetSide = "top" | "right" | "bottom" | "left";

export type SheetProps = React.ComponentProps<typeof SheetPrimitive.Root>;

export type SheetTriggerProps = React.ComponentProps<
  typeof SheetPrimitive.Trigger
>;

export type SheetCloseProps = React.ComponentProps<typeof SheetPrimitive.Close>;

export type SheetPortalProps = React.ComponentProps<
  typeof SheetPrimitive.Portal
>;

export type SheetOverlayProps = React.ComponentProps<
  typeof SheetPrimitive.Overlay
>;

export interface SheetContentProps extends React.ComponentProps<
  typeof SheetPrimitive.Content
> {
  /** Side from which the sheet slides in */
  side?: SheetSide;
  /** Whether to show the close button */
  showClose?: boolean;
}

export type SheetHeaderProps = React.ComponentProps<"div">;

export type SheetFooterProps = React.ComponentProps<"div">;

export type SheetTitleProps = React.ComponentProps<typeof SheetPrimitive.Title>;

export type SheetDescriptionProps = React.ComponentProps<
  typeof SheetPrimitive.Description
>;

/**
 * Sheet - A side panel that slides in from the edge of the screen
 *
 * @description
 * Based on Radix UI Dialog, provides a drawer-style panel that can slide
 * in from any edge (top, right, bottom, left).
 *
 * @example Basic usage
 * ```tsx
 * <Sheet>
 *   <SheetTrigger asChild>
 *     <Button>Open</Button>
 *   </SheetTrigger>
 *   <SheetContent>
 *     <SheetHeader>
 *       <SheetTitle>Title</SheetTitle>
 *       <SheetDescription>Description</SheetDescription>
 *     </SheetHeader>
 *     <div>Content</div>
 *     <SheetFooter>
 *       <SheetClose asChild>
 *         <Button>Close</Button>
 *       </SheetClose>
 *     </SheetFooter>
 *   </SheetContent>
 * </Sheet>
 * ```
 *
 * @example Different sides
 * ```tsx
 * <SheetContent side="left">Left panel</SheetContent>
 * <SheetContent side="top">Top panel</SheetContent>
 * <SheetContent side="bottom">Bottom panel</SheetContent>
 * ```
 *
 * @example Without close button
 * ```tsx
 * <SheetContent showClose={false}>
 *   Custom close handling
 * </SheetContent>
 * ```
 */
function Sheet({ ...props }: SheetProps) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
}

function SheetTrigger({ ...props }: SheetTriggerProps) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

function SheetClose({ ...props }: SheetCloseProps) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

function SheetPortal({ ...props }: SheetPortalProps) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
}

function SheetOverlay({ className, ...props }: SheetOverlayProps) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 backdrop-blur",
        className,
      )}
      {...props}
    />
  );
}

function SheetContent({
  className,
  children,
  side = "right",
  showClose = true,
  ...props
}: SheetContentProps) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className,
        )}
        {...props}
      >
        {children}
        {showClose && (
          <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-5 right-5 rounded-full transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
            <XIcon className="size-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

function SheetHeader({ className, ...props }: SheetHeaderProps) {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex bg-muted/30 border-b flex-col gap-1 p-4", className)}
      {...props}
    />
  );
}

function SheetFooter({ className, ...props }: SheetFooterProps) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn(
        "mt-auto flex flex-col gap-2 p-4 bg-muted/30 border-t",
        className,
      )}
      {...props}
    />
  );
}

function SheetTitle({ className, ...props }: SheetTitleProps) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

function SheetDescription({ className, ...props }: SheetDescriptionProps) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
