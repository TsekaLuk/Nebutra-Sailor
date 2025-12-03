"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { AnimatedBeam } from "@nebutra/custom-ui";

/**
 * Multi-Tenant Isolation Visual
 * Shows data flowing through RLS boundary to isolated tenant blocks
 */
export function MultiTenantVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sourceRef = useRef<HTMLDivElement>(null);
  const tenant1Ref = useRef<HTMLDivElement>(null);
  const tenant2Ref = useRef<HTMLDivElement>(null);
  const tenant3Ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative h-[180px] w-full">
      {/* Source: Database */}
      <div
        ref={sourceRef}
        className="absolute left-1/2 top-4 -translate-x-1/2 flex items-center justify-center"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/20 bg-card/50">
          <svg
            className="h-5 w-5 text-muted-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <ellipse cx="12" cy="6" rx="8" ry="3" />
            <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
            <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6" />
          </svg>
        </div>
      </div>

      {/* RLS Boundary Line */}
      <div className="absolute left-4 right-4 top-[72px] h-px bg-gradient-to-r from-transparent via-[var(--brand-accent)]/50 to-transparent" />
      <span className="absolute left-1/2 top-[64px] -translate-x-1/2 bg-background px-2 text-[10px] text-[var(--brand-accent)]">
        RLS
      </span>

      {/* Tenant Blocks */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6">
        <motion.div
          ref={tenant1Ref}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex h-16 w-16 flex-col items-center justify-center rounded-lg border border-border/20 bg-card/30"
        >
          <div className="text-xs font-medium text-foreground/70">Org A</div>
          <div className="mt-1 flex gap-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </div>
        </motion.div>

        <motion.div
          ref={tenant2Ref}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex h-16 w-16 flex-col items-center justify-center rounded-lg border border-border/20 bg-card/30"
        >
          <div className="text-xs font-medium text-foreground/70">Org B</div>
          <div className="mt-1 flex gap-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          </div>
        </motion.div>

        <motion.div
          ref={tenant3Ref}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex h-16 w-16 flex-col items-center justify-center rounded-lg border border-border/20 bg-card/30"
        >
          <div className="text-xs font-medium text-foreground/70">Org C</div>
          <div className="mt-1 flex gap-0.5">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
          </div>
        </motion.div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={sourceRef}
        toRef={tenant1Ref}
        curvature={-30}
        gradientStartColor="hsl(var(--primary))"
        gradientStopColor="hsl(var(--accent))"
        pathColor="hsl(var(--border))"
        pathOpacity={0.1}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={sourceRef}
        toRef={tenant2Ref}
        curvature={0}
        gradientStartColor="hsl(var(--primary))"
        gradientStopColor="hsl(var(--accent))"
        pathColor="hsl(var(--border))"
        pathOpacity={0.1}
        duration={3.5}
        delay={0.5}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={sourceRef}
        toRef={tenant3Ref}
        curvature={30}
        gradientStartColor="hsl(var(--primary))"
        gradientStopColor="hsl(var(--accent))"
        pathColor="hsl(var(--border))"
        pathOpacity={0.1}
        duration={4}
        delay={1}
      />
    </div>
  );
}

/**
 * AI-Native Architecture Visual
 * Shows input → model → output flow with pulsing nodes
 */
