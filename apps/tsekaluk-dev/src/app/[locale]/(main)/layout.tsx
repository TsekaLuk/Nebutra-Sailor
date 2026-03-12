import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="relative z-0">
        <div className="absolute inset-x-0 top-0 h-[900px] bg-gradient-to-b from-[#a3e635]/80 via-[#a3e635]/20 to-transparent dark:from-[#a3e635]/10 dark:via-transparent -z-10 pointer-events-none" />
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#a3e635]/60 via-transparent to-transparent dark:from-[#a3e635]/10 rounded-full blur-3xl pointer-events-none -z-10 opacity-70" />
        {children}
      </main>
      <Footer />
    </>
  );
}
