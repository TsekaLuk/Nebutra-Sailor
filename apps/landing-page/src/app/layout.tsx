import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nebutra - Enterprise SaaS Platform",
  description: "Build your next AI-native SaaS application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
