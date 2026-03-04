"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { industriesData } from "@/data/homepage";
import { iconMap } from "@/components/icons";
import { ArrowRight } from "@/components/icons";

export function IndustriesSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {industriesData.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {industriesData.subtitle}
          </p>
        </div>

        {/* Industry grid */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {industriesData.industries.map((industry, index) => {
            const Icon = iconMap[industry.icon];
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <Link
                  href={`/industries/${industry.slug}/`}
                  className="group flex flex-col items-center rounded-xl border border-border bg-white p-6 text-center transition-all hover:border-google-blue hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-bg">
                    <Icon className="h-6 w-6 text-text-secondary group-hover:text-google-blue" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-text-primary">
                    {industry.name}
                  </h3>
                  <p className="mt-1 text-xs text-text-secondary">
                    {industry.reviewCount} reviews
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View all link */}
        <div className="mt-12 text-center">
          <Link
            href={industriesData.viewAllHref}
            className="inline-flex items-center gap-2 text-base font-medium text-google-blue hover:underline"
          >
            View All 25 Industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
