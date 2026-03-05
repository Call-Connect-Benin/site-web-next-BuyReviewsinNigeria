"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { faqSectionData } from "@/data/homepage";
import { getHomepageFaq } from "@/data/faq";
import { ChevronDown, ArrowRight } from "@/components/icons";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const questions = getHomepageFaq();

  return (
    <section className="relative bg-white py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-google-blue/[0.01] to-transparent" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {faqSectionData.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {faqSectionData.subtitle}
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-8 divide-y divide-border">
          {questions.map((item, index) => (
            <div key={item.question} className={`transition-all ${openIndex === index ? 'border-l-4 border-l-google-blue bg-google-blue/[0.02]' : 'border-l-4 border-l-transparent'}`}>
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-bg"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 font-heading text-base font-semibold text-text-primary">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-text-secondary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180 text-google-blue" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 pb-5 text-sm leading-relaxed text-text-secondary [&_a]:font-medium [&_a]:text-google-blue [&_a]:underline-offset-2 [&_a:hover]:underline"
                      dangerouslySetInnerHTML={{ __html: item.answer }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="mt-8 text-center">
          <Link
            href={faqSectionData.viewAllHref}
            className="inline-flex items-center gap-2 text-base font-medium text-google-blue hover:underline"
          >
            View All 50 Questions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
