import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { iconMap } from "@/components/icons";
import { ArrowRight, ChevronRight } from "@/components/icons";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { InternalLinks } from "@/components/sections";
import { buildBreadcrumbs } from "@/lib/internal-links";

export const metadata: Metadata = {
  title: "Our Services | Google Reviews & Reputation Management Nigeria",
  description:
    "Explore our full range of review and reputation services for Nigerian businesses: Google Review Collection, Trustpilot Reviews, GMB Optimization, Reputation Management, Negative Review Removal, and Local SEO.",
  alternates: {
    canonical: "https://buyreviewsinnigeria.com/services/",
  },
};

export default function ServicesPage() {
  const breadcrumbItems = buildBreadcrumbs([
    { label: "Services", href: "/services/" },
  ]);

  const linkGroups = [
    {
      title: "Popular Industries",
      links: [
        { href: "/industries/restaurants/", label: "Restaurants" },
        { href: "/industries/hotels/", label: "Hotels" },
        { href: "/industries/hospitals-clinics/", label: "Hospitals & Clinics" },
        { href: "/industries/car-dealerships/", label: "Car Dealerships" },
        { href: "/industries/lawyers/", label: "Lawyers" },
        { href: "/industries/real-estate-agents/", label: "Real Estate Agents" },
      ],
    },
    {
      title: "Top Cities",
      links: [
        { href: "/locations/lagos/", label: "Lagos" },
        { href: "/locations/abuja/", label: "Abuja" },
        { href: "/locations/port-harcourt/", label: "Port Harcourt" },
        { href: "/locations/ibadan/", label: "Ibadan" },
        { href: "/locations/kano/", label: "Kano" },
      ],
    },
    {
      title: "Get Started",
      links: [
        { href: "/pricing/", label: "View Pricing" },
        { href: "/how-it-works/", label: "How It Works" },
        { href: "/get-started/", label: "Get Started" },
        { href: "/contact/", label: "Contact Us" },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Our Services",
            description:
              "Review collection, reputation management, and local SEO services for Nigerian businesses.",
            url: "https://buyreviewsinnigeria.com/services/",
            mainEntity: services.map((s) => ({
              "@type": "Service",
              name: s.name,
              description: s.shortDescription,
              url: `https://buyreviewsinnigeria.com/services/${s.slug}/`,
            })),
          }),
        }}
      />

      <main className="min-h-screen bg-bg">
        {/* Breadcrumb */}
        <div className="mx-auto max-w-5xl px-6">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-8">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-text-secondary">
            Everything you need to build, manage, and grow your online
            reputation in Nigeria. From authentic review collection to full
            local SEO, we have you covered.
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

        {/* Services Grid */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              All Services
            </h2>
            <p className="mt-2 text-text-secondary">
              Choose from our 6 specialized services designed for Nigerian
              businesses.
            </p>

            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = iconMap[service.icon];
                return (
                  <div
                    key={service.slug}
                    className="rounded-lg border border-border bg-bg p-6 transition-shadow hover:shadow-md"
                  >
                    {/* Service Header */}
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-google-blue/10">
                        <Icon className="h-5 w-5 text-google-blue" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-bold text-text-primary">
                          <Link
                            href={`/services/${service.slug}/`}
                            className="transition-colors hover:text-google-blue"
                          >
                            {service.name}
                          </Link>
                        </h3>
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {service.shortDescription}
                    </p>

                    {/* Sub-pages */}
                    {service.subPages.length > 0 && (
                      <ul className="mt-4 space-y-1.5 border-t border-border pt-4">
                        {service.subPages.map((subPage) => (
                          <li key={subPage.slug}>
                            <Link
                              href={`/services/${service.slug}/${subPage.slug}/`}
                              className="group flex items-center gap-1.5 text-xs text-text-secondary transition-colors hover:text-google-blue"
                            >
                              <ChevronRight className="h-3 w-3 text-border transition-colors group-hover:text-google-blue" />
                              {subPage.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* View Service Link */}
                    <div className="mt-4 border-t border-border pt-4">
                      <Link
                        href={`/services/${service.slug}/`}
                        className="group inline-flex items-center gap-1.5 text-sm font-medium text-google-blue transition-colors hover:text-text-primary"
                      >
                        Learn More
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="font-heading text-2xl font-bold text-text-primary">
              Why Nigerian Businesses Choose Us
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-border bg-white p-6">
                <h3 className="font-heading text-base font-bold text-text-primary">
                  500+ Certified Local Guides
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Our network of Level 4+ Google Local Guides spans 15
                  Nigerian cities. Every reviewer is a real person with an
                  established account.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-white p-6">
                <h3 className="font-heading text-base font-bold text-text-primary">
                  30-Day Retention Guarantee
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  If any review is removed within 30 days, we replace it free
                  of charge. Your investment is always protected.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-white p-6">
                <h3 className="font-heading text-base font-bold text-text-primary">
                  Natural Delivery Pattern
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  Reviews are spread over weeks for organic-looking growth
                  that keeps your profile safe and credible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-google-blue py-20">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Ready to Grow Your Online Reputation?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
              Join 1,000+ Nigerian businesses that trust us to deliver
              authentic reviews and measurable results.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/get-started/"
                className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-google-blue shadow-md transition-all hover:bg-white/90 hover:shadow-lg"
              >
                Get Started Now
              </Link>
              <Link
                href="/pricing/"
                className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links */}
        <InternalLinks groups={linkGroups} title="Explore More" />
      </main>
    </>
  );
}
