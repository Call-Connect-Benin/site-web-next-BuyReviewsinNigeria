import type { IconName } from "@/types";

// ══════════════════════════════════════════════
// HOMEPAGE DATA — 12 SECTIONS
// All content centralized here, never hardcoded
// ══════════════════════════════════════════════

// ── Section Types ──

export interface HeroData {
  headline: string;
  subheadline: string;
  description: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  trustBadges: Array<{ icon: IconName; text: string }>;
  stats: Array<{ value: string; label: string }>;
}

export interface TrustBarItem {
  icon: IconName;
  text: string;
}

export interface HowItWorksStep {
  step: number;
  title: string;
  description: string;
  icon: IconName;
}

export interface ServiceCardData {
  title: string;
  description: string;
  href: string;
  icon: IconName;
  features: string[];
}

export interface IndustryCardData {
  name: string;
  slug: string;
  icon: IconName;
  reviewCount: string;
}

export interface LocationCardData {
  name: string;
  slug: string;
  localGuides: number;
  neighborhoods: number;
}

export interface TestimonialData {
  name: string;
  role: string;
  company: string;
  city: string;
  rating: number;
  text: string;
  service: string;
}

export interface PricingPreviewData {
  name: string;
  price: string;
  unit: string;
  features: string[];
  isPopular: boolean;
  href: string;
}

export interface PlatformCardData {
  name: string;
  slug: string;
  icon: IconName;
  description: string;
}

export interface StatData {
  value: string;
  label: string;
  icon: IconName;
}

// ══════════════════════════════════════════════
// 1. HERO SECTION
// ══════════════════════════════════════════════

export const heroData: HeroData = {
  headline: "Buy Authentic Google Reviews in Nigeria",
  subheadline: "From Certified Local Guides",
  description:
    "Boost your business reputation with genuine Google reviews from our network of 500+ certified Local Guides across 15 Nigerian cities. Real reviewers. Real visits. Real results.",
  ctaPrimary: {
    label: "Get Started Today",
    href: "/get-started/",
  },
  ctaSecondary: {
    label: "View Pricing",
    href: "/pricing/",
  },
  trustBadges: [
    { icon: "Shield", text: "Certified Local Guides (Level 4+)" },
    { icon: "CheckCircle", text: "30-Day Retention Guarantee" },
    { icon: "Users", text: "500+ Active Reviewers" },
    { icon: "MapPin", text: "15 Nigerian Cities" },
  ],
  stats: [
    { value: "500+", label: "Local Guides" },
    { value: "15", label: "Cities Covered" },
    { value: "95%+", label: "Retention Rate" },
    { value: "25+", label: "Industries Served" },
  ],
};

// ══════════════════════════════════════════════
// 2. TRUST BAR
// ══════════════════════════════════════════════

export const trustBarItems: TrustBarItem[] = [
  { icon: "Shield", text: "Certified Google Local Guides" },
  { icon: "CheckCircle", text: "30-Day Retention Guarantee" },
  { icon: "Star", text: "4.8/5 Average Rating" },
  { icon: "Users", text: "500+ Verified Reviewers" },
  { icon: "MapPin", text: "15 Nigerian Cities" },
  { icon: "Clock", text: "Delivery in 2-12 Weeks" },
];

// ══════════════════════════════════════════════
// 3. HOW IT WORKS
// ══════════════════════════════════════════════

export const howItWorksData = {
  title: "How It Works",
  subtitle: "Get authentic Google reviews in 4 simple steps",
  steps: [
    {
      step: 1,
      title: "Choose Your Plan",
      description:
        "Select a review package that fits your business needs and budget. From 5 reviews (Starter) to 50+ (Enterprise).",
      icon: "DollarSign" as IconName,
    },
    {
      step: 2,
      title: "Share Your Business Details",
      description:
        "Tell us about your business, location, and what aspects you want highlighted in reviews. We tailor every review to your brand.",
      icon: "FileText" as IconName,
    },
    {
      step: 3,
      title: "Local Guides Visit Your Business",
      description:
        "Our certified Local Guides (Level 4+) visit your business, experience your service, and write genuine, personalized reviews.",
      icon: "MapPin" as IconName,
    },
    {
      step: 4,
      title: "Watch Your Reputation Grow",
      description:
        "Reviews are posted gradually over weeks for natural growth. Track progress with your dedicated account manager.",
      icon: "TrendingUp" as IconName,
    },
  ] satisfies HowItWorksStep[],
};

