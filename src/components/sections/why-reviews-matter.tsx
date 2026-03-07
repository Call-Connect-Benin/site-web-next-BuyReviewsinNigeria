"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { whyReviewsMatterData } from "@/data/homepage";
import { colorConfig } from "@/lib/colors";

export function WhyReviewsMatter() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {whyReviewsMatterData.title}
          </h2>
        </div>

        {/* Long-form Prose */}
        <div className="mx-auto mt-12 max-w-3xl space-y-10">
          {whyReviewsMatterData.paragraphs.map((para, index) => (
            <motion.div
              key={para.heading}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <h3 className="font-heading text-lg font-semibold text-text-primary">
                {para.heading}
              </h3>
              <p
                className="mt-3 text-base leading-relaxed text-text-secondary"
                dangerouslySetInnerHTML={{ __html: para.text }}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Grid */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {whyReviewsMatterData.stats.map((stat, index) => {
            const config = colorConfig[stat.color];
            return (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-xl border border-border bg-white p-6 shadow-sm border-l-4 ${config.borderLeft}`}
              >
                <p className={`font-heading text-3xl font-bold ${config.text}`}>
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Strip */}
        <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={whyReviewsMatterData.cta.primary.href}
            className="inline-flex items-center justify-center rounded-full bg-google-blue px-8 py-3 text-base font-semibold text-white shadow-md transition-all hover:bg-google-blue/90 hover:shadow-lg"
          >
            {whyReviewsMatterData.cta.primary.label}
          </Link>
          <Link
            href={whyReviewsMatterData.cta.secondary.href}
            className="inline-flex items-center justify-center rounded-full border-2 border-border px-8 py-3 text-base font-semibold text-text-primary transition-all hover:border-google-blue hover:text-google-blue"
          >
            {whyReviewsMatterData.cta.secondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
