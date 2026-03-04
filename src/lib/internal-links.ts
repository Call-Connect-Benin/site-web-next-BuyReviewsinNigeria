import type { InternalLink, InternalLinkGroup } from "@/types";

// ── All service slugs and names ──
const SERVICE_LINKS: InternalLink[] = [
  { href: "/services/google-review-collection/", label: "Google Review Collection", description: "Authentic reviews from certified Local Guides" },
  { href: "/services/trustpilot-review-collection/", label: "Trustpilot Review Collection", description: "Genuine Trustpilot reviews from verified customers" },
  { href: "/services/gmb-optimization/", label: "GMB Optimization", description: "Optimize your Google Business Profile" },
  { href: "/services/reputation-management/", label: "Reputation Management", description: "Monitor and manage your online reputation" },
  { href: "/services/negative-review-removal/", label: "Negative Review Removal", description: "Remove fake and policy-violating reviews" },
  { href: "/services/local-seo/", label: "Local SEO", description: "Rank higher in local search results" },
];

// ── Top cities ──
export const TOP_CITY_LINKS: InternalLink[] = [
  { href: "/locations/lagos/", label: "Lagos" },
  { href: "/locations/abuja/", label: "Abuja" },
  { href: "/locations/port-harcourt/", label: "Port Harcourt" },
  { href: "/locations/ibadan/", label: "Ibadan" },
  { href: "/locations/kano/", label: "Kano" },
];

// ── CTA links ──
const CTA_LINKS: InternalLink[] = [
  { href: "/pricing/", label: "View Pricing" },
  { href: "/how-it-works/", label: "How It Works" },
  { href: "/get-started/", label: "Get Started" },
];

// ── Industry link builder ──
function industryLink(slug: string, name: string): InternalLink {
  return { href: `/industries/${slug}/`, label: name };
}

// ── City link builder ──
function cityLink(slug: string, name: string): InternalLink {
  return { href: `/locations/${slug}/`, label: name };
}

// ── Neighborhood link builder ──
function neighborhoodLink(citySlug: string, slug: string, name: string, cityName: string): InternalLink {
  return { href: `/locations/${citySlug}/${slug}/`, label: `${name}, ${cityName}` };
}

// ── Service page link builder ──
function serviceLink(slug: string, name: string): InternalLink {
  return { href: `/services/${slug}/`, label: name };
}

// ══════════════════════════════════════════════
// LINK GENERATORS BY PAGE TYPE
// ══════════════════════════════════════════════

/** Links for a service page */
export function getServicePageLinks(
  currentSlug: string,
  relatedIndustries: Array<{ slug: string; name: string }>,
  relatedCities: Array<{ slug: string; name: string }>,
): InternalLinkGroup[] {
  const otherServices = SERVICE_LINKS.filter(
    (s) => !s.href.includes(currentSlug),
  );

  return [
    { title: "Our Other Services", links: otherServices },
    {
      title: "Industries We Serve",
      links: relatedIndustries.slice(0, 6).map((i) => industryLink(i.slug, i.name)),
    },
    {
      title: "Available In",
      links: relatedCities.slice(0, 5).map((c) => cityLink(c.slug, c.name)),
    },
    { title: "Get Started", links: CTA_LINKS },
  ];
}

/** Links for an industry page */
export function getIndustryPageLinks(
  currentSlug: string,
  relatedIndustries: Array<{ slug: string; name: string }>,
  topCities: Array<{ slug: string; name: string }>,
  crossRefCities: Array<{ slug: string; name: string }>,
): InternalLinkGroup[] {
  return [
    { title: "Our Services", links: SERVICE_LINKS },
    {
      title: "Related Industries",
      links: relatedIndustries
        .filter((i) => i.slug !== currentSlug)
        .slice(0, 5)
        .map((i) => industryLink(i.slug, i.name)),
    },
    {
      title: "Top Cities",
      links: topCities.slice(0, 5).map((c) => cityLink(c.slug, c.name)),
    },
    {
      title: `Reviews by City`,
      links: crossRefCities.map((c) => ({
        href: `/industries/${currentSlug}/${c.slug}/`,
        label: `${currentSlug.replace(/-/g, " ")} in ${c.name}`.replace(/\b\w/g, (ch) => ch.toUpperCase()),
      })),
    },
    { title: "Get Started", links: CTA_LINKS },
  ];
}

