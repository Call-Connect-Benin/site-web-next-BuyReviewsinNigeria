import type { Metadata } from "next";
import Link from "next/link";
import { platforms } from "@/data/platforms";
import { services } from "@/data/services";
import { iconMap, ArrowRight } from "@/components/icons";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { buildBreadcrumbs } from "@/lib/internal-links";

export const metadata: Metadata = {
  title: "Review Platforms | Google, Trustpilot & More",
  description:
    "We help Nigerian businesses collect authentic reviews on Google, Trustpilot, Google My Business, and TripAdvisor. Learn about each platform and how we can help.",
  alternates: {
    canonical: "https://buyreviewsinnigeria.com/platforms/",
  },
};

export default function PlatformsPage() {
  const breadcrumbItems = buildBreadcrumbs([
    { label: "Platforms", href: "/platforms/" },
  ]);

  return (
    <main className="min-h-screen bg-bg">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-8">
        <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
          Review Platforms
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          Build your reputation across the platforms that matter most in
          Nigeria. We help businesses collect authentic reviews on Google,
          Trustpilot, Google My Business, and TripAdvisor.
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

      {/* Platforms Grid */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary">
            Platforms We Cover
          </h2>
          <p className="mt-2 text-text-secondary">
            Four major review platforms, each with a tailored strategy for
            Nigerian businesses.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {platforms.map((platform) => {
              const Icon = iconMap[platform.icon as keyof typeof iconMap];
              return (
                <Link
                  key={platform.slug}
                  href={`/platforms/${platform.slug}/`}
                  className="group rounded-lg border border-border bg-bg p-6 transition-all hover:border-google-blue hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-google-blue/10">
                      <Icon className="h-6 w-6 text-google-blue" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-heading text-lg font-bold text-text-primary transition-colors group-hover:text-google-blue">
                        {platform.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary line-clamp-3">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-google-blue">
                    Learn more about {platform.name}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary">
            Our Services
          </h2>
          <p className="mt-2 text-text-secondary">
            Explore the services we offer across these platforms.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const ServiceIcon = iconMap[service.icon];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}/`}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-white p-4 transition-all hover:border-google-blue hover:shadow-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-google-blue/10">
                    <ServiceIcon className="h-4 w-4 text-google-blue" />
                  </div>
                  <span className="font-heading text-sm font-semibold text-text-primary transition-colors group-hover:text-google-blue">
                    {service.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-google-blue py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Ready to Build Your Online Reputation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Join 1,000+ Nigerian businesses collecting authentic reviews across
            Google, Trustpilot, and more. Get started with a free consultation
            today.
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
