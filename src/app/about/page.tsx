import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { buildBreadcrumbs } from "@/lib/internal-links";
import {
  Shield,
  Users,
  MapPin,
  Target,
  Star,
  Award,
  Globe,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about BuyReviewsInNigeria.com — Nigeria's leading platform for authentic Google Reviews from certified Local Guides across 15 cities.",
  alternates: { canonical: "https://buyreviewsinnigeria.com/about/" },
};

const values = [
  {
    icon: Shield,
    title: "Authenticity First",
    description:
      "Every review comes from a real person who has genuinely interacted with your business. No bots, no fake accounts.",
  },
  {
    icon: Users,
    title: "Certified Local Guides",
    description:
      "Our reviewers are Google Local Guides at Level 4 or above, with established accounts and review histories.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "With coverage in 15 Nigerian cities and 93+ neighborhoods, we understand the local business landscape.",
  },
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "We measure success by your rating improvement, Local Pack ranking, and increased customer inquiries.",
  },
];

const stats = [
  { value: "500+", label: "Active Local Guides" },
  { value: "15", label: "Cities Covered" },
  { value: "10,000+", label: "Reviews Delivered" },
  { value: "95%+", label: "Retention Rate" },
];

export default function AboutPage() {
  const breadcrumbs = buildBreadcrumbs([
    { label: "About Us", href: "/about/" },
  ]);

  return (
    <main className="bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            About BuyReviewsInNigeria
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            We are Nigeria&apos;s leading platform connecting businesses with
            certified Google Local Guides for authentic review collection. Our
            mission is to help every Nigerian business build the online
            reputation it deserves.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-white py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl font-bold text-google-blue">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-text-primary">
            Our Story
          </h2>
          <div className="mt-6 space-y-4 text-text-secondary">
            <p>
              BuyReviewsInNigeria was founded with a simple observation:
              Nigerian businesses deliver excellent services every day, but
              struggle to get customers to leave reviews online. Meanwhile,
              competitors with more reviews — even with inferior service —
              dominate local search results.
            </p>
            <p>
              We bridge this gap by connecting businesses with our network of
              500+ certified Google Local Guides across 15 Nigerian cities.
              These are real people who visit your business, experience your
              service, and share genuine reviews that reflect the quality you
              deliver.
            </p>
            <p>
              Today, we serve 25+ industries — from{" "}
              <Link href="/industries/restaurants/" className="text-google-blue hover:underline">restaurants</Link>{" "}
              and{" "}
              <Link href="/industries/hotels/" className="text-google-blue hover:underline">hotels</Link>{" "}
              to{" "}
              <Link href="/industries/lawyers/" className="text-google-blue hover:underline">lawyers</Link>{" "}
              and{" "}
              <Link href="/industries/tech-companies/" className="text-google-blue hover:underline">tech companies</Link>{" "}
              — helping them build the online reputation they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-3xl font-bold text-text-primary">
            What We Stand For
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-google-blue/10">
                  <value.icon className="h-6 w-6 text-google-blue" />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-bold text-text-primary">
            Why Businesses Trust Us
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-xl border border-border bg-white p-6">
              <Star className="mx-auto h-8 w-8" />
              <h3 className="mt-4 font-heading font-semibold text-text-primary">Real Reviews</h3>
              <p className="mt-2 text-sm text-text-secondary">Written by verified Local Guides, not bots</p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <Award className="mx-auto h-8 w-8 text-google-blue" />
              <h3 className="mt-4 font-heading font-semibold text-text-primary">30-Day Guarantee</h3>
              <p className="mt-2 text-sm text-text-secondary">Free replacement if any review is removed</p>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <Globe className="mx-auto h-8 w-8 text-google-green" />
              <h3 className="mt-4 font-heading font-semibold text-text-primary">15 Cities</h3>
              <p className="mt-2 text-sm text-text-secondary">Nationwide coverage across Nigeria</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-google-blue py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">Ready to Build Your Reputation?</h2>
          <p className="mt-4 text-lg text-white/80">Join hundreds of Nigerian businesses that trust us.</p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/get-started/" className="rounded-lg bg-white px-8 py-3 font-semibold text-google-blue hover:bg-white/90">Get Started</Link>
            <Link href="/pricing/" className="rounded-lg border-2 border-white/30 px-8 py-3 font-semibold text-white hover:border-white">View Pricing</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
