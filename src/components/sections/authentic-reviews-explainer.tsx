"use client";

import { motion } from "framer-motion";
import { authenticReviewsData } from "@/data/homepage";
import { iconMap, CheckCircle, XCircle } from "@/components/icons";
import { getColorForIndex } from "@/lib/colors";
import { colorConfig } from "@/lib/colors";

export function AuthenticReviewsExplainer() {
  return (
    <section className="bg-bg py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {authenticReviewsData.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-secondary sm:text-lg">
            {authenticReviewsData.intro}
          </p>
        </div>

        {/* Two-column layout: Local Guide Levels + Comparison Table */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: Local Guide Levels */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              What Is a Google Local Guide?
            </h3>
            <p className="mt-3 text-sm text-text-secondary">
              Google Local Guides are members of Google&apos;s community programme who contribute reviews, photos, and information to Google Maps. Higher levels mean more trust.
            </p>
            <div className="mt-6 space-y-4">
              {authenticReviewsData.localGuideLevels.map((level) => {
                const config = colorConfig[level.color];
                return (
                  <motion.div
                    key={level.level}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`rounded-lg border-l-4 ${config.borderLeft} bg-white p-4 shadow-sm`}
                  >
                    <p className={`font-heading text-sm font-bold ${config.text}`}>
                      {level.level}
                    </p>
                    <p className="mt-1 text-sm text-text-secondary">
                      {level.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Comparison Table */}
          <div>
            <h3 className="font-heading text-xl font-semibold text-text-primary">
              Fake Review Farms vs. Our Local Guide Model
            </h3>
            <div className="mt-6 space-y-3">
              {authenticReviewsData.comparisonTable.map((row, index) => (
                <motion.div
                  key={row.aspect}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-lg border border-border bg-white p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-primary">
                    {row.aspect}
                  </p>
                  <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <div className="flex items-start gap-2 rounded bg-google-red/5 px-3 py-2">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-google-red" />
                      <span className="text-sm text-text-secondary">{row.fake}</span>
                    </div>
                    <div className="flex items-start gap-2 rounded bg-google-green/5 px-3 py-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-google-green" />
                      <span className="text-sm text-text-secondary">{row.ours}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16">
          <h3 className="text-center font-heading text-2xl font-bold text-text-primary">
            Why Our Approach Works
          </h3>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {authenticReviewsData.benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              const color = getColorForIndex(index);
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className={`rounded-xl border border-border bg-white p-6 shadow-sm border-t-4 ${color.borderTop}`}
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${color.bgGradient}`}>
                    <Icon className={`h-5 w-5 ${color.text}`} />
                  </div>
                  <h4 className="mt-4 font-heading text-base font-semibold text-text-primary">
                    {benefit.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Text */}
        <div className="mx-auto mt-14 max-w-3xl text-center">
          <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
            {authenticReviewsData.closingText}
          </p>
        </div>
      </div>
    </section>
  );
}
