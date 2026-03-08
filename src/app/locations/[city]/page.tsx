import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCityBySlug, getAllCitySlugs } from "@/data/locations/cities";
import { getNeighborhoodsByCitySlug } from "@/data/locations/neighborhoods";
import { services } from "@/data/services";
import { getIndustryBySlug } from "@/data/industries";
import { pricingPlans } from "@/data/pricing";
import { locationBreadcrumbs, getCityPageLinks } from "@/lib/internal-links";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { InternalLinks } from "@/components/sections";
import { iconMap } from "@/components/icons";
import {
  MapPin,
  Users,
  Building,
  ArrowRight,
  CheckCircle,
} from "@/components/icons";
import { getColorForIndex } from "@/lib/colors";
import { PromoForm } from "@/components/forms/promo-form";

interface Props {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  if (!city) return {};

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords,
  };
}

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) notFound();

  const neighborhoodData = getNeighborhoodsByCitySlug(citySlug);
  const breadcrumbs = locationBreadcrumbs(city.name, city.slug);

  // Resolve top industries to their full objects
  const resolvedIndustries = city.topIndustries
    .map((slug) => getIndustryBySlug(slug))
    .filter(
      (i): i is NonNullable<ReturnType<typeof getIndustryBySlug>> =>
        i !== undefined,
    );

  // Resolve related cities
  const relatedCityData = city.relatedCities
    .map((slug) => getCityBySlug(slug))
    .filter(
      (c): c is NonNullable<ReturnType<typeof getCityBySlug>> =>
        c !== undefined,
    );

  // Build internal link groups
  const internalLinkGroups = getCityPageLinks(
    city.slug,
    neighborhoodData.map((n) => ({ slug: n.slug, name: n.name })),
    relatedCityData.map((c) => ({ slug: c.slug, name: c.name })),
    resolvedIndustries.map((i) => ({ slug: i.slug, name: i.name })),
    city.name,
  );

  return (
    <main className="min-h-screen bg-bg">
      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white pb-16 pt-8">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Buy Google Reviews in {city.name} | Certified Local Guides
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary">
            {city.shortDescription}
          </p>

          {/* Quick Stats */}
          <div className="mt-8 flex flex-wrap gap-3">
            <div className={`flex items-center gap-2 rounded-full ${getColorForIndex(0).badgeBg} px-3 py-1.5 text-sm`}>
              <MapPin className="h-4 w-4 text-google-blue" />
              <span className="font-medium text-text-primary">{city.state}</span>
            </div>
            <div className={`flex items-center gap-2 rounded-full ${getColorForIndex(3).badgeBg} px-3 py-1.5 text-sm`}>
              <Users className="h-4 w-4 text-google-green" />
              <span className="font-medium text-text-primary">{city.localGuidesCount} Local Guides</span>
            </div>
            <div className={`flex items-center gap-2 rounded-full ${getColorForIndex(2).badgeBg} px-3 py-1.5 text-sm`}>
              <Building className="h-4 w-4 text-google-yellow" />
              <span className="font-medium text-text-primary">{city.neighborhoods.length} Neighborhoods</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/get-started/"
              className="inline-flex items-center gap-2 rounded-full bg-google-blue px-8 py-3 text-sm font-medium text-white transition-shadow hover:shadow-md"
            >
              Get Started in {city.name}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing/"
              className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3 text-sm font-medium text-text-primary transition-colors hover:border-google-blue hover:text-google-blue"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Business Landscape */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            About {city.name}&apos;s Business Landscape
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            {city.businessLandscape}
          </p>
          <p className="mt-4 leading-relaxed text-text-secondary">
            With a population of over{" "}
            {(city.population / 1000000).toFixed(1)} million people,{" "}
            {city.name} presents enormous opportunities for businesses that
            establish a strong online presence. Google reviews play a critical
            role in how consumers in {city.name} discover and choose local
            businesses, from restaurants and hotels to professional services
            and healthcare providers.
          </p>
          <p className="mt-4 leading-relaxed text-text-secondary">
            Our team of {city.localGuidesCount} certified Local Guides in{" "}
            {city.name} provides authentic, detailed reviews that help your
            business stand out in the competitive {city.state} market. Every
            review is written by a real person with a verified Google account
            and genuine familiarity with the local area.
          </p>
        </div>
      </section>

      {/* Local Guide Network */}
      <section className="border-t border-border bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Our Local Guide Network in {city.name}
          </h2>
          <p className="mt-4 leading-relaxed text-text-secondary">
            We maintain a network of {city.localGuidesCount} certified Google
            Local Guides across {city.name}, each with Level 4+ standing on
            Google Maps. These are real residents of {city.state} who know
            the local business landscape and can write detailed, authentic
            reviews that reflect genuine customer experiences.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className={`rounded-lg border border-border border-t-4 ${getColorForIndex(0).borderTop} bg-bg p-6`}>
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${getColorForIndex(0).bgGradient}`}>
                <Users className="h-6 w-6 text-google-blue" />
              </div>
              <p className="mt-3 text-2xl font-bold text-text-primary">
                {city.localGuidesCount}+
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Verified Local Guides in {city.name}
              </p>
            </div>
            <div className={`rounded-lg border border-border border-t-4 ${getColorForIndex(3).borderTop} bg-bg p-6`}>
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${getColorForIndex(3).bgGradient}`}>
                <MapPin className="h-6 w-6 text-google-green" />
              </div>
              <p className="mt-3 text-2xl font-bold text-text-primary">
                {city.neighborhoods.length}
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Neighborhoods with active coverage
              </p>
            </div>
            <div className={`rounded-lg border border-border border-t-4 ${getColorForIndex(2).borderTop} bg-bg p-6`}>
              <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${getColorForIndex(2).bgGradient}`}>
                <CheckCircle className="h-6 w-6 text-google-yellow" />
              </div>
              <p className="mt-3 text-2xl font-bold text-text-primary">
                Level 4+
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Minimum Google Local Guide level
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Neighborhoods We Cover in {city.name}
          </h2>
          <p className="mt-3 text-text-secondary">
            Our Local Guides are spread across all major neighborhoods in{" "}
            {city.name}. Select a neighborhood for area-specific coverage
            details.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {neighborhoodData.map((neighborhood, index) => {
              const color = getColorForIndex(index);
              return (
              <Link
                key={neighborhood.slug}
                href={`/locations/${city.slug}/${neighborhood.slug}/`}
                className={`group rounded-lg border border-border border-t-4 ${color.borderTop} bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
              >
                <h3 className="font-heading text-base font-semibold text-text-primary group-hover:text-google-blue">
                  {neighborhood.name}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-text-secondary">
                  {neighborhood.description.slice(0, 120)}...
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {neighborhood.isBusinessDistrict && (
                    <span className={`rounded-full ${getColorForIndex(0).badgeBg} px-2.5 py-0.5 text-xs font-medium text-google-blue`}>
                      Business District
                    </span>
                  )}
                  {neighborhood.isUpscale && (
                    <span className={`rounded-full ${getColorForIndex(3).badgeBg} px-2.5 py-0.5 text-xs font-medium text-google-green`}>
                      Upscale Area
                    </span>
                  )}
                  {neighborhood.isResidential && (
                    <span className={`rounded-full ${getColorForIndex(2).badgeBg} px-2.5 py-0.5 text-xs font-medium text-google-yellow`}>
                      Residential
                    </span>
                  )}
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Industries */}
      <section className="border-t border-border bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Top Industries in {city.name}
          </h2>
          <p className="mt-3 text-text-secondary">
            These are the most active industries seeking Google reviews in{" "}
            {city.name}. We have dedicated Local Guides experienced in
            reviewing businesses across each sector.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resolvedIndustries.map((industry) => {
              const Icon = iconMap[industry.icon];
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}/`}
                  className="group flex items-start gap-4 rounded-lg border border-border bg-bg p-5 transition-all hover:border-google-blue hover:bg-white"
                >
                  <Icon className="h-6 w-6 shrink-0 text-google-blue" />
                  <div>
                    <h3 className="font-heading text-base font-semibold text-text-primary group-hover:text-google-blue">
                      {industry.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-text-secondary">
                      {industry.shortDescription}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <p className="mt-6 text-sm text-text-secondary">
            Looking for a specific industry?{" "}
            <Link
              href="/industries/"
              className="font-medium text-google-blue hover:underline"
            >
              Browse all industries we serve
            </Link>
          </p>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Services Available in {city.name}
          </h2>
          <p className="mt-3 text-text-secondary">
            Every service we offer is available to businesses in {city.name}{" "}
            and across {city.state}.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              const color = getColorForIndex(index);
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className={`group rounded-lg border border-border border-t-4 ${color.borderTop} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${color.bgGradient}`}>
                    <Icon className={`h-5 w-5 ${color.text}`} />
                  </div>
                  <h3 className="mt-4 font-heading text-base font-semibold text-text-primary group-hover:text-google-blue">
                    {service.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-text-secondary">
                    {service.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-google-blue">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="border-t border-border bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Pricing for {city.name} Businesses
          </h2>
          <p className="mt-3 text-text-secondary">
            Simple, transparent pricing. All packages include reviews from
            certified Local Guides based in {city.state}.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.slice(0, 3).map((plan) => (
              <div
                key={plan.slug}
                className={`relative rounded-xl border-2 p-6 ${
                  plan.isPopular
                    ? "border-google-blue bg-white shadow-lg"
                    : "border-border bg-bg"
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
                <p className="mt-1 text-sm text-text-secondary">
                  {plan.unit}
                </p>
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
                  className={`mt-6 block rounded-lg py-2.5 text-center text-sm font-semibold transition-all ${
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

          <p className="mt-8 text-center text-sm text-text-secondary">
            Need a custom package?{" "}
            <Link
              href="/contact/"
              className="font-medium text-google-blue hover:underline"
            >
              Contact us for enterprise pricing
            </Link>
          </p>
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
              <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
                Ready to Grow Your {city.name} Business?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-white/80 lg:mx-0">
                Our {city.localGuidesCount} certified Local Guides in {city.name} are ready to help you build a stronger online reputation. Join hundreds of {city.state} businesses that trust us.
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

      {/* Related Cities */}
      {relatedCityData.length > 0 && (
        <section className="border-t border-border bg-white py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Nearby Cities
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {relatedCityData.map((relatedCity) => (
                <Link
                  key={relatedCity.slug}
                  href={`/locations/${relatedCity.slug}/`}
                  className="group rounded-lg border border-border bg-bg p-5 transition-all hover:border-google-blue hover:bg-white"
                >
                  <h3 className="font-heading text-base font-semibold text-text-primary group-hover:text-google-blue">
                    {relatedCity.name}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {relatedCity.state} | {relatedCity.localGuidesCount} Local
                    Guides
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Internal Links */}
      <InternalLinks groups={internalLinkGroups} title={`Explore ${city.name} and Beyond`} />
    </main>
  );
}
