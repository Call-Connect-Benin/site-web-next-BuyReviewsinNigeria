import type { Metadata } from "next";
import Link from "next/link";
import { blogCategories } from "@/data/blog-categories";
import { ArrowRight, FileText } from "@/components/icons";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { buildBreadcrumbs } from "@/lib/internal-links";

export const metadata: Metadata = {
  title: "📝 Blog — Google Reviews & Local SEO Tips for Nigeria",
  description:
    "Expert guides on Google Reviews, Trustpilot, GMB optimization & local SEO for Nigerian businesses. 💡 Tips to boost your online reputation. Coming soon!",
  alternates: {
    canonical: "https://buyreviewsinnigeria.com/blog/",
  },
};

export default function BlogPage() {
  const breadcrumbItems = buildBreadcrumbs([
    { label: "Blog", href: "/blog/" },
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
          Blog
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          Insights, guides, and strategies to grow your online reputation in
          Nigeria. We are building a library of expert content across 10
          categories -- check back soon.
        </p>
      </section>

      {/* Coming Soon Banner */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-lg border border-google-blue/20 bg-google-blue/5 p-6 text-center">
            <FileText className="mx-auto h-10 w-10 text-google-blue" />
            <h2 className="mt-4 font-heading text-xl font-bold text-text-primary">
              Content Coming Soon
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-text-secondary">
              Our team is writing in-depth guides, case studies, and how-to
              articles for Nigerian businesses. Browse the categories below to
              see what is on the way.
            </p>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary">
            Blog Categories
          </h2>
          <p className="mt-2 text-text-secondary">
            Explore our 10 content categories covering everything from Google
            Reviews to Nigerian business strategies.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/${category.slug}/`}
                className="group rounded-lg border border-border bg-white p-6 transition-all hover:border-google-blue hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-semibold text-text-primary transition-colors group-hover:text-google-blue">
                  {category.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {category.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-google-blue opacity-0 transition-opacity group-hover:opacity-100">
                  View Category
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-google-blue py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Need Results Now?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            While our blog content is on the way, our review collection and
            reputation management services are ready today. Get started with
            authentic reviews from certified Local Guides across Nigeria.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/get-started/"
              className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-google-blue shadow-md transition-all hover:bg-white/90 hover:shadow-lg"
            >
              Get Started Now
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