/** Links for a city page */
export function getCityPageLinks(
  currentSlug: string,
  neighborhoods: Array<{ slug: string; name: string }>,
  relatedCities: Array<{ slug: string; name: string }>,
  topIndustries: Array<{ slug: string; name: string }>,
  cityName: string,
): InternalLinkGroup[] {
  return [
    {
      title: `Neighborhoods in ${cityName}`,
      links: neighborhoods.map((n) => neighborhoodLink(currentSlug, n.slug, n.name, cityName)),
    },
    { title: "Our Services", links: SERVICE_LINKS },
    {
      title: "Top Industries",
      links: topIndustries.slice(0, 6).map((i) => industryLink(i.slug, i.name)),
    },
    {
      title: "Nearby Cities",
      links: relatedCities
        .filter((c) => c.slug !== currentSlug)
        .slice(0, 5)
        .map((c) => cityLink(c.slug, c.name)),
    },
    { title: "Get Started", links: CTA_LINKS },
  ];
}

/** Links for a neighborhood page */
export function getNeighborhoodPageLinks(
  citySlug: string,
  cityName: string,
  currentSlug: string,
  siblingNeighborhoods: Array<{ slug: string; name: string }>,
  topIndustries: Array<{ slug: string; name: string }>,
): InternalLinkGroup[] {
  return [
    {
      title: `Back to ${cityName}`,
      links: [cityLink(citySlug, `All of ${cityName}`)],
    },
    {
      title: `Other Areas in ${cityName}`,
      links: siblingNeighborhoods
        .filter((n) => n.slug !== currentSlug)
        .slice(0, 5)
        .map((n) => neighborhoodLink(citySlug, n.slug, n.name, cityName)),
    },
    { title: "Our Services", links: SERVICE_LINKS },
    {
      title: "Popular Industries",
      links: topIndustries.slice(0, 5).map((i) => industryLink(i.slug, i.name)),
    },
    { title: "Get Started", links: CTA_LINKS },
  ];
}

/** Links for a cross-reference page (industry x city) */
export function getCrossReferencePageLinks(
  industrySlug: string,
  industryName: string,
  citySlug: string,
  cityName: string,
  cityNeighborhoods: Array<{ slug: string; name: string }>,
  sameCityIndustries: Array<{ industry: string; industryName: string }>,
  sameIndustryCities: Array<{ city: string; cityName: string }>,
): InternalLinkGroup[] {
  return [
    {
      title: "Parent Pages",
      links: [
        industryLink(industrySlug, industryName),
        cityLink(citySlug, cityName),
      ],
    },
    {
      title: `Neighborhoods in ${cityName}`,
      links: cityNeighborhoods.slice(0, 6).map((n) =>
        neighborhoodLink(citySlug, n.slug, n.name, cityName),
      ),
    },
    { title: "Our Services", links: SERVICE_LINKS },
    {
      title: `Other Industries in ${cityName}`,
      links: sameCityIndustries
        .filter((i) => i.industry !== industrySlug)
        .slice(0, 5)
        .map((i) => ({
          href: `/industries/${i.industry}/${citySlug}/`,
          label: `${i.industryName} in ${cityName}`,
        })),
    },
    {
      title: `${industryName} in Other Cities`,
      links: sameIndustryCities
        .filter((c) => c.city !== citySlug)
        .slice(0, 5)
        .map((c) => ({
          href: `/industries/${industrySlug}/${c.city}/`,
          label: `${industryName} in ${c.cityName}`,
        })),
    },
    { title: "Get Started", links: CTA_LINKS },
  ];
}

/** Links for a blog article */
export function getBlogArticleLinks(
  relatedServices: Array<{ slug: string; name: string }>,
  relatedIndustries: Array<{ slug: string; name: string }>,
  relatedCities: Array<{ slug: string; name: string }>,
): InternalLinkGroup[] {
  return [
    {
      title: "Related Services",
      links: relatedServices.slice(0, 5).map((s) => serviceLink(s.slug, s.name)),
    },
    {
      title: "Related Industries",
      links: relatedIndustries.slice(0, 3).map((i) => industryLink(i.slug, i.name)),
    },
    {
      title: "Locations",
      links: relatedCities.slice(0, 2).map((c) => cityLink(c.slug, c.name)),
    },
    { title: "Get Started", links: [{ href: "/get-started/", label: "Get Started Today" }] },
  ];
}

