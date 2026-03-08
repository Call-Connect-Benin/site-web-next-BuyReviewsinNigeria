import type { Metadata } from "next";
import Link from "next/link";
import { industries } from "@/data/industries";
import { iconMap, ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "🏢 Industries We Serve — 25+ Industries Across Nigeria",
  description:
    "Google Reviews for 25+ industries in Nigeria! 🏥 Hospitals · 🍽️ Restaurants · 🏨 Hotels · ⚖️ Lawyers & more. ✅ Certified Local Guides. 🎁 5 free reviews!",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-bg">
      {/* Hero */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Industries We Serve
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-text-secondary">
            Authentic Google reviews for 25+ industry verticals across Nigeria.
            No matter your niche, we connect you with certified Local Guides who
            understand your business and deliver reviews that build real trust.
          </p>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon];
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}/`}
                  className="group rounded-xl border border-border bg-white p-6 shadow-sm transition-all hover:border-google-blue hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-google-blue/10 text-google-blue">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <h2 className="font-heading text-lg font-semibold text-text-primary group-hover:text-google-blue">
                        {industry.name}
                      </h2>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {industry.shortDescription}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-google-blue opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-google-blue py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Don&apos;t see your industry?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            We work with businesses in every sector across Nigeria. Contact us
            to discuss your specific needs and get a custom review strategy.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/get-started/"
              className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-google-blue shadow-md transition-all hover:bg-white/90 hover:shadow-lg"
            >
              Get Started
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
