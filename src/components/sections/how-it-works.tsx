"use client";

import { motion } from "framer-motion";
import { howItWorksData } from "@/data/homepage";
import { iconMap } from "@/components/icons";
import { getColorForIndex } from "@/lib/colors";

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16">
      {/* Dot pattern background */}
      <div className="pointer-events-none absolute inset-0 dot-pattern-light opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksData.steps.map((step, index) => {
            const Icon = iconMap[step.icon];
            const color = getColorForIndex(index);
            return (
              <motion.div
                key={step.step}
                className="relative rounded-xl p-6 text-center transition-all hover:bg-white hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Connector line (except last) */}
                {index < howItWorksData.steps.length - 1 && (
                  <div
                    className="absolute right-0 top-10 hidden h-0.5 w-full translate-x-1/2 lg:block"
                    style={{ background: 'linear-gradient(90deg, #4285F4, #EA4335, #FBBC04, #34A853)' }}
                  />
                )}

                {/* Step number circle */}
                <div className={`relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl ${color.bgGradient}`}>
                  <Icon className={`h-8 w-8 ${color.text}`} />
                  <span className={`absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${color.gradient} text-xs font-bold text-white shadow-sm`}>
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
