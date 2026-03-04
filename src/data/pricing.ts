import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter Pack",
    slug: "starter",
    price: "25,000",
    currency: "NGN",
    unit: "5 Google Reviews",
    description:
      "Perfect for new businesses looking to establish their online reputation with authentic Google reviews from certified Local Guides.",
    features: [
      "5 authentic Google reviews",
      "Written by certified Local Guides (Level 4+)",
      "Custom review content based on your business",
      "Reviews spread over 2 weeks for natural growth",
      "30-day retention guarantee",
      "Dedicated account manager",
    ],
    isPopular: false,
    ctaText: "Get Started",
    ctaLink: "/get-started/",
  },
  {
    name: "Growth Pack",
    slug: "growth",
    price: "65,000",
    currency: "NGN",
    unit: "15 Google Reviews",
    description:
      "Our most popular package for growing businesses ready to dominate local search results and build serious social proof.",
    features: [
      "15 authentic Google reviews",
      "Written by certified Local Guides (Level 4+)",
      "Custom review content per reviewer",
      "Reviews spread over 4-6 weeks",
      "30-day retention guarantee",
      "Dedicated account manager",
      "GMB profile quick audit included",
      "Review response templates",
    ],
    isPopular: true,
    ctaText: "Get Started",
    ctaLink: "/get-started/",
  },
  {
    name: "Business Pack",
    slug: "business",
    price: "120,000",
    currency: "NGN",
    unit: "30 Google Reviews",
    description:
      "For established businesses that want to build an unassailable online reputation and outperform competitors.",
    features: [
      "30 authentic Google reviews",
      "Written by certified Local Guides (Level 4+)",
      "Fully customized review content",
      "Reviews spread over 8-12 weeks",
      "30-day retention guarantee",
      "Priority account manager",
      "Full GMB profile audit and recommendations",
      "Review response templates",
      "Monthly reputation report",
    ],
    isPopular: false,
    ctaText: "Get Started",
    ctaLink: "/get-started/",
  },
  {
    name: "Enterprise Pack",
    slug: "enterprise",
    price: "Custom",
    currency: "NGN",
    unit: "50+ Reviews",
    description:
      "Tailored solutions for large businesses and multi-location brands needing comprehensive review management across Nigeria.",
    features: [
      "50+ authentic Google reviews",
      "Multi-location support",
      "Dedicated Local Guide team",
      "Custom review scheduling strategy",
      "30-day retention guarantee",
      "Dedicated senior account manager",
      "Full GMB optimization included",
      "Reputation management dashboard",
      "Monthly strategy calls",
      "Priority support",
    ],
    isPopular: false,
    ctaText: "Contact Us",
    ctaLink: "/contact/",
  },
];

export const additionalServices = [
  {
    name: "Trustpilot Reviews",
    price: "7,000",
    currency: "NGN",
    unit: "per review",
    description: "Authentic Trustpilot reviews from verified Nigerian customers.",
  },
  {
    name: "GMB Optimization",
    price: "50,000",
    currency: "NGN",
    unit: "one-time",
    description:
      "Complete Google My Business profile optimization including photos, posts, Q&A, categories, and attributes.",
  },
  {
    name: "Monthly Reputation Management",
    price: "35,000",
    currency: "NGN",
    unit: "per month",
    description:
      "Ongoing review monitoring, response management, and reputation improvement strategy.",
  },
  {
    name: "Negative Review Removal",
    price: "15,000",
    currency: "NGN",
    unit: "per review (success-based)",
    description:
      "Flag and remove fake or policy-violating reviews through proper Google and Trustpilot channels.",
  },
  {
    name: "Local SEO Package",
    price: "75,000",
    currency: "NGN",
    unit: "per month",
    description:
      "Comprehensive local SEO including citation building, local backlinks, keyword optimization, and Google Maps ranking.",
  },
] as const;

export function getPlanBySlug(slug: string): PricingPlan | undefined {
  return pricingPlans.find((plan) => plan.slug === slug);
}
