"use client";

import * as React from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion as useFramerReducedMotion,
} from "framer-motion";
import { emerge, flow, brandSpring } from "@nebutra/brand";
import {
  motionVariants,
  staggerContainers,
  viewportSettings,
} from "../tokens/motion";

// ─────────────────────────────────────────────────────────────
// Fallback variant for `fadeIn` (not present in motionVariants)
// ─────────────────────────────────────────────────────────────

const fadeInVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 },
} as const;

// ─────────────────────────────────────────────────────────────
// Variant presets
// ─────────────────────────────────────────────────────────────

const PRESETS = {
  /** 涌现 — materialize from the cloud (default) */
  emerge: {
    initial: emerge.initial,
    animate: emerge.animate,
    exit: emerge.exit,
    transition: emerge.transition,
  },
  /** 流动 — stream horizontally */
  flow: {
    initial: flow.initial,
    animate: flow.animate,
    exit: flow.exit,
    transition: flow.transition,
  },
  /** Simple fade */
  fade: fadeInVariant,
  /** Fade + rise */
  fadeUp: motionVariants.fadeInUp,
  /** Scale in */
  scale: motionVariants.scaleIn,
} as const;

type Preset = keyof typeof PRESETS;

type MotionDivProps = React.ComponentProps<typeof m.div>;

function MotionDiv(props: MotionDivProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div {...props} />
    </LazyMotion>
  );
}

// ─────────────────────────────────────────────────────────────
// AnimateIn
// ─────────────────────────────────────────────────────────────

export interface AnimateInProps {
  children: React.ReactNode;
  preset?: Preset;
  delay?: number;
  duration?: number;
  /** Trigger when enters viewport instead of immediately */
  inView?: boolean;
  className?: string;
}

/**
 * AnimateIn — wraps any content in a branded entrance animation.
 *
 * Respects `prefers-reduced-motion` by fading only (no translate/blur).
 *
 * @example
 * <AnimateIn preset="emerge" delay={0.1}>
 *   <Card>...</Card>
 * </AnimateIn>
 */
export function AnimateIn({
  children,
  preset = "emerge",
  delay = 0,
  duration,
  inView = false,
  className,
}: AnimateInProps) {
  const shouldReduce = useFramerReducedMotion();
  const base = PRESETS[preset] || PRESETS.emerge;

  // Accessibility: honour prefers-reduced-motion
  const initial: any = shouldReduce ? { opacity: 0 } : base.initial;
  const animate: any = shouldReduce ? { opacity: 1 } : base.animate;
  const exit: any = (
    shouldReduce ? { opacity: 0 } : ("exit" in base ? base.exit : undefined)
  );
  const transition: any = {
    ...(shouldReduce ? { duration: 0.15 } : base.transition),
    delay,
    ...(duration ? { duration } : {}),
  };

  if (inView) {
    return (
      <MotionDiv
        className={className}
        initial={initial}
        whileInView={animate}
        exit={exit}
        transition={transition}
        viewport={viewportSettings.once}
      >
        {children}
      </MotionDiv>
    );
  }

  return (
    <MotionDiv
      className={className}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
    >
      {children}
    </MotionDiv>
  );
}

// ─────────────────────────────────────────────────────────────
// AnimateInGroup — staggered list of children
// ─────────────────────────────────────────────────────────────

export interface AnimateInGroupProps {
  children: React.ReactNode;
  stagger?: "fast" | "normal" | "slow";
  preset?: Preset;
  inView?: boolean;
  className?: string;
}

/**
 * AnimateInGroup — staggered container. Each direct child animates in sequence.
 *
 * @example
 * <AnimateInGroup stagger="normal" inView>
 *   {items.map(item => <AnimateIn key={item.id} preset="fadeUp">{item}</AnimateIn>)}
 * </AnimateInGroup>
 */
export function AnimateInGroup({
  children,
  stagger = "normal",
  inView = false,
  className,
}: AnimateInGroupProps) {
  const shouldReduce = useFramerReducedMotion();
  const container = staggerContainers[stagger];

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  if (inView) {
    return (
      <MotionDiv
        className={className}
        initial="initial"
        whileInView="animate"
        viewport={viewportSettings.once}
        variants={container as any}
      >
        {children}
      </MotionDiv>
    );
  }

  return (
    <MotionDiv
      className={className}
      initial="initial"
      animate="animate"
      variants={container as any}
    >
      {children}
    </MotionDiv>
  );
}

// Re-export brandSpring for consumers who need it alongside AnimateIn
export { brandSpring };
