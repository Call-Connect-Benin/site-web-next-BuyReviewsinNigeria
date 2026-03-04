import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogCategories,
  getBlogCategoryBySlug,
  getAllBlogCategorySlugs,
} from "@/data/blog-categories";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { blogBreadcrumbs } from "@/lib/internal-links";
import { ArrowRight, FileText } from "@/components/icons";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return getAllBlogCategorySlugs().map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getBlogCategoryBySlug(category);
  if (!cat) return {};

  return {
    title: `${cat.name} Articles | BuyReviewsInNigeria Blog`,
    description: cat.description,
    alternates: {
      canonical: `https://buyreviewsinnigeria.com/blog/${category}/`,
    },
  };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getBlogCategoryBySlug(category);

  if (!cat) notFound();

  const breadcrumbItems = blogBreadcrumbs(cat.name, cat.slug);

  const otherCategories = blogCategories.filter(
    (c) => c.slug !== cat.slug,
  );

  return (
    <main className="min-h-screen bg-bg">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-5xl px-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-8">
        <h1 className="font-heading text-4xl font-bold text-text-primary sm:text-5xl">
          {cat.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          {cat.description}
        </p>
      </section>

      {/* Coming Soon */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="rounded-lg border border-google-blue/20 bg-google-blue/5 p-8">
            <FileText className="mx-auto h-12 w-12 text-google-blue" />
            <h2 className="mt-4 font-heading text-2xl font-bold text-text-primary">
              Articles Coming Soon
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-text-secondary">
              We are writing expert {cat.name.toLowerCase()} articles for
              Nigerian businesses. Want to be notified when we publish?
            </p>
            <div className="mt-6">
              <Link
                href="/get-started/"
                className="inline-flex items-center gap-2 rounded-full bg-google-blue px-6 py-3 text-sm font-medium text-white transition-shadow hover:shadow-md"
              >
                Get Notified
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="font-heading text-2xl font-bold text-text-primary">
            Other Blog Categories
          </h2>
          <p className="mt-2 text-text-secondary">
            Browse our other content categories while we prepare{" "}
            {cat.name.toLowerCase()} articles.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherCategories.map((other) => (
              <Link
                key={other.slug}
                href={`/blog/${other.slug}/`}
                className="group rounded-lg border border-border bg-white p-5 transition-all hover:border-google-blue hover:shadow-sm"
              >
                <h3 className="font-heading text-base font-semibold text-text-primary transition-colors group-hover:text-google-blue">
                  {other.name}
                </h3>
                <p className="mt-1.5 text-sm text-text-secondary line-clamp-2">
                  {other.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-sm font-medium text-google-blue transition-colors hover:text-text-primary"
            >
              Back to all categories
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
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
            Do not wait for our articles -- start collecting authentic reviews
            from certified Local Guides across Nigeria today.
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
    </main>
  );
}
