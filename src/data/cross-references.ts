/** Top 30 industry x city cross-reference pages for SEO */
export const crossReferences: Array<{ industry: string; city: string }> = [
  { industry: "restaurants", city: "lagos" },
  { industry: "restaurants", city: "abuja" },
  { industry: "hotels", city: "lagos" },
  { industry: "hotels", city: "abuja" },
  { industry: "hospitals-clinics", city: "lagos" },
  { industry: "hospitals-clinics", city: "abuja" },
  { industry: "car-dealerships", city: "lagos" },
  { industry: "car-dealerships", city: "abuja" },
  { industry: "lawyers", city: "lagos" },
  { industry: "lawyers", city: "abuja" },
  { industry: "real-estate-agents", city: "lagos" },
  { industry: "real-estate-agents", city: "abuja" },
  { industry: "plumbers", city: "lagos" },
  { industry: "plumbers", city: "abuja" },
  { industry: "salons-barbershops", city: "lagos" },
  { industry: "salons-barbershops", city: "abuja" },
  { industry: "schools-universities", city: "lagos" },
  { industry: "schools-universities", city: "abuja" },
  { industry: "supermarkets", city: "lagos" },
  { industry: "supermarkets", city: "abuja" },
  { industry: "dentists", city: "lagos" },
  { industry: "dentists", city: "port-harcourt" },
  { industry: "auto-mechanics", city: "lagos" },
  { industry: "auto-mechanics", city: "abuja" },
  { industry: "gyms-fitness", city: "lagos" },
  { industry: "churches", city: "lagos" },
  { industry: "event-centers", city: "lagos" },
  { industry: "event-centers", city: "abuja" },
  { industry: "tech-companies", city: "lagos" },
  { industry: "construction", city: "lagos" },
];

export function getCrossReferencesByIndustry(industrySlug: string) {
  return crossReferences.filter((cr) => cr.industry === industrySlug);
}

export function getCrossReferencesByCity(citySlug: string) {
  return crossReferences.filter((cr) => cr.city === citySlug);
}

export function isCrossReference(industrySlug: string, citySlug: string): boolean {
  return crossReferences.some(
    (cr) => cr.industry === industrySlug && cr.city === citySlug,
  );
}
