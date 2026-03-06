import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Buy Google Reviews in Nigeria | Certified Local Guides | BuyReviewsInNigeria",
    template: "%s | BuyReviewsInNigeria",
  },
  description:
    "Get authentic Google Reviews and Trustpilot reviews from certified Local Guides (Level 4+) in Nigeria. Real people, real accounts, real reviews. Serving 1,000+ Nigerian businesses.",
  metadataBase: new URL("https://buyreviewsinnigeria.com"),
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://buyreviewsinnigeria.com",
    siteName: "BuyReviewsInNigeria",
    title: "Buy Google Reviews in Nigeria | Certified Local Guides",
    description:
      "Get authentic Google Reviews from 500+ certified Local Guides across Nigeria. Real people, real accounts, real reviews.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buy Google Reviews in Nigeria | Certified Local Guides",
    description:
      "Get authentic Google Reviews from 500+ certified Local Guides across Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${inter.variable} ${roboto.variable} ${robotoMono.variable} font-body antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