// ══════════════════════════════════════════════
// FOOTER LINKS (60+ internal links)
// ══════════════════════════════════════════════

export function getFooterLinks(): InternalLinkGroup[] {
  return [
    {
      title: "Services",
      links: SERVICE_LINKS,
    },
    {
      title: "Industries",
      links: [
        industryLink("restaurants", "Restaurants"),
        industryLink("hotels", "Hotels"),
        industryLink("hospitals-clinics", "Hospitals & Clinics"),
        industryLink("car-dealerships", "Car Dealerships"),
        industryLink("lawyers", "Lawyers"),
        industryLink("real-estate-agents", "Real Estate Agents"),
        industryLink("dentists", "Dentists"),
        industryLink("salons-barbershops", "Salons & Barbershops"),
        industryLink("schools-universities", "Schools & Universities"),
        industryLink("tech-companies", "Tech Companies"),
        industryLink("plumbers", "Plumbers"),
        industryLink("electricians", "Electricians"),
        industryLink("gyms-fitness", "Gyms & Fitness"),
        industryLink("event-centers", "Event Centers"),
        industryLink("construction", "Construction"),
      ],
    },
    {
      title: "Cities",
      links: [
        cityLink("lagos", "Lagos"),
        cityLink("abuja", "Abuja"),
        cityLink("port-harcourt", "Port Harcourt"),
        cityLink("ibadan", "Ibadan"),
        cityLink("kano", "Kano"),
        cityLink("kaduna", "Kaduna"),
        cityLink("benin-city", "Benin City"),
        cityLink("enugu", "Enugu"),
        cityLink("warri", "Warri"),
        cityLink("calabar", "Calabar"),
        cityLink("owerri", "Owerri"),
        cityLink("uyo", "Uyo"),
        cityLink("abeokuta", "Abeokuta"),
        cityLink("jos", "Jos"),
        cityLink("ilorin", "Ilorin"),
      ],
    },
    {
      title: "Lagos Neighborhoods",
      links: [
        neighborhoodLink("lagos", "victoria-island", "Victoria Island", "Lagos"),
        neighborhoodLink("lagos", "ikoyi", "Ikoyi", "Lagos"),
        neighborhoodLink("lagos", "lekki", "Lekki", "Lagos"),
        neighborhoodLink("lagos", "ikeja", "Ikeja", "Lagos"),
        neighborhoodLink("lagos", "yaba", "Yaba", "Lagos"),
        neighborhoodLink("lagos", "surulere", "Surulere", "Lagos"),
      ],
    },
    {
      title: "Abuja Neighborhoods",
      links: [
        neighborhoodLink("abuja", "wuse", "Wuse", "Abuja"),
        neighborhoodLink("abuja", "maitama", "Maitama", "Abuja"),
        neighborhoodLink("abuja", "garki", "Garki", "Abuja"),
        neighborhoodLink("abuja", "gwarinpa", "Gwarinpa", "Abuja"),
        neighborhoodLink("abuja", "jabi", "Jabi", "Abuja"),
      ],
    },
    {
      title: "Platforms",
      links: [
        { href: "/platforms/google-reviews/", label: "Google Reviews" },
        { href: "/platforms/trustpilot/", label: "Trustpilot" },
        { href: "/platforms/google-my-business/", label: "Google My Business" },
        { href: "/platforms/tripadvisor/", label: "TripAdvisor" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about/", label: "About Us" },
        { href: "/how-it-works/", label: "How It Works" },
        { href: "/why-choose-us/", label: "Why Choose Us" },
        { href: "/pricing/", label: "Pricing" },
        { href: "/blog/", label: "Blog" },
        { href: "/faq/", label: "FAQ" },
        { href: "/contact/", label: "Contact" },
        { href: "/get-started/", label: "Get Started" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy-policy/", label: "Privacy Policy" },
        { href: "/terms-of-service/", label: "Terms of Service" },
        { href: "/refund-policy/", label: "Refund Policy" },
      ],
    },
  ];
}

// ══════════════════════════════════════════════
// BREADCRUMB HELPERS
// ══════════════════════════════════════════════

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function buildBreadcrumbs(segments: Array<{ label: string; href: string }>): BreadcrumbItem[] {
  return [{ label: "Home", href: "/" }, ...segments];
}

export function serviceBreadcrumbs(serviceName: string, serviceSlug: string, subPageName?: string, subPageSlug?: string): BreadcrumbItem[] {
  const crumbs: Array<{ label: string; href: string }> = [
    { label: "Services", href: "/services/" },
    { label: serviceName, href: `/services/${serviceSlug}/` },
  ];
  if (subPageName && subPageSlug) {
    crumbs.push({ label: subPageName, href: `/services/${serviceSlug}/${subPageSlug}/` });
  }
  return buildBreadcrumbs(crumbs);
}

export function industryBreadcrumbs(industryName: string, industrySlug: string, cityName?: string, citySlug?: string): BreadcrumbItem[] {
  const crumbs: Array<{ label: string; href: string }> = [
    { label: "Industries", href: "/industries/" },
    { label: industryName, href: `/industries/${industrySlug}/` },
  ];
  if (cityName && citySlug) {
    crumbs.push({ label: cityName, href: `/industries/${industrySlug}/${citySlug}/` });
  }
  return buildBreadcrumbs(crumbs);
}

export function locationBreadcrumbs(cityName: string, citySlug: string, neighborhoodName?: string, neighborhoodSlug?: string): BreadcrumbItem[] {
  const crumbs: Array<{ label: string; href: string }> = [
    { label: "Locations", href: "/locations/" },
    { label: cityName, href: `/locations/${citySlug}/` },
  ];
  if (neighborhoodName && neighborhoodSlug) {
    crumbs.push({ label: neighborhoodName, href: `/locations/${citySlug}/${neighborhoodSlug}/` });
  }
  return buildBreadcrumbs(crumbs);
}

export function blogBreadcrumbs(categoryName: string, categorySlug: string, postTitle?: string, postSlug?: string): BreadcrumbItem[] {
  const crumbs: Array<{ label: string; href: string }> = [
    { label: "Blog", href: "/blog/" },
    { label: categoryName, href: `/blog/${categorySlug}/` },
  ];
  if (postTitle && postSlug) {
    crumbs.push({ label: postTitle, href: `/blog/${categorySlug}/${postSlug}/` });
  }
  return buildBreadcrumbs(crumbs);
}

// ══════════════════════════════════════════════
// VALIDATION
// ══════════════════════════════════════════════

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    totalLinks: number;
    uniqueHrefs: number;
  };
}

