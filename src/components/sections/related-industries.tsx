import Link from "next/link";
import { iconMap } from "@/components/icons";
import type { IconName } from "@/types";

interface IndustryCard {
  slug: string;
  name: string;
  icon: IconName;
  shortDescription: string;
}

interface RelatedIndustriesProps {
  industries: IndustryCard[];
  title?: string;
}

export function RelatedIndustries({
  industries,
  title = "Related Industries",
}: RelatedIndustriesProps) {
  return (
    <section className="py-12">
      <h2 className="font-heading text-2xl font-bold text-text-primary">
        {title}
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((industry) => {
          const Icon = iconMap[industry.icon];
          return (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}/`}
              className="group rounded-md border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-hover"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-bg">
                  <Icon className="h-5 w-5 text-google-blue" />
                </div>
                <h3 className="font-heading text-base font-semibold text-text-primary group-hover:text-google-blue">
                  {industry.name}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {industry.shortDescription}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
