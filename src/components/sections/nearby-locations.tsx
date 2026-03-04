import Link from "next/link";
import { MapPin } from "@/components/icons";

interface LocationCard {
  href: string;
  name: string;
  description?: string;
}

interface NearbyLocationsProps {
  locations: LocationCard[];
  title?: string;
}

export function NearbyLocations({
  locations,
  title = "Nearby Locations",
}: NearbyLocationsProps) {
  return (
    <section className="py-12">
      <h2 className="font-heading text-2xl font-bold text-text-primary">
        {title}
      </h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((location) => (
          <Link
            key={location.href}
            href={location.href}
            className="group flex items-center gap-3 rounded-md border border-border bg-white p-4 shadow-sm transition-shadow hover:shadow-hover"
          >
            <MapPin className="h-5 w-5 shrink-0 text-google-red" />
            <div>
              <span className="text-sm font-medium text-text-primary group-hover:text-google-blue">
                {location.name}
              </span>
              {location.description && (
                <p className="mt-0.5 text-xs text-text-secondary">
                  {location.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
