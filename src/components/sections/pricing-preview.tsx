"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { pricingPreviewData } from "@/data/homepage";
import { CheckCircle, ArrowRight } from "@/components/icons";

export function PricingPreview() {
  return (
    <section className="bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {pricingPreviewData.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {pricingPreviewData.subtitle}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPreviewData.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-xl border-2 bg-white p-8 ${
                plan.isPopular
                  ? "border-google-blue shadow-lg"
                  : "border-border shadow-sm"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-google-blue px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-bold text-text-primary">
                  &#8358;{plan.price}
                </span>
              </div>
              <p className="mt-1 text-sm text-text-secondary">{plan.unit}</p>

              {/* Features */}
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-text-secondary"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-google-green" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={plan.href}
                className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                  plan.isPopular
                    ? "bg-google-blue text-white hover:bg-google-blue/90"
                    : "border border-border bg-white text-text-primary hover:border-google-blue hover:text-google-blue"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-12 text-center">
          <Link
            href={pricingPreviewData.viewAllHref}
            className="inline-flex items-center gap-2 text-base font-medium text-google-blue hover:underline"
          >
            View All Plans & Add-ons
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
