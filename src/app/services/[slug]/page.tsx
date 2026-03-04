import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getAllServiceSlugs,
} from "@/data/services";
import { getIndustryBySlug } from "@/data/industries";
import { cities } from "@/data/locations/cities";
import { pricingPlans } from "@/data/pricing";
import { serviceBreadcrumbs, getServicePageLinks } from "@/lib/internal-links";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { InternalLinks } from "@/components/sections";
import { iconMap, ArrowRight, CheckCircle, Shield, MapPin } from "@/components/icons";
import { FaqAccordion } from "@/components/ui/faq-accordion";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: {
      canonical: `https://buyreviewsinnigeria.com/services/${slug}/`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const ServiceIcon = iconMap[service.icon];

  // Resolve related industries
  const relatedIndustries = service.relatedIndustries
    .map((industrySlug) => {
      const industry = getIndustryBySlug(industrySlug);
      return industry ? { slug: industry.slug, name: industry.name, icon: industry.icon } : null;
    })
    .filter(Boolean) as Array<{ slug: string; name: string; icon: string }>;

  // All 15 cities for internal links
  const allCities = cities.map((c) => ({ slug: c.slug, name: c.name }));

  // Build internal link groups
  const internalLinkGroups = getServicePageLinks(
    slug,
    relatedIndustries.map((i) => ({ slug: i.slug, name: i.name })),
    allCities,
  );

  // Breadcrumb
  const breadcrumbItems = serviceBreadcrumbs(service.name, service.slug);

  // Long description paragraphs
  const longDescriptionParagraphs = service.longDescription.split("\n\n");

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    url: `https://buyreviewsinnigeria.com/services/${slug}/`,
    provider: {
      "@type": "Organization",
      name: "BuyReviewsInNigeria",
      url: "https://buyreviewsinnigeria.com",
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.name,
      itemListElement: pricingPlans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        description: plan.description,
        priceCurrency: "NGN",
        price: plan.price.replace(/,/g, ""),
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([jsonLd, faqJsonLd]),
        }}
      />

      <main className="min-h-screen bg-bg">
        {/* ── Breadcrumb ── */}
        <div className="mx-auto max-w-5xl px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* ── 1. Hero ── */}
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-4">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-google-blue/10">
              <ServiceIcon className="h-7 w-7 text-google-blue" />
            </div>
            <div>
              <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
                {service.name}
              </h1>
              <p className="mt-1 text-sm font-medium text-google-blue">
                Professional Review Services in Nigeria
              </p>
            </div>
          </div>

          <div className="mt-8 max-w-3xl space-y-4">
            {longDescriptionParagraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-base leading-relaxed text-text-secondary"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/get-started/"
              className="inline-flex items-center gap-2 rounded-full bg-google-blue px-6 py-3 text-sm font-medium text-white transition-shadow hover:shadow-md"
            >
              Get Started Today
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/pricing/"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-google-blue hover:text-google-blue"
            >
              View Pricing
            </Link>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 flex items-center gap-2 rounded-lg border border-google-green/20 bg-google-green/5 px-4 py-3">
            <Shield className="h-5 w-5 text-google-green" />
            <span className="text-sm font-medium text-text-primary">
              30-day retention guarantee on all reviews. 500+ certified Local Guides across Nigeria.
            </span>
          </div>
        </section>

        {/* ── 2. Benefits ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Why Choose Our {service.name} Service
            </h2>
            <p className="mt-2 text-text-secondary">
              Here is what sets our service apart from the rest.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {service.benefits.map((benefit) => {
                const BenefitIcon = iconMap[benefit.icon];
                return (
                  <div
                    key={benefit.title}
                    className="rounded-lg border border-border bg-bg p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-google-blue/10">
                      <BenefitIcon className="h-5 w-5 text-google-blue" />
                    </div>
                    <h3 className="mt-4 font-heading text-base font-bold text-text-primary">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 3. How It Works ── */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              How It Works
            </h2>
            <p className="mt-2 text-text-secondary">
              Our step-by-step process for {service.name.toLowerCase()}.
            </p>

            <div className="mt-10 space-y-6">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4 rounded-lg border border-border bg-white p-6"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-google-blue text-sm font-bold text-white">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-text-primary">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/how-it-works/"
                className="inline-flex items-center gap-2 text-sm font-medium text-google-blue transition-colors hover:text-text-primary"
              >
                See our full process in detail
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 4. Industries We Serve ── */}
        {relatedIndustries.length > 0 && (
          <section className="bg-white py-16">
            <div className="mx-auto max-w-5xl px-6">
              <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Industries We Serve
              </h2>
              <p className="mt-2 text-text-secondary">
                {service.name} is available for businesses across these
                industries.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedIndustries.map((industry) => {
                  const IndustryIcon = iconMap[industry.icon as keyof typeof iconMap];
                  return (
                    <Link
                      key={industry.slug}
                      href={`/industries/${industry.slug}/`}
                      className="group flex items-center gap-3 rounded-lg border border-border bg-bg p-4 transition-all hover:border-google-blue hover:shadow-sm"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-google-blue/10">
                        <IndustryIcon className="h-4.5 w-4.5 text-google-blue" />
                      </div>
                      <span className="font-heading text-sm font-semibold text-text-primary transition-colors group-hover:text-google-blue">
                        {industry.name}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6">
                <Link
                  href="/industries/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-google-blue transition-colors hover:text-text-primary"
                >
                  View all industries we serve
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── 5. Sub-Pages Grid ── */}
        {service.subPages.length > 0 && (
          <section className="py-16">
            <div className="mx-auto max-w-5xl px-6">
              <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Learn More About {service.name}
              </h2>
              <p className="mt-2 text-text-secondary">
                Deep-dive into specific aspects of our {service.name.toLowerCase()} service.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {service.subPages.map((subPage) => (
                  <Link
                    key={subPage.slug}
                    href={`/services/${slug}/${subPage.slug}/`}
                    className="group rounded-lg border border-border bg-white p-6 transition-all hover:border-google-blue hover:shadow-sm"
                  >
                    <h3 className="font-heading text-base font-bold text-text-primary transition-colors group-hover:text-google-blue">
                      {subPage.name}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">
                      {subPage.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-google-blue">
                      Read More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 6. Pricing ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Pricing Plans
            </h2>
            <p className="mt-2 text-text-secondary">
              Transparent pricing with no hidden fees. Choose the plan that
              fits your business.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.slug}
                  className={`relative rounded-lg border p-6 ${
                    plan.isPopular
                      ? "border-google-blue bg-google-blue/5 shadow-md"
                      : "border-border bg-bg"
                  }`}
                >
                  {plan.isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-google-blue px-3 py-1 text-xs font-semibold text-white">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-heading text-lg font-bold text-text-primary">
                    {plan.name}
                  </h3>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-text-primary">
                      {plan.price === "Custom" ? "Custom" : `₦${plan.price}`}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-sm text-text-secondary">
                        {" "}/ {plan.unit}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-xs text-text-secondary">
                    {plan.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.slice(0, 4).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs text-text-secondary"
                      >
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-google-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.ctaLink}
                    className={`mt-6 block rounded-lg py-2.5 text-center text-sm font-medium transition-shadow hover:shadow-md ${
                      plan.isPopular
                        ? "bg-google-blue text-white"
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
                className="inline-flex items-center gap-2 text-sm font-medium text-google-blue transition-colors hover:text-text-primary"
              >
                View full pricing details
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 7. Cities We Cover ── */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Cities We Cover
            </h2>
            <p className="mt-2 text-text-secondary">
              {service.name} is available across all 15 major Nigerian cities.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {allCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}/`}
                  className="group flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3 transition-all hover:border-google-blue hover:shadow-sm"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-google-red" />
                  <span className="text-sm font-medium text-text-primary transition-colors group-hover:text-google-blue">
                    {city.name}
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <Link
                href="/locations/"
                className="inline-flex items-center gap-2 text-sm font-medium text-google-blue transition-colors hover:text-text-primary"
              >
                View all locations and neighborhoods
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 8. FAQ ── */}
        {service.faq.length > 0 && (
          <section className="bg-white py-16">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-text-secondary">
                Common questions about our {service.name.toLowerCase()} service.
              </p>

              <div className="mt-10">
                <FaqAccordion items={service.faq} />
              </div>

              <div className="mt-8 text-center">
                <Link
                  href="/faq/"
                  className="inline-flex items-center gap-2 text-sm font-medium text-google-blue transition-colors hover:text-text-primary"
                >
                  View all frequently asked questions
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── 9. CTA Final ── */}
        <section className="bg-google-blue py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Ready to Get Started with {service.name}?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Join 1,000+ Nigerian businesses that trust us to deliver authentic
              reviews and real results. Start seeing improvements in as little as
              one week.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
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

        {/* ── 10. Internal Links ── */}
        <InternalLinks groups={internalLinkGroups} title="Explore More" />
      </main>
    </>
  );
}
