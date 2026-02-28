import { SignIn } from "@clerk/nextjs";
import { AuthSplitLayout } from "@/components/auth/auth-split-layout";

const clerkAppearance = {
  variables: {
    colorPrimary: "#6366f1",
    colorBackground: "#ffffff",
    colorText: "#0f0f0f",
    colorTextSecondary: "#6b7280",
    colorInputBackground: "#ffffff",
    colorInputText: "#0f0f0f",
    borderRadius: "0.5rem",
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
    fontSize: "14px",
  },
  elements: {
    rootBox: "w-full",
    card: "shadow-none border-0 p-0 w-full bg-transparent",
    headerTitle: "text-2xl font-semibold tracking-tight text-gray-900",
    headerSubtitle: "text-sm text-gray-500",
    socialButtonsBlockButton:
      "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 font-medium",
    dividerLine: "bg-gray-200",
    dividerText: "text-gray-400 text-xs",
    formFieldLabel: "text-sm font-medium text-gray-700",
    formFieldInput:
      "border border-gray-200 bg-white text-gray-900 focus:ring-indigo-500 focus:border-indigo-500",
    formButtonPrimary:
      "bg-indigo-600 hover:bg-indigo-700 text-white font-medium shadow-none",
    footerActionLink: "text-indigo-600 hover:text-indigo-700 font-medium",
    identityPreviewText: "text-gray-700",
    identityPreviewEditButton: "text-indigo-600",
  },
} as const;

export default function SignInPage() {
  return (
    <AuthSplitLayout>
      <SignIn appearance={clerkAppearance} />
    </AuthSplitLayout>
  );
}
