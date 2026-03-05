"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { locationsData } from "@/data/homepage";
import { MapPin, Users, ArrowRight } from "@/components/icons";

export function LocationsSection() {
  return (
    <section className="bg-bg py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {locationsData.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {locationsData.subtitle}
          </p>
        </div>

        {/* City cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {locationsData.cities.map((city, index) => (
            <motion.div
              key={city.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              <Link
                href={`/locations/${city.slug}/`}
                className="group block overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-google-red" />
                    <h3 className="font-heading text-lg font-semibold text-text-primary group-hover:text-google-blue">
                      {city.name}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-google-green/8 px-2.5 py-1 text-xs font-medium text-google-green">
                      <Users className="h-3 w-3" />
                      {city.localGuides} Guides
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-google-blue/8 px-2.5 py-1 text-xs font-medium text-google-blue">
                      {city.neighborhoods} areas
                    </span>
                  </div>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-google-blue via-google-red to-google-green opacity-0 transition-opacity group-hover:opacity-100" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-8 text-center">
          <Link
            href={locationsData.viewAllHref}
            className="inline-flex items-center gap-2 text-base font-medium text-google-blue hover:underline"
          >
            View All 15 Cities
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
