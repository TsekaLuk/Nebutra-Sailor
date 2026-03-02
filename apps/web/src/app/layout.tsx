import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { DesignSystemProvider } from "@nebutra/design-system";
import { ThemeShell } from "./providers/theme-provider";
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
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeShell>
          <DesignSystemProvider>
            <ErrorBoundary>{children}</ErrorBoundary>
          </DesignSystemProvider>
        </ThemeShell>
      </body>
    </html>
  );

  if (!hasClerkKey) {
    return content;
  }

  return <ClerkProvider>{content}</ClerkProvider>;
}
