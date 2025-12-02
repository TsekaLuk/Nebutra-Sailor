"use client";

import {
  Popover as HeroUIPopover,
  PopoverTrigger as HeroUIPopoverTrigger,
  PopoverContent as HeroUIPopoverContent,
} from "@heroui/popover";
import type { PopoverProps as HeroUIPopoverProps } from "@heroui/popover";
import type { HTMLMotionProps } from "framer-motion";

// =============================================================================
// Types
// =============================================================================

export type HeroPopoverPlacement =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "top-start"
  | "top-end"
  | "bottom-start"
  | "bottom-end"
  | "left-start"
  | "left-end"
  | "right-start"
  | "right-end";

export type HeroPopoverColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type HeroPopoverBackdrop = "transparent" | "opaque" | "blur";

export interface HeroPopoverProps extends Omit<
  HeroUIPopoverProps,
  "children" | "ref"
> {
  /** Popover trigger and content as children */
  children: React.ReactNode[];
  /** Size of the popover */
  size?: "sm" | "md" | "lg";
  /** Color variant */
  color?: HeroPopoverColor;
  /** Border radius */
  radius?: "none" | "sm" | "md" | "lg" | "full";
  /** Shadow depth */
  shadow?: "none" | "sm" | "md" | "lg";
  /** Backdrop style */
  backdrop?: HeroPopoverBackdrop;
  /** Placement relative to trigger */
  placement?: HeroPopoverPlacement;
  /** Whether popover is open (controlled) */
  isOpen?: boolean;
  /** Default open state (uncontrolled) */
  defaultOpen?: boolean;
  /** Distance from trigger in pixels */
  offset?: number;
  /** Cross-axis offset in pixels */
  crossOffset?: number;
  /** Show arrow pointing to trigger */
  showArrow?: boolean;
  /** Whether popover should flip when near edge */
  shouldFlip?: boolean;
  /** Scale trigger on open */
  triggerScaleOnOpen?: boolean;
  /** Block scroll when open */
  shouldBlockScroll?: boolean;
  /** Close on scroll */
  shouldCloseOnScroll?: boolean;
  /** Disable keyboard dismiss (Escape key) */
  isKeyboardDismissDisabled?: boolean;
  /** Close when focus leaves popover */
  shouldCloseOnBlur?: boolean;
  /** Disable animations */
  disableAnimation?: boolean;
  /** Custom motion props for animations */
  motionProps?: HTMLMotionProps<"div">;
  /** Custom class names for slots */
  classNames?: Partial<
    Record<"base" | "trigger" | "backdrop" | "content", string>
  >;
  /** Callback when open state changes */
  onOpenChange?: (isOpen: boolean) => void;
  /** Callback when popover closes */
  onClose?: () => void;
}

export interface HeroPopoverTriggerProps {
  children: React.ReactNode;
}

export interface HeroPopoverContentProps {
  children: React.ReactNode | ((titleProps: object) => React.ReactNode);
  className?: string;
}

// =============================================================================
// Components
// =============================================================================

/**
 * HeroPopover - Non-modal dialog floating around trigger
 *
 * @description
 * A popover component for displaying additional content on top of something.
 * Supports various placements, backdrops, and animations.
 *
 * @example Basic usage
 * ```tsx
 * <HeroPopover>
 *   <HeroPopoverTrigger>
 *     <Button>Open Popover</Button>
 *   </HeroPopoverTrigger>
 *   <HeroPopoverContent>
 *     <div className="p-4">Popover content here</div>
 *   </HeroPopoverContent>
 * </HeroPopover>
 * ```
 *
 * @example With arrow and placement
 * ```tsx
 * <HeroPopover showArrow placement="right">
 *   <HeroPopoverTrigger>
 *     <Button>Trigger</Button>
 *   </HeroPopoverTrigger>
 *   <HeroPopoverContent>
 *     <div className="p-4">Content with arrow</div>
 *   </HeroPopoverContent>
 * </HeroPopover>
 * ```
 *
 * @example With backdrop
 * ```tsx
 * <HeroPopover backdrop="blur">
 *   <HeroPopoverTrigger>
 *     <Button>Open with blur</Button>
 *   </HeroPopoverTrigger>
 *   <HeroPopoverContent>
 *     <div className="p-4">Blurred backdrop</div>
 *   </HeroPopoverContent>
 * </HeroPopover>
 * ```
 *
 * @example Controlled
 * ```tsx
 * const [isOpen, setIsOpen] = useState(false);
 *
 * <HeroPopover isOpen={isOpen} onOpenChange={setIsOpen}>
 *   <HeroPopoverTrigger>
 *     <Button>Controlled</Button>
 *   </HeroPopoverTrigger>
 *   <HeroPopoverContent>
 *     <div className="p-4">Controlled popover</div>
 *   </HeroPopoverContent>
 * </HeroPopover>
 * ```
 */
export function HeroPopover({
  children,
  size = "md",
  color = "default",
  radius = "lg",
  shadow = "lg",
  backdrop = "transparent",
  placement = "bottom",
  isOpen,
  defaultOpen,
  offset = 7,
  crossOffset = 0,
  showArrow = false,
  shouldFlip = true,
  triggerScaleOnOpen = true,
  shouldBlockScroll = false,
  shouldCloseOnScroll = true,
  isKeyboardDismissDisabled = false,
  shouldCloseOnBlur = false,
  disableAnimation = false,
  motionProps,
  classNames,
  onOpenChange,
  onClose,
  ...props
}: HeroPopoverProps) {
  return (
    <HeroUIPopover
      size={size}
      color={color}
      radius={radius}
      shadow={shadow}
      backdrop={backdrop}
      placement={placement}
      isOpen={isOpen}
      defaultOpen={defaultOpen}
      offset={offset}
      crossOffset={crossOffset}
      showArrow={showArrow}
      shouldFlip={shouldFlip}
      triggerScaleOnOpen={triggerScaleOnOpen}
      shouldBlockScroll={shouldBlockScroll}
      shouldCloseOnScroll={shouldCloseOnScroll}
      isKeyboardDismissDisabled={isKeyboardDismissDisabled}
      shouldCloseOnBlur={shouldCloseOnBlur}
      disableAnimation={disableAnimation}
      motionProps={motionProps}
      classNames={classNames}
      onOpenChange={onOpenChange}
      onClose={onClose}
      {...props}
    >
      {children}
    </HeroUIPopover>
  );
}

/**
 * HeroPopoverTrigger - Element that triggers the popover
 *
 * @example
 * ```tsx
 * <HeroPopoverTrigger>
 *   <Button>Click me</Button>
 * </HeroPopoverTrigger>
 * ```
 */
export function HeroPopoverTrigger({ children }: HeroPopoverTriggerProps) {
  return <HeroUIPopoverTrigger>{children}</HeroUIPopoverTrigger>;
}

/**
 * HeroPopoverContent - Content displayed in the popover
 *
 * @example Basic
 * ```tsx
 * <HeroPopoverContent>
 *   <div className="p-4">Content here</div>
 * </HeroPopoverContent>
 * ```
 *
 * @example With title props for accessibility
 * ```tsx
 * <HeroPopoverContent>
 *   {(titleProps) => (
 *     <div className="p-4">
 *       <h3 {...titleProps}>Accessible Title</h3>
 *       <p>Content here</p>
 *     </div>
 *   )}
 * </HeroPopoverContent>
 * ```
 */
export function HeroPopoverContent({
  children,
  className,
}: HeroPopoverContentProps) {
  return (
    <HeroUIPopoverContent className={className}>
      {children}
    </HeroUIPopoverContent>
  );
}
