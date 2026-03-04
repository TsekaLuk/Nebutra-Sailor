import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Nebutra Sailor - Enterprise SaaS Framework";
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
        backgroundColor: "#020617",
        backgroundImage:
          "radial-gradient(ellipse 76% 48% at 50% 40%, rgba(0,51,254,0.27) 0%, transparent 72%), radial-gradient(ellipse 58% 35% at 70% 72%, rgba(11,241,195,0.20) 0%, transparent 75%)",
      }}
    >
      <span
        style={{
          fontSize: 24,
          color: "rgba(255,255,255,0.74)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: 22,
        }}
      >
        Nebutra Sailor
      </span>
      <span
        style={{
          fontSize: 74,
          fontWeight: 700,
          color: "#ffffff",
          letterSpacing: "-0.03em",
          textAlign: "center",
          lineHeight: 1.05,
        }}
      >
        Open-Source Enterprise SaaS
      </span>
      <span
        style={{
          fontSize: 30,
          color: "#a7f7e4",
          textAlign: "center",
          marginTop: 14,
        }}
      >
        Build faster with multi-tenant + billing + AI foundations
      </span>
    </div>,
    { ...size },
  );
}
