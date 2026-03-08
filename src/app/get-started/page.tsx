import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { buildBreadcrumbs } from "@/lib/internal-links";
import { PromoForm } from "@/components/forms/promo-form";
import { Shield, CheckCircle, Users, Star } from "@/components/icons";
import { getColorForIndex } from "@/lib/colors";

export const metadata: Metadata = {
  title: "🚀 Get Started — Claim Your 5 Free Google Reviews",
  description:
    "🎁 Get 5 FREE Google Reviews with your first order! Fill out our form and we'll contact you within 24h. ✅ Certified Local Guides · No credit card required.",
  alternates: { canonical: "https://buyreviewsinnigeria.com/get-started/" },
};

const sidebarSteps = [
  {
    number: 1,
    title: "We review your submission",
    subtitle: "Within 24 hours",
  },
  {
    number: 2,
    title: "Your account manager contacts you",
    subtitle: "To finalize details and payment",
  },
  {
    number: 3,
    title: "Local Guides start visiting",
    subtitle: "Reviews begin within the first week",
  },
];

const trustSignals = [
  { icon: Shield, label: "30-Day Retention Guarantee" },
  { icon: CheckCircle, label: "Certified Local Guides (Level 4+)" },
  { icon: Users, label: "500+ Active Reviewers" },
  { icon: Star, label: "95%+ Retention Rate" },
];

export default function GetStartedPage() {
  const breadcrumbs = buildBreadcrumbs([
    { label: "Get Started", href: "/get-started/" },
  ]);

  return (
    <main className="bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="relative overflow-hidden py-20">
        <div className="dot-pattern-light absolute inset-0" />
        <div className="absolute -right-32 top-20 h-80 w-80 rounded-full bg-google-blue/5 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
              Get Started Today
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Fill out the form below and our team will get back to you within
              24 hours with a tailored review strategy for your business.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Sidebar */}
            <div className="order-2 lg:order-1 lg:col-span-2">
              <div className="rounded-xl border border-border bg-white p-6">
                <h2 className="font-heading text-lg font-semibold text-text-primary">
                  What Happens Next
                </h2>
                <ol className="mt-4 space-y-4">
                  {sidebarSteps.map((step, index) => {
                    const color = getColorForIndex(index);
                    return (
                      <li key={step.number} className="flex gap-3">
                        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${color.gradient} text-xs font-bold text-white shadow-sm`}>
                          {step.number}
                        </span>
                        <div>
                          <p className="text-sm font-medium text-text-primary">
                            {step.title}
                          </p>
                          <p className="text-xs text-text-secondary">
                            {step.subtitle}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="mt-6 space-y-3">
                {trustSignals.map((signal, index) => {
                  const color = getColorForIndex(index);
                  return (
                    <div
                      key={signal.label}
                      className={`flex items-center gap-2 rounded-full ${color.badgeBg} px-3 py-1.5 text-sm text-text-secondary`}
                    >
                      <signal.icon className={`h-5 w-5 ${color.text}`} />
                      {signal.label}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              <div className="glass-dark overflow-hidden rounded-xl shadow-xl">
                <div className="h-1 bg-gradient-to-r from-google-blue via-google-red to-google-yellow" />
                <div className="p-8">
                  <div className="mb-4 inline-block rounded-full bg-google-green/10 px-3 py-1 text-sm font-semibold text-google-green">
                    Limited Offer
                  </div>
                  <h2 className="mb-1 font-heading text-xl font-bold text-text-primary">
                    Get 5 Free Google Reviews with Your First Order*
                  </h2>
                  <p className="mb-6 text-sm text-text-secondary">
                    Fill in your details and we will contact you within 24 hours
                  </p>
                  <PromoForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
