import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { DesignSystemProvider } from "@nebutra/design-system";
import { AuthButtons } from "@/components/AuthButtons";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nebutra - Enterprise SaaS Platform",
  description: "Build your next AI-native SaaS application with multi-tenant architecture, AI features, and global scalability.",
  keywords: ["SaaS", "AI", "enterprise", "multi-tenant", "platform", "startup"],
  authors: [{ name: "Nebutra" }],
  creator: "Nebutra",
  metadataBase: new URL("https://nebutra.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nebutra.com",
    siteName: "Nebutra",
    title: "Nebutra - Enterprise SaaS Platform",
    description: "Build your next AI-native SaaS application with multi-tenant architecture, AI features, and global scalability.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nebutra - Enterprise SaaS Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nebutra - Enterprise SaaS Platform",
    description: "Build your next AI-native SaaS application",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
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
          <header className="flex justify-end items-center p-3 gap-2 h-16 absolute top-0 right-0 z-50">
            {hasClerkKey && <AuthButtons />}
          </header>
          {children}
        </DesignSystemProvider>
      </body>
    </html>
  );

  // Skip ClerkProvider if keys not configured (for build without env)
  if (!hasClerkKey) {
    return content;
  }

  return <ClerkProvider>{content}</ClerkProvider>;
}
