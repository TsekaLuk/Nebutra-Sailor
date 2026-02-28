import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { DesignSystemProvider } from "@nebutra/design-system";
import { ErrorBoundary } from "@/components/ErrorBoundary";
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
        <DesignSystemProvider>
          <ErrorBoundary>{children}</ErrorBoundary>
        </DesignSystemProvider>
      </body>
    </html>
  );

  if (!hasClerkKey) {
    return content;
  }

  return <ClerkProvider>{content}</ClerkProvider>;
}
