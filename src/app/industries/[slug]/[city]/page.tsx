import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndustryBySlug } from "@/data/industries";
import { services } from "@/data/services";
import { getCityBySlug } from "@/data/locations/cities";
import { getNeighborhoodsByCitySlug } from "@/data/locations/neighborhoods";
import {
  crossReferences,
  getCrossReferencesByIndustry,
  getCrossReferencesByCity,
} from "@/data/cross-references";
import { pricingPlans } from "@/data/pricing";
import { industryBreadcrumbs, getCrossReferencePageLinks } from "@/lib/internal-links";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { InternalLinks } from "@/components/sections";
import {
  iconMap,
  CheckCircle,
  ArrowRight,
  MapPin,
} from "@/components/icons";
import { StarRating, FaqAccordion } from "@/components/ui";

interface Props {
  params: Promise<{ slug: string; city: string }>;
}

export async function generateStaticParams() {
  return crossReferences.map((cr) => ({
    slug: cr.industry,
    city: cr.city,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, city: citySlug } = await params;
  const industry = getIndustryBySlug(slug);
  const city = getCityBySlug(citySlug);
  if (!industry || !city) return {};

  return {
    title: `Buy Google Reviews for ${industry.name} in ${city.name}, Nigeria`,
    description: `Get authentic Google reviews for ${industry.name.toLowerCase()} businesses in ${city.name}, Nigeria. Certified Local Guides, real customers, natural review growth. 30-day guarantee.`,
    keywords: [
      `${industry.name.toLowerCase()} reviews ${city.name}`,
      `buy google reviews ${industry.name.toLowerCase()} ${city.name}`,
      `${city.name} ${industry.name.toLowerCase()} reviews Nigeria`,
      `google reviews ${industry.name.toLowerCase()} ${city.name} Nigeria`,
    ],
  };
}

export default async function IndustryCityPage({ params }: Props) {
  const { slug, city: citySlug } = await params;
  const industry = getIndustryBySlug(slug);
  const city = getCityBySlug(citySlug);

  if (!industry || !city) notFound();

  const Icon = iconMap[industry.icon];

  // Neighborhoods in this city
  const neighborhoodData = getNeighborhoodsByCitySlug(citySlug);

  // All services
  const allServices = services;

  // Cross-references: same industry in other cities
  const sameIndustryCrossRefs = getCrossReferencesByIndustry(slug)
    .filter((cr) => cr.city !== citySlug)
    .map((cr) => {
      const c = getCityBySlug(cr.city);
      return c ? { city: cr.city, cityName: c.name } : null;
    })
    .filter(Boolean) as Array<{ city: string; cityName: string }>;

  // Cross-references: same city with other industries
  const sameCityCrossRefs = getCrossReferencesByCity(citySlug)
    .filter((cr) => cr.industry !== slug)
    .map((cr) => {
      const ind = getIndustryBySlug(cr.industry);
      return ind ? { industry: cr.industry, industryName: ind.name } : null;
    })
    .filter(Boolean) as Array<{ industry: string; industryName: string }>;

  // Internal links
  const linkGroups = getCrossReferencePageLinks(
    slug,
    industry.name,
    citySlug,
    city.name,
    neighborhoodData.slice(0, 6).map((n) => ({ slug: n.slug, name: n.name })),
    sameCityCrossRefs,
    sameIndustryCrossRefs,
  );

  // Breadcrumbs
  const breadcrumbItems = industryBreadcrumbs(industry.name, slug, city.name, citySlug);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Google Reviews for ${industry.name} in ${city.name}, Nigeria`,
    description: `Authentic Google review collection for ${industry.name.toLowerCase()} businesses in ${city.name}, Nigeria.`,
    provider: {
      "@type": "Organization",
      name: "BuyReviewsInNigeria",
      url: "https://buyreviewsinnigeria.com",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": "Country",
        name: "Nigeria",
      },
    },
    serviceType: "Google Review Collection",
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
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-google-blue/10 text-google-blue">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl lg:text-5xl">
                Buy Google Reviews for {industry.name} in {city.name}, Nigeria
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-text-secondary">
                Get authentic Google reviews for your {industry.name.toLowerCase()} business
                in {city.name} from our network of {city.localGuidesCount}+ certified
                Local Guides. Real people, real accounts, real reviews.
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

      {/* Industry + City Context */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Industry expertise */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Why Reviews Matter for {industry.name}
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {industry.whyReviewsMatter}
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-text-secondary">
                <span className="font-medium text-text-primary">Average industry rating:</span>
                <StarRating rating={industry.averageRating} size="sm" showValue />
              </div>
            </div>

            {/* City knowledge */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                {industry.name} in {city.name}
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {city.businessLandscape}
              </p>
              <p className="mt-3 text-sm text-text-secondary">
                Our network of <span className="font-semibold text-text-primary">{city.localGuidesCount}+ Local Guides</span> in {city.name} ensures
                authentic, high-quality reviews for {industry.name.toLowerCase()} businesses
                across the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            How We Help {industry.name} Businesses in {city.name}
          </h2>
          <p className="mt-4 max-w-3xl text-text-secondary leading-relaxed">
            {industry.ourApproach}
          </p>

          {/* Common Challenges */}
          <div className="mt-10">
            <h3 className="font-heading text-lg font-semibold text-text-primary">
              Challenges We Solve
            </h3>
            <ul className="mt-4 space-y-3">
              {industry.commonChallenges.map((challenge) => (
                <li key={challenge} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-google-green" />
                  <span className="text-sm text-text-secondary">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      {neighborhoodData.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Neighborhoods in {city.name}
            </h2>
            <p className="mt-2 text-text-secondary">
              Our Local Guides cover all major areas in {city.name} for {industry.name.toLowerCase()} reviews.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {neighborhoodData.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  href={`/locations/${citySlug}/${neighborhood.slug}/`}
                  className="group flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3 transition-all hover:border-google-blue hover:shadow-sm"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-google-red" />
                  <span className="text-sm font-medium text-text-primary group-hover:text-google-blue">
                    {neighborhood.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Services */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Our Services for {industry.name} in {city.name}
          </h2>
          <p className="mt-2 text-text-secondary">
            Complete reputation management solutions for {industry.name.toLowerCase()} businesses.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allServices.map((service) => {
              const ServiceIcon = iconMap[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="group flex items-start gap-3 rounded-lg border border-border bg-bg p-4 transition-all hover:border-google-blue hover:shadow-sm"
                >
                  <ServiceIcon className="mt-0.5 h-5 w-5 shrink-0 text-google-blue" />
                  <div>
                    <span className="text-sm font-semibold text-text-primary group-hover:text-google-blue">
                      {service.name}
                    </span>
                    <p className="mt-1 text-xs text-text-secondary line-clamp-2">
                      {service.shortDescription}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Cross-References */}
      {(sameIndustryCrossRefs.length > 0 || sameCityCrossRefs.length > 0) && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Related Pages
            </h2>

            {/* Same industry, other cities */}
            {sameIndustryCrossRefs.length > 0 && (
              <div className="mt-8">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  {industry.name} Reviews in Other Cities
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {sameIndustryCrossRefs.map((cr) => (
                    <Link
                      key={cr.city}
                      href={`/industries/${slug}/${cr.city}/`}
                      className="group flex items-center justify-between rounded-lg border border-border bg-white px-5 py-3 transition-all hover:border-google-blue hover:shadow-sm"
                    >
                      <span className="text-sm font-medium text-text-primary group-hover:text-google-blue">
                        {industry.name} in {cr.cityName}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-border group-hover:text-google-blue" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Same city, other industries */}
            {sameCityCrossRefs.length > 0 && (
              <div className="mt-8">
                <h3 className="font-heading text-lg font-semibold text-text-primary">
                  Other Industries in {city.name}
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {sameCityCrossRefs.map((cr) => (
                    <Link
                      key={cr.industry}
                      href={`/industries/${cr.industry}/${citySlug}/`}
                      className="group flex items-center justify-between rounded-lg border border-border bg-white px-5 py-3 transition-all hover:border-google-blue hover:shadow-sm"
                    >
                      <span className="text-sm font-medium text-text-primary group-hover:text-google-blue">
                        {cr.industryName} in {city.name}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-border group-hover:text-google-blue" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Pricing */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Pricing
          </h2>
          <p className="mt-2 text-text-secondary">
            Packages for {industry.name.toLowerCase()} businesses in {city.name}.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.slice(0, 3).map((plan) => (
              <div
                key={plan.slug}
                className={`relative rounded-xl border-2 bg-bg p-6 ${
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
      {industry.faq.length > 0 && (
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              FAQ: {industry.name} Reviews in {city.name}
            </h2>
            <div className="mt-8">
              <FaqAccordion items={industry.faq} />
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-google-blue py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Grow Your {industry.name} Business in {city.name}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Join {industry.name.toLowerCase()} businesses in {city.name} that trust our
            certified Local Guides to deliver authentic Google reviews. Get started today.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/get-started/"
              className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-google-blue shadow-md transition-all hover:bg-white/90 hover:shadow-lg"
            >
              Get Started Now
            </Link>
            <Link
              href="/contact/"
              className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks groups={linkGroups} title="Explore More" />
    </main>
  );
}
