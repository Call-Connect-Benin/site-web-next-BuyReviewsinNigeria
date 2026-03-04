import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogCategoryBySlug } from "@/data/blog-categories";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { blogBreadcrumbs } from "@/lib/internal-links";
import { FileText, ArrowRight } from "@/components/icons";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const cat = getBlogCategoryBySlug(category);

  if (!cat) return {};

  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return {
    title: `${title} | ${cat.name} | BuyReviewsInNigeria Blog`,
    description: `Read our article on ${title.toLowerCase()} in the ${cat.name} category.`,
    alternates: {
      canonical: `https://buyreviewsinnigeria.com/blog/${category}/${slug}/`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { category, slug } = await params;
  const cat = getBlogCategoryBySlug(category);

  if (!cat) notFound();

  const title = slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const breadcrumbItems = blogBreadcrumbs(cat.name, cat.slug, title, slug);

  return (
    <main className="min-h-screen bg-bg">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-3xl px-6">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      {/* Article Coming Soon */}
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-8">
        <h1 className="font-heading text-4xl font-bold text-text-primary">
          {title}
        </h1>
        <p className="mt-2 text-sm text-text-secondary">
          Category:{" "}
          <Link
            href={`/blog/${cat.slug}/`}
            className="text-google-blue transition-colors hover:text-text-primary"
          >
            {cat.name}
          </Link>
        </p>

        <div className="mt-12 rounded-lg border border-google-blue/20 bg-google-blue/5 p-8 text-center">
          <FileText className="mx-auto h-12 w-12 text-google-blue" />
          <h2 className="mt-4 font-heading text-2xl font-bold text-text-primary">
            Coming Soon
          </h2>
          <p className="mx-auto mt-3 max-w-md text-text-secondary">
            This article is currently being written by our team. Check back
            soon for expert insights on this topic.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={`/blog/${cat.slug}/`}
              className="inline-flex items-center gap-2 text-sm font-medium text-google-blue transition-colors hover:text-text-primary"
            >
              Browse {cat.name} articles
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <span className="hidden text-border sm:inline">|</span>
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 text-sm font-medium text-google-blue transition-colors hover:text-text-primary"
            >
              All blog categories
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 rounded-lg border border-border bg-white p-8 text-center">
          <h2 className="font-heading text-xl font-bold text-text-primary">
            Need Results Now?
          </h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-text-secondary">
            Our review collection and reputation management services are ready
            today. Get authentic reviews from certified Local Guides across
            Nigeria.
          </p>
          <div className="mt-6">
            <Link
              href="/get-started/"
              className="inline-flex items-center gap-2 rounded-full bg-google-blue px-6 py-3 text-sm font-medium text-white transition-shadow hover:shadow-md"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
