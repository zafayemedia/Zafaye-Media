import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE } from "@/lib/constants";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  // 300 is the brand-black headline weight (REBUILD-PLAN.md).
  weight: ["300", "400", "500"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Zafaye Media is a digital marketing agency running paid social, organic content, clipping campaigns, websites and Shopify builds, and branding for businesses in Pakistan and the US.",
  icons: {
    icon: "/logo-primary-transparent.png",
    shortcut: "/logo-primary-transparent.png",
    apple: "/logo-primary.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
