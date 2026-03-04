// ── Icon Component Type ──
export type IconName =
  | "Star"
  | "StarHalf"
  | "StarOutline"
  | "GoogleLogo"
  | "TrustpilotLogo"
  | "Shield"
  | "CheckCircle"
  | "Users"
  | "TrendingUp"
  | "MapPin"
  | "Building"
  | "Search"
  | "BarChart"
  | "MessageSquare"
  | "ThumbsUp"
  | "ThumbsDown"
  | "Clock"
  | "Zap"
  | "Target"
  | "Award"
  | "Globe"
  | "Phone"
  | "Mail"
  | "ChevronRight"
  | "ChevronDown"
  | "ArrowRight"
  | "ExternalLink"
  | "Menu"
  | "X"
  | "Camera"
  | "FileText"
  | "Settings"
  | "AlertTriangle"
  | "Link"
  | "DollarSign"
  | "Briefcase"
  | "Heart"
  | "Home"
  | "Car"
  | "Wrench"
  | "Key"
  | "Scale"
  | "Smile"
  | "Pill"
  | "GraduationCap"
  | "CreditCard"
  | "ShoppingCart"
  | "Scissors"
  | "Dumbbell"
  | "Church"
  | "Calendar"
  | "Truck"
  | "Monitor"
  | "Shirt"
  | "HardHat"
  | "Sparkles"
  | "CameraIcon"
  | "Flag"
  | "Quote"
  | "Store"
  | "Utensils"
  | "Hotel"
  | "Hospital"
  | "Tooth"
  | "Bank"
  | "PartyPopper"
  | "Laptop"
  | "Lock"
  | "InfoCircle"
  | "XCircle"
  | "ArrowLeft"
  | "ChevronLeft"
  | "Play"
  | "Download"
  | "Upload"
  | "Filter"
  | "Sort";

// ── FAQ Item ──
export interface FaqItem {
  question: string;
  answer: string;
}

// ── Benefit ──
export interface Benefit {
  icon: IconName;
  title: string;
  description: string;
}

// ── Process Step ──
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

// ── Service Types ──
export interface ServiceSubPage {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  shortDescription: string;
  longDescription: string;
  keywords: string[];
  faq: FaqItem[];
}

export interface Service {
  slug: string;
  name: string;
  icon: IconName;
  shortDescription: string;
  longDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  benefits: Benefit[];
  process: ProcessStep[];
  relatedServices: string[];
  relatedIndustries: string[];
  relatedCities: string[];
  pricingLink: string;
  faq: FaqItem[];
  subPages: ServiceSubPage[];
}

// ── Industry Types ──
export interface Industry {
  slug: string;
  name: string;
  icon: IconName;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  whyReviewsMatter: string;
  commonChallenges: string[];
  ourApproach: string;
  exampleReview: string;
  relatedServices: string[];
  relatedIndustries: string[];
  topCities: string[];
  averageRating: number;
  faq: FaqItem[];
}

// ── Location Types ──
export interface City {
  slug: string;
  name: string;
  state: string;
  population: number;
  isStateCapital: boolean;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  businessLandscape: string;
  neighborhoods: string[];
  relatedCities: string[];
  localGuidesCount: number;
  topIndustries: string[];
}

export interface Neighborhood {
  slug: string;
  name: string;
  citySlug: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  businessTypes: string;
  relatedNeighborhoods: string[];
  isBusinessDistrict: boolean;
  isResidential: boolean;
  isUpscale: boolean;
}

// ── Platform Type ──
export interface Platform {
  slug: string;
  name: string;
  icon: IconName;
  metaTitle: string;
  metaDescription: string;
  description: string;
}

// ── Blog Types ──
export interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  category: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  relatedServices: string[];
  relatedIndustries: string[];
  relatedCities: string[];
}

// ── Internal Link Types ──
export interface InternalLink {
  href: string;
  label: string;
  description?: string;
}

export interface InternalLinkGroup {
  title: string;
  links: InternalLink[];
}

// ── Pricing Types ──
export interface PricingPlan {
  name: string;
  slug: string;
  price: string;
  currency: string;
  unit: string;
  description: string;
  features: string[];
  isPopular: boolean;
  ctaText: string;
  ctaLink: string;
}