export function AINativeVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLDivElement>(null);
  const modelRef = useRef<HTMLDivElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative h-[180px] w-full">
      {/* Input Node */}
      <motion.div
        ref={inputRef}
        className="absolute left-4 top-1/2 -translate-y-1/2"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex h-14 w-20 flex-col items-center justify-center rounded-lg border border-border/20 bg-card/30 p-2">
          <div className="text-[10px] text-muted-foreground">Input</div>
          <div className="mt-1 font-mono text-xs text-foreground/70">"..."</div>
        </div>
      </motion.div>

      {/* Model Node (center, pulsing) */}
      <motion.div
        ref={modelRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-xl border border-[var(--brand-accent)]/30 bg-[var(--brand-accent)]/10">
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-xl border border-[var(--brand-accent)]/50"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <svg
            className="h-6 w-6 text-[var(--brand-accent)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4z" />
            <path d="M12 12v4m0 4v-4m0 0h4m-4 0H8" />
          </svg>
        </div>
      </motion.div>

      {/* Output Node */}
      <motion.div
        ref={outputRef}
        className="absolute right-4 top-1/2 -translate-y-1/2"
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex h-14 w-20 flex-col items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2">
          <div className="text-[10px] text-muted-foreground">Output</div>
          <div className="mt-1 text-emerald-500">✓</div>
        </div>
      </motion.div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={inputRef}
        toRef={modelRef}
        gradientStartColor="hsl(var(--primary))"
        gradientStopColor="hsl(var(--accent))"
        pathColor="hsl(var(--border))"
        pathOpacity={0.1}
        duration={2}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={modelRef}
        toRef={outputRef}
        gradientStartColor="hsl(var(--accent))"
        gradientStopColor="#10b981"
        pathColor="hsl(var(--border))"
        pathOpacity={0.1}
        duration={2}
        delay={1}
      />
    </div>
  );
}

/**
 * Billing/API Visual
 * Shows endpoint list with animated connections (like Supabase Data APIs)
 */
export function BillingVisual() {
  const endpoints = [
    { name: "subscriptions", path: "/v1/subscriptions" },
    { name: "usage", path: "/v1/usage" },
    { name: "invoices", path: "/v1/invoices" },
    { name: "entitlements", path: "/v1/entitlements" },
  ];

  return (
    <div className="relative h-[180px] w-full overflow-hidden">
      <div className="absolute inset-0 flex flex-col justify-center gap-2 px-2">
        {endpoints.map((endpoint, i) => (
          <motion.div
            key={endpoint.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * i }}
            className="flex items-center gap-2"
          >
            {/* Table icon */}
            <div className="flex h-6 w-6 items-center justify-center rounded border border-border/20 bg-card/30">
              <svg
                className="h-3 w-3 text-muted-foreground"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 3v18" />
              </svg>
            </div>
            {/* Name */}
            <span className="text-xs text-muted-foreground">
              {endpoint.name}
            </span>
            {/* Animated dash line */}
            <div className="flex-1 border-t border-dashed border-border/30" />
            {/* Path badge */}
            <div className="rounded bg-[var(--brand-accent)]/10 px-2 py-0.5">
              <code className="text-[10px] text-[var(--brand-accent)]">
                {endpoint.path}
              </code>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/**
 * Global Edge Visual
 * Simplified globe with edge location dots
 */
export function GlobalEdgeVisual() {
  const locations = [
    { x: 20, y: 30, label: "US" },
    { x: 45, y: 25, label: "EU" },
    { x: 75, y: 35, label: "APAC" },
    { x: 60, y: 60, label: "AU" },
  ];

  return (
    <div className="relative h-[180px] w-full">
      {/* Simplified globe outline */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-32 w-32">
          {/* Globe circle */}
          <div className="absolute inset-0 rounded-full border border-border/20" />
          {/* Latitude lines */}
          <div className="absolute left-0 right-0 top-1/3 border-t border-border/10" />
          <div className="absolute left-0 right-0 top-2/3 border-t border-border/10" />
          {/* Longitude arc */}
          <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border/10" />

          {/* Edge location dots */}
          {locations.map((loc, i) => (
            <motion.div
              key={loc.label}
              className="absolute"
              style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.15 }}
            >
              {/* Pulse ring */}
              <motion.div
                className="absolute -inset-2 rounded-full bg-[var(--brand-accent)]/20"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
              {/* Dot */}
              <div className="relative h-2 w-2 rounded-full bg-[var(--brand-accent)]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Edge labels */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-4">
        {["Vercel", "Cloudflare", "Upstash"].map((name, i) => (
          <motion.span
            key={name}
            initial={{ opacity: 0, y: 5 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="text-[10px] text-muted-foreground/60"
          >
            {name}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
