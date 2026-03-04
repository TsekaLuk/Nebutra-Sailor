/**
 * Ambient module declarations for @nebutra/custom-ui source imports.
 *
 * The storybook Vite config resolves "@nebutra/custom-ui/src/*" to the
 * package source at runtime. These declarations give TypeScript enough
 * type information to pass the typecheck without traversing the source
 * files (which have their own pre-existing errors in the custom-ui
 * package's own typecheck context).
 */
declare module "@nebutra/custom-ui/src/primitives/animate-in" {
  import type * as React from "react";

  export interface AnimateInProps {
    children: React.ReactNode;
    preset?: "emerge" | "flow" | "fade" | "fadeUp" | "scale";
    delay?: number;
    duration?: number;
    inView?: boolean;
    className?: string;
    as?: React.ElementType;
  }

  export interface AnimateInGroupProps {
    children: React.ReactNode;
    stagger?: "fast" | "normal" | "slow";
    preset?: "emerge" | "flow" | "fade" | "fadeUp" | "scale";
    inView?: boolean;
    className?: string;
    as?: React.ElementType;
  }

  export function AnimateIn(props: AnimateInProps): React.JSX.Element;
  export function AnimateInGroup(props: AnimateInGroupProps): React.JSX.Element;
}
