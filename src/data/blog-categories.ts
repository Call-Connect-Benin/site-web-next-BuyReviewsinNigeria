import type { BlogCategory } from "@/types";

export const blogCategories: BlogCategory[] = [
  {
    slug: "google-reviews",
    name: "Google Reviews",
    description:
      "Guides, tips, and strategies for getting more Google reviews and improving your Google Business rating in Nigeria.",
  },
  {
    slug: "trustpilot",
    name: "Trustpilot",
    description:
      "Everything you need to know about building and managing your Trustpilot reputation as a Nigerian business.",
  },
  {
    slug: "gmb-tips",
    name: "GMB Tips",
    description:
      "Google My Business optimization tips, tutorials, and best practices for Nigerian businesses.",
  },
  {
    slug: "reputation-management",
    name: "Reputation Management",
    description:
      "Strategies for monitoring, managing, and improving your online reputation across review platforms.",
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    description:
      "Local search engine optimization guides to help Nigerian businesses rank higher in Google Maps and local results.",
  },
  {
    slug: "negative-reviews",
    name: "Negative Reviews",
    description:
      "How to handle, respond to, and remove negative reviews. Turn negative feedback into positive outcomes.",
  },
  {
    slug: "industry-guides",
    name: "Industry Guides",
    description:
      "Industry-specific review strategies and marketing guides for Nigerian businesses across all sectors.",
  },
  {
    slug: "nigerian-business",
    name: "Nigerian Business",
    description:
      "Insights, trends, and digital marketing strategies tailored for the Nigerian business landscape.",
  },
  {
    slug: "case-studies",
    name: "Case Studies",
    description:
      "Real success stories from Nigerian businesses that transformed their online reputation with our services.",
  },
  {
    slug: "how-to-guides",
    name: "How-To Guides",
    description:
      "Step-by-step tutorials and practical guides for managing your online presence and getting more reviews.",
  },
];

export function getBlogCategoryBySlug(slug: string): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}

export function getAllBlogCategorySlugs(): string[] {
  return blogCategories.map((c) => c.slug);
}
