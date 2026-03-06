import { Suspense } from "react";
import { connection } from "next/server";
import { AuthSplitLayout } from "@/components/auth/auth-split-layout";
import { SignUpForm } from "@/components/auth/sign-up-form";

async function SignUpPageContent() {
  await connection();
  return (
    <AuthSplitLayout>
      <SignUpForm />
    </AuthSplitLayout>
  );
}

export default function SignUpPage() {
  return (
    <Suspense>
      <SignUpPageContent />
    </Suspense>
  );
}
