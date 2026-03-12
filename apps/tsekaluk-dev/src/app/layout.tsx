import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { getLocale } from "next-intl/server";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  manifest: "/site.webmanifest",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="antialiased overflow-x-hidden text-gray-900 relative bg-[#fafafa] dark:bg-[#0a0a0a] dark:text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
