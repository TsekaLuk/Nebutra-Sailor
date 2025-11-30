import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <html lang="en">
      <body className="antialiased">
        <header className="flex justify-end items-center p-4 gap-4 h-16 absolute top-0 right-0 z-50">
          {hasClerkKey && (
            <>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="bg-blue-600 text-white rounded-lg font-medium text-sm px-4 py-2 hover:bg-blue-700">
                    Get Started
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </>
          )}
        </header>
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
