import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nebutra Sailor",
    short_name: "Sailor",
    description: "The Open-Source Enterprise SaaS Framework",
    start_url: "/en",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#6366f1",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
