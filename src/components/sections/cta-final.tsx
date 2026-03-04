import Link from "next/link";
import { ctaFinalData } from "@/data/homepage";
import { Phone } from "@/components/icons";

export function CTAFinal() {
  return (
    <section className="bg-google-blue py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          {ctaFinalData.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
          {ctaFinalData.description}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={ctaFinalData.ctaPrimary.href}
            className="inline-flex items-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-google-blue shadow-md transition-all hover:bg-white/90 hover:shadow-lg"
          >
            {ctaFinalData.ctaPrimary.label}
          </Link>
          <Link
            href={ctaFinalData.ctaSecondary.href}
            className="inline-flex items-center rounded-lg border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white hover:bg-white/10"
          >
            {ctaFinalData.ctaSecondary.label}
          </Link>
        </div>

        {/* Phone */}
        <div className="mt-8 flex items-center justify-center gap-2 text-white/70">
          <Phone className="h-4 w-4" />
          <span className="text-sm">
            {ctaFinalData.phoneLabel}:{" "}
            <span className="font-semibold text-white">
              {ctaFinalData.phone}
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
