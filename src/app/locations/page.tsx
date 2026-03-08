import type { Metadata } from "next";
import Link from "next/link";
import { cities } from "@/data/locations/cities";
import { MapPin, Users, Building, ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "📍 All 15 Cities — Buy Google Reviews Across Nigeria",
  description:
    "Google Reviews in 15 Nigerian cities & 95+ neighborhoods! 📍 Lagos · Abuja · Port Harcourt & more. ✅ Certified Local Guides. 🎁 5 free reviews with first order!",
  keywords: [
    "buy google reviews Nigeria",
    "google reviews Nigerian cities",
    "local guides Nigeria",
    "buy reviews Lagos",
    "buy reviews Abuja",
    "google reviews all cities Nigeria",
  ],
};

export default function LocationsPage() {
  const totalGuides = cities.reduce((sum, c) => sum + c.localGuidesCount, 0);
  const totalNeighborhoods = cities.reduce(
    (sum, c) => sum + c.neighborhoods.length,
    0,
  );

  return (
    <main className="min-h-screen bg-bg">
      {/* Hero */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Buy Google Reviews Across Nigeria
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-secondary">
            Our network of {totalGuides}+ certified Local Guides covers 15
            major Nigerian cities and {totalNeighborhoods}+ neighborhoods. No
            matter where your business is located, we have verified reviewers
            ready to help you build a stronger online reputation.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex items-center gap-4 rounded-lg border border-border bg-bg p-5">
              <MapPin className="h-8 w-8 shrink-0 text-google-blue" />
              <div>
                <p className="text-2xl font-bold text-text-primary">15</p>
                <p className="text-sm text-text-secondary">Cities Covered</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border border-border bg-bg p-5">
              <Building className="h-8 w-8 shrink-0 text-google-green" />
              <div>
                <p className="text-2xl font-bold text-text-primary">
                  {totalNeighborhoods}+
                </p>
                <p className="text-sm text-text-secondary">Neighborhoods</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border border-border bg-bg p-5">
              <Users className="h-8 w-8 shrink-0 text-google-yellow" />
              <div>
                <p className="text-2xl font-bold text-text-primary">
                  {totalGuides}+
                </p>
                <p className="text-sm text-text-secondary">Local Guides</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            All Cities We Serve
          </h2>
          <p className="mt-3 text-text-secondary">
            Select a city to view local coverage, neighborhoods, and available
            services.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}/`}
                className="group rounded-lg border border-border bg-white p-6 shadow-sm transition-all hover:border-google-blue hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-text-primary group-hover:text-google-blue">
                      {city.name}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {city.state}
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 shrink-0 text-border transition-colors group-hover:text-google-blue" />
                </div>

                <div className="mt-4 flex items-center gap-4 text-sm text-text-secondary">
                  <span className="flex items-center gap-1.5">
                    <Users className="h-4 w-4 text-google-blue" />
                    {city.localGuidesCount} Guides
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-google-green" />
                    {city.neighborhoods.length} Areas
                  </span>
                </div>

                {city.isStateCapital && (
                  <span className="mt-3 inline-block rounded-full bg-google-blue/10 px-3 py-0.5 text-xs font-medium text-google-blue">
                    State Capital
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-text-primary sm:text-3xl">
            Ready to Boost Your Local Reputation?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Join 1,000+ Nigerian businesses that trust our certified Local
            Guides to deliver authentic Google reviews.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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

      {/* Quick Links */}
      <section className="border-t border-border bg-bg py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-xl font-bold text-text-primary">
            Explore More
          </h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Top Cities
              </h3>
              <ul className="mt-3 space-y-2">
                {cities.slice(0, 5).map((city) => (
                  <li key={city.slug}>
                    <Link
                      href={`/locations/${city.slug}/`}
                      className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                      Google Reviews in {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Our Services
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="/services/google-review-collection/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    Google Review Collection
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/trustpilot-review-collection/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    Trustpilot Review Collection
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/gmb-optimization/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    GMB Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/reputation-management/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    Reputation Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/local-seo/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    Local SEO
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Industries
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="/industries/restaurants/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    Restaurants
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/hotels/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    Hotels
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/hospitals-clinics/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    Hospitals & Clinics
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/lawyers/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    Lawyers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries/real-estate-agents/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    Real Estate Agents
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                Get Started
              </h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link
                    href="/pricing/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    View Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/get-started/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    Get Started Today
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq/"
                    className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                  >
                    <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
