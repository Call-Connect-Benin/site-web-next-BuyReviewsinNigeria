import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  platforms,
  getPlatformBySlug,
  getAllPlatformSlugs,
} from "@/data/platforms";
import { services } from "@/data/services";
import { iconMap, ArrowRight, CheckCircle } from "@/components/icons";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { buildBreadcrumbs } from "@/lib/internal-links";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPlatformSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);
  if (!platform) return {};

  return {
    title: platform.metaTitle,
    description: platform.metaDescription,
    alternates: {
      canonical: `https://buyreviewsinnigeria.com/platforms/${slug}/`,
    },
  };
}

export default async function PlatformPage({ params }: Props) {
  const { slug } = await params;
  const platform = getPlatformBySlug(slug);

  if (!platform) notFound();

  const PlatformIcon = iconMap[platform.icon as keyof typeof iconMap];

  const breadcrumbItems = buildBreadcrumbs([
    { label: "Platforms", href: "/platforms/" },
    { label: platform.name, href: `/platforms/${platform.slug}/` },
  ]);

  const otherPlatforms = platforms.filter((p) => p.slug !== platform.slug);

  // Platform-specific reasons
  const platformReasons: Record<string, string[]> = {
    "google-reviews": [
      "Most influential factor in local search rankings in Nigeria",
      "Over 90% of Nigerian consumers check Google reviews before visiting",
      "Reviews appear directly in Google Search and Maps results",
      "Builds trust and credibility for your Google Business Profile",
      "Drives organic foot traffic and online conversions",
    ],
    trustpilot: [
      "World-leading open review platform trusted by millions globally",
      "Essential for Nigerian businesses targeting international customers",
      "Trustpilot TrustScore displayed across partner websites",
      "Transparent review system that builds consumer confidence",
      "Helps differentiate your business in competitive markets",
    ],
    "google-my-business": [
      "First impression customers see when searching for your business",
      "Directly impacts your visibility in Google Maps across Nigeria",
      "Photos, posts, and Q&A drive customer engagement",
      "Proper category and attribute optimization boosts local rankings",
      "Free tool with massive impact on customer acquisition",
    ],
    tripadvisor: [
      "World largest travel review platform for hospitality businesses",
      "Essential for Nigerian hotels, restaurants, and tourist attractions",
      "Attracts both local and international visitors to your business",
      "TripAdvisor rankings directly influence booking decisions",
      "Strong presence builds credibility in the hospitality sector",
    ],
  };

  const reasons = platformReasons[platform.slug] || [];

  return (
    <main className="min-h-screen bg-bg">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-4">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-google-blue/10">
            <PlatformIcon className="h-7 w-7 text-google-blue" />
          </div>
          <div>
            <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
              {platform.name}
            </h1>
            <p className="mt-1 text-sm font-medium text-google-blue">
              Review Platform for Nigerian Businesses
            </p>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-text-secondary">
          {platform.description}
        </p>

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
      </section>

      {/* Why This Platform Matters */}
      {reasons.length > 0 && (
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
              Why {platform.name} Matters for Nigerian Businesses
            </h2>
            <p className="mt-2 text-text-secondary">
              Key reasons to prioritize your {platform.name} presence.
            </p>

            <ul className="mt-10 space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-google-green" />
                  <span className="text-base text-text-secondary">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Related Services
          </h2>
          <p className="mt-2 text-text-secondary">
            Our services that help you succeed on {platform.name} and beyond.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const ServiceIcon = iconMap[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="group rounded-lg border border-border bg-white p-6 transition-all hover:border-google-blue hover:shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-google-blue/10">
                      <ServiceIcon className="h-5 w-5 text-google-blue" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-text-primary transition-colors group-hover:text-google-blue">
                        {service.name}
                      </h3>
                      <p className="mt-1 text-sm text-text-secondary line-clamp-2">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-google-blue">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Other Platforms */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Other Platforms
          </h2>
          <p className="mt-2 text-text-secondary">
            We also help Nigerian businesses on these review platforms.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {otherPlatforms.map((other) => {
              const OtherIcon = iconMap[other.icon as keyof typeof iconMap];
              return (
                <Link
                  key={other.slug}
                  href={`/platforms/${other.slug}/`}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-bg p-5 transition-all hover:border-google-blue hover:shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-google-blue/10">
                    <OtherIcon className="h-5 w-5 text-google-blue" />
                  </div>
                  <span className="font-heading text-sm font-semibold text-text-primary transition-colors group-hover:text-google-blue">
                    {other.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="mt-8">
            <Link
              href="/platforms/"
              className="inline-flex items-center gap-2 text-sm font-medium text-google-blue transition-colors hover:text-text-primary"
            >
              View all platforms
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-google-blue py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Dominate {platform.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Join 1,000+ Nigerian businesses that trust us to deliver authentic
            reviews and measurable results on {platform.name} and beyond.
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
    </main>
  );
}
