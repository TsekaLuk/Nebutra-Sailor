import { ImageResponse } from "next/og";
import { seoContent } from "@/lib/landing-content";

export const runtime = "edge";

export const alt = seoContent.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
        backgroundImage:
          "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(99,102,241,0.18) 0%, transparent 70%)",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 999,
          padding: "6px 20px",
          marginBottom: 32,
          background: "rgba(255,255,255,0.04)",
        }}
      >
        <span
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          MIT Licensed · Production-Ready
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <span
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Nebutra <span style={{ color: "#818cf8" }}>Sailor</span>
        </span>
        <span
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.45)",
            textAlign: "center",
            maxWidth: 700,
            lineHeight: 1.5,
          }}
        >
          {seoContent.description}
        </span>
      </div>

      {/* Command box */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 48,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 12,
          padding: "14px 28px",
        }}
      >
        <span
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.3)",
            marginRight: 12,
          }}
        >
          $
        </span>
        <span
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.7)",
            fontFamily: "monospace",
          }}
        >
          npx create-sailor@latest
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
        <span style={{ fontSize: 18, color: "rgba(255,255,255,0.2)" }}>
          nebutra.com
        </span>
      </div>
    </div>,
    { ...size },
  );
}
