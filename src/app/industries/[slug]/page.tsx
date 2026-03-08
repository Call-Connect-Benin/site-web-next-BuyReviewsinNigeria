import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  industries,
  getIndustryBySlug,
  getAllIndustrySlugs,
} from "@/data/industries";
import { services } from "@/data/services";
import { cities } from "@/data/locations/cities";
import { getCrossReferencesByIndustry } from "@/data/cross-references";
import { pricingPlans } from "@/data/pricing";
import {
  industryBreadcrumbs,
  getIndustryPageLinks,
} from "@/lib/internal-links";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { InternalLinks } from "@/components/sections";
import { iconMap, CheckCircle, ArrowRight, MapPin, Quote } from "@/components/icons";
import { PromoForm } from "@/components/forms/promo-form";
import { StarRating, FaqAccordion } from "@/components/ui";
import { getColorForIndex } from "@/lib/colors";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
  };
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) notFound();

  const Icon = iconMap[industry.icon];

  // Resolve related data
  const relatedServiceData = industry.relatedServices
    .map((sSlug) => services.find((s) => s.slug === sSlug))
    .filter(Boolean) as typeof services;

  const relatedIndustryData = industry.relatedIndustries
    .map((iSlug) => industries.find((i) => i.slug === iSlug))
    .filter(Boolean) as typeof industries;

  const topCityData = industry.topCities
    .map((cSlug) => cities.find((c) => c.slug === cSlug))
    .filter(Boolean) as typeof cities;

  // Cross-references for this industry
  const industryCrossRefs = getCrossReferencesByIndustry(slug);
  const crossRefCityData = industryCrossRefs
    .map((cr) => cities.find((c) => c.slug === cr.city))
    .filter(Boolean) as typeof cities;

  // Internal links
  const linkGroups = getIndustryPageLinks(
    slug,
    relatedIndustryData.map((i) => ({ slug: i.slug, name: i.name })),
    topCityData.map((c) => ({ slug: c.slug, name: c.name })),
    crossRefCityData.map((c) => ({ slug: c.slug, name: c.name })),
  );

  // Breadcrumbs
  const breadcrumbItems = industryBreadcrumbs(industry.name, industry.slug);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Google Reviews for ${industry.name} in Nigeria`,
    description: industry.metaDescription,
    provider: {
      "@type": "Organization",
      name: "BuyReviewsInNigeria",
      url: "https://buyreviewsinnigeria.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    serviceType: "Review Collection",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: industry.averageRating.toString(),
      bestRating: "5",
      ratingCount: "500",
    },
  };

  return (
    <main className="min-h-screen bg-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-google-blue/15 to-google-blue/5 shadow-[0_0_16px_rgba(66,133,244,0.2)] text-google-blue">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                Google Reviews for {industry.name} in Nigeria
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-text-secondary">
                {industry.shortDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/get-started/"
                  className="inline-flex items-center gap-2 rounded-full bg-google-blue px-6 py-3 text-sm font-medium text-white transition-shadow hover:shadow-md"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/pricing/"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-google-blue hover:text-google-blue"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Reviews Matter */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Why Reviews Matter for {industry.name}
          </h2>
          <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
            {industry.whyReviewsMatter}
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm text-text-secondary">
            <span className="font-medium text-text-primary">Average industry rating:</span>
            <StarRating rating={industry.averageRating} size="sm" showValue />
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Common Challenges
          </h2>
          <p className="mt-4 text-text-secondary">
            {industry.name} businesses in Nigeria face unique reputation challenges online.
          </p>
          <ul className="mt-8 space-y-4">
            {industry.commonChallenges.map((challenge, index) => {
              const color = getColorForIndex(index);
              const dotColors = ["bg-google-blue", "bg-google-red", "bg-google-yellow", "bg-google-green"] as const;
              const dotBg = dotColors[index % dotColors.length];
              return (
              <li key={challenge} className="flex items-start gap-3">
                <div className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${color.bg}`}>
                  <span className={`h-2 w-2 rounded-full ${dotBg}`} />
                </div>
                <span className="text-text-secondary">{challenge}</span>
              </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Our Approach + Related Services */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            How We Help {industry.name} Businesses
          </h2>
          <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
            {industry.ourApproach}
          </p>

          {/* Related Services */}
          <div className="mt-10">
            <h3 className="font-heading text-lg font-semibold text-text-primary">
              Services for {industry.name}
            </h3>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServiceData.map((service, index) => {
                const ServiceIcon = iconMap[service.icon];
                const color = getColorForIndex(index);
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}/`}
                    className={`group flex items-center gap-3 rounded-lg border border-border border-t-4 ${color.borderTop} bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                  >
                    <ServiceIcon className={`h-5 w-5 shrink-0 ${color.text}`} />
                    <span className="text-sm font-medium text-text-primary group-hover:text-google-blue">
                      {service.name}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Review */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Sample Review
          </h2>
          <p className="mt-2 text-text-secondary">
            Here is an example of the kind of authentic review our Local Guides write for {industry.name.toLowerCase()} businesses.
          </p>
          <div className="relative overflow-hidden mt-8 rounded-xl border border-border glass-dark p-6 sm:p-8">
            <Quote className="absolute -right-2 -top-2 h-20 w-20 text-google-blue/5" />
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-google-blue text-white">
                <Quote className="h-5 w-5" />
              </div>
              <div>
                <StarRating rating={5} size="sm" />
                <p className="mt-3 text-text-secondary leading-relaxed italic">
                  &ldquo;{industry.exampleReview}&rdquo;
                </p>
                <p className="mt-3 text-sm font-medium text-text-primary">
                  -- Certified Google Local Guide (Level 4+)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Cities */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Available in These Cities
          </h2>
          <p className="mt-2 text-text-secondary">
            We provide {industry.name.toLowerCase()} reviews across major Nigerian cities.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {topCityData.slice(0, 15).map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}/`}
                className="group flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3 transition-all duration-300 hover:border-google-blue hover:shadow-[0_0_16px_rgba(66,133,244,0.15)]"
              >
                <MapPin className="h-4 w-4 shrink-0 text-google-red" />
                <span className="text-sm font-medium text-text-primary group-hover:text-google-blue">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Reference Links */}
      {crossRefCityData.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              {industry.name} Reviews by City
            </h2>
            <p className="mt-2 text-text-secondary">
              Explore our {industry.name.toLowerCase()} review services in specific Nigerian cities.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {crossRefCityData.map((city) => (
                <Link
                  key={city.slug}
                  href={`/industries/${slug}/${city.slug}/`}
                  className="group flex items-center justify-between rounded-lg border border-border bg-bg px-5 py-4 transition-all hover:border-google-blue hover:shadow-sm"
                >
                  <span className="text-sm font-medium text-text-primary group-hover:text-google-blue">
                    {industry.name} Reviews in {city.name}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-border group-hover:text-google-blue" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pricing Preview */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Pricing for {industry.name}
          </h2>
          <p className="mt-2 text-text-secondary">
            Choose a package that fits your {industry.name.toLowerCase()} business needs.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.slice(0, 3).map((plan) => (
              <div
                key={plan.slug}
                className={`relative rounded-xl border-2 bg-white p-6 ${
                  plan.isPopular
                    ? "border-google-blue shadow-lg"
                    : "border-border shadow-sm"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-google-blue px-4 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-heading text-3xl font-bold text-text-primary">
                    &#8358;{plan.price}
                  </span>
                </div>
                <p className="mt-1 text-sm text-text-secondary">{plan.unit}</p>
                <ul className="mt-6 space-y-2">
                  {plan.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-google-green" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaLink}
                  className={`mt-6 block rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                    plan.isPopular
                      ? "bg-google-blue text-white hover:bg-google-blue/90"
                      : "border border-border bg-white text-text-primary hover:border-google-blue hover:text-google-blue"
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/pricing/"
              className="inline-flex items-center gap-2 text-base font-medium text-google-blue hover:underline"
            >
              View All Plans
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-text-secondary">
            Common questions about Google reviews for {industry.name.toLowerCase()} businesses in Nigeria.
          </p>
          <div className="mt-8">
            <FaqAccordion items={industry.faq} />
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/faq/"
              className="inline-flex items-center gap-2 text-sm font-medium text-google-blue hover:underline"
            >
              View All FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-google-blue py-20">
        <div className="pointer-events-none absolute inset-0 dot-pattern-white" />
        <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute left-1/3 top-1/4 h-24 w-24 rounded-full bg-white/5" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl font-bold text-white">
                Ready to Boost Your {industry.name} Reviews?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80 lg:mx-0">
                Join hundreds of Nigerian {industry.name.toLowerCase()} businesses that trust us
                with their online reputation. Get started today.
              </p>
            </div>
            <div className="mx-auto w-full max-w-md lg:mx-0">
              <div className="rounded-2xl bg-white p-6 shadow-xl sm:p-8">
                <div className="mb-4 inline-block rounded-full bg-google-green/10 px-3 py-1 text-sm font-semibold text-google-green">
                  Limited Offer
                </div>
                <h3 className="font-heading text-xl font-bold text-text-primary">
                  Get 5 Free Google Reviews with Your First Order*
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  Fill in your details and we will contact you within 24 hours
                </p>
                <div className="mt-5">
                  <PromoForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks groups={linkGroups} title="Explore More" />
    </main>
  );
}
