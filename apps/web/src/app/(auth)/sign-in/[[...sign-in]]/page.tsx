import { Suspense } from "react";
import { AuthSplitLayout } from "@/components/auth/auth-split-layout";
import { SignInForm } from "@/components/auth/sign-in-form";

export default function SignInPage() {
  return (
    <AuthSplitLayout>
      <Suspense>
        <SignInForm />
      </Suspense>
    </AuthSplitLayout>
  );
}
