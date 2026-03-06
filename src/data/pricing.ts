import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    slug: "starter",
    price: "150,000",
    currency: "NGN",
    unit: "per month",
    description:
      "Perfect for small businesses building their online reputation with a steady flow of authentic Google reviews every month.",
    features: [
      "30 authentic Google reviews per month minimum",
      "Written by certified Local Guides (Level 4+)",
      "Custom review content based on your business",
      "Reviews spread naturally throughout the month",
      "30-day retention guarantee",
      "Dedicated account manager",
      "Monthly performance report",
    ],
    isPopular: false,
    ctaText: "Subscribe Now",
    ctaLink: "https://buy.stripe.com/9B6fZig6r1mg4eegUL6wE36",
  },
  {
    name: "Growth",
    slug: "growth",
    price: "275,000",
    currency: "NGN",
    unit: "per month",
    description:
      "Our most popular plan for growing businesses ready to dominate local search results and build serious social proof fast.",
    features: [
      "60 authentic Google reviews per month minimum",
      "Written by certified Local Guides (Level 4+)",
      "Custom review content per reviewer",
      "Strategic review scheduling for maximum impact",
      "30-day retention guarantee",
      "Dedicated account manager",
      "GMB profile audit and optimization included",
      "Review response templates",
      "Bi-weekly performance reports",
    ],
    isPopular: true,
    ctaText: "Subscribe Now",
    ctaLink: "https://buy.stripe.com/9B100k1bx5CwcKK33V6wE37",
  },
  {
    name: "Enterprise",
    slug: "enterprise",
    price: "400,000",
    currency: "NGN",
    unit: "per month",
    description:
      "For established businesses and multi-location brands that want an unassailable online reputation and maximum local search dominance.",
    features: [
      "90 authentic Google reviews per month minimum",
      "Written by certified Local Guides (Level 4+)",
      "Fully customized review content strategy",
      "Advanced review scheduling and distribution",
      "30-day retention guarantee",
      "Priority senior account manager",
      "Full GMB optimization and management included",
      "Reputation management dashboard",
      "Review response management",
      "Weekly performance reports and strategy calls",
      "Multi-location support",
    ],
    isPopular: false,
    ctaText: "Subscribe Now",
    ctaLink: "https://buy.stripe.com/cNicN6aM77KE4ee5c36wE38",
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
    name: "GMB Profile Creation",
    price: "50,000",
    currency: "NGN",
    unit: "one-time",
    description:
      "Complete Google My Business profile creation from scratch, including verification and initial optimization.",
  },
  {
    name: "GMB Profile Deletion",
    price: "35,000",
    currency: "NGN",
    unit: "one-time",
    description:
      "Proper removal of duplicate or unwanted Google Business Profiles through official Google channels.",
  },
  {
    name: "GMB Ownership Recovery",
    price: "45,000",
    currency: "NGN",
    unit: "one-time",
    description:
      "Recover ownership of your Google Business Profile when access has been lost or transferred without authorization.",
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
