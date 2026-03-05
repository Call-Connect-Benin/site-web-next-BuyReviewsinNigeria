"use client";

import { motion } from "framer-motion";
import { heroData } from "@/data/homepage";
import { iconMap } from "@/components/icons";
import { QuickQuoteForm } from "@/components/forms/quick-quote-form";
import { getColorForIndex } from "@/lib/colors";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-12 pt-20 sm:pb-16 sm:pt-24">
      {/* Dot grid pattern */}
      <div className="pointer-events-none absolute inset-0 dot-pattern-light" />

      {/* Floating decorative blobs */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-20 animate-float-slow"
        style={{ background: "radial-gradient(circle, #4285F4 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-[0.15] animate-float-delayed"
        style={{ background: "radial-gradient(circle, #34A853 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute right-1/4 top-20 h-32 w-32 rounded-full opacity-10 animate-float"
        style={{ background: "radial-gradient(circle, #FBBC04 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: Text + trust badges */}
          <div>
            <motion.h1
              className="font-heading text-4xl font-bold tracking-tight text-text-primary sm:text-5xl lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {heroData.headline}
              <span className="mt-2 block gradient-text-blue">
                {heroData.subheadline}
              </span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-lg text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {heroData.description}
            </motion.p>

            {/* Trust badges as pills */}
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {heroData.trustBadges.map((badge) => {
                const Icon = iconMap[badge.icon];
                return (
                  <div
                    key={badge.text}
                    className="flex items-center gap-2 rounded-full bg-google-green/8 px-3 py-1.5 text-sm text-text-secondary"
                  >
                    <Icon className="h-4 w-4 text-google-green" />
                    <span>{badge.text}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* Stats row with colored cards */}
            <motion.div
              className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {heroData.stats.map((stat, index) => {
                const color = getColorForIndex(index);
                return (
                  <div
                    key={stat.label}
                    className={`rounded-lg border border-border/60 bg-white/80 p-3 border-l-4 ${color.borderLeft}`}
                  >
                    <div className="font-heading text-2xl font-bold text-text-primary">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-text-secondary">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Quick Quote Form with glass morphism */}
          <motion.div
            className="mx-auto w-full max-w-md lg:mx-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-dark rounded-2xl p-6 shadow-xl ring-1 ring-white/50 sm:p-8">
              <h2 className="font-heading text-xl font-bold text-text-primary">
                Get Your Free Quote
              </h2>
              <p className="mt-1 text-sm text-text-secondary">
                Instant price estimate for your business
              </p>
              <div className="mt-6">
                <QuickQuoteForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
