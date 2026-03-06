import { Suspense } from "react";
import { AuthSplitLayout } from "@/components/auth/auth-split-layout";
import { SignUpForm } from "@/components/auth/sign-up-form";

export default function SignUpPage() {
  return (
    <AuthSplitLayout>
      <Suspense>
        <SignUpForm />
      </Suspense>
    </AuthSplitLayout>
  );
}
