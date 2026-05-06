import type { Metadata } from "next";
import { Oxanium, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const oxanium = Oxanium({
  subsets: ["latin"],
  variable: "--font-oxanium",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Prodigy",
    default: "Prodigy — STEM Learning Hub",
  },
  description:
    "Platform kurasi sumber belajar STEM terbaik — Sains, Matematika, Data Science, AI, Programming, dan lebih banyak lagi. Semua gratis, terstruktur, dan dikurasi untuk kamu.",
  keywords: ["belajar STEM", "sains", "matematika", "programming", "data science", "AI", "web development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${oxanium.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
