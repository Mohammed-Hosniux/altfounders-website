import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AltFounders - Custom AI Agents for Founders & Operators",
  description:
    "AltFounders helps businesses scale with custom AI agents for outreach, operations, and growth. Voice, Sales, and Chat agents deployed in under 30 days.",
  openGraph: {
    title: "AltFounders - Custom AI Agents for Founders & Operators",
    description:
      "Design, build, and deploy custom AI agents that automate outreach, operations, and customer communication.",
    type: "website",
    siteName: "AltFounders",
    images: [{ url: "/icon.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "AltFounders - Custom AI Agents for Founders & Operators",
    description:
      "Scale your business with AI agents that work 24/7. Deployed in under 30 days.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