// ══════════════════════════════════════════════
// 4. SERVICES SECTION
// ══════════════════════════════════════════════

export const servicesData = {
  title: "Our Services",
  subtitle: "Comprehensive review and reputation solutions for Nigerian businesses",
  services: [
    {
      title: "Google Review Collection",
      description:
        "Get authentic Google reviews from certified Local Guides who visit your business and share genuine experiences.",
      href: "/services/google-review-collection/",
      icon: "Star" as IconName,
      features: ["Certified Local Guides", "Custom review content", "Natural delivery pacing"],
    },
    {
      title: "Trustpilot Review Collection",
      description:
        "Build trust with genuine Trustpilot reviews from verified Nigerian customers for your online business.",
      href: "/services/trustpilot-review-collection/",
      icon: "TrustpilotLogo" as IconName,
      features: ["Verified reviewers", "B2B and B2C", "E-commerce focus"],
    },
    {
      title: "GMB Optimization",
      description:
        "Fully optimize your Google Business Profile to maximize visibility in local search and Google Maps.",
      href: "/services/gmb-optimization/",
      icon: "GoogleLogo" as IconName,
      features: ["Profile setup", "Photos & posts", "Category optimization"],
    },
    {
      title: "Reputation Management",
      description:
        "Comprehensive monitoring, response management, and strategy to protect and improve your online reputation.",
      href: "/services/reputation-management/",
      icon: "Shield" as IconName,
      features: ["Review monitoring", "Response management", "Rating improvement"],
    },
    {
      title: "Negative Review Removal",
      description:
        "Flag and remove fake, spam, or policy-violating reviews through legitimate Google channels.",
      href: "/services/negative-review-removal/",
      icon: "AlertTriangle" as IconName,
      features: ["Policy violation flagging", "Dispute process", "Success-based pricing"],
    },
    {
      title: "Local SEO",
      description:
        "Rank higher in local search with citation building, local backlinks, and Google Maps optimization.",
      href: "/services/local-seo/",
      icon: "TrendingUp" as IconName,
      features: ["Citation building", "Local backlinks", "Maps ranking"],
    },
  ] satisfies ServiceCardData[],
};

// ══════════════════════════════════════════════
// 5. INDUSTRIES SECTION (Top 12)
// ══════════════════════════════════════════════

export const industriesData = {
  title: "Industries We Serve",
  subtitle: "Tailored review solutions for 25+ Nigerian industries",
  viewAllHref: "/industries/",
  industries: [
    { name: "Restaurants", slug: "restaurants", icon: "ShoppingCart" as IconName, reviewCount: "2,500+" },
    { name: "Hotels", slug: "hotels", icon: "Building" as IconName, reviewCount: "1,800+" },
    { name: "Hospitals & Clinics", slug: "hospitals-clinics", icon: "Heart" as IconName, reviewCount: "1,200+" },
    { name: "Car Dealerships", slug: "car-dealerships", icon: "Car" as IconName, reviewCount: "900+" },
    { name: "Lawyers", slug: "lawyers", icon: "Scale" as IconName, reviewCount: "750+" },
    { name: "Real Estate", slug: "real-estate-agents", icon: "Key" as IconName, reviewCount: "600+" },
    { name: "Dentists", slug: "dentists", icon: "Smile" as IconName, reviewCount: "500+" },
    { name: "Salons", slug: "salons-barbershops", icon: "Scissors" as IconName, reviewCount: "1,100+" },
    { name: "Tech Companies", slug: "tech-companies", icon: "Monitor" as IconName, reviewCount: "400+" },
    { name: "Gyms & Fitness", slug: "gyms-fitness", icon: "Dumbbell" as IconName, reviewCount: "350+" },
    { name: "Schools", slug: "schools-universities", icon: "GraduationCap" as IconName, reviewCount: "300+" },
    { name: "Construction", slug: "construction", icon: "HardHat" as IconName, reviewCount: "250+" },
  ] satisfies IndustryCardData[],
};

