import type { FaqItem } from "@/types";

// ── FAQ Categories ──
export interface FaqCategory {
  slug: string;
  name: string;
  questions: FaqItem[];
}

// ══════════════════════════════════════════════
// 50 FREQUENTLY ASKED QUESTIONS — 8 CATEGORIES
// Every answer contains 2-3 internal links
// ══════════════════════════════════════════════

export const faqCategories: FaqCategory[] = [
  // ── 1. General Questions (8) ──
  {
    slug: "general",
    name: "General Questions",
    questions: [
      {
        question: "What is BuyReviewsInNigeria.com?",
        answer:
          "BuyReviewsInNigeria.com is Nigeria's leading platform for helping businesses collect authentic Google Reviews through our network of certified Local Guides. We connect Nigerian businesses with real reviewers who visit your location and share genuine experiences. Learn more on our <a href='/about/'>About page</a> or see <a href='/how-it-works/'>How It Works</a>.",
      },
      {
        question: "Is buying Google reviews legal in Nigeria?",
        answer:
          "Our service focuses on connecting businesses with real customers and certified Local Guides who provide authentic reviews based on genuine experiences. We follow all Google guidelines and ensure reviews are honest and compliant. Read our <a href='/terms-of-service/'>Terms of Service</a> and learn about our <a href='/services/google-review-collection/'>Google Review Collection</a> process.",
      },
      {
        question: "How is BuyReviewsInNigeria different from fake review services?",
        answer:
          "Unlike fake review farms, we use certified Google Local Guides (Level 4+) who physically visit your business and write genuine reviews. Our reviews are personalized, spread over weeks for natural growth, and backed by a 30-day retention guarantee. See <a href='/why-choose-us/'>Why Choose Us</a> and check our <a href='/pricing/'>transparent pricing</a>.",
      },
      {
        question: "What cities do you cover in Nigeria?",
        answer:
          "We cover 15 major cities across Nigeria including <a href='/locations/lagos/'>Lagos</a>, <a href='/locations/abuja/'>Abuja</a>, <a href='/locations/port-harcourt/'>Port Harcourt</a>, Ibadan, Kano, Kaduna, Benin City, Enugu, Warri, Calabar, Owerri, Uyo, Abeokuta, Jos, and Ilorin. View all <a href='/locations/'>locations we serve</a>.",
      },
      {
        question: "What industries do you work with?",
        answer:
          "We serve 25+ industries across Nigeria, from <a href='/industries/restaurants/'>restaurants</a> and <a href='/industries/hotels/'>hotels</a> to <a href='/industries/lawyers/'>lawyers</a>, <a href='/industries/dentists/'>dentists</a>, and <a href='/industries/tech-companies/'>tech companies</a>. Browse all <a href='/industries/'>industries we serve</a>.",
      },
      {
        question: "Do you offer services outside Nigeria?",
        answer:
          "Currently, we focus exclusively on Nigerian businesses. Our Local Guide network spans 15 cities and 93+ neighborhoods across Nigeria. This local expertise is what makes our reviews authentic and effective. View our <a href='/locations/'>service locations</a> or <a href='/contact/'>contact us</a> for custom arrangements.",
      },
      {
        question: "How long has BuyReviewsInNigeria been operating?",
        answer:
          "We are an established player in Nigeria's digital reputation space, having helped hundreds of businesses build their online presence through authentic reviews. Read our story on the <a href='/about/'>About page</a> and see <a href='/why-choose-us/'>why businesses trust us</a>.",
      },
      {
        question: "Can I see examples of reviews you've generated?",
        answer:
          "Yes, each industry page shows a sample review that reflects the quality and authenticity of our work. Check out examples for <a href='/industries/restaurants/'>restaurants</a>, <a href='/industries/hotels/'>hotels</a>, or any of our <a href='/industries/'>25 industry verticals</a>.",
      },
    ],
  },

  // ── 2. Pricing & Payment (7) ──
  {
    slug: "pricing-payment",
    name: "Pricing & Payment",
    questions: [
      {
        question: "How much do Google reviews cost in Nigeria?",
        answer:
          "Our packages start at ₦25,000 for 5 reviews (Starter Pack) and go up to custom Enterprise pricing for 50+ reviews. Our most popular Growth Pack is ₦65,000 for 15 reviews. View all <a href='/pricing/'>pricing plans</a> or <a href='/get-started/'>get started</a> today.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers, Paystack, Flutterwave, and direct deposits. All prices are in Nigerian Naira (₦). Visit our <a href='/pricing/'>pricing page</a> for current rates or <a href='/contact/'>contact us</a> for payment details.",
      },
      {
        question: "Do you offer discounts for bulk orders?",
        answer:
          "Yes, our Business Pack (30 reviews for ₦120,000) offers better per-review pricing, and our Enterprise Pack provides custom rates for 50+ reviews. <a href='/pricing/'>Compare all plans</a> or <a href='/contact/'>contact us</a> for bulk pricing.",
      },
      {
        question: "Is there a money-back guarantee?",
        answer:
          "We offer a 30-day retention guarantee. If any review is removed by Google within 30 days of posting, we replace it at no extra cost. If we cannot fulfill your order, you receive a full refund. Read our complete <a href='/refund-policy/'>refund policy</a> and <a href='/pricing/'>pricing terms</a>.",
      },
      {
        question: "When do I need to pay?",
        answer:
          "Payment is required upfront before we assign Local Guides to your business. This ensures our reviewers are compensated and committed. <a href='/get-started/'>Start your order</a> or learn about <a href='/how-it-works/'>how the process works</a>.",
      },
      {
        question: "Can I upgrade my package later?",
        answer:
          "Absolutely. Many businesses start with our Starter Pack and upgrade to Growth or Business as they see results. You only pay the difference. <a href='/pricing/'>View all plans</a> or <a href='/contact/'>contact your account manager</a>.",
      },
      {
        question: "Do you charge monthly fees?",
        answer:
          "Our review packages are one-time purchases. However, ongoing services like <a href='/services/reputation-management/'>Reputation Management</a> (₦35,000/month) and <a href='/services/local-seo/'>Local SEO</a> (₦75,000/month) are monthly subscriptions. See full <a href='/pricing/'>pricing details</a>.",
      },
    ],
  },

  // ── 3. Review Process (7) ──
  {
    slug: "review-process",
    name: "Review Process",
    questions: [
      {
        question: "How does the review collection process work?",
        answer:
          "After you order, we match your business with certified Local Guides in your area. They visit your business (or engage with your service online), then write personalized reviews spread over several weeks for natural-looking growth. See the full <a href='/how-it-works/'>step-by-step process</a> and our <a href='/services/google-review-collection/'>Google Review Collection</a> service details.",
      },
      {
        question: "How long does it take to get reviews?",
        answer:
          "Reviews are delivered gradually over 2-12 weeks depending on your package: Starter (2 weeks), Growth (4-6 weeks), Business (8-12 weeks). This natural pacing protects your profile from algorithmic flags. Learn more about <a href='/how-it-works/'>our process</a> or <a href='/get-started/'>place your order</a>.",
      },
      {
        question: "Can I choose what the reviews say?",
        answer:
          "You can provide guidelines about which products, services, or aspects of your business to highlight. Our Local Guides then write authentic reviews in their own words based on real experiences. See our <a href='/services/google-review-collection/'>review collection process</a> and <a href='/why-choose-us/'>quality standards</a>.",
      },
      {
        question: "Will the reviews look natural?",
        answer:
          "Yes. Our reviews come from real Google accounts with established history, varied writing styles, and natural timing. Each review is unique and personalized. This is why we use certified <a href='/about/'>Local Guides</a> rather than automated services. See <a href='/why-choose-us/'>why businesses trust us</a>.",
      },
      {
        question: "Can I get 5-star reviews only?",
        answer:
          "While most of our reviews are 4-5 stars, we recommend a natural rating distribution (some 4-star reviews mixed in) as this appears more authentic to both Google's algorithm and potential customers. Learn about our <a href='/services/reputation-management/'>reputation management</a> approach and <a href='/how-it-works/'>our process</a>.",
      },
      {
        question: "What if a review gets removed by Google?",
        answer:
          "Our 30-day retention guarantee means we replace any review removed within 30 days at no cost. Our high retention rate (95%+) comes from using authentic reviews from certified Local Guides. Read our <a href='/refund-policy/'>refund policy</a> and see <a href='/why-choose-us/'>our guarantees</a>.",
      },
      {
        question: "Do the reviewers actually visit my business?",
        answer:
          "Yes. For brick-and-mortar businesses, our Local Guides physically visit your location. For service-based businesses, they engage with your service online or by phone. This genuine interaction ensures authentic, detailed reviews. Learn about our <a href='/about/'>Local Guide network</a> and <a href='/how-it-works/'>review process</a>.",
      },
    ],
  },

  // ── 4. Google & Platform Specific (6) ──
  {
    slug: "google-platform",
    name: "Google & Platform Specific",
    questions: [
      {
        question: "What is a Google Local Guide?",
        answer:
          "Google Local Guides are members of Google's community program who contribute reviews, photos, and information to Google Maps. Our network consists of Level 4+ Local Guides with established accounts and review histories. Their reviews carry more weight with Google's algorithm. Learn about our <a href='/platforms/google-reviews/'>Google Reviews platform</a> and <a href='/services/google-review-collection/'>collection service</a>.",
      },
      {
        question: "Do you also offer Trustpilot reviews?",
        answer:
          "Yes, we offer <a href='/services/trustpilot-review-collection/'>Trustpilot Review Collection</a> at ₦7,000 per review. Trustpilot reviews are especially valuable for e-commerce, B2B, and tech businesses. Learn more on our <a href='/platforms/trustpilot/'>Trustpilot platform page</a>.",
      },
      {
        question: "Can you help optimize my Google My Business profile?",
        answer:
          "Absolutely. Our <a href='/services/gmb-optimization/'>GMB Optimization</a> service covers profile setup, photos, posts, Q&A management, categories, and more. We also offer <a href='/services/gmb-optimization/gmb-profile-creation/'>GMB Profile Creation</a> from scratch and <a href='/services/gmb-optimization/gmb-ownership-recovery/'>ownership recovery</a> if you have lost access. See <a href='/pricing/'>pricing</a>.",
      },
      {
        question: "How do Google reviews affect my local search ranking?",
        answer:
          "Google reviews directly influence your Local Pack ranking (the 3 businesses shown on Google Maps). Higher review counts, better ratings, and recent reviews all boost your visibility. Our <a href='/services/local-seo/'>Local SEO</a> service complements reviews for maximum ranking impact. Learn more about <a href='/platforms/google-reviews/'>how Google Reviews work</a>.",
      },
      {
        question: "Can you remove negative Google reviews?",
        answer:
          "We can help flag and remove reviews that violate Google's policies (fake, spam, or inappropriate reviews) through legitimate channels. We never use hacking or bribery. See our <a href='/services/negative-review-removal/'>Negative Review Removal</a> service and the <a href='/services/negative-review-removal/review-dispute-process/'>dispute process</a>.",
      },
      {
        question: "Do you offer TripAdvisor reviews?",
        answer:
          "TripAdvisor review services are coming soon. Currently, we focus on <a href='/platforms/google-reviews/'>Google Reviews</a> and <a href='/platforms/trustpilot/'>Trustpilot</a> as these have the highest impact for Nigerian businesses. Check our <a href='/platforms/tripadvisor/'>TripAdvisor platform page</a> for updates.",
      },
    ],
  },

  // ── 5. Trust & Safety (6) ──
  {
    slug: "trust-safety",
    name: "Trust & Safety",
    questions: [
      {
        question: "Are the reviews authentic and genuine?",
        answer:
          "Yes. Every review is written by a real person (certified Google Local Guide) based on an actual interaction with your business. We never use bots, fake accounts, or automated review generation. See <a href='/why-choose-us/'>why we're different</a> and read about our <a href='/about/'>Local Guide network</a>.",
      },
      {
        question: "Will my Google account get suspended?",
        answer:
          "No. Our methods are designed to be compliant with Google's guidelines. Reviews come from legitimate accounts with established histories and are posted gradually over weeks. This natural approach keeps your business safe. Learn about <a href='/how-it-works/'>our process</a> and our <a href='/services/gmb-optimization/gmb-unlock-suspended-profile/'>profile recovery service</a> if needed.",
      },
      {
        question: "How do you protect my business information?",
        answer:
          "We take data privacy seriously. Your business details are shared only with assigned Local Guides on a need-to-know basis. We never sell your data or use it for purposes beyond fulfilling your order. Read our <a href='/privacy-policy/'>Privacy Policy</a> and <a href='/terms-of-service/'>Terms of Service</a>.",
      },
      {
        question: "What happens if Google flags reviews?",
        answer:
          "While rare (less than 5% of our reviews), if Google flags a review, our 30-day retention guarantee covers it. We'll replace the review at no cost. Our experience with Google's algorithm helps us minimize flagging. See our <a href='/refund-policy/'>refund policy</a> and <a href='/services/reputation-management/'>reputation management</a> service.",
      },
      {
        question: "Can competitors use this against me?",
        answer:
          "Our reviews are indistinguishable from organic reviews because they are written by real people with genuine accounts. There is no way for competitors to identify or report our reviews as illegitimate. Learn about <a href='/why-choose-us/'>our approach</a> and our <a href='/services/negative-review-removal/'>protection services</a>.",
      },
      {
        question: "Do you have a retention guarantee?",
        answer:
          "Yes. We offer a 30-day retention guarantee on all review packages. If a review is removed within 30 days of posting, we replace it free of charge. Our retention rate exceeds 95%. Read the full <a href='/refund-policy/'>refund policy</a> and <a href='/pricing/'>plan details</a>.",
      },
    ],
  },

  // ── 6. Industry-Specific (6) ──
  {
    slug: "industry-specific",
    name: "Industry-Specific Questions",
    questions: [
      {
        question: "How do reviews help restaurants in Nigeria?",
        answer:
          "For <a href='/industries/restaurants/'>restaurants</a>, Google reviews directly impact foot traffic and delivery orders. A restaurant with 50+ positive reviews can see up to 30% more customers. Our Local Guides dine at your restaurant and share detailed, authentic experiences. See <a href='/industries/restaurants/'>restaurant reviews</a> and <a href='/pricing/'>pricing</a>.",
      },
      {
        question: "Do you offer review services for hospitals and clinics?",
        answer:
          "Yes. <a href='/industries/hospitals-clinics/'>Hospitals and clinics</a> are one of our top industries. Patient reviews build trust and credibility for healthcare providers. Our Local Guides share genuine patient experiences while respecting privacy. See industry-specific <a href='/industries/hospitals-clinics/'>details</a> and <a href='/services/google-review-collection/'>our process</a>.",
      },
      {
        question: "Can lawyers benefit from Google reviews?",
        answer:
          "Absolutely. <a href='/industries/lawyers/'>Lawyers and law firms</a> in Nigeria increasingly depend on Google reviews for client acquisition. Potential clients trust peer reviews when choosing legal representation. Our reviews highlight professionalism, expertise, and client satisfaction. See <a href='/industries/lawyers/'>lawyer reviews</a> and <a href='/pricing/'>plans</a>.",
      },
      {
        question: "How do reviews work for e-commerce businesses?",
        answer:
          "For online businesses, <a href='/platforms/trustpilot/'>Trustpilot reviews</a> and <a href='/platforms/google-reviews/'>Google Reviews</a> build trust with potential customers who cannot physically verify your business. Reviews reduce purchase hesitation and increase conversion rates. See our <a href='/services/trustpilot-review-collection/'>Trustpilot service</a> for e-commerce.",
      },
      {
        question: "Do you help car dealerships and auto shops?",
        answer:
          "Yes. <a href='/industries/car-dealerships/'>Car dealerships</a> and <a href='/industries/auto-mechanics/'>auto mechanics</a> are among our most active industries. Vehicle purchases are high-trust decisions where reviews heavily influence buyer choices. We help dealerships build the social proof needed to close more sales. Check <a href='/pricing/'>pricing plans</a>.",
      },
      {
        question: "Can real estate agents use your services?",
        answer:
          "Definitely. <a href='/industries/real-estate-agents/'>Real estate agents</a> in Nigerian cities like <a href='/locations/lagos/'>Lagos</a> and <a href='/locations/abuja/'>Abuja</a> compete fiercely for clients. Strong Google reviews differentiate top agents and attract more listings and buyers. See our <a href='/industries/real-estate-agents/'>real estate review program</a>.",
      },
    ],
  },

  // ── 7. Location-Specific (5) ──
  {
    slug: "location-specific",
    name: "Location-Specific Questions",
    questions: [
      {
        question: "How many Local Guides do you have in Lagos?",
        answer:
          "We have 180+ certified Local Guides across <a href='/locations/lagos/'>Lagos</a>, covering neighborhoods from <a href='/locations/lagos/victoria-island/'>Victoria Island</a> and <a href='/locations/lagos/lekki/'>Lekki</a> to <a href='/locations/lagos/ikeja/'>Ikeja</a> and beyond. Lagos is our largest service area with the fastest turnaround times.",
      },
      {
        question: "Do you cover Abuja and the FCT?",
        answer:
          "Yes. <a href='/locations/abuja/'>Abuja</a> is our second-largest market with 120+ Local Guides covering <a href='/locations/abuja/wuse/'>Wuse</a>, <a href='/locations/abuja/maitama/'>Maitama</a>, <a href='/locations/abuja/garki/'>Garki</a>, and all major districts. Many government-adjacent businesses and embassies use our services.",
      },
      {
        question: "Are your services available in Port Harcourt?",
        answer:
          "Yes. We have 65+ Local Guides in <a href='/locations/port-harcourt/'>Port Harcourt</a> serving the oil-and-gas hub's diverse business community. Coverage includes GRA, Trans-Amadi, and other key commercial areas. See all <a href='/locations/'>service locations</a>.",
      },
      {
        question: "Can you provide reviews for businesses in smaller cities?",
        answer:
          "We serve 15 cities including smaller markets like <a href='/locations/calabar/'>Calabar</a>, <a href='/locations/uyo/'>Uyo</a>, <a href='/locations/jos/'>Jos</a>, and <a href='/locations/ilorin/'>Ilorin</a>. While turnaround may take slightly longer in smaller cities, our review quality remains consistent. View all <a href='/locations/'>locations</a>.",
      },
      {
        question: "Do Local Guides in my city actually visit businesses?",
        answer:
          "Yes. All our Local Guides are based in the cities they cover. A Lagos-based Local Guide reviews Lagos businesses, an Abuja Guide reviews Abuja businesses. This geographic authenticity is a core part of our service. See <a href='/how-it-works/'>how it works</a> and browse <a href='/locations/'>locations</a>.",
      },
    ],
  },

  // ── 8. Additional Services (5) ──
  {
    slug: "additional-services",
    name: "Additional Services",
    questions: [
      {
        question: "What is GMB Optimization and do I need it?",
        answer:
          "Our <a href='/services/gmb-optimization/'>GMB Optimization</a> service ensures your Google Business Profile is fully optimized with the right categories, attributes, photos, posts, and Q&A. Need a new profile? See <a href='/services/gmb-optimization/gmb-profile-creation/'>GMB Profile Creation</a>. Lost access? Try our <a href='/services/gmb-optimization/gmb-ownership-recovery/'>GMB Ownership Recovery</a>. Want to remove a duplicate? See <a href='/services/gmb-optimization/gmb-profile-deletion/'>GMB Profile Deletion</a>.",
      },
      {
        question: "What does your reputation management service include?",
        answer:
          "Our <a href='/services/reputation-management/'>Reputation Management</a> service includes review monitoring, response drafting, rating improvement strategy, customer feedback systems, and review generation campaigns. It's a comprehensive monthly service at ₦35,000/month. See <a href='/pricing/'>pricing details</a>.",
      },
      {
        question: "Can you help with Local SEO beyond reviews?",
        answer:
          "Yes. Our <a href='/services/local-seo/'>Local SEO</a> service includes citation building, local backlinks, keyword optimization, Google Maps ranking, NAP consistency, and local SEO audits. Reviews are just one pillar of local search success. See the <a href='/services/local-seo/citation-building/'>citation building</a> sub-service.",
      },
      {
        question: "How do you handle negative review removal?",
        answer:
          "We use only legitimate channels to flag and remove policy-violating reviews (fake, spam, competitor sabotage). We never hack, bribe, or use unauthorized methods. Our <a href='/services/negative-review-removal/'>Negative Review Removal</a> service details the <a href='/services/negative-review-removal/review-dispute-process/'>dispute process</a> and success rates.",
      },
      {
        question: "Do you offer any free resources or tools?",
        answer:
          "Yes. Our <a href='/blog/'>blog</a> features free guides on review management, local SEO, and digital marketing for Nigerian businesses. We also offer free GMB profile quick audits with our Growth Pack and above. <a href='/get-started/'>Get started</a> or browse our <a href='/blog/'>knowledge base</a>.",
      },
    ],
  },
];

