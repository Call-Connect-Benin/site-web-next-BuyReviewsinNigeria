import type { Metadata } from "next";
import {
  Hero,
  TrustBar,
  HowItWorks,
  ServicesSection,
  IndustriesSection,
  LocationsSection,
  TestimonialsSection,
  PricingPreview,
  FAQSection,
  CTAFinal,
} from "@/components/sections";

export const metadata: Metadata = {
  title:
    "Buy Google Reviews in Nigeria | Certified Local Guides | BuyReviewsInNigeria",
  description:
    "Get authentic Google Reviews from 500+ certified Local Guides (Level 4+) across 15 Nigerian cities. Real reviewers, real visits, real results. Starting at ₦25,000.",
  alternates: {
    canonical: "https://buyreviewsinnigeria.com/",
  },
  openGraph: {
    title: "Buy Google Reviews in Nigeria | Certified Local Guides",
    description:
      "Get authentic Google Reviews from 500+ certified Local Guides across Nigeria. Real people, real accounts, real reviews.",
    url: "https://buyreviewsinnigeria.com/",
    type: "website",
  },
};

export default function HomePage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "BuyReviewsInNigeria",
      url: "https://buyreviewsinnigeria.com",
      description:
        "Nigeria's leading platform for authentic Google Reviews from certified Local Guides.",
      areaServed: {
        "@type": "Country",
        name: "Nigeria",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "BuyReviewsInNigeria",
      url: "https://buyreviewsinnigeria.com",
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "BuyReviewsInNigeria",
      url: "https://buyreviewsinnigeria.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
      },
      priceRange: "₦25,000 - ₦120,000+",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <ServicesSection />
        <IndustriesSection />
        <LocationsSection />
        <TestimonialsSection />
        <PricingPreview />
        <FAQSection />
        <CTAFinal />
      </main>
    </>
  );
}
