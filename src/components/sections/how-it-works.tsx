"use client";

import { motion } from "framer-motion";
import { howItWorksData } from "@/data/homepage";
import { iconMap } from "@/components/icons";

export function HowItWorks() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {howItWorksData.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {howItWorksData.subtitle}
          </p>
        </div>

        {/* Steps */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksData.steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            return (
              <motion.div
                key={step.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Connector line (except last) */}
                {index < howItWorksData.steps.length - 1 && (
                  <div className="absolute right-0 top-10 hidden h-px w-full translate-x-1/2 bg-border lg:block" />
                )}

                {/* Step number circle */}
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-google-blue/10">
                  <Icon className="h-8 w-8 text-google-blue" />
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-google-blue text-xs font-bold text-white">
                    {step.step}
                  </span>
                </div>

                <h3 className="mt-6 font-heading text-lg font-semibold text-text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
