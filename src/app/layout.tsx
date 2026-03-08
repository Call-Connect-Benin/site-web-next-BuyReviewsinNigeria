import type { Metadata } from "next";
import { Inter, Roboto, Roboto_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ExitIntentPopup } from "@/components/layout/exit-intent-popup";
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
    default: "Buy Google Reviews in Nigeria ⭐ Certified Local Guides | BuyReviewsInNigeria",
    template: "%s | BuyReviewsInNigeria",
  },
  description:
    "🎁 5 FREE reviews with first order! Get authentic Google Reviews from 500+ certified Local Guides in Nigeria. ⭐ 4.9/5 rating · 15 cities · 1,000+ happy businesses.",
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
  const globalJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BuyReviewsInNigeria",
    url: "https://buyreviewsinnigeria.com",
    telephone: "+2347085888855",
    email: "contact@buyreviews.africa",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    priceRange: "₦150,000 - ₦400,000/month",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "650",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} ${robotoMono.variable} font-body antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
