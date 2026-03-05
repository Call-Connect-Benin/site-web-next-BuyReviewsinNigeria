"use client";

import { ctaFinalData } from "@/data/homepage";
import { Phone } from "@/components/icons";
import { LeadCaptureForm } from "@/components/forms/lead-capture-form";

export function CTAFinal() {
  return (
    <section className="relative overflow-hidden bg-google-blue py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0 dot-pattern-white" />
      <div className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(66,133,244,0) 0%, rgba(52,168,83,0.15) 100%)' }} />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-white/5" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          {/* Left: Text */}
          <div className="text-center lg:text-left">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              {ctaFinalData.title}
            </h2>
            <p className="mt-4 text-lg text-white/80">
              {ctaFinalData.description}
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-white/70 lg:justify-start">
              <Phone className="h-4 w-4" />
              <span className="text-sm">
                {ctaFinalData.phoneLabel}:{" "}
                <span className="font-semibold text-white">
                  {ctaFinalData.phone}
                </span>
              </span>
            </div>
          </div>

          {/* Right: Inline form */}
          <div className="mx-auto w-full max-w-md lg:mx-0 lg:ml-auto">
            <div className="rounded-xl bg-white/95 backdrop-blur-sm ring-1 ring-white/20 p-6 shadow-lg">
              <h3 className="font-heading text-lg font-bold text-text-primary">
                Start Growing Today
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                Get a free quote in minutes
              </p>
              <div className="mt-4">
                <LeadCaptureForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
