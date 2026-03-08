import type { IconName } from "@/types";

// ══════════════════════════════════════════════
// NAVIGATION DATA
// Mega-menus + Footer (70+ links)
// ══════════════════════════════════════════════

// ── Types ──

export interface NavLink {
  label: string;
  href: string;
  description?: string;
  icon?: IconName;
}

export interface MegaMenuColumn {
  title: string;
  links: NavLink[];
}

export interface NavItem {
  label: string;
  href: string;
  megaMenu?: MegaMenuColumn[];
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
}

// ══════════════════════════════════════════════
// MAIN NAVIGATION (with mega-menus)
// ══════════════════════════════════════════════

export const mainNavigation: NavItem[] = [
  {
    label: "Services",
    href: "/services/",
    megaMenu: [
      {
        title: "Review Services",
        links: [
          {
            label: "Google Review Collection",
            href: "/services/google-review-collection/",
            description: "Authentic reviews from certified Local Guides",
            icon: "Star",
          },
          {
            label: "Trustpilot Reviews",
            href: "/services/trustpilot-review-collection/",
            description: "Genuine Trustpilot reviews for your business",
            icon: "TrustpilotLogo",
          },
          {
            label: "Negative Review Removal",
            href: "/services/negative-review-removal/",
            description: "Remove fake and policy-violating reviews",
            icon: "Shield",
          },
        ],
      },
      {
        title: "Business Growth",
        links: [
          {
            label: "GMB Optimization",
            href: "/services/gmb-optimization/",
            description: "Optimize your Google Business Profile",
            icon: "GoogleLogo",
          },
          {
            label: "GMB Profile Creation",
            href: "/services/gmb-optimization/gmb-profile-creation/",
            description: "Create your Google Business Profile",
            icon: "Globe",
          },
          {
            label: "GMB Ownership Recovery",
            href: "/services/gmb-optimization/gmb-ownership-recovery/",
            description: "Recover lost GMB profile access",
            icon: "Key",
          },
          {
            label: "Reputation Management",
            href: "/services/reputation-management/",
            description: "Monitor and manage your online reputation",
            icon: "BarChart",
          },
          {
            label: "Local SEO",
            href: "/services/local-seo/",
            description: "Rank higher in local search results",
            icon: "TrendingUp",
          },
        ],
      },
      {
        title: "Quick Links",
        links: [
          {
            label: "View All Services",
            href: "/services/",
            icon: "ArrowRight",
          },
          {
            label: "Pricing",
            href: "/pricing/",
            icon: "DollarSign",
          },
          {
            label: "How It Works",
            href: "/how-it-works/",
            icon: "Zap",
          },
          {
            label: "Get Started",
            href: "/get-started/",
            icon: "CheckCircle",
          },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries/",
    megaMenu: [
      {
        title: "Popular Industries",
        links: [
          { label: "Restaurants", href: "/industries/restaurants/", icon: "ShoppingCart" },
          { label: "Hotels", href: "/industries/hotels/", icon: "Building" },
          { label: "Hospitals & Clinics", href: "/industries/hospitals-clinics/", icon: "Heart" },
          { label: "Car Dealerships", href: "/industries/car-dealerships/", icon: "Car" },
          { label: "Lawyers", href: "/industries/lawyers/", icon: "Scale" },
        ],
      },
      {
        title: "Professional Services",
        links: [
          { label: "Real Estate Agents", href: "/industries/real-estate-agents/", icon: "Key" },
          { label: "Dentists", href: "/industries/dentists/", icon: "Smile" },
          { label: "Plumbers", href: "/industries/plumbers/", icon: "Wrench" },
          { label: "Electricians", href: "/industries/electricians/", icon: "Zap" },
          { label: "Tech Companies", href: "/industries/tech-companies/", icon: "Monitor" },
        ],
      },
      {
        title: "More Industries",
        links: [
          { label: "Salons & Barbershops", href: "/industries/salons-barbershops/", icon: "Scissors" },
          { label: "Gyms & Fitness", href: "/industries/gyms-fitness/", icon: "Dumbbell" },
          { label: "Schools & Universities", href: "/industries/schools-universities/", icon: "GraduationCap" },
          { label: "View All 25 Industries", href: "/industries/", icon: "ArrowRight" },
        ],
      },
    ],
  },
  {
    label: "Locations",
    href: "/locations/",
    megaMenu: [
      {
        title: "Major Cities",
        links: [
          { label: "Lagos", href: "/locations/lagos/", icon: "MapPin" },
          { label: "Abuja", href: "/locations/abuja/", icon: "MapPin" },
          { label: "Port Harcourt", href: "/locations/port-harcourt/", icon: "MapPin" },
          { label: "Ibadan", href: "/locations/ibadan/", icon: "MapPin" },
          { label: "Kano", href: "/locations/kano/", icon: "MapPin" },
        ],
      },
      {
        title: "More Cities",
        links: [
          { label: "Kaduna", href: "/locations/kaduna/", icon: "MapPin" },
          { label: "Benin City", href: "/locations/benin-city/", icon: "MapPin" },
          { label: "Enugu", href: "/locations/enugu/", icon: "MapPin" },
          { label: "Warri", href: "/locations/warri/", icon: "MapPin" },
          { label: "Calabar", href: "/locations/calabar/", icon: "MapPin" },
        ],
      },
      {
        title: "Other Cities",
        links: [
          { label: "Owerri", href: "/locations/owerri/", icon: "MapPin" },
          { label: "Uyo", href: "/locations/uyo/", icon: "MapPin" },
          { label: "Abeokuta", href: "/locations/abeokuta/", icon: "MapPin" },
          { label: "Jos", href: "/locations/jos/", icon: "MapPin" },
          { label: "Ilorin", href: "/locations/ilorin/", icon: "MapPin" },
        ],
      },
    ],
  },
  {
    label: "Pricing",
    href: "/pricing/",
  },
  {
    label: "Blog",
    href: "/blog/",
  },
  {
    label: "About",
    href: "/about/",
    megaMenu: [
      {
        title: "Company",
        links: [
          {
            label: "About Us",
            href: "/about/",
            description: "Our story and mission",
            icon: "Users",
          },
          {
            label: "How It Works",
            href: "/how-it-works/",
            description: "Our review collection process",
            icon: "Zap",
          },
          {
            label: "Why Choose Us",
            href: "/why-choose-us/",
            description: "8 reasons businesses trust us",
            icon: "Award",
          },
        ],
      },
      {
        title: "Support",
        links: [
          {
            label: "FAQ",
            href: "/faq/",
            description: "Answers to common questions",
            icon: "MessageSquare",
          },
          {
            label: "Contact Us",
            href: "/contact/",
            description: "Get in touch with our team",
            icon: "Phone",
          },
          {
            label: "Get Started",
            href: "/get-started/",
            description: "Begin your review journey",
            icon: "ArrowRight",
          },
        ],
      },
      {
        title: "Platforms",
        links: [
          { label: "Google Reviews", href: "/platforms/google-reviews/", icon: "GoogleLogo" },
          { label: "Trustpilot", href: "/platforms/trustpilot/", icon: "TrustpilotLogo" },
          { label: "Google My Business", href: "/platforms/google-my-business/", icon: "Globe" },
          { label: "TripAdvisor", href: "/platforms/tripadvisor/", icon: "ExternalLink" },
        ],
      },
    ],
  },
];

// ── Mobile navigation (flat list) ──
export const mobileNavigation: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Locations", href: "/locations/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Blog", href: "/blog/" },
  { label: "About Us", href: "/about/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "Why Choose Us", href: "/why-choose-us/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact", href: "/contact/" },
  { label: "Get Started", href: "/get-started/" },
];

// ══════════════════════════════════════════════
// FOOTER (5 columns, 70+ links)
// ══════════════════════════════════════════════

export const footerColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Google Review Collection", href: "/services/google-review-collection/" },
      { label: "Trustpilot Review Collection", href: "/services/trustpilot-review-collection/" },
      { label: "GMB Optimization", href: "/services/gmb-optimization/" },
      { label: "Reputation Management", href: "/services/reputation-management/" },
      { label: "Negative Review Removal", href: "/services/negative-review-removal/" },
      { label: "Local SEO", href: "/services/local-seo/" },
      { label: "GMB Profile Creation", href: "/services/gmb-optimization/gmb-profile-creation/" },
      { label: "GMB Profile Deletion", href: "/services/gmb-optimization/gmb-profile-deletion/" },
      { label: "GMB Ownership Recovery", href: "/services/gmb-optimization/gmb-ownership-recovery/" },
      { label: "GMB Profile Setup", href: "/services/gmb-optimization/gmb-profile-setup/" },
      { label: "GMB Photos Optimization", href: "/services/gmb-optimization/gmb-photos-optimization/" },
      { label: "Review Monitoring", href: "/services/reputation-management/review-monitoring/" },
      { label: "Citation Building", href: "/services/local-seo/citation-building/" },
      { label: "Google Maps Ranking", href: "/services/local-seo/google-maps-ranking/" },
      { label: "Review Response Service", href: "/services/reputation-management/review-response-service/" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Restaurants", href: "/industries/restaurants/" },
      { label: "Hotels", href: "/industries/hotels/" },
      { label: "Hospitals & Clinics", href: "/industries/hospitals-clinics/" },
      { label: "Car Dealerships", href: "/industries/car-dealerships/" },
      { label: "Auto Mechanics", href: "/industries/auto-mechanics/" },
      { label: "Lawyers", href: "/industries/lawyers/" },
      { label: "Real Estate Agents", href: "/industries/real-estate-agents/" },
      { label: "Dentists", href: "/industries/dentists/" },
      { label: "Plumbers", href: "/industries/plumbers/" },
      { label: "Electricians", href: "/industries/electricians/" },
      { label: "Tech Companies", href: "/industries/tech-companies/" },
      { label: "Salons & Barbershops", href: "/industries/salons-barbershops/" },
      { label: "Gyms & Fitness", href: "/industries/gyms-fitness/" },
      { label: "Construction", href: "/industries/construction/" },
      { label: "All Industries", href: "/industries/" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Lagos", href: "/locations/lagos/" },
      { label: "Abuja", href: "/locations/abuja/" },
      { label: "Port Harcourt", href: "/locations/port-harcourt/" },
      { label: "Ibadan", href: "/locations/ibadan/" },
      { label: "Kano", href: "/locations/kano/" },
      { label: "Kaduna", href: "/locations/kaduna/" },
      { label: "Benin City", href: "/locations/benin-city/" },
      { label: "Enugu", href: "/locations/enugu/" },
      { label: "Warri", href: "/locations/warri/" },
      { label: "Calabar", href: "/locations/calabar/" },
      { label: "Owerri", href: "/locations/owerri/" },
      { label: "Uyo", href: "/locations/uyo/" },
      { label: "Abeokuta", href: "/locations/abeokuta/" },
      { label: "Jos", href: "/locations/jos/" },
      { label: "Ilorin", href: "/locations/ilorin/" },
      { label: "Victoria Island, Lagos", href: "/locations/lagos/victoria-island/" },
      { label: "Lekki, Lagos", href: "/locations/lagos/lekki/" },
      { label: "Ikeja, Lagos", href: "/locations/lagos/ikeja/" },
      { label: "Wuse, Abuja", href: "/locations/abuja/wuse/" },
      { label: "Maitama, Abuja", href: "/locations/abuja/maitama/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about/" },
      { label: "How It Works", href: "/how-it-works/" },
      { label: "Why Choose Us", href: "/why-choose-us/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "Blog", href: "/blog/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Contact", href: "/contact/" },
      { label: "Get Started", href: "/get-started/" },
      { label: "Google Reviews", href: "/platforms/google-reviews/" },
      { label: "Trustpilot", href: "/platforms/trustpilot/" },
      { label: "Google My Business", href: "/platforms/google-my-business/" },
      { label: "TripAdvisor", href: "/platforms/tripadvisor/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy/" },
      { label: "Terms of Service", href: "/terms-of-service/" },
      { label: "Refund Policy", href: "/refund-policy/" },
    ],
  },
];

// ── Bottom bar links ──
export const footerBottomLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Service", href: "/terms-of-service/" },
  { label: "Refund Policy", href: "/refund-policy/" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

// ── Social / contact info for footer ──
export const contactInfo = {
  phone: "+2347085888855",
  email: "contact@buyreviews.africa",
  whatsapp: "https://wa.me/2347085888855",
  address: "Lagos, Nigeria",
  company: "LANNKIN S.A.",
  neq: "1179695284",
  companyAddress: "306-1555 boul. de l'Avenir, Laval (Québec) H7S2N5, Canada",
  website: "https://lannkin.ca",
} as const;

// ── Helper Functions ──

/** Count total footer links */
export function countFooterLinks(): number {
  return footerColumns.reduce((sum, col) => sum + col.links.length, 0);
}

/** Get nav item by label */
export function getNavItemByLabel(label: string): NavItem | undefined {
  return mainNavigation.find((item) => item.label === label);
}

/** Get all unique footer hrefs */
export function getAllFooterHrefs(): string[] {
  return footerColumns.flatMap((col) => col.links.map((link) => link.href));
}
