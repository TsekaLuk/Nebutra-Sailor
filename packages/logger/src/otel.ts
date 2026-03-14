import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import {
  ParentBasedSampler,
  TraceIdRatioBasedSampler,
} from "@opentelemetry/sdk-trace-node";

let sdk: NodeSDK | null = null;

/**
 * Initialize OpenTelemetry SDK.
 * No-op unless OTEL_ENABLED=true.
 *
 * Environment variables:
 *   OTEL_ENABLED=true                          — activate tracing
 *   OTEL_EXPORTER_OTLP_ENDPOINT=https://...   — Sentry / Datadog / Grafana / Jaeger
 *   OTEL_EXPORTER_OTLP_HEADERS=...            — auth headers (e.g. "Authorization=Bearer ...")
 *   OTEL_SERVICE_NAME=my-service              — override service name
 *   OTEL_SAMPLE_RATE=0.1                      — fraction of traces to export (default: 0.1 in prod, 1.0 in dev)
 */
export function initOtel(opts: { serviceName: string }): void {
  if (process.env.OTEL_ENABLED !== "true") return;

  const serviceName = process.env.OTEL_SERVICE_NAME ?? opts.serviceName;
  const isProduction = process.env.NODE_ENV === "production";

  // Configurable sample rate — defaults to 10% in production, 100% in dev.
  // Parent-based sampler respects upstream sampling decisions (e.g. from ingress).
  const sampleRate = process.env.OTEL_SAMPLE_RATE
    ? parseFloat(process.env.OTEL_SAMPLE_RATE)
    : isProduction
      ? 0.1
      : 1.0;

  const sampler = new ParentBasedSampler({
    root: new TraceIdRatioBasedSampler(
      Math.max(0, Math.min(1, sampleRate)), // clamp to [0, 1]
    ),
  });

  sdk = new NodeSDK({
    serviceName,
    sampler,
    traceExporter: new OTLPTraceExporter(),
    instrumentations: [
      getNodeAutoInstrumentations({
        // fs instrumentation is extremely noisy — generates spans for every file read
        "@opentelemetry/instrumentation-fs": { enabled: false },
      }),
    ],
  });

  sdk.start();

  // Flush pending spans before the process exits
  process.on("SIGTERM", async () => {
    await sdk?.shutdown();
  });
}
