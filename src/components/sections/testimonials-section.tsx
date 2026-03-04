"use client";

import { motion } from "framer-motion";
import { testimonialsData } from "@/data/homepage";
import { Star, MapPin } from "@/components/icons";

export function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text-primary sm:text-4xl">
            {testimonialsData.title}
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            {testimonialsData.subtitle}
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="rounded-xl border border-border bg-white p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5" />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 border-t border-border pt-4">
                <div className="font-heading text-sm font-semibold text-text-primary">
                  {testimonial.name}
                </div>
                <div className="mt-1 text-xs text-text-secondary">
                  {testimonial.role}, {testimonial.company}
                </div>
                <div className="mt-1 flex items-center gap-1 text-xs text-text-secondary">
                  <MapPin className="h-3 w-3" />
                  {testimonial.city}
                </div>
              </div>

              {/* Service badge */}
              <div className="mt-3">
                <span className="inline-block rounded-full bg-google-blue/10 px-3 py-1 text-xs font-medium text-google-blue">
                  {testimonial.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
