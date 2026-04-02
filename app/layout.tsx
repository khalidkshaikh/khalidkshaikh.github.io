import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono, Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Khalid Shaikh - Build. Ship. Repeat.",
  description:
    "AI workflows, vibe-coded apps, and automations that solve real problems. No meetings. No overthinking. Just shipping.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Khalid Shaikh",
    description: "AI Enthusiast. Build. Ship. Repeat. Vibe-coding real problems.",
    type: "website",
    url: "https://khalidshaikh.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khalid Shaikh",
    description: "Build. Ship. Repeat.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable} ${syne.variable} ${jakartaSans.variable}`}
    >
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
