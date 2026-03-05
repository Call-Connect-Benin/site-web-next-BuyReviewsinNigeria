import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { buildBreadcrumbs } from "@/lib/internal-links";
import { iconMap } from "@/components/icons";
import { CheckCircle } from "@/components/icons";
import { getColorForIndex } from "@/lib/colors";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how BuyReviewsInNigeria collects authentic Google Reviews through certified Local Guides. Our 4-step process explained.",
  alternates: { canonical: "https://buyreviewsinnigeria.com/how-it-works/" },
};

const detailedSteps = [
  {
    step: 1,
    title: "Choose Your Review Package",
    description:
      "Browse our pricing plans and select the package that fits your business needs. Whether you need 5 reviews to get started or 50+ for enterprise-level growth, we have the right plan for you.",
    details: [
      "Starter Pack: 5 reviews for ₦25,000",
      "Growth Pack: 15 reviews for ₦65,000 (most popular)",
      "Business Pack: 30 reviews for ₦120,000",
      "Enterprise Pack: 50+ reviews (custom pricing)",
    ],
    icon: "DollarSign" as const,
  },
  {
    step: 2,
    title: "Share Your Business Details",
    description:
      "Complete our brief onboarding form with details about your business — location, services, what makes you special, and any specific aspects you want highlighted in reviews.",
    details: [
      "Business name and Google Maps link",
      "Products or services to highlight",
      "Target keywords and talking points",
      "Preferred review schedule",
    ],
    icon: "FileText" as const,
  },
  {
    step: 3,
    title: "We Assign Local Guides",
    description:
      "Our team matches your business with certified Google Local Guides (Level 4+) in your area. These are real people with established Google accounts and review histories.",
    details: [
      "Guides are matched by city and neighborhood",
      "Each guide has Level 4+ certification",
      "Guides receive briefing on your business",
      "Visits are scheduled over weeks for natural pacing",
    ],
    icon: "Users" as const,
  },
  {
    step: 4,
    title: "Local Guides Visit Your Business",
    description:
      "Our Local Guides physically visit your business (or engage with your service online). They experience what you offer firsthand, then write unique, personalized reviews.",
    details: [
      "In-person visits for brick-and-mortar businesses",
      "Online engagement for digital services",
      "Each review is unique and personalized",
      "Photos included when appropriate",
    ],
    icon: "MapPin" as const,
  },
  {
    step: 5,
    title: "Reviews Are Posted Gradually",
    description:
      "Reviews are published on Google over several weeks, mimicking natural review growth patterns. This protects your business profile from algorithmic flags.",
    details: [
      "2-week delivery for Starter Pack",
      "4-6 weeks for Growth Pack",
      "8-12 weeks for Business Pack",
      "Custom schedule for Enterprise",
    ],
    icon: "Clock" as const,
  },
  {
    step: 6,
    title: "Monitor Results & Grow",
    description:
      "Track your review growth and rating improvement with your dedicated account manager. Our 30-day retention guarantee means any removed review is replaced free of charge.",
    details: [
      "Dedicated account manager",
      "30-day retention guarantee",
      "Monthly reputation reports (Business+)",
      "Strategy calls (Enterprise)",
    ],
    icon: "TrendingUp" as const,
  },
];

export default function HowItWorksPage() {
  const breadcrumbs = buildBreadcrumbs([
    { label: "How It Works", href: "/how-it-works/" },
  ]);

  return (
    <main className="bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-20">
        <div className="dot-pattern-light absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
            How It Works
          </h1>
          <p className="mt-6 text-lg text-text-secondary">
            Getting authentic Google reviews for your Nigerian business is
            simple. Here is our proven 6-step process.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="space-y-16">
            {detailedSteps.map((step, index) => {
              const Icon = iconMap[step.icon];
              const color = getColorForIndex(index);
              return (
                <div key={step.step} className="relative flex gap-6">
                  {/* Step indicator */}
                  <div className="flex shrink-0 flex-col items-center">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${color.gradient} text-white shadow-lg`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    {step.step < detailedSteps.length && (
                      <div className="mt-4 h-full w-0.5 bg-gradient-to-b from-google-blue via-google-green to-google-yellow" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pb-8">
                    <div className="flex items-center gap-3">
                      <span className={`rounded-full ${color.bgGradient} px-3 py-1 text-xs font-semibold ${color.text}`}>
                        Step {step.step}
                      </span>
                    </div>
                    <h2 className="mt-3 font-heading text-xl font-bold text-text-primary">
                      {step.title}
                    </h2>
                    <p className="mt-3 text-text-secondary">
                      {step.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <CheckCircle className={`mt-0.5 h-4 w-4 shrink-0 ${color.text}`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
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
          <p className="mt-4 text-lg text-white/80">
            Join hundreds of Nigerian businesses growing their online reputation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/get-started/" className="rounded-lg bg-white px-8 py-3 font-semibold text-google-blue hover:bg-white/90">
              Get Started Today
            </Link>
            <Link href="/pricing/" className="rounded-lg border-2 border-white/30 px-8 py-3 font-semibold text-white hover:border-white">
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
