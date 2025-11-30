import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)",
          borderRadius: 40,
        }}
      >
        <span
          style={{
            fontSize: 100,
            fontWeight: 700,
            color: "white",
          }}
        >
          N
        </span>
      </div>
    ),
    { ...size }
  );
}
