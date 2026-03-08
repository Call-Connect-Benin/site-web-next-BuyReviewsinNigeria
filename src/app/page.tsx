import type { Metadata } from "next";
import {
  Hero,
  TrustBar,
  HowItWorks,
  AuthenticReviewsExplainer,
  ServicesSection,
  IndustriesSection,
  LocationsSection,
  TestimonialsSection,
  WhyReviewsMatter,
  PricingPreview,
  FAQSection,
  CTAFinal,
} from "@/components/sections";
import { getHomepageFaq } from "@/data/faq";

export const metadata: Metadata = {
  title:
    "Buy Google Reviews in Nigeria ⭐ 500+ Certified Local Guides | BuyReviewsInNigeria",
  description:
    "🎁 5 FREE reviews with your first order! Buy authentic Google Reviews in Nigeria from 500+ certified Local Guides (Level 4+). ⭐ 4.9/5 rating · 15 cities · 25+ industries · 95% retention rate.",
  alternates: {
    canonical: "https://buyreviewsinnigeria.com/",
  },
  openGraph: {
    title: "⭐ Buy Google Reviews in Nigeria | 500+ Certified Local Guides",
    description:
      "🎁 Get 5 FREE Google Reviews with your first order! 500+ certified Local Guides across Nigeria. Real people, real accounts, real reviews.",
    url: "https://buyreviewsinnigeria.com/",
    type: "website",
  },
};

export default function HomePage() {
  const faqItems = getHomepageFaq();

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
      priceRange: "₦150,000 - ₦400,000/month",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "650",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Google Review Collection Service",
      description:
        "Authentic Google Reviews from certified Local Guides in Nigeria. Real visits, real reviews, 95%+ retention rate.",
      brand: {
        "@type": "Brand",
        name: "BuyReviewsInNigeria",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "NGN",
        lowPrice: "150000",
        highPrice: "400000",
        offerCount: "3",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "650",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer.replace(/<[^>]*>/g, ""),
        },
      })),
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
        <PricingPreview />

        {/* Loom Presentation Video */}
        <section className="bg-bg py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-center font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              See How It Works
            </h2>
            <div className="overflow-hidden rounded-2xl shadow-lg" style={{ position: "relative", paddingBottom: "64.98%", height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/07d6d406731748b795f7ff96c105bc00"
                allow="fullscreen"
                className="absolute inset-0 h-full w-full border-0"
                title="BuyReviewsInAfrica Presentation"
              />
            </div>
          </div>
        </section>

        <TrustBar />
        <HowItWorks />
        <AuthenticReviewsExplainer />
        <ServicesSection />
        <IndustriesSection />
        <LocationsSection />
        <TestimonialsSection />
        <WhyReviewsMatter />
        <FAQSection />
        <CTAFinal />
      </main>
    </>
  );
}
