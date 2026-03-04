import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCityBySlug, getAllCitySlugs } from "@/data/locations/cities";
import {
  getNeighborhoodBySlug,
  getNeighborhoodsByCitySlug,
} from "@/data/locations/neighborhoods";
import { services } from "@/data/services";
import { getIndustryBySlug } from "@/data/industries";
import { locationBreadcrumbs, getNeighborhoodPageLinks } from "@/lib/internal-links";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { InternalLinks, ServiceCTA } from "@/components/sections";
import { iconMap } from "@/components/icons";
import {
  MapPin,
  Users,
  Building,
  ArrowRight,
  CheckCircle,
} from "@/components/icons";

interface Props {
  params: Promise<{ city: string; neighborhood: string }>;
}

export async function generateStaticParams() {
  const citySlugs = getAllCitySlugs();
  const params: Array<{ city: string; neighborhood: string }> = [];

  for (const citySlug of citySlugs) {
    const neighborhoods = getNeighborhoodsByCitySlug(citySlug);
    for (const n of neighborhoods) {
      params.push({ city: citySlug, neighborhood: n.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug, neighborhood: nSlug } = await params;
  const neighborhood = getNeighborhoodBySlug(citySlug, nSlug);
  if (!neighborhood) return {};

  return {
    title: neighborhood.metaTitle,
    description: neighborhood.metaDescription,
    keywords: neighborhood.keywords,
  };
}

export default async function NeighborhoodPage({ params }: Props) {
  const { city: citySlug, neighborhood: nSlug } = await params;
  const city = getCityBySlug(citySlug);
  const neighborhood = getNeighborhoodBySlug(citySlug, nSlug);

  if (!city || !neighborhood) notFound();

  const allNeighborhoods = getNeighborhoodsByCitySlug(citySlug);
  const siblingNeighborhoods = allNeighborhoods.filter(
    (n) => n.slug !== neighborhood.slug,
  );

  const breadcrumbs = locationBreadcrumbs(
    city.name,
    city.slug,
    neighborhood.name,
    neighborhood.slug,
  );

  // Resolve city top industries for internal link groups
  const resolvedIndustries = city.topIndustries
    .map((slug) => getIndustryBySlug(slug))
    .filter(
      (i): i is NonNullable<ReturnType<typeof getIndustryBySlug>> =>
        i !== undefined,
    );

  // Build internal link groups
  const internalLinkGroups = getNeighborhoodPageLinks(
    city.slug,
    city.name,
    neighborhood.slug,
    allNeighborhoods.map((n) => ({ slug: n.slug, name: n.name })),
    resolvedIndustries.map((i) => ({ slug: i.slug, name: i.name })),
  );

  // Parse business types string into array
  const businessTypes = neighborhood.businessTypes
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

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
            Buy Google Reviews in {neighborhood.name}, {city.name}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary">
            Get authentic Google reviews from certified Local Guides who know{" "}
            {neighborhood.name} inside and out. Build your online reputation
            with real reviews from real people in {city.name}.
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-3">
            {neighborhood.isBusinessDistrict && (
              <span className="flex items-center gap-1.5 rounded-full bg-google-blue/10 px-4 py-1.5 text-sm font-medium text-google-blue">
                <Building className="h-4 w-4" />
                Business District
              </span>
            )}
            {neighborhood.isUpscale && (
              <span className="flex items-center gap-1.5 rounded-full bg-google-green/10 px-4 py-1.5 text-sm font-medium text-google-green">
                <CheckCircle className="h-4 w-4" />
                Upscale Area
              </span>
            )}
            {neighborhood.isResidential && (
              <span className="flex items-center gap-1.5 rounded-full bg-google-yellow/10 px-4 py-1.5 text-sm font-medium text-google-yellow">
                <MapPin className="h-4 w-4" />
                Residential
              </span>
            )}
            <span className="flex items-center gap-1.5 rounded-full bg-bg px-4 py-1.5 text-sm font-medium text-text-secondary">
              <MapPin className="h-4 w-4" />
              {city.name}, {city.state}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/get-started/"
              className="inline-flex items-center gap-2 rounded-full bg-google-blue px-8 py-3 text-sm font-medium text-white transition-shadow hover:shadow-md"
            >
              Get Started
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

      {/* About Neighborhood */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            About {neighborhood.name}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-secondary">
            {neighborhood.description}
          </p>
          <p className="mt-4 leading-relaxed text-text-secondary">
            Businesses in {neighborhood.name} face unique competitive pressures.
            Whether you run a corporate office, a restaurant, or a retail shop
            in this area, a strong Google review profile is essential for
            standing out to potential customers searching for services in{" "}
            {neighborhood.name}, {city.name}.
          </p>
        </div>
      </section>

      {/* Business Types */}
      <section className="border-t border-border bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Types of Businesses in {neighborhood.name}
          </h2>
          <p className="mt-3 text-text-secondary">
            Our Local Guides have experience reviewing a wide range of business
            types commonly found in {neighborhood.name}.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {businessTypes.map((type) => (
              <div
                key={type}
                className="flex items-center gap-3 rounded-lg border border-border bg-bg px-4 py-3"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-google-green" />
                <span className="text-sm font-medium text-text-primary">
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Guides Coverage */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Our Local Guides in {neighborhood.name}
          </h2>
          <p className="mt-4 leading-relaxed text-text-secondary">
            Our certified Google Local Guides who cover {neighborhood.name} are
            real residents and frequent visitors of {city.name}. They have
            first-hand knowledge of the area, its businesses, and the local
            culture, which ensures every review reads naturally and reflects a
            genuine experience.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <Users className="h-8 w-8 text-google-blue" />
              <p className="mt-3 text-xl font-bold text-text-primary">
                Certified Guides
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                All reviewers are Level 4+ Google Local Guides with established
                accounts and review histories.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <MapPin className="h-8 w-8 text-google-green" />
              <p className="mt-3 text-xl font-bold text-text-primary">
                Local Knowledge
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Our guides know {neighborhood.name} and {city.name} well,
                writing reviews that mention specific local details.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
              <CheckCircle className="h-8 w-8 text-google-yellow" />
              <p className="mt-3 text-xl font-bold text-text-primary">
                30-Day Guarantee
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                Every review comes with a 30-day retention guarantee. If a
                review is removed, we replace it at no cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All Services */}
      <section className="border-t border-border bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            All Services Available in {neighborhood.name}
          </h2>
          <p className="mt-3 text-text-secondary">
            Every service we offer is available to businesses in{" "}
            {neighborhood.name}, {city.name}.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="group rounded-lg border border-border bg-bg p-6 transition-all hover:border-google-blue hover:bg-white hover:shadow-sm"
                >
                  <Icon className="h-7 w-7 text-google-blue" />
                  <h3 className="mt-3 font-heading text-base font-semibold text-text-primary group-hover:text-google-blue">
                    {service.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-text-secondary">
                    {service.shortDescription}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-google-blue">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Neighborhoods */}
      {siblingNeighborhoods.length > 0 && (
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Other Neighborhoods in {city.name}
            </h2>
            <p className="mt-3 text-text-secondary">
              We also cover these neighborhoods across {city.name}. Select
              any area for specific coverage details.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {siblingNeighborhoods.map((sibling) => (
                <Link
                  key={sibling.slug}
                  href={`/locations/${city.slug}/${sibling.slug}/`}
                  className="group flex items-center justify-between rounded-lg border border-border bg-white px-5 py-4 transition-all hover:border-google-blue hover:shadow-sm"
                >
                  <div>
                    <h3 className="font-heading text-base font-semibold text-text-primary group-hover:text-google-blue">
                      {sibling.name}
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {sibling.isBusinessDistrict && (
                        <span className="text-xs text-text-secondary">
                          Business District
                        </span>
                      )}
                      {sibling.isResidential && (
                        <span className="text-xs text-text-secondary">
                          Residential
                        </span>
                      )}
                      {sibling.isUpscale && (
                        <span className="text-xs text-text-secondary">
                          Upscale
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-border transition-colors group-hover:text-google-blue" />
                </Link>
              ))}
            </div>

            <p className="mt-6 text-sm text-text-secondary">
              <Link
                href={`/locations/${city.slug}/`}
                className="font-medium text-google-blue hover:underline"
              >
                View all of {city.name}
              </Link>{" "}
              for complete city-wide coverage details.
            </p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="border-t border-border bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <ServiceCTA
            serviceName="Google Review Collection"
            serviceSlug="google-review-collection"
            headline={`Grow your ${neighborhood.name} business with real Google reviews`}
            description={`Our certified Local Guides know ${neighborhood.name}, ${city.name} and deliver authentic reviews that help your business rank higher and attract more customers.`}
          />
        </div>
      </section>

      {/* Internal Links */}
      <InternalLinks
        groups={internalLinkGroups}
        title={`Explore ${neighborhood.name} and ${city.name}`}
      />
    </main>
  );
}
