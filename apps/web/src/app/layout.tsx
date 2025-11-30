import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nebutra - SaaS Platform",
  description: "Enterprise-grade AI-native SaaS platform",
};

const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );

  // Skip ClerkProvider if keys not configured (for build without env)
  if (!hasClerkKey) {
    return content;
  }

  return <ClerkProvider>{content}</ClerkProvider>;
}