// ══════════════════════════════════════════════
// 6. LOCATIONS SECTION
// ══════════════════════════════════════════════

export const locationsData = {
  title: "Cities We Cover",
  subtitle: "15 cities. 93+ neighborhoods. 500+ Local Guides across Nigeria.",
  viewAllHref: "/locations/",
  cities: [
    { name: "Lagos", slug: "lagos", localGuides: 180, neighborhoods: 18 },
    { name: "Abuja", slug: "abuja", localGuides: 120, neighborhoods: 15 },
    { name: "Port Harcourt", slug: "port-harcourt", localGuides: 65, neighborhoods: 8 },
    { name: "Ibadan", slug: "ibadan", localGuides: 40, neighborhoods: 6 },
    { name: "Kano", slug: "kano", localGuides: 30, neighborhoods: 5 },
    { name: "Kaduna", slug: "kaduna", localGuides: 25, neighborhoods: 5 },
    { name: "Benin City", slug: "benin-city", localGuides: 20, neighborhoods: 5 },
    { name: "Enugu", slug: "enugu", localGuides: 18, neighborhoods: 5 },
  ] satisfies LocationCardData[],
};

// ══════════════════════════════════════════════
// 7. TESTIMONIALS SECTION
// ══════════════════════════════════════════════

export const testimonialsData = {
  title: "What Our Clients Say",
  subtitle: "Trusted by hundreds of Nigerian businesses",
  testimonials: [
    {
      name: "Adebayo Ogunlesi",
      role: "Owner",
      company: "Tasty Bites Restaurant",
      city: "Lagos",
      rating: 5,
      text: "Within 6 weeks, we went from 12 to 35 Google reviews. The quality of the reviews is incredible — each one mentions specific dishes and the dining experience. Our foot traffic has increased noticeably since.",
      service: "Google Review Collection",
    },
    {
      name: "Chioma Nwankwo",
      role: "Managing Partner",
      company: "Nwankwo & Associates Law Firm",
      city: "Abuja",
      rating: 5,
      text: "As a law firm, trust is everything. BuyReviewsInNigeria connected us with Local Guides who genuinely appreciated our legal services. We now rank #1 in the Local Pack for 'lawyers in Abuja'. Worth every Naira.",
      service: "Google Review Collection",
    },
    {
      name: "Ibrahim Musa",
      role: "General Manager",
      company: "Royal Palace Hotel",
      city: "Kano",
      rating: 5,
      text: "The team optimized our Google Business Profile and delivered 30 authentic reviews. Our booking inquiries from Google have increased by 40%. The reviews specifically mention our facilities and staff by name.",
      service: "GMB Optimization",
    },
    {
      name: "Ngozi Eze",
      role: "Director",
      company: "Dental Smiles Clinic",
      city: "Port Harcourt",
      rating: 5,
      text: "Patients were hesitant to leave reviews despite great experiences. BuyReviewsInNigeria's Local Guides filled that gap with honest, detailed reviews. New patient appointments have grown 25% quarter over quarter.",
      service: "Google Review Collection",
    },
    {
      name: "Olumide Adeyemi",
      role: "CEO",
      company: "AutoMax Car Dealership",
      city: "Lagos",
      rating: 5,
      text: "We had 3 fake negative reviews dragging our rating down. The team flagged and removed them within 2 weeks, then helped us build 20 genuine positive reviews. Our rating went from 3.2 to 4.6 stars.",
      service: "Negative Review Removal",
    },
    {
      name: "Fatima Bello",
      role: "Founder",
      company: "GreenTech Solutions",
      city: "Abuja",
      rating: 5,
      text: "As a tech company, online reputation directly impacts client acquisition. The Trustpilot reviews we received were detailed and mentioned specific projects. Our Trustpilot score is now 4.7/5 with 45 reviews.",
      service: "Trustpilot Review Collection",
    },
  ] satisfies TestimonialData[],
};

