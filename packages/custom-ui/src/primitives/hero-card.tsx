"use client";

import {
  Card as HeroUICard,
  CardHeader as HeroUICardHeader,
  CardBody as HeroUICardBody,
  CardFooter as HeroUICardFooter,
} from "@heroui/card";
import type { CardProps as HeroUICardProps } from "@heroui/card";

// PressEvent type from react-aria
interface PressEvent {
  type: "pressstart" | "pressend" | "pressup" | "press";
  pointerType: "mouse" | "pen" | "touch" | "keyboard" | "virtual";
  target: Element;
  shiftKey: boolean;
  ctrlKey: boolean;
  metaKey: boolean;
  altKey: boolean;
}

// =============================================================================
// Types
// =============================================================================

export interface HeroCardProps extends Omit<HeroUICardProps, "ref"> {
  /** Card content */
  children?: React.ReactNode;
  /** Shadow depth */
  shadow?: "none" | "sm" | "md" | "lg";
  /** Border radius */
  radius?: "none" | "sm" | "md" | "lg";
  /** Whether card takes full width */
  fullWidth?: boolean;
  /** Enable hover effect */
  isHoverable?: boolean;
  /** Make card pressable (renders as button) */
  isPressable?: boolean;
  /** Apply blur effect to card background */
  isBlurred?: boolean;
  /** Apply blur effect to footer */
  isFooterBlurred?: boolean;
  /** Disable the card */
  isDisabled?: boolean;
  /** Disable animations */
  disableAnimation?: boolean;
  /** Disable ripple effect on press */
  disableRipple?: boolean;
  /** Allow text selection when card is pressable */
  allowTextSelectionOnPress?: boolean;
  /** Custom class names for slots */
  classNames?: Partial<Record<"base" | "header" | "body" | "footer", string>>;
  /** Press event handler */
  onPress?: (e: PressEvent) => void;
  /** Press start event handler */
  onPressStart?: (e: PressEvent) => void;
  /** Press end event handler */
  onPressEnd?: (e: PressEvent) => void;
  /** Press change event handler */
  onPressChange?: (isPressed: boolean) => void;
  /** Press up event handler */
  onPressUp?: (e: PressEvent) => void;
}

export interface HeroCardHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

export interface HeroCardBodyProps {
  children?: React.ReactNode;
  className?: string;
}

export interface HeroCardFooterProps {
  children?: React.ReactNode;
  className?: string;
}

// =============================================================================
// Components
// =============================================================================

/**
 * HeroCard - Beautiful card container from HeroUI
 *
 * @description
 * A versatile card component for displaying content in a contained format.
 * Supports blur effects, press interactions, and customizable styling.
 *
 * @example Basic usage
 * ```tsx
 * <HeroCard>
 *   <HeroCardHeader>Title</HeroCardHeader>
 *   <HeroCardBody>Content goes here</HeroCardBody>
 *   <HeroCardFooter>Actions</HeroCardFooter>
 * </HeroCard>
 * ```
 *
 * @example Pressable card
 * ```tsx
 * <HeroCard isPressable onPress={() => console.log("Pressed!")}>
 *   <HeroCardBody>Click me</HeroCardBody>
 * </HeroCard>
 * ```
 *
 * @example Blurred card (needs gradient background ancestor)
 * ```tsx
 * <div className="bg-gradient-to-tr from-pink-500 to-yellow-500 p-8">
 *   <HeroCard isBlurred>
 *     <HeroCardBody>Blurred content</HeroCardBody>
 *   </HeroCard>
 * </div>
 * ```
 *
 * @example With blurred footer
 * ```tsx
 * <HeroCard isFooterBlurred className="h-[300px]">
 *   <HeroCardHeader>Header</HeroCardHeader>
 *   <HeroCardBody>Body</HeroCardBody>
 *   <HeroCardFooter className="absolute bottom-0 z-10">
 *     <Button>Action</Button>
 *   </HeroCardFooter>
 * </HeroCard>
 * ```
 *
 * @example Hoverable card
 * ```tsx
 * <HeroCard isHoverable>
 *   <HeroCardBody>Hover over me</HeroCardBody>
 * </HeroCard>
 * ```
 */
export function HeroCard({
  children,
  shadow = "md",
  radius = "lg",
  fullWidth = false,
  isHoverable = false,
  isPressable = false,
  isBlurred = false,
  isFooterBlurred = false,
  isDisabled = false,
  disableAnimation = false,
  disableRipple = false,
  allowTextSelectionOnPress = false,
  classNames,
  onPress,
  onPressStart,
  onPressEnd,
  onPressChange,
  onPressUp,
  ...props
}: HeroCardProps) {
  return (
    <HeroUICard
      shadow={shadow}
      radius={radius}
      fullWidth={fullWidth}
      isHoverable={isHoverable}
      isPressable={isPressable}
      isBlurred={isBlurred}
      isFooterBlurred={isFooterBlurred}
      isDisabled={isDisabled}
      disableAnimation={disableAnimation}
      disableRipple={disableRipple}
      allowTextSelectionOnPress={allowTextSelectionOnPress}
      classNames={classNames}
      onPress={onPress}
      onPressStart={onPressStart}
      onPressEnd={onPressEnd}
      onPressChange={onPressChange}
      onPressUp={onPressUp}
      {...props}
    >
      {children}
    </HeroUICard>
  );
}

/**
 * HeroCardHeader - Header section of a HeroCard
 *
 * @example
 * ```tsx
 * <HeroCardHeader className="flex gap-3">
 *   <Avatar src="/avatar.png" />
 *   <div>
 *     <p className="text-md">User Name</p>
 *     <p className="text-small text-default-500">@username</p>
 *   </div>
 * </HeroCardHeader>
 * ```
 */
export function HeroCardHeader({ children, className }: HeroCardHeaderProps) {
  return <HeroUICardHeader className={className}>{children}</HeroUICardHeader>;
}

/**
 * HeroCardBody - Main content section of a HeroCard
 *
 * @example
 * ```tsx
 * <HeroCardBody>
 *   <p>Make beautiful websites regardless of your design experience.</p>
 * </HeroCardBody>
 * ```
 */
export function HeroCardBody({ children, className }: HeroCardBodyProps) {
  return <HeroUICardBody className={className}>{children}</HeroUICardBody>;
}

/**
 * HeroCardFooter - Footer section of a HeroCard
 *
 * @example
 * ```tsx
 * <HeroCardFooter className="gap-3">
 *   <Button variant="flat">Cancel</Button>
 *   <Button color="primary">Save</Button>
 * </HeroCardFooter>
 * ```
 */
export function HeroCardFooter({ children, className }: HeroCardFooterProps) {
  return <HeroUICardFooter className={className}>{children}</HeroUICardFooter>;
}
