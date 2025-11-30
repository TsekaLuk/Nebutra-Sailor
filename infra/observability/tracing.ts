import { NodeSDK } from "@opentelemetry/sdk-node";
import { getNodeAutoInstrumentations } from "@opentelemetry/auto-instrumentations-node";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import { OTLPMetricExporter } from "@opentelemetry/exporter-metrics-otlp-http";
import { PeriodicExportingMetricReader } from "@opentelemetry/sdk-metrics";
import { Resource } from "@opentelemetry/resources";
import {
  SEMRESATTRS_SERVICE_NAME,
  SEMRESATTRS_SERVICE_VERSION,
  SEMRESATTRS_DEPLOYMENT_ENVIRONMENT,
} from "@opentelemetry/semantic-conventions";

const serviceName = process.env.OTEL_SERVICE_NAME || "nebutra-sailor";
const serviceVersion = process.env.npm_package_version || "0.0.1";
const environment = process.env.NODE_ENV || "development";

// Configure resource attributes
const resource = new Resource({
  [SEMRESATTRS_SERVICE_NAME]: serviceName,
  [SEMRESATTRS_SERVICE_VERSION]: serviceVersion,
  [SEMRESATTRS_DEPLOYMENT_ENVIRONMENT]: environment,
});

// Configure trace exporter
const traceExporter = new OTLPTraceExporter({
  url: process.env.OTEL_EXPORTER_OTLP_TRACES_ENDPOINT || "http://localhost:4318/v1/traces",
  headers: {
    Authorization: process.env.OTEL_EXPORTER_OTLP_HEADERS || "",
  },
});

// Configure metrics exporter
const metricReader = new PeriodicExportingMetricReader({
  exporter: new OTLPMetricExporter({
    url: process.env.OTEL_EXPORTER_OTLP_METRICS_ENDPOINT || "http://localhost:4318/v1/metrics",
    headers: {
      Authorization: process.env.OTEL_EXPORTER_OTLP_HEADERS || "",
    },
  }),
  exportIntervalMillis: 60000, // Export every 60 seconds
});

// Create SDK
const sdk = new NodeSDK({
  resource,
  traceExporter,
  metricReader,
  instrumentations: [
    getNodeAutoInstrumentations({
      "@opentelemetry/instrumentation-fs": { enabled: false },
      "@opentelemetry/instrumentation-http": {
        ignoreIncomingPaths: ["/health", "/misc/health", "/system/status"],
      },
    }),
  ],
});

/**
 * Initialize OpenTelemetry
 */
export function initTracing(): void {
  sdk.start();

  // Graceful shutdown
  process.on("SIGTERM", () => {
    sdk.shutdown().then(
      () => console.log("Tracing terminated"),
      (error) => console.error("Error terminating tracing", error)
    );
  });
}

export { sdk };
