import { AuthBanner } from "./auth-banner";
import { cn } from "@nebutra/ui/utils";

interface AuthSplitLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function AuthSplitLayout({ children, className }: AuthSplitLayoutProps) {
  return (
    <div className={cn("grid min-h-screen lg:grid-cols-[2fr_3fr]", className)}>
      <AuthBanner />
      <div className="flex flex-col items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-sm">{children}</div>
      </div>
    </div>
  );
}