// ══════════════════════════════════════════════
// 8. PRICING PREVIEW
// ══════════════════════════════════════════════

export const pricingPreviewData = {
  title: "Simple, Transparent Pricing",
  subtitle: "No hidden fees. Pay once, get results.",
  viewAllHref: "/pricing/",
  plans: [
    {
      name: "Starter",
      price: "25,000",
      unit: "5 Reviews",
      features: [
        "5 Google reviews",
        "Certified Local Guides",
        "Custom content",
        "2-week delivery",
        "30-day guarantee",
      ],
      isPopular: false,
      href: "/get-started/",
    },
    {
      name: "Growth",
      price: "65,000",
      unit: "15 Reviews",
      features: [
        "15 Google reviews",
        "Certified Local Guides",
        "Custom content per reviewer",
        "4-6 week delivery",
        "30-day guarantee",
        "GMB quick audit",
      ],
      isPopular: true,
      href: "/get-started/",
    },
    {
      name: "Business",
      price: "120,000",
      unit: "30 Reviews",
      features: [
        "30 Google reviews",
        "Certified Local Guides",
        "Fully customized content",
        "8-12 week delivery",
        "30-day guarantee",
        "Full GMB audit",
        "Monthly report",
      ],
      isPopular: false,
      href: "/get-started/",
    },
  ] satisfies PricingPreviewData[],
};

// ══════════════════════════════════════════════
// 9. PLATFORMS SECTION
// ══════════════════════════════════════════════

export const platformsData = {
  title: "Platforms We Support",
  subtitle: "Manage your reputation across the platforms that matter most",
  platforms: [
    {
      name: "Google Reviews",
      slug: "google-reviews",
      icon: "GoogleLogo" as IconName,
      description:
        "The most important review platform for local businesses. Google Reviews directly influence your Local Pack ranking and Maps visibility.",
    },
    {
      name: "Trustpilot",
      slug: "trustpilot",
      icon: "TrustpilotLogo" as IconName,
      description:
        "The global standard for online business reviews. Essential for e-commerce, B2B, and technology companies building international trust.",
    },
    {
      name: "Google My Business",
      slug: "google-my-business",
      icon: "Globe" as IconName,
      description:
        "Your digital storefront on Google. A fully optimized GMB profile amplifies the impact of every review you receive.",
    },
    {
      name: "TripAdvisor",
      slug: "tripadvisor",
      icon: "ExternalLink" as IconName,
      description:
        "The leading platform for hospitality reviews. Critical for hotels, restaurants, and tourism businesses in Nigeria.",
    },
  ] satisfies PlatformCardData[],
};

// ══════════════════════════════════════════════
// 10. STATS SECTION
// ══════════════════════════════════════════════

export const statsData: StatData[] = [
  { value: "10,000+", label: "Reviews Delivered", icon: "Star" },
  { value: "500+", label: "Businesses Served", icon: "Building" },
  { value: "95%+", label: "Retention Rate", icon: "Shield" },
  { value: "15", label: "Cities Covered", icon: "MapPin" },
  { value: "500+", label: "Active Local Guides", icon: "Users" },
  { value: "25+", label: "Industries Served", icon: "Briefcase" },
];

// ══════════════════════════════════════════════
// 11. FAQ SECTION (homepage subset — 8 questions)
// Data imported from /src/data/faq.ts via getHomepageFaq()
// ══════════════════════════════════════════════

export const faqSectionData = {
  title: "Frequently Asked Questions",
  subtitle: "Everything you need to know about our review services",
  viewAllHref: "/faq/",
};

// ══════════════════════════════════════════════
// 12. CTA FINAL SECTION
// ══════════════════════════════════════════════

export const ctaFinalData = {
  title: "Ready to Grow Your Business?",
  description:
    "Join hundreds of Nigerian businesses that trust BuyReviewsInNigeria to build their online reputation with authentic Google Reviews.",
  ctaPrimary: {
    label: "Get Started Today",
    href: "/get-started/",
  },
  ctaSecondary: {
    label: "View Pricing",
    href: "/pricing/",
  },
  phone: "+234-XXX-XXX-XXXX",
  phoneLabel: "Or call us directly",
};
