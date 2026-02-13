import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { cn } from "@/lib/utils";

// Configure Lato font: 300 (Light), 400 (Regular), 700 (Bold), 900 (Black)
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato"
});

export const metadata: Metadata = {
  title: "Ocean Park Digital | Premium Growth Solutions",
  description: "Ocean Park Digital offers cinematic web experiences, SEO optimization, and data-driven marketing strategies for ambitious brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(lato.variable, "antialiased")}>
      <body className="flex min-h-screen flex-col bg-slate-900 text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-sans">
        <SmoothScroll>
          <Header />
          <main className="flex-1 w-full relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