// ── Helper Functions ──

/** Get all FAQ items as a flat list */
export function getAllFaqItems(): FaqItem[] {
  return faqCategories.flatMap((cat) => cat.questions);
}

/** Get FAQ items by category slug */
export function getFaqByCategory(slug: string): FaqItem[] {
  return faqCategories.find((cat) => cat.slug === slug)?.questions ?? [];
}

/** Get a subset of FAQ items for a specific page (e.g., homepage shows 15) */
export function getHomepageFaq(): FaqItem[] {
  return [
    faqCategories[0]!.questions[0]!, // What is BuyReviewsInNigeria?
    faqCategories[0]!.questions[1]!, // Is buying Google reviews legal?
    faqCategories[0]!.questions[2]!, // How is it different from fake reviews?
    faqCategories[0]!.questions[3]!, // What cities do you cover?
    faqCategories[1]!.questions[0]!, // How much do reviews cost?
    faqCategories[2]!.questions[0]!, // How does the process work?
    faqCategories[2]!.questions[1]!, // How long does it take?
    faqCategories[2]!.questions[3]!, // Will the reviews look natural?
    faqCategories[2]!.questions[6]!, // Do the reviewers actually visit?
    faqCategories[3]!.questions[0]!, // What is a Local Guide?
    faqCategories[3]!.questions[3]!, // How do reviews affect local ranking?
    faqCategories[4]!.questions[0]!, // Are reviews authentic?
    faqCategories[4]!.questions[1]!, // Will my account get suspended?
    faqCategories[4]!.questions[5]!, // Do you have a retention guarantee?
    faqCategories[5]!.questions[0]!, // How do reviews help restaurants?
  ];
}

/** Get FAQ category by slug */
export function getFaqCategoryBySlug(slug: string): FaqCategory | undefined {
  return faqCategories.find((cat) => cat.slug === slug);
}

/** Total FAQ count */
export const TOTAL_FAQ_COUNT = faqCategories.reduce(
  (sum, cat) => sum + cat.questions.length,
  0,
);
