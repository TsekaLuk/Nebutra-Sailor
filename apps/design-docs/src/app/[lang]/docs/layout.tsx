import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { source } from "@/lib/source";
import { CustomThemeToggle } from "../../../components/custom-theme-toggle";

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <DocsLayout
      tree={source.pageTree[lang as keyof typeof source.pageTree]}
      nav={{
        title: "Nebutra Design System",
        url: `/${lang}/docs`,
      }}
      i18n={true}
      themeSwitch={{
        component: <CustomThemeToggle />,
      }}
      githubUrl="https://github.com/TsekaLuk/Nebutra-Sailor"
    >
      {children}
    </DocsLayout>
  );
}
