import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { buildBreadcrumbs } from "@/lib/internal-links";
import { GetStartedForm } from "@/components/forms";
import { Shield, CheckCircle, Users, Star } from "@/components/icons";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Order authentic Google Reviews for your Nigerian business. Fill out our form to get started with certified Local Guides.",
  alternates: { canonical: "https://buyreviewsinnigeria.com/get-started/" },
};

export default function GetStartedPage() {
  const breadcrumbs = buildBreadcrumbs([
    { label: "Get Started", href: "/get-started/" },
  ]);

  return (
    <main className="bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
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
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-google-blue text-xs font-bold text-white">
                      1
                    </span>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        We review your submission
                      </p>
                      <p className="text-xs text-text-secondary">
                        Within 24 hours
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-google-blue text-xs font-bold text-white">
                      2
                    </span>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Your account manager contacts you
                      </p>
                      <p className="text-xs text-text-secondary">
                        To finalize details and payment
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-google-blue text-xs font-bold text-white">
                      3
                    </span>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        Local Guides start visiting
                      </p>
                      <p className="text-xs text-text-secondary">
                        Reviews begin within the first week
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Shield className="h-5 w-5 text-google-green" />
                  30-Day Retention Guarantee
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <CheckCircle className="h-5 w-5 text-google-green" />
                  Certified Local Guides (Level 4+)
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Users className="h-5 w-5 text-google-green" />
                  500+ Active Reviewers
                </div>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Star className="h-5 w-5" />
                  95%+ Retention Rate
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="order-1 lg:order-2 lg:col-span-3">
              <div className="rounded-xl border border-border bg-white p-8">
                <GetStartedForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