/** Validate that a set of link groups meets minimum internal linking requirements */
export function validateInternalLinks(
  groups: InternalLinkGroup[],
  pagePath: string,
  minOutbound: number = 10,
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const allLinks = groups.flatMap((g) => g.links);
  const uniqueHrefs = new Set(allLinks.map((l) => l.href));

  // Check minimum outbound links
  if (uniqueHrefs.size < minOutbound) {
    errors.push(
      `Page ${pagePath} has only ${uniqueHrefs.size} unique outbound links (minimum: ${minOutbound})`,
    );
  }

  // Check for self-referencing links
  const selfLinks = allLinks.filter((l) => l.href === pagePath);
  if (selfLinks.length > 0) {
    warnings.push(`Page ${pagePath} links to itself`);
  }

  // Check for duplicate anchors with same href
  const anchorMap = new Map<string, string[]>();
  for (const link of allLinks) {
    const existing = anchorMap.get(link.href);
    if (existing) {
      existing.push(link.label);
    } else {
      anchorMap.set(link.href, [link.label]);
    }
  }

  for (const [href, labels] of anchorMap) {
    if (labels.length > 1 && new Set(labels).size === 1) {
      warnings.push(`Page ${pagePath} has duplicate anchor text "${labels[0]}" for ${href}`);
    }
  }

  // Check for empty groups
  for (const group of groups) {
    if (group.links.length === 0) {
      warnings.push(`Page ${pagePath} has empty link group "${group.title}"`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    stats: {
      totalLinks: allLinks.length,
      uniqueHrefs: uniqueHrefs.size,
    },
  };
}

/** Count total footer links */
export function countFooterLinks(): number {
  return getFooterLinks().reduce((sum, group) => sum + group.links.length, 0);
}
