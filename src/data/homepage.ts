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
  shortDescription?: string;
}

export interface LocationCardData {
  name: string;
  slug: string;
  localGuides: number;
  neighborhoods: number;
  tagline?: string;
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
    "Boost your business reputation with genuine Google reviews from our network of 500+ certified Local Guides across 15 Nigerian cities. Buy Google reviews that are written by real people who physically visit your business. Improve your Google Maps ranking, attract more customers, and build lasting trust. Real reviewers. Real visits. Real results.",
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
        "Choose a monthly plan that fits your growth goals. From 30 reviews/month (Starter) to 90 reviews/month (Enterprise).",
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
      title: "GMB Profile Creation",
      description:
        "Get your Google Business Profile created from scratch with full optimization and verification support.",
      href: "/services/gmb-optimization/gmb-profile-creation/",
      icon: "Globe" as IconName,
      features: ["Full profile setup", "Google verification", "Maps placement"],
    },
    {
      title: "GMB Optimization",
      description:
        "Fully optimize your Google Business Profile to maximize visibility in local search and Google Maps.",
      href: "/services/gmb-optimization/",
      icon: "GoogleLogo" as IconName,
      features: ["Photos & posts", "Category optimization", "Ownership recovery"],
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
    { name: "Restaurants", slug: "restaurants", icon: "ShoppingCart" as IconName, reviewCount: "2,500+", shortDescription: "Boost foot traffic with reviews mentioning dishes, ambiance, and service quality" },
    { name: "Hotels", slug: "hotels", icon: "Building" as IconName, reviewCount: "1,800+", shortDescription: "Increase direct bookings with reviews highlighting rooms, facilities, and hospitality" },
    { name: "Hospitals & Clinics", slug: "hospitals-clinics", icon: "Heart" as IconName, reviewCount: "1,200+", shortDescription: "Build patient trust with reviews about care quality and medical expertise" },
    { name: "Car Dealerships", slug: "car-dealerships", icon: "Car" as IconName, reviewCount: "900+", shortDescription: "Drive showroom visits with reviews covering vehicle selection and sales experience" },
    { name: "Lawyers", slug: "lawyers", icon: "Scale" as IconName, reviewCount: "750+", shortDescription: "Attract new clients with reviews emphasizing professionalism and legal outcomes" },
    { name: "Real Estate", slug: "real-estate-agents", icon: "Key" as IconName, reviewCount: "600+", shortDescription: "Win more listings with reviews about market knowledge and client service" },
    { name: "Dentists", slug: "dentists", icon: "Smile" as IconName, reviewCount: "500+", shortDescription: "Grow your practice with reviews about gentle care and treatment results" },
    { name: "Salons", slug: "salons-barbershops", icon: "Scissors" as IconName, reviewCount: "1,100+", shortDescription: "Fill appointment slots with reviews praising styles, skill, and atmosphere" },
    { name: "Tech Companies", slug: "tech-companies", icon: "Monitor" as IconName, reviewCount: "400+", shortDescription: "Build B2B credibility with reviews on project delivery and technical expertise" },
    { name: "Gyms & Fitness", slug: "gyms-fitness", icon: "Dumbbell" as IconName, reviewCount: "350+", shortDescription: "Increase memberships with reviews about equipment, trainers, and results" },
    { name: "Schools", slug: "schools-universities", icon: "GraduationCap" as IconName, reviewCount: "300+", shortDescription: "Boost enrollment with reviews on teaching quality and student outcomes" },
    { name: "Construction", slug: "construction", icon: "HardHat" as IconName, reviewCount: "250+", shortDescription: "Win more contracts with reviews highlighting craftsmanship and reliability" },
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
    { name: "Lagos", slug: "lagos", localGuides: 180, neighborhoods: 18, tagline: "Nigeria's commercial capital and our largest service area" },
    { name: "Abuja", slug: "abuja", localGuides: 120, neighborhoods: 15, tagline: "Federal Capital Territory with strong demand from government-adjacent businesses" },
    { name: "Port Harcourt", slug: "port-harcourt", localGuides: 65, neighborhoods: 8, tagline: "Oil-and-gas hub with a thriving hospitality and services sector" },
    { name: "Ibadan", slug: "ibadan", localGuides: 40, neighborhoods: 6, tagline: "South-West's largest city with growing small business ecosystem" },
    { name: "Kano", slug: "kano", localGuides: 30, neighborhoods: 5, tagline: "Northern Nigeria's commercial centre and trade gateway" },
    { name: "Kaduna", slug: "kaduna", localGuides: 25, neighborhoods: 5, tagline: "Industrial hub with expanding retail and hospitality industries" },
    { name: "Benin City", slug: "benin-city", localGuides: 20, neighborhoods: 5, tagline: "Historic city with a rising entrepreneurial scene" },
    { name: "Enugu", slug: "enugu", localGuides: 18, neighborhoods: 5, tagline: "Coal City's booming tech and education sector" },
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
  subtitle: "Monthly subscription plans for consistent reputation growth.",
  viewAllHref: "/pricing/",
  plans: [
    {
      name: "Starter",
      price: "150,000",
      unit: "30 reviews/month",
      features: [
        "30 reviews/month minimum",
        "Certified Local Guides",
        "Custom content",
        "Natural delivery pacing",
        "30-day guarantee",
      ],
      isPopular: false,
      href: "https://buy.stripe.com/9B6fZig6r1mg4eegUL6wE36",
    },
    {
      name: "Growth",
      price: "275,000",
      unit: "60 reviews/month",
      features: [
        "60 reviews/month minimum",
        "Certified Local Guides",
        "Custom content per reviewer",
        "Strategic scheduling",
        "30-day guarantee",
        "GMB optimization included",
      ],
      isPopular: true,
      href: "https://buy.stripe.com/9B100k1bx5CwcKK33V6wE37",
    },
    {
      name: "Enterprise",
      price: "400,000",
      unit: "90 reviews/month",
      features: [
        "90 reviews/month minimum",
        "Certified Local Guides",
        "Full review strategy",
        "Priority scheduling",
        "30-day guarantee",
        "Full GMB management",
        "Weekly reports",
      ],
      isPopular: false,
      href: "https://buy.stripe.com/cNicN6aM77KE4ee5c36wE38",
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
  phone: "+2347085888855",
  phoneLabel: "Or call us directly",
};

// ══════════════════════════════════════════════
// 13. AUTHENTIC REVIEWS EXPLAINER
// ══════════════════════════════════════════════

export const authenticReviewsData = {
  title: "100% Legitimate Google Reviews — Here's Why",
  intro:
    "Unlike review farms that use bots or fake accounts, BuyReviewsInNigeria connects your business with real Google Local Guides — members of Google's own community contributor programme. Every review we deliver comes from a verified, active Google account with an established review history. Our Local Guides physically visit your business, experience your service, and write honest, personalised reviews that reflect a genuine customer interaction.",
  localGuideLevels: [
    {
      level: "Level 4",
      description: "200+ points, trusted contributor status, reviews carry algorithmic weight",
      color: "blue" as const,
    },
    {
      level: "Level 5",
      description: "500+ points, experienced reviewer, established profile with photos and edits",
      color: "green" as const,
    },
    {
      level: "Level 6+",
      description: "1,500+ points, elite contributor, highest trust signal on Google Maps",
      color: "yellow" as const,
    },
  ],
  comparisonTable: [
    {
      aspect: "Reviewer Identity",
      fake: "Anonymous bots or purchased accounts",
      ours: "Certified Google Local Guides with real profiles",
    },
    {
      aspect: "Account History",
      fake: "New accounts with zero activity",
      ours: "Established accounts with 50-500+ prior reviews",
    },
    {
      aspect: "Business Interaction",
      fake: "No visit, generic text copied across businesses",
      ours: "Physical visit or genuine service engagement",
    },
    {
      aspect: "Review Content",
      fake: "Templated, repetitive, and vague",
      ours: "Unique, detailed, and specific to your business",
    },
    {
      aspect: "Delivery Timing",
      fake: "All posted within hours or days",
      ours: "Spread naturally over 2-12 weeks",
    },
    {
      aspect: "Google Compliance",
      fake: "High removal rate, account suspensions common",
      ours: "95%+ retention rate, fully compliant approach",
    },
  ],
  benefits: [
    {
      icon: "Shield" as IconName,
      title: "Google-Compliant Process",
      description: "Our approach aligns with Google's guidelines. Reviews come from real people sharing real experiences.",
    },
    {
      icon: "Users" as IconName,
      title: "500+ Verified Local Guides",
      description: "Every reviewer in our network is a certified Google Local Guide with Level 4 status or higher.",
    },
    {
      icon: "MapPin" as IconName,
      title: "Physical Business Visits",
      description: "For brick-and-mortar businesses, our Local Guides visit in person before writing their review.",
    },
    {
      icon: "Clock" as IconName,
      title: "Natural Delivery Pacing",
      description: "Reviews are posted gradually over weeks, mimicking organic growth patterns that Google expects.",
    },
    {
      icon: "CheckCircle" as IconName,
      title: "95%+ Retention Rate",
      description: "Because our reviews are genuine, over 95% remain live permanently — backed by our 30-day guarantee.",
    },
    {
      icon: "Award" as IconName,
      title: "Personalised Review Content",
      description: "Each review is unique, mentioning specific products, staff, or experiences relevant to your business.",
    },
  ],
  closingText:
    "When you buy Google reviews from BuyReviewsInNigeria, you are investing in real customer engagement — not gaming the system. Our Local Guides are real people who live in your city, visit your business, and share their honest experience with the world.",
};

// ══════════════════════════════════════════════
// 14. WHY REVIEWS MATTER
// ══════════════════════════════════════════════

export const whyReviewsMatterData = {
  title: "Why Google Reviews Matter for Nigerian Businesses",
  paragraphs: [
    {
      heading: "Google Reviews Drive Local Pack Rankings",
      text: "When a potential customer searches for \"best restaurant near me\" or \"lawyer in Lagos,\" Google displays three businesses in the Local Pack — the map-based results at the top of the page. <strong>Review quantity, rating, and recency are among the top ranking factors</strong> that determine which businesses appear in this prime position. Businesses with more positive Google reviews consistently outrank competitors with fewer reviews, meaning every review you collect directly improves your visibility on Google Maps and Google Search.",
    },
    {
      heading: "Consumers Trust Online Reviews as Much as Personal Recommendations",
      text: "Research shows that <strong>93% of consumers read online reviews</strong> before choosing a local business, and <strong>88% trust online reviews as much as personal recommendations</strong> from friends and family. In Nigeria's competitive market, a business with 5 Google reviews is at a significant disadvantage compared to a competitor with 50+ reviews. By purchasing authentic Google reviews from certified Local Guides, you bridge this trust gap and give potential customers the social proof they need to choose your business.",
    },
    {
      heading: "Digital Word-of-Mouth for Nigerian Businesses",
      text: "In Nigeria, word-of-mouth has always been the most powerful form of marketing. Google reviews are the digital evolution of that tradition. A detailed, positive review from a certified Local Guide serves as a permanent recommendation visible to thousands of searchers every month. Unlike a verbal recommendation that reaches one person, a Google review can influence hundreds of purchasing decisions over its lifetime — making it one of the most cost-effective marketing investments available to Nigerian business owners.",
    },
    {
      heading: "The Review Asymmetry Problem Our Service Solves",
      text: "Most satisfied customers never leave a review — they simply enjoy the experience and move on. Meanwhile, unhappy customers are far more motivated to share their frustration online. This creates <strong>review asymmetry</strong>: your Google rating may not reflect the true quality of your business. BuyReviewsInNigeria solves this by connecting you with Local Guides who visit your business and share the positive experience that your regular customers rarely take the time to write about.",
    },
    {
      heading: "Reviews Are the Foundation of All Digital Marketing",
      text: "Whether you invest in Google Ads, social media marketing, or SEO, potential customers will check your Google reviews before making a decision. A low rating or few reviews undermines every other marketing effort. Authentic Google reviews from our Local Guide network provide <strong>the foundation that makes all your other marketing investments more effective</strong>. Businesses that maintain a strong review profile see higher click-through rates on ads, better conversion rates on landing pages, and stronger organic search performance across all channels.",
    },
  ],
  stats: [
    { value: "93%", label: "of consumers read reviews before buying", color: "blue" as const },
    { value: "88%", label: "trust reviews as much as personal recommendations", color: "red" as const },
    { value: "3.3x", label: "more likely to click a business with 4.5+ stars", color: "yellow" as const },
    { value: "₦0", label: "additional cost per customer acquired via reviews", color: "green" as const },
  ],
  cta: {
    primary: { label: "Start Building Your Reviews", href: "/get-started/" },
    secondary: { label: "View Pricing Plans", href: "/pricing/" },
  },
};
