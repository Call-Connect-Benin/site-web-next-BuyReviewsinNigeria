"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "@/components/icons";
import type { FaqItem } from "@/types";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-border rounded-xl border border-border">
      {items.map((item, index) => (
        <div key={item.question}>
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
              className={`h-5 w-5 shrink-0 text-text-secondary transition-transform ${
                openIndex === index ? "rotate-180" : ""
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
                <p className="px-6 pb-5 text-sm leading-relaxed text-text-secondary">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
