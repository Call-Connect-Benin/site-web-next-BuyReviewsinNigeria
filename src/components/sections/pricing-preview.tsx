"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { pricingPreviewData } from "@/data/homepage";
import { CheckCircle, ArrowRight } from "@/components/icons";

export function PricingPreview() {
  return (
    <section className="bg-bg py-12 sm:py-16">
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
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPreviewData.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-xl border-2 bg-white p-8 hover:-translate-y-1 transition-all duration-300 ${
                plan.isPopular
                  ? "border-google-blue shadow-lg"
                  : index === 0
                    ? "border-border border-t-2 border-t-google-green/30 shadow-sm"
                    : "border-border border-t-2 border-t-google-yellow/30 shadow-sm"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Gradient header bar for popular plan */}
              {plan.isPopular && (
                <div className="absolute inset-x-0 top-0 h-1.5 rounded-t-xl bg-gradient-to-r from-google-blue via-google-red to-google-yellow" />
              )}

              {/* Popular badge */}
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="animate-pulse-glow shadow-md rounded-full bg-google-blue px-4 py-1 text-xs font-semibold text-white">
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
              <a
                href={plan.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-lg py-3 text-center text-sm font-semibold transition-all ${
                  plan.isPopular
                    ? "bg-gradient-to-r from-google-blue to-google-blue/80 text-white hover:shadow-lg hover:shadow-google-blue/25"
                    : "border border-border bg-white text-text-primary hover:border-google-blue hover:text-google-blue"
                }`}
              >
                Subscribe Now
              </a>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-8 text-center">
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
