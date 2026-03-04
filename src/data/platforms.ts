import type { Platform } from "@/types";

export const platforms: Platform[] = [
  {
    slug: "google-reviews",
    name: "Google Reviews",
    icon: "GoogleLogo",
    metaTitle: "Google Reviews for Nigerian Businesses",
    metaDescription:
      "Get authentic Google Reviews from certified Local Guides in Nigeria. Boost your Google Business Profile rating and attract more customers.",
    description:
      "Google Reviews are the most influential factor in local search rankings and consumer trust. Over 90% of Nigerian consumers check Google reviews before visiting a business. Our network of 500+ certified Google Local Guides (Level 4+) across Nigeria helps businesses collect authentic, detailed reviews that boost visibility and drive customers through the door.",
  },
  {
    slug: "trustpilot",
    name: "Trustpilot",
    icon: "TrustpilotLogo",
    metaTitle: "Trustpilot Reviews for Nigerian Businesses",
    metaDescription:
      "Build your Trustpilot reputation with genuine reviews from verified Nigerian customers. Trusted by businesses across Nigeria.",
    description:
      "Trustpilot is the world's leading open review platform, trusted by millions of consumers globally. For Nigerian businesses targeting both local and international customers, a strong Trustpilot profile builds credibility and trust. We connect businesses with verified customers who share their genuine experiences on Trustpilot.",
  },
  {
    slug: "google-my-business",
    name: "Google My Business",
    icon: "Building",
    metaTitle: "Google My Business Optimization Nigeria",
    metaDescription:
      "Optimize your Google Business Profile for maximum visibility in Nigeria. Photos, posts, Q&A, categories, and more.",
    description:
      "Your Google Business Profile (formerly Google My Business) is often the first thing potential customers see when they search for your business. We optimize every element — from photos and posts to Q&A and categories — to ensure your profile stands out in local search results and Google Maps across Nigeria.",
  },
  {
    slug: "tripadvisor",
    name: "TripAdvisor",
    icon: "Globe",
    metaTitle: "TripAdvisor Reviews for Nigerian Businesses",
    metaDescription:
      "Coming soon: TripAdvisor review collection for Nigerian hospitality businesses. Hotels, restaurants, and attractions.",
    description:
      "TripAdvisor is the world's largest travel review platform. For Nigerian hotels, restaurants, and tourist attractions, TripAdvisor reviews are essential for attracting both local and international visitors. Our TripAdvisor review collection service is coming soon — contact us to join the waiting list.",
  },
];

export function getPlatformBySlug(slug: string): Platform | undefined {
  return platforms.find((p) => p.slug === slug);
}

export function getAllPlatformSlugs(): string[] {
  return platforms.map((p) => p.slug);
}
