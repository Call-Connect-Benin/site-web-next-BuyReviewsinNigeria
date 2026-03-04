"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { heroData } from "@/data/homepage";
import { iconMap } from "@/components/icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-24 sm:pb-24 sm:pt-32">
      {/* Background decorative gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #4285F4 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <motion.h1
            className="font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {heroData.headline}
            <span className="mt-2 block text-google-blue">
              {heroData.subheadline}
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {heroData.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href={heroData.ctaPrimary.href}
              className="inline-flex items-center rounded-lg bg-google-blue px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-google-blue/90 hover:shadow-lg"
            >
              {heroData.ctaPrimary.label}
            </Link>
            <Link
              href={heroData.ctaSecondary.href}
              className="inline-flex items-center rounded-lg border border-border bg-white px-8 py-4 text-base font-semibold text-text-primary shadow-sm transition-all hover:shadow-md"
            >
              {heroData.ctaSecondary.label}
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {heroData.trustBadges.map((badge) => {
              const Icon = iconMap[badge.icon];
              return (
                <div
                  key={badge.text}
                  className="flex items-center gap-2 text-sm text-text-secondary"
                >
                  <Icon className="h-5 w-5 text-google-green" />
                  <span>{badge.text}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {heroData.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl font-bold text-google-blue">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
