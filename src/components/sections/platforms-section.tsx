"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { platformsData } from "@/data/homepage";
import { iconMap } from "@/components/icons";
import { ArrowRight } from "@/components/icons";

export function PlatformsSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {platformsData.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {platformsData.subtitle}
          </p>
        </div>

        {/* Platform cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {platformsData.platforms.map((platform, index) => {
            const Icon = iconMap[platform.icon];
            return (
              <motion.div
                key={platform.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  href={`/platforms/${platform.slug}/`}
                  className="group block h-full rounded-xl border border-border bg-white p-8 text-center transition-all hover:border-google-blue hover:shadow-md"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-bg">
                    <Icon className="h-8 w-8 text-google-blue" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-text-primary group-hover:text-google-blue">
                    {platform.name}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {platform.description}
                  </p>
                  <div className="mt-4 flex items-center justify-center gap-1 text-sm font-medium text-google-blue opacity-0 transition-opacity group-hover:opacity-100">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
