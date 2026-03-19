"use client";

import { useSignIn } from "@clerk/nextjs";
import { Button, Input } from "@nebutra/ui/components";
import { Label, Separator } from "@nebutra/ui/primitives";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { extractClerkErrorMessage } from "@/lib/clerk-errors";
import { OAuthButtons } from "./oauth-buttons";

export function SignInForm() {
  const { signIn, fetchStatus } = useSignIn();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const isReady = fetchStatus === "idle";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isReady || !signIn) return;

    setLoading(true);
    setError("");

    try {
      await signIn.create({ identifier: email });

      const { error: pwError } = await signIn.password({
        password,
        identifier: email,
      });
      if (pwError) {
        setError(pwError.message ?? "Sign in failed");
        return;
      }

      if (signIn.status === "complete") {
        await signIn.finalize();
        router.push("/");
      }
    } catch (err: unknown) {
      setError(extractClerkErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-[var(--neutral-12)]">
          Log in to Nebutra
        </h1>
        <p className="mt-1 text-sm text-[var(--neutral-9)]">Welcome back</p>
      </div>

      <OAuthButtons mode="signIn" />

      <div className="relative">
        <Separator />
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-xs text-[var(--neutral-9)]">
          Or continue with
        </span>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              href="/sign-in#/forgot-password"
              className="text-xs text-[color:var(--blue-11)] hover:text-[color:var(--blue-12)]"
            >
              Forgot password?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>

        {error && <p className="text-sm text-[hsl(var(--destructive))]">{error}</p>}

        <Button htmlType="submit" className="w-full" disabled={loading || !isReady}>
          {loading ? "Signing in…" : "Log in"}
        </Button>
      </form>

      <p className="text-center text-sm text-[var(--neutral-9)]">
        New to Nebutra?{" "}
        <Link
          href="/sign-up"
          className="font-medium text-[color:var(--blue-11)] hover:text-[color:var(--blue-12)]"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
}
