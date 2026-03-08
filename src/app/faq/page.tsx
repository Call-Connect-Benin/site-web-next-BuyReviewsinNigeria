import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { buildBreadcrumbs } from "@/lib/internal-links";
import { faqCategories, TOTAL_FAQ_COUNT } from "@/data/faq";
import { FaqAccordion } from "@/components/sections/faq-accordion";

export const metadata: Metadata = {
  title: "❓ FAQ — Your Questions About Google Reviews Answered",
  description: `Answers to ${TOTAL_FAQ_COUNT} frequently asked questions about buying Google Reviews in Nigeria. 💰 Pricing · ⚡ Process · 🔒 Safety · 📊 Results & more.`,
  alternates: { canonical: "https://buyreviewsinnigeria.com/faq/" },
};

export default function FaqPage() {
  const breadcrumbs = buildBreadcrumbs([{ label: "FAQ", href: "/faq/" }]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((cat) =>
      cat.questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer.replace(/<[^>]+>/g, ""),
        },
      })),
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={breadcrumbs} />
        </div>

        {/* Hero */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Everything you need to know about our Google Review services in
              Nigeria. {TOTAL_FAQ_COUNT} questions answered.
            </p>
          </div>
        </section>

        {/* Category navigation */}
        <section className="border-b border-border bg-white py-4">
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2 px-4 sm:px-6">
            {faqCategories.map((cat) => (
              <a
                key={cat.slug}
                href={`#${cat.slug}`}
                className="rounded-full border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-google-blue hover:text-google-blue"
              >
                {cat.name} ({cat.questions.length})
              </a>
            ))}
          </div>
        </section>

        {/* FAQ sections */}
        <section className="py-20">
          <div className="mx-auto max-w-3xl space-y-16 px-4 sm:px-6">
            {faqCategories.map((cat) => (
              <div key={cat.slug} id={cat.slug}>
                <h2 className="font-heading text-2xl font-bold text-text-primary">
                  {cat.name}
                </h2>
                <p className="mt-2 text-sm text-text-secondary">
                  {cat.questions.length} questions
                </p>
                <div className="mt-6">
                  <FaqAccordion items={cat.questions} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-google-blue py-16">
          <div className="mx-auto max-w-2xl px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-white">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-lg text-white/80">
              Our team is here to help.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact/"
                className="rounded-lg bg-white px-8 py-3 font-semibold text-google-blue hover:bg-white/90"
              >
                Contact Us
              </Link>
              <Link
                href="/get-started/"
                className="rounded-lg border-2 border-white/30 px-8 py-3 font-semibold text-white hover:border-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
