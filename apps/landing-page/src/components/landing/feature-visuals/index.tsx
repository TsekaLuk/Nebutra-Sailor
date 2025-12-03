"use client";

import { useRef } from "react";
import {
  AnimatedBeam,
  MagicCard,
  Globe,
  AnimatedList,
  cn,
} from "@nebutra/custom-ui";
import { Terminal } from "@nebutra/custom-ui/patterns";
import {
  Building2,
  Shield,
  Database,
  CreditCard,
  Zap,
  AlertTriangle,
  CheckCircle2,
  Globe as GlobeIcon,
} from "lucide-react";

/* ════════════════════════════════════════════════════════════════════════════
 * Multi-Tenant Architecture Visual
 *
 * 主视觉: MagicCard容器 + 3层架构堆叠
 * 用实际的层次结构展示 Clerk → Context → RLS 的隔离边界
 * ════════════════════════════════════════════════════════════════════════════ */
export function MultiTenantVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const clerkRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<HTMLDivElement>(null);
  const rlsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative h-full w-full min-h-[220px]">
      <MagicCard
        className="h-full w-full rounded-xl"
        gradientFrom="#0033FE"
        gradientTo="#0BF1C3"
        gradientColor="hsl(var(--muted))"
        gradientOpacity={0.15}
      >
        <div
          ref={containerRef}
          className="relative flex h-full flex-col items-center justify-center gap-3 p-6"
        >
          {/* Layer 1: Clerk Org */}
          <div
            ref={clerkRef}
            className="flex items-center gap-2 rounded-lg border border-blue-500/30 bg-blue-500/10 px-4 py-2 backdrop-blur-sm"
          >
            <Building2 className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">Clerk Org</span>
          </div>

          {/* Layer 2: Tenant Context */}
          <div
            ref={ctxRef}
            className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 backdrop-blur-sm"
          >
            <Shield className="h-4 w-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-400">
              TenantContext
            </span>
          </div>

          {/* Layer 3: Supabase RLS */}
          <div
            ref={rlsRef}
            className="flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/10 px-4 py-2 backdrop-blur-sm"
          >
            <Database className="h-4 w-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-400">
              Supabase RLS
            </span>
          </div>

          {/* Animated connection beams */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={clerkRef}
            toRef={ctxRef}
            curvature={-30}
            gradientStartColor="#3b82f6"
            gradientStopColor="#10b981"
            pathColor="hsl(var(--border))"
            pathOpacity={0.2}
            duration={2}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={ctxRef}
            toRef={rlsRef}
            curvature={30}
            gradientStartColor="#10b981"
            gradientStopColor="#8b5cf6"
            pathColor="hsl(var(--border))"
            pathOpacity={0.2}
            duration={2}
            delay={0.5}
          />
        </div>
      </MagicCard>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
 * AI-Native Architecture Visual
 *
 * 主视觉: Terminal compound组件 + 真实的AI配置代码
 * 展示多provider、failover、rate-limit配置
 * ════════════════════════════════════════════════════════════════════════════ */
export function AINativeVisual() {
  return (
    <div className="relative h-full w-full min-h-[240px] p-3">
      <Terminal variant="glass" className="h-full">
        <Terminal.Header title="ai.config.ts" />
        <Terminal.Body className="text-xs">
          <Terminal.Line prompt="//" output>
            <span className="text-zinc-500">Multi-provider AI layer</span>
          </Terminal.Line>
          <Terminal.Line prompt="const">
            <span className="text-violet-400">config</span>
            <span className="text-zinc-500"> = </span>
            <span className="text-amber-400">{"{ "}</span>
          </Terminal.Line>
          <Terminal.Line prompt=" ">
            <span className="text-blue-400">providers</span>
            <span className="text-zinc-500">: </span>
            <span className="text-emerald-400">
              [{'"openai", "anthropic", "google"'}]
            </span>
            <span className="text-zinc-500">,</span>
          </Terminal.Line>
          <Terminal.Line prompt=" " highlight>
            <span className="text-blue-400">fallback</span>
            <span className="text-zinc-500">: </span>
            <span className="text-emerald-400">{'"anthropic"'}</span>
            <span className="text-zinc-500">,</span>
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
 * Unified Billing Visual
 *
 * 主视觉: AnimatedList + 实时通知卡片
 * 展示订阅事件、用量告警、扣费通知的实时流
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
    <div className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/80 p-3 backdrop-blur-sm">
      <div className={cn("rounded-full p-1.5", color)}>{icon}</div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-foreground truncate">{title}</p>
        <p className="text-[10px] text-muted-foreground truncate">
          {description}
        </p>
      </div>
      <span className="text-[10px] text-muted-foreground/60 whitespace-nowrap">
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
    title: "Usage threshold: 80%",
    description: "API calls quota warning",
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
  {
    icon: <AlertTriangle className="h-3 w-3 text-red-500" />,
    title: "Quota exceeded",
    description: "Storage limit reached",
    time: "3h",
    color: "bg-red-500/10",
  },
];

export function BillingVisual() {
  return (
    <div className="relative h-full w-full min-h-[220px] overflow-hidden p-3">
      {/* 渐变遮罩 - 底部淡出 */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-background to-transparent" />

      <AnimatedList delay={2000} className="gap-2">
        {billingNotifications.map((notification, idx) => (
          <NotificationItem key={idx} {...notification} />
        ))}
      </AnimatedList>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════════
 * Global Edge Deployment Visual
 *
 * 主视觉: 3D Globe + edge节点标记
 * 展示全球边缘部署的实时延迟数据
 * ════════════════════════════════════════════════════════════════════════════ */
export function GlobalEdgeVisual() {
  return (
    <div className="relative h-full w-full min-h-[200px] overflow-hidden">
      {/* Globe */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Globe
          className="!relative !w-[180px] !h-[180px] opacity-80"
          config={{
            width: 360,
            height: 360,
            phi: 0.3,
            theta: 0.2,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 20000,
            mapBrightness: 6,
            baseColor: [0.15, 0.15, 0.2],
            markerColor: [0.04, 0.95, 0.76], // #0BF1C3
            glowColor: [0.1, 0.1, 0.15],
            markers: [
              { location: [37.77, -122.41], size: 0.08 }, // SF
              { location: [51.51, -0.13], size: 0.08 }, // London
              { location: [35.68, 139.65], size: 0.08 }, // Tokyo
              { location: [1.35, 103.82], size: 0.06 }, // Singapore
              { location: [-33.87, 151.21], size: 0.05 }, // Sydney
            ],
          }}
          rotationSpeed={0.003}
        />
      </div>

      {/* Latency overlay */}
      <div className="absolute bottom-3 left-0 right-0 z-10 flex justify-center gap-4">
        <div className="flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 backdrop-blur-sm border border-border/50">
          <GlobeIcon className="h-3 w-3 text-emerald-400" />
          <span className="text-[10px] font-medium text-emerald-400">US</span>
          <span className="text-[10px] text-muted-foreground">12ms</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 backdrop-blur-sm border border-border/50">
          <span className="text-[10px] font-medium text-blue-400">EU</span>
          <span className="text-[10px] text-muted-foreground">18ms</span>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-background/80 px-2.5 py-1 backdrop-blur-sm border border-border/50">
          <span className="text-[10px] font-medium text-violet-400">APAC</span>
          <span className="text-[10px] text-muted-foreground">24ms</span>
        </div>
      </div>
    </div>
  );
}
