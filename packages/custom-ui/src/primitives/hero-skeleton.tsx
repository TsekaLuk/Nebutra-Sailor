"use client";

import { Skeleton as HeroUISkeleton } from "@heroui/skeleton";

// =============================================================================
// Types
// =============================================================================

export interface HeroSkeletonProps {
  /** Content to wrap - skeleton takes child's shape */
  children?: React.ReactNode;
  /** Whether content is loaded (stops animation, shows children) */
  isLoaded?: boolean;
  /** Disable skeleton animation */
  disableAnimation?: boolean;
  /** Custom class names for slots */
  classNames?: Partial<Record<"base" | "content", string>>;
  /** Additional CSS classes */
  className?: string;
}

// =============================================================================
// Component
// =============================================================================

/**
 * HeroSkeleton - Loading placeholder from HeroUI
 *
 * @description
 * A placeholder component to show loading state. Takes the shape of its
 * children or can be used standalone with custom dimensions.
 *
 * @example Takes child's shape
 * ```tsx
 * <HeroSkeleton>
 *   <div className="h-24 w-24 rounded-lg" />
 * </HeroSkeleton>
 * ```
 *
 * @example Standalone with dimensions
 * ```tsx
 * <div className="flex flex-col gap-3">
 *   <HeroSkeleton className="h-3 w-3/5 rounded-lg" />
 *   <HeroSkeleton className="h-3 w-4/5 rounded-lg" />
 *   <HeroSkeleton className="h-3 w-2/5 rounded-lg" />
 * </div>
 * ```
 *
 * @example With loaded state
 * ```tsx
 * const [isLoaded, setIsLoaded] = useState(false);
 *
 * <HeroSkeleton isLoaded={isLoaded} className="rounded-lg">
 *   <div className="h-24 w-24 bg-secondary" />
 * </HeroSkeleton>
 * ```
 *
 * @example Card skeleton
 * ```tsx
 * <HeroCard className="w-[200px] space-y-5 p-4">
 *   <HeroSkeleton className="rounded-lg">
 *     <div className="h-24 rounded-lg bg-default-300" />
 *   </HeroSkeleton>
 *   <div className="space-y-3">
 *     <HeroSkeleton className="w-3/5 rounded-lg">
 *       <div className="h-3 w-3/5 rounded-lg bg-default-200" />
 *     </HeroSkeleton>
 *     <HeroSkeleton className="w-4/5 rounded-lg">
 *       <div className="h-3 w-4/5 rounded-lg bg-default-200" />
 *     </HeroSkeleton>
 *     <HeroSkeleton className="w-2/5 rounded-lg">
 *       <div className="h-3 w-2/5 rounded-lg bg-default-300" />
 *     </HeroSkeleton>
 *   </div>
 * </HeroCard>
 * ```
 */
export function HeroSkeleton({
  children,
  isLoaded = false,
  disableAnimation = false,
  classNames,
  className,
}: HeroSkeletonProps) {
  return (
    <HeroUISkeleton
      isLoaded={isLoaded}
      disableAnimation={disableAnimation}
      classNames={classNames}
      className={className}
    >
      {children}
    </HeroUISkeleton>
  );
}
