"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { servicesData } from "@/data/homepage";
import { iconMap } from "@/components/icons";
import { ArrowRight } from "@/components/icons";

export function ServicesSection() {
  return (
    <section className="bg-bg py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {servicesData.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {servicesData.subtitle}
          </p>
        </div>

        {/* Service cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Link
                  href={service.href}
                  className="group block h-full rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-hover"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-google-blue/10">
                    <Icon className="h-6 w-6 text-google-blue" />
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-text-primary group-hover:text-google-blue">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-text-secondary">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-text-secondary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-google-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex items-center gap-1 text-sm font-medium text-google-blue">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
