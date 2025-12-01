"use client";

import React from "react";
import {
  Box,
  Button,
  DesignSystemProvider,
  Header,
} from "@nebutra/design-system";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

interface Props {
  children: React.ReactNode;
  hasClerkKey: boolean;
}

export function DesignSystemShell({ children, hasClerkKey }: Props) {
  return (
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
                  elements: { avatarBox: "h-9 w-9" },
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
  );
}
