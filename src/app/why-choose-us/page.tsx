import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { buildBreadcrumbs } from "@/lib/internal-links";
import {
  Shield,
  CheckCircle,
  Users,
  MapPin,
  Star,
  Clock,
  Award,
  Zap,
} from "@/components/icons";
import { getColorForIndex } from "@/lib/colors";

export const metadata: Metadata = {
  title: "🏆 Why Choose Us — 8 Reasons Businesses Trust Us",
  description:
    "⭐ 4.9/5 from 650+ clients! 8 reasons Nigerian businesses choose BuyReviewsInNigeria. ✅ Certified Local Guides · 30-day guarantee · 15 cities covered.",
  alternates: { canonical: "https://buyreviewsinnigeria.com/why-choose-us/" },
};

const reasons = [
  {
    icon: Users,
    title: "Certified Google Local Guides (Level 4+)",
    description:
      "Every reviewer in our network is a certified Google Local Guide at Level 4 or above. These are established Google users with years of review history, not newly created accounts.",
  },
  {
    icon: Star,
    title: "Genuine, Personalized Reviews",
    description:
      "Each review is written by a real person who has genuinely experienced your business. No templates, no copy-paste. Every review is unique and mentions specific details about your service.",
  },
  {
    icon: Shield,
    title: "30-Day Retention Guarantee",
    description:
      "If any review is removed by Google within 30 days of posting, we replace it at no extra cost. Our retention rate exceeds 95% because our reviews are authentic.",
  },
  {
    icon: MapPin,
    title: "15 Nigerian Cities, 93+ Neighborhoods",
    description:
      "From Victoria Island in Lagos to Maitama in Abuja, our Local Guides are based in the cities and neighborhoods they review. True local presence means authentic local reviews.",
  },
  {
    icon: Clock,
    title: "Natural Delivery Pacing",
    description:
      "Reviews are spread over weeks (not dumped overnight) to mimic natural growth patterns. This protects your Google Business Profile from algorithmic flags and suspicion.",
  },
  {
    icon: Zap,
    title: "Dedicated Account Manager",
    description:
      "Every client gets a dedicated account manager who coordinates your review campaign, provides updates, and ensures quality at every step.",
  },
  {
    icon: Award,
    title: "25+ Industries Served",
    description:
      "We have tailored review strategies for restaurants, hotels, hospitals, car dealerships, lawyers, dentists, and 20+ more industries. Our guides know what matters in your industry.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing, No Hidden Fees",
    description:
      "What you see is what you pay. No setup fees, no monthly commitments (unless you choose ongoing services), no surprises. Simple one-time packages starting at ₦25,000.",
  },
];

export default function WhyChooseUsPage() {
  const breadcrumbs = buildBreadcrumbs([
    { label: "Why Choose Us", href: "/why-choose-us/" },
  ]);

  return (
    <main className="bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="dot-pattern-light absolute inset-0" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-google-blue/5 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            Why Choose BuyReviewsInNigeria
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            We are not just another review service. Here are 8 reasons why
            hundreds of Nigerian businesses trust us with their online
            reputation.
          </p>
        </div>
      </section>

      {/* Reasons grid */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const color = getColorForIndex(index);
              return (
                <div
                  key={reason.title}
                  className={`rounded-xl border border-border border-t-4 ${color.borderTop} bg-white p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${color.bgGradient}`}>
                      <reason.icon className={`h-6 w-6 ${color.text}`} />
                    </div>
                    <div>
                      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${color.gradient} text-xs font-bold text-white`}>
                        {index + 1}
                      </span>
                      <h2 className="mt-1 font-heading text-lg font-bold text-text-primary">
                        {reason.title}
                      </h2>
                      <p className="mt-3 text-sm text-text-secondary">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-google-blue py-16">
        <div className="dot-pattern-white absolute inset-0" />
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-2xl px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Ready to Get Started?
          </h2>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/get-started/" className="rounded-lg bg-white px-8 py-3 font-semibold text-google-blue hover:bg-white/90">
              Get Started Today
            </Link>
            <Link href="/how-it-works/" className="rounded-lg border-2 border-white/30 px-8 py-3 font-semibold text-white hover:border-white">
              See How It Works
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
