import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { DesignSystemShell } from "./providers/design-system-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nebutra - SaaS Platform",
  description: "Enterprise-grade AI-native SaaS platform",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

const hasClerkKey = !!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const content = (
    <html lang="en">
      <body className="antialiased">
        <DesignSystemShell hasClerkKey={hasClerkKey}>{children}</DesignSystemShell>
      </body>
    </html>
  );

  // Skip ClerkProvider if keys not configured (for build without env)
  if (!hasClerkKey) {
    return content;
  }

  return <ClerkProvider>{content}</ClerkProvider>;
}
