import Link from "next/link";
import { ArrowRight } from "@/components/icons";

interface ServiceCTAProps {
  serviceName: string;
  serviceSlug: string;
  headline?: string;
  description?: string;
}

export function ServiceCTA({
  serviceName,
  serviceSlug,
  headline,
  description,
}: ServiceCTAProps) {
  return (
    <section className="rounded-lg border border-border bg-white p-8 shadow-sm">
      <h3 className="font-heading text-xl font-bold text-text-primary">
        {headline ?? `Ready to get started with ${serviceName}?`}
      </h3>
      <p className="mt-2 text-text-secondary">
        {description ??
          "Join 1,000+ Nigerian businesses that trust us with their online reputation."}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/get-started/"
          className="inline-flex items-center gap-2 rounded-full bg-google-blue px-6 py-3 text-sm font-medium text-white transition-shadow hover:shadow-md"
        >
          Get Started
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href={`/services/${serviceSlug}/`}
          className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-google-blue hover:text-google-blue"
        >
          Learn More About {serviceName}
        </Link>
      </div>
    </section>
  );
}
