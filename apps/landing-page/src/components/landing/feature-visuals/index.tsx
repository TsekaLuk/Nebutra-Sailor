"use client";

import { useRef } from "react";
import {
  AnimatedBeam,
  MagicCard,
  Globe,
  AnimatedList,
  cn,
  Snippet,
  Badge,
} from "@nebutra/custom-ui";
import { Terminal } from "@nebutra/custom-ui/patterns";
import {
  Building2,
  Shield,
  Database,
  CreditCard,
  Zap,
  TrendingUp,
  CheckCircle2,
  Globe as GlobeIcon,
  Cpu,
  RefreshCw,
  Activity,
} from "lucide-react";

/* ════════════════════════════════════════════════════════════════════════════
 * Multi-Tenant Architecture Visual (Primary Card - 1×2)
 *
 * 语义图形: 3层权限流 (Org → Context → RLS) + AnimatedBeam 连接
 * Proof: RLS 代码片段 + 安全指标
 * ════════════════════════════════════════════════════════════════════════════ */
export function MultiTenantVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const clerkRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<HTMLDivElement>(null);
  const rlsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-full w-full">
      <MagicCard
        className="h-full w-full rounded-xl"
        gradientFrom="#3b82f6"
        gradientTo="#8b5cf6"
        gradientColor="hsl(var(--muted))"
        gradientOpacity={0.12}
      >
        <div
          ref={containerRef}
          className="relative flex h-full flex-col items-center justify-center gap-6 p-5"
        >
          {/* 语义流程图: 3层权限边界 */}
          <div className="flex flex-col items-center gap-5">
            {/* Layer 1: Clerk Org */}
            <div
              ref={clerkRef}
              className="flex items-center gap-2.5 rounded-lg border border-blue-500/40 bg-blue-500/10 px-5 py-3 backdrop-blur-sm"
            >
              <Building2 className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">
                Clerk Org
              </span>
              <Badge
                variant="outline"
                className="ml-2 h-5 border-blue-500/30 bg-blue-500/5 text-[10px] text-blue-400"
              >
                auth
              </Badge>
            </div>

            {/* Layer 2: Tenant Context */}
            <div
              ref={ctxRef}
              className="flex items-center gap-2.5 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-5 py-3 backdrop-blur-sm"
            >
              <Shield className="h-5 w-5 text-emerald-400" />
              <span className="text-sm font-semibold text-emerald-300">
                TenantContext
              </span>
              <Badge
                variant="outline"
                className="ml-2 h-5 border-emerald-500/30 bg-emerald-500/5 text-[10px] text-emerald-400"
              >
                middleware
              </Badge>
            </div>

            {/* Layer 3: Supabase RLS */}
            <div
              ref={rlsRef}
              className="flex items-center gap-2.5 rounded-lg border border-violet-500/40 bg-violet-500/10 px-5 py-3 backdrop-blur-sm"
            >
              <Database className="h-5 w-5 text-violet-400" />
              <span className="text-sm font-semibold text-violet-300">
                Supabase RLS
              </span>
              <Badge
                variant="outline"
                className="ml-2 h-5 border-violet-500/30 bg-violet-500/5 text-[10px] text-violet-400"
              >
                policy
              </Badge>
            </div>
          </div>

          {/* Proof Layer: RLS Policy 代码 */}
          <div className="w-full space-y-3">
            <Snippet
              hideSymbol
              hideCopyButton
              variant="flat"
              className="w-full bg-zinc-900/80 border-zinc-700/50 text-[11px] leading-relaxed"
            >
              {`tenant_id = auth.jwt()->>'org_id'`}
            </Snippet>

            {/* 安全指标 - 填充空白 */}
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center rounded-md bg-emerald-500/5 border border-emerald-500/20 px-2 py-2">
                <span className="text-lg font-bold text-emerald-400">0</span>
                <span className="text-[9px] text-emerald-400/70">
                  data leaks
                </span>
              </div>
              <div className="flex flex-col items-center rounded-md bg-blue-500/5 border border-blue-500/20 px-2 py-2">
                <span className="text-lg font-bold text-blue-400">100%</span>
                <span className="text-[9px] text-blue-400/70">
                  row isolation
                </span>
              </div>
              <div className="flex flex-col items-center rounded-md bg-violet-500/5 border border-violet-500/20 px-2 py-2">
                <span className="text-lg font-bold text-violet-400">
                  &lt;1ms
                </span>
                <span className="text-[9px] text-violet-400/70">
                  policy check
                </span>
              </div>
            </div>
          </div>

          {/* Animated connection beams */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={clerkRef}
            toRef={ctxRef}
            curvature={0}
            gradientStartColor="#3b82f6"
            gradientStopColor="#10b981"
            pathColor="hsl(var(--border))"
            pathOpacity={0.15}
            pathWidth={1.5}
            duration={2.5}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={ctxRef}
            toRef={rlsRef}
            curvature={0}
            gradientStartColor="#10b981"
            gradientStopColor="#8b5cf6"
            pathColor="hsl(var(--border))"
            pathOpacity={0.15}
            pathWidth={1.5}
            duration={2.5}
            delay={0.8}
          />
        </div>
      </MagicCard>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
 * AI-Native Architecture Visual (Wide Card - 2×1)
 *
 * Proof: Terminal compound 组件展示真实 config
 * 语义图形: Provider 节点指示器
 * ════════════════════════════════════════════════════════════════════════════ */
export function AINativeVisual() {
  return (
    <div className="relative h-full w-full p-4">
      {/* Terminal: 真实 config 代码 */}
      <Terminal variant="glass" className="h-full">
        <Terminal.Header title="ai.config.ts" />
        <Terminal.Body className="text-[11px]">
          <Terminal.Line prompt="const">
            <span className="text-violet-400">aiLayer</span>
            <span className="text-zinc-500"> = </span>
            <span className="text-amber-400">{"{ "}</span>
          </Terminal.Line>
          <Terminal.Line prompt=" ">
            <span className="text-blue-400">providers</span>
            <span className="text-zinc-500">: [</span>
            <span className="text-emerald-400">"openai"</span>
            <span className="text-zinc-500">, </span>
            <span className="text-emerald-400">"anthropic"</span>
            <span className="text-zinc-500">, </span>
            <span className="text-emerald-400">"google"</span>
            <span className="text-zinc-500">],</span>
          </Terminal.Line>
          <Terminal.Line prompt=" " highlight>
            <span className="text-blue-400">fallback</span>
            <span className="text-zinc-500">: </span>
            <span className="text-emerald-400">"anthropic"</span>
            <span className="text-zinc-500">,</span>
            <span className="text-zinc-600 ml-2">// auto-failover</span>
          </Terminal.Line>
          <Terminal.Line prompt=" ">
            <span className="text-blue-400">rateLimit</span>
            <span className="text-zinc-500">: </span>
            <span className="text-amber-400">{"{ "}</span>
            <span className="text-zinc-400">rpm: </span>
            <span className="text-orange-400">60</span>
            <span className="text-zinc-500">, </span>
            <span className="text-zinc-400">tpm: </span>
            <span className="text-orange-400">100_000</span>
            <span className="text-amber-400">{" }"}</span>
            <span className="text-zinc-500">,</span>
          </Terminal.Line>
          <Terminal.Line prompt=" ">
            <span className="text-blue-400">tracing</span>
            <span className="text-zinc-500">: </span>
            <span className="text-emerald-400">true</span>
            <span className="text-zinc-500">,</span>
          </Terminal.Line>
          <Terminal.Line prompt="">
            <span className="text-amber-400">{"};"}</span>
          </Terminal.Line>
        </Terminal.Body>
      </Terminal>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
 * Unified Billing Visual (Compact Card - 1×1)
 *
 * Proof: 3个关键 metrics + AnimatedList 事件流
 * ════════════════════════════════════════════════════════════════════════════ */

interface NotificationItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  time: string;
  color: string;
}

function NotificationItem({
  icon,
  title,
  description,
  time,
  color,
}: NotificationItemProps) {
  return (
    <div className="flex items-start gap-2.5 rounded-lg border border-border/40 bg-card/60 p-2.5 backdrop-blur-sm">
      <div className={cn("rounded-full p-1.5", color)}>{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-medium text-foreground truncate">
          {title}
        </p>
        <p className="text-[10px] text-muted-foreground truncate">
          {description}
        </p>
      </div>
      <span className="text-[9px] text-muted-foreground/60 whitespace-nowrap">
        {time}
      </span>
    </div>
  );
}

const billingNotifications = [
  {
    icon: <CheckCircle2 className="h-3 w-3 text-emerald-500" />,
    title: "Subscription activated",
    description: "Pro plan • $49/mo",
    time: "now",
    color: "bg-emerald-500/10",
  },
  {
    icon: <Zap className="h-3 w-3 text-amber-500" />,
    title: "Usage: 80% threshold",
    description: "API quota warning",
    time: "2m",
    color: "bg-amber-500/10",
  },
  {
    icon: <CreditCard className="h-3 w-3 text-blue-500" />,
    title: "Invoice paid",
    description: "$127.00 charged",
    time: "1h",
    color: "bg-blue-500/10",
  },
];

export function BillingVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden p-3">
      {/* Metrics Row - Proof Layer */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-1.5 rounded-md bg-emerald-500/10 px-2 py-1 border border-emerald-500/20">
          <TrendingUp className="h-3 w-3 text-emerald-400" />
          <span className="text-[10px] font-medium text-emerald-400">
            $4.2k MRR
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-blue-500/10 px-2 py-1 border border-blue-500/20">
          <Cpu className="h-3 w-3 text-blue-400" />
          <span className="text-[10px] font-medium text-blue-400">
            78% usage
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-md bg-violet-500/10 px-2 py-1 border border-violet-500/20">
          <RefreshCw className="h-3 w-3 text-violet-400" />
          <span className="text-[10px] font-medium text-violet-400">
            auto-scale
          </span>
        </div>
      </div>

      {/* 渐变遮罩 - 底部淡出 */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-12 bg-gradient-to-t from-card to-transparent" />

      {/* Event Stream */}
      <AnimatedList delay={2500} className="gap-2">
        {billingNotifications.map((notification, idx) => (
          <NotificationItem key={idx} {...notification} />
        ))}
      </AnimatedList>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
 * Global Edge Deployment Visual (Compact Card - 1×1)
 *
 * 主视觉: 3D Globe
 * Proof: 3 region latency 数字
 * ════════════════════════════════════════════════════════════════════════════ */
export function GlobalEdgeVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Globe - 主视觉 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Globe
          className="!relative !w-[160px] !h-[160px] opacity-75"
          config={{
            width: 320,
            height: 320,
            phi: 0.3,
            theta: 0.15,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 5,
            baseColor: [0.12, 0.12, 0.18],
            markerColor: [0.04, 0.95, 0.76],
            glowColor: [0.08, 0.08, 0.12],
            markers: [
              { location: [37.77, -122.41], size: 0.06 }, // SF
              { location: [51.51, -0.13], size: 0.06 }, // London
              { location: [35.68, 139.65], size: 0.06 }, // Tokyo
            ],
          }}
          rotationSpeed={0.002}
        />
      </div>

      {/* Proof Layer: Region Latency */}
      <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-2">
        <div className="flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1.5 backdrop-blur-sm border border-border/50 shadow-sm">
          <Activity className="h-3 w-3 text-emerald-400" />
          <span className="text-[10px] font-semibold text-emerald-400">US</span>
          <span className="text-[10px] font-mono text-foreground">12ms</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1.5 backdrop-blur-sm border border-border/50 shadow-sm">
          <span className="text-[10px] font-semibold text-blue-400">EU</span>
          <span className="text-[10px] font-mono text-foreground">18ms</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1.5 backdrop-blur-sm border border-border/50 shadow-sm">
          <span className="text-[10px] font-semibold text-violet-400">
            APAC
          </span>
          <span className="text-[10px] font-mono text-foreground">24ms</span>
        </div>
      </div>

      {/* Edge indicator */}
      <div className="absolute top-3 right-3 z-10">
        <div className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 border border-emerald-500/20">
          <GlobeIcon className="h-3 w-3 text-emerald-400" />
          <span className="text-[9px] font-medium text-emerald-400">
            5 regions
          </span>
        </div>
      </div>
    </div>
  );
}
