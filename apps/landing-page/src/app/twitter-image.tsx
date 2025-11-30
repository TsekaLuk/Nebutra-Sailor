import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Nebutra - Enterprise SaaS Platform";
export const size = { width: 1200, height: 600 };
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
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 20,
            }}
          >
            <span style={{ fontSize: 44, color: "white", fontWeight: 700 }}>N</span>
          </div>
          <span
            style={{
              fontSize: 56,
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Nebutra
          </span>
        </div>

        {/* Tagline */}
        <span
          style={{
            fontSize: 28,
            color: "#94A3B8",
          }}
        >
          AI-Native • Multi-Tenant • Global Scale
        </span>
      </div>
    ),
    { ...size }
  );
}
