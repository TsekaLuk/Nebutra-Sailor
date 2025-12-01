import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { DesignSystemProvider, Box, Header, Button } from "@nebutra/design-system";
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
          <Header>
            <Header.Item full>
              <span className="text-xl font-bold">Nebutra</span>
            </Header.Item>
            {hasClerkKey && (
              <Header.Item>
                <SignedOut>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <SignInButton mode="modal">
                      <Button variant="invisible">Sign In</Button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <Button variant="primary">Sign Up</Button>
                    </SignUpButton>
                  </Box>
                </SignedOut>
                <SignedIn>
                  <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "h-9 w-9",
                      },
                    }}
                  />
                </SignedIn>
              </Header.Item>
            )}
          </Header>
          <Box as="main" sx={{ minHeight: "calc(100vh - 64px)" }}>
            {children}
          </Box>
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
