import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nebutra Identity",
  description: "Nebutra OAuth 2.0 / OpenID Connect Identity Provider",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="from-slate-950 via-slate-900 to-blue-950 text-white min-h-screen bg-gradient-to-br antialiased">
        {children}
      </body>
    </html>
  );
}
