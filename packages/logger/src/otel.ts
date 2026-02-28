import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";

let sdk: NodeSDK | null = null;

/**
 * Initialize OpenTelemetry SDK.
 * No-op unless OTEL_ENABLED=true.
 *
 * Set these env vars to connect to your platform:
 *   OTEL_EXPORTER_OTLP_ENDPOINT=https://...   (Sentry/Datadog/Grafana)
 *   OTEL_EXPORTER_OTLP_HEADERS=...            (auth headers)
 */
export function initOtel(opts: { serviceName: string }): void {
  if (process.env.OTEL_ENABLED !== "true") return;

  const serviceName = process.env.OTEL_SERVICE_NAME ?? opts.serviceName;

  sdk = new NodeSDK({
    serviceName,
    traceExporter: new OTLPTraceExporter(),
    instrumentations: [
      getNodeAutoInstrumentations({
        "@opentelemetry/instrumentation-fs": { enabled: false },
      }),
    ],
  });

  sdk.start();

  process.on("SIGTERM", async () => {
    await sdk?.shutdown();
  });
}
