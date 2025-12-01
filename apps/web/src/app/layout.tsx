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
        <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <span className="text-xl font-bold">Nebutra</span>
          {hasClerkKey && (
            <div className="flex items-center gap-2">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-sm font-medium text-gray-700 underline">Sign In</button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: { avatarBox: "h-9 w-9" },
                  }}
                />
              </SignedIn>
            </div>
          )}
        </header>
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
      </body>
    </html>
  );

  // Skip ClerkProvider if keys not configured (for build without env)
  if (!hasClerkKey) {
    return content;
  }

  return <ClerkProvider>{content}</ClerkProvider>;
}
