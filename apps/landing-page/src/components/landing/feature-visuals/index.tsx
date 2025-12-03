"use client";

import { useRef } from "react";
import {
  AnimatedBeam,
  Badge,
  FlickeringGrid,
  DotPattern,
  BorderTrail,
  SimpleTerminal,
  TypingAnimation,
  AnimatedSpan,
  DottedMap,
  ShineBorder,
} from "@nebutra/custom-ui";

/**
 * Multi-Tenant Architecture Visual
 *
 * Deco: FlickeringGrid background + AnimatedBeam flow
 * Proof: Badge nodes showing Clerk → Context → RLS flow
 */
export function MultiTenantVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const clerkRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<HTMLDivElement>(null);
  const rlsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-full w-full min-h-[200px]">
      {/* Background: FlickeringGrid */}
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        color="rgb(0, 51, 254)"
        maxOpacity={0.08}
        flickerChance={0.15}
      />

      {/* Proof: Flow diagram with AnimatedBeam */}
      <div
        ref={containerRef}
        className="relative z-10 flex h-full flex-col items-center justify-center gap-4 px-4 py-8"
      >
        {/* Horizontal flow on larger cards */}
        <div className="flex items-center justify-center gap-4 md:gap-8">
          <div ref={clerkRef}>
            <Badge
              variant="outline"
              className="bg-background/80 backdrop-blur-sm"
            >
              Clerk Org
            </Badge>
          </div>
          <div ref={ctxRef}>
            <Badge
              variant="outline"
              className="bg-background/80 backdrop-blur-sm"
            >
              TenantContext
            </Badge>
          </div>
          <div ref={rlsRef}>
            <Badge variant="secondary" className="bg-primary/10">
              Supabase RLS
            </Badge>
          </div>
        </div>

        {/* Animated Beams */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={clerkRef}
          toRef={ctxRef}
          gradientStartColor="#0033FE"
          gradientStopColor="#0BF1C3"
          pathColor="hsl(var(--border))"
          pathOpacity={0.15}
          duration={2.5}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={ctxRef}
          toRef={rlsRef}
          gradientStartColor="#0BF1C3"
          gradientStopColor="#0033FE"
          pathColor="hsl(var(--border))"
          pathOpacity={0.15}
          duration={2.5}
          delay={0.8}
        />
      </div>
    </div>
  );
}

/**
 * AI-Native Architecture Visual
 *
 * Deco: BorderTrail surrounding effect
 * Proof: Terminal with TypingAnimation showing config
 */
export function AINativeVisual() {
  return (
    <div className="relative h-full w-full min-h-[220px]">
      {/* Border effect: BorderTrail */}
      <BorderTrail
        size={60}
        className="bg-gradient-to-r from-purple-500/60 via-violet-500/60 to-blue-500/60"
      />

      {/* Proof: Terminal with code config */}
      <div className="relative z-10 flex h-full items-center justify-center p-4">
        <SimpleTerminal
          className="w-full max-w-[280px] scale-[0.85] origin-center"
          sequence
        >
          <TypingAnimation duration={35}>
            providers: ["openai", "anthropic"]
          </TypingAnimation>
          <AnimatedSpan className="text-emerald-400">
            fallback: "anthropic"
          </AnimatedSpan>
          <AnimatedSpan className="text-amber-400">
            rateLimit: {"{ rpm: 60, tpm: 100k }"}
          </AnimatedSpan>
          <AnimatedSpan className="text-blue-400">
            tracing: enabled
          </AnimatedSpan>
        </SimpleTerminal>
      </div>
    </div>
  );
}

/**
 * Unified Billing Visual
 *
 * Deco: DotPattern background
 * Proof: Vertical node flow with AnimatedBeam
 */
export function BillingVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const planRef = useRef<HTMLDivElement>(null);
  const entRef = useRef<HTMLDivElement>(null);
  const flagRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-full w-full min-h-[180px]">
      {/* Background: DotPattern */}
      <DotPattern
        width={16}
        height={16}
        cr={1}
        className="absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(200px_circle_at_center,white,transparent)]"
      />

      {/* Proof: Vertical node diagram */}
      <div
        ref={containerRef}
        className="relative z-10 flex h-full flex-col items-center justify-center gap-3 py-6"
      >
        <div ref={planRef}>
          <Badge className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border-emerald-500/30">
            Plan
          </Badge>
        </div>
        <div ref={entRef}>
          <Badge className="bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-500/30">
            Entitlement
          </Badge>
        </div>
        <div ref={flagRef}>
          <Badge className="bg-amber-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30">
            Feature Flag
          </Badge>
        </div>

        {/* Animated Beams - vertical flow */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={planRef}
          toRef={entRef}
          curvature={-25}
          gradientStartColor="#10b981"
          gradientStopColor="#3b82f6"
          pathColor="hsl(var(--border))"
          pathOpacity={0.15}
          duration={2}
        />
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={entRef}
          toRef={flagRef}
          curvature={25}
          gradientStartColor="#3b82f6"
          gradientStopColor="#f59e0b"
          pathColor="hsl(var(--border))"
          pathOpacity={0.15}
          duration={2}
          delay={0.6}
        />
      </div>
    </div>
  );
}

/**
 * Global Edge Deployment Visual
 *
 * Deco: ShineBorder edge glow
 * Proof: DottedMap with region markers
 */
export function GlobalEdgeVisual() {
  return (
    <div className="relative h-full w-full min-h-[140px] overflow-hidden rounded-lg">
      {/* Border effect: ShineBorder */}
      <ShineBorder shineColor={["#0033FE", "#0BF1C3"]} borderWidth={1} />

      {/* Proof: DottedMap with markers */}
      <div className="relative z-10 flex h-full items-center justify-center p-4">
        <div className="relative h-28 w-full max-w-[320px]">
          <DottedMap
            markers={[
              { lat: 37.77, lng: -122.41, size: 0.6 }, // US West
              { lat: 51.51, lng: -0.13, size: 0.6 }, // EU
              { lat: 35.68, lng: 139.65, size: 0.6 }, // APAC
              { lat: 1.35, lng: 103.82, size: 0.5 }, // Singapore
            ]}
            markerColor="#0BF1C3"
            dotRadius={0.18}
            className="opacity-60"
          />

          {/* Latency labels */}
          <div className="absolute -bottom-1 left-0 right-0 flex justify-center gap-6">
            <span className="text-[9px] text-muted-foreground/70">US 12ms</span>
            <span className="text-[9px] text-muted-foreground/70">EU 18ms</span>
            <span className="text-[9px] text-muted-foreground/70">
              APAC 24ms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
