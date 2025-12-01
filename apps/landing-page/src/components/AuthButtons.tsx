"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@nebutra/design-system";

export function AuthButtons() {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <Button variant="invisible">Sign In</Button>
        </SignInButton>
        <SignUpButton mode="modal">
          <Button variant="primary">Get Started</Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
  );
}
