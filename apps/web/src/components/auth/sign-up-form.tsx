"use client";

import { useState } from "react";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@nebutra/custom-ui/primitives";
import { Input } from "@nebutra/custom-ui/primitives";
import { Label } from "@nebutra/custom-ui/primitives";
import { Separator } from "@nebutra/custom-ui/primitives";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@nebutra/custom-ui/primitives";
import { OAuthButtons } from "./oauth-buttons";

type Step = "details" | "verify";
type FormState = "idle" | "loading" | "error";

export function SignUpForm() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();
  const [step, setStep] = useState<Step>("details");
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    if (!isLoaded || !signUp) return;

    setState("loading");
    setError("");

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress: email,
        password,
      });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setStep("verify");
      setState("idle");
    } catch (err: unknown) {
      const clerkError = err as { errors?: Array<{ message: string }> };
      setError(clerkError.errors?.[0]?.message || "Sign up failed.");
      setState("error");
    }
  }

  async function handleVerify(value: string) {
    if (!isLoaded || !signUp || value.length < 6) return;

    setState("loading");
    setError("");

    try {
      const result = await signUp.attemptEmailAddressVerification({
        code: value,
      });

      if (result.status === "complete") {
        await setActive({ session: result.createdSessionId });
        router.push("/onboarding");
      } else {
        setError("Verification failed. Please try again.");
        setState("error");
      }
    } catch (err: unknown) {
      const clerkError = err as { errors?: Array<{ message: string }> };
      setError(clerkError.errors?.[0]?.message || "Invalid code.");
      setState("error");
    }
  }

  async function handleResend() {
    if (!signUp) return;
    await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
  }

  if (step === "verify") {
    return (
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Check your email
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            We sent a 6-digit code to{" "}
            <span className="font-medium text-foreground">{email}</span>
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <InputOTP
            maxLength={6}
            value={code}
            onChange={(value) => {
              setCode(value);
              if (value.length === 6) {
                void handleVerify(value);
              }
            }}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <Button
            type="button"
            className="w-full"
            disabled={state === "loading" || code.length < 6}
            onClick={() => handleVerify(code)}
          >
            {state === "loading" ? "Verifying\u2026" : "Verify"}
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Didn&apos;t receive it?{" "}
          <button
            type="button"
            onClick={handleResend}
            className="text-foreground underline-offset-4 hover:underline"
          >
            Resend code
          </button>
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Create your account
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Start building today
        </p>
      </div>

      <OAuthButtons mode="sign_up" />

      <div className="flex items-center gap-3">
        <Separator className="flex-1" />
        <span className="text-xs text-muted-foreground">Or continue with</span>
        <Separator className="flex-1" />
      </div>

      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="firstName">First name</Label>
            <Input
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              autoComplete="given-name"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="lastName">Last name</Label>
            <Input
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              autoComplete="family-name"
            />
          </div>
        </div>

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
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="new-password"
            minLength={8}
          />
        </div>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <Button type="submit" className="w-full" disabled={state === "loading"}>
          {state === "loading" ? "Creating account\u2026" : "Create account"}
        </Button>
      </form>

      <p className="text-center text-sm text-muted-foreground">
        Already have an account?{" "}
        <Link
          href="/sign-in"
          className="text-foreground underline-offset-4 hover:underline"
        >
          Sign in
        </Link>
      </p>
    </div>
  );
}
