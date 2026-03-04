import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  getServiceSubPageSlugs,
} from "@/data/services";
import { serviceBreadcrumbs, getServicePageLinks } from "@/lib/internal-links";
import { getIndustryBySlug } from "@/data/industries";
import { getCityBySlug } from "@/data/locations/cities";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { InternalLinks, ServiceCTA } from "@/components/sections";
import { ArrowLeft, ArrowRight } from "@/components/icons";
import { FaqAccordion } from "@/components/ui/faq-accordion";

interface Props {
  params: Promise<{ slug: string; subpage: string }>;
}

export async function generateStaticParams() {
  const serviceSlugs = getAllServiceSlugs();
  const params: Array<{ slug: string; subpage: string }> = [];

  for (const slug of serviceSlugs) {
    const subPages = getServiceSubPageSlugs(slug);
    for (const subpage of subPages) {
      params.push({ slug, subpage });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, subpage } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const sub = service.subPages.find((sp) => sp.slug === subpage);
  if (!sub) return {};

  return {
    title: sub.metaTitle,
    description: sub.metaDescription,
    keywords: sub.keywords,
    alternates: {
      canonical: `https://buyreviewsinnigeria.com/services/${slug}/${subpage}/`,
    },
  };
}

export default async function ServiceSubPage({ params }: Props) {
  const { slug, subpage } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const sub = service.subPages.find((sp) => sp.slug === subpage);
  if (!sub) notFound();

  // Resolve related data for internal links
  const relatedIndustries = service.relatedIndustries
    .map((industrySlug) => {
      const industry = getIndustryBySlug(industrySlug);
      return industry ? { slug: industry.slug, name: industry.name } : null;
    })
    .filter(Boolean) as Array<{ slug: string; name: string }>;

  const relatedCities = service.relatedCities
    .map((citySlug) => {
      const city = getCityBySlug(citySlug);
      return city ? { slug: city.slug, name: city.name } : null;
    })
    .filter(Boolean) as Array<{ slug: string; name: string }>;

  const internalLinkGroups = getServicePageLinks(
    slug,
    relatedIndustries,
    relatedCities,
  );

  // Breadcrumb (3 levels: Home > Services > Service Name > Sub-page)
  const breadcrumbItems = serviceBreadcrumbs(
    service.name,
    service.slug,
    sub.name,
    sub.slug,
  );

  // Long description paragraphs
  const longDescriptionParagraphs = sub.longDescription.split("\n\n");

  // Sibling sub-pages (other sub-pages of the same service)
  const siblingSubPages = service.subPages.filter(
    (sp) => sp.slug !== subpage,
  );

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: sub.name,
    description: sub.shortDescription,
    url: `https://buyreviewsinnigeria.com/services/${slug}/${subpage}/`,
    isPartOf: {
      "@type": "WebPage",
      name: service.name,
      url: `https://buyreviewsinnigeria.com/services/${slug}/`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
        item: `https://buyreviewsinnigeria.com${item.href}`,
      })),
    },
  };

  const faqJsonLd =
    sub.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: sub.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        }
      : null;

  const jsonLdArray = faqJsonLd ? [jsonLd, faqJsonLd] : [jsonLd];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdArray),
        }}
      />

      <main className="min-h-screen bg-bg">
        {/* ── Breadcrumb ── */}
        <div className="mx-auto max-w-5xl px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* ── 1. Hero ── */}
        <section className="mx-auto max-w-5xl px-6 pb-12 pt-4">
          <Link
            href={`/services/${slug}/`}
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-google-blue"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to {service.name}
          </Link>

          <h1 className="mt-4 font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {sub.name}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            {sub.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/get-started/"
              className="inline-flex items-center gap-2 rounded-full bg-google-blue px-6 py-3 text-sm font-medium text-white transition-shadow hover:shadow-md"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/services/${slug}/`}
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-google-blue hover:text-google-blue"
            >
              View Full {service.name} Service
            </Link>
          </div>
        </section>

        {/* ── 2. Long Description Content ── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              About {sub.name}
            </h2>
            <div className="mt-6 space-y-4">
              {longDescriptionParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-text-secondary"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Contextual links within content */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/how-it-works/"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-text-secondary transition-colors hover:border-google-blue hover:text-google-blue"
              >
                How It Works
              </Link>
              <Link
                href="/why-choose-us/"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-text-secondary transition-colors hover:border-google-blue hover:text-google-blue"
              >
                Why Choose Us
              </Link>
              <Link
                href="/pricing/"
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium text-text-secondary transition-colors hover:border-google-blue hover:text-google-blue"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* ── 3. FAQ ── */}
        {sub.faq.length > 0 && (
          <section className="py-16">
            <div className="mx-auto max-w-3xl px-6">
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-text-secondary">
                Common questions about {sub.name.toLowerCase()}.
              </p>

              <div className="mt-10">
                <FaqAccordion items={sub.faq} />
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

        {/* ── 4. Sibling Sub-Pages ── */}
        {siblingSubPages.length > 0 && (
          <section className="bg-white py-16">
            <div className="mx-auto max-w-5xl px-6">
              <h2 className="font-heading text-2xl font-bold text-text-primary">
                More About {service.name}
              </h2>
              <p className="mt-2 text-text-secondary">
                Explore other aspects of our {service.name.toLowerCase()} service.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {siblingSubPages.map((sibling) => (
                  <Link
                    key={sibling.slug}
                    href={`/services/${slug}/${sibling.slug}/`}
                    className="group rounded-lg border border-border bg-bg p-5 transition-all hover:border-google-blue hover:shadow-sm"
                  >
                    <h3 className="font-heading text-sm font-bold text-text-primary transition-colors group-hover:text-google-blue">
                      {sibling.name}
                    </h3>
                    <p className="mt-1.5 text-xs text-text-secondary">
                      {sibling.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 5. Back to Parent + CTA ── */}
        <section className="py-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="mb-8">
              <Link
                href={`/services/${slug}/`}
                className="inline-flex items-center gap-2 text-sm font-medium text-google-blue transition-colors hover:text-text-primary"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to {service.name}
              </Link>
            </div>

            <ServiceCTA
              serviceName={service.name}
              serviceSlug={service.slug}
            />
          </div>
        </section>

        {/* ── 6. Internal Links ── */}
        <InternalLinks groups={internalLinkGroups} title="Explore More" />
      </main>
    </>
  );
}
