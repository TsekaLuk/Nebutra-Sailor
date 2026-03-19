import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0033FE 0%, #0BF1C3 100%)",
        borderRadius: 100,
      }}
    >
      <span
        style={{
          fontSize: 280,
          fontWeight: 700,
          color: "white",
        }}
      >
        N
      </span>
    </div>,
    { ...size },
  );
}
