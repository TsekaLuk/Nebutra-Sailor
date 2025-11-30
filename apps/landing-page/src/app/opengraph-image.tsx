import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Nebutra - Enterprise SaaS Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0F172A",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #1E40AF 0%, transparent 50%), radial-gradient(circle at 75% 75%, #7C3AED 0%, transparent 50%)",
        }}
      >
        {/* Logo/Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: 20,
              background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 24,
            }}
          >
            <span style={{ fontSize: 48, color: "white", fontWeight: 700 }}>N</span>
          </div>
          <span
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Nebutra
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 36,
              color: "#E2E8F0",
              textAlign: "center",
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Enterprise SaaS Platform
          </span>
          <span
            style={{
              fontSize: 24,
              color: "#94A3B8",
              marginTop: 16,
            }}
          >
            AI-Native • Multi-Tenant • Global Scale
          </span>
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 20, color: "#64748B" }}>nebutra.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
