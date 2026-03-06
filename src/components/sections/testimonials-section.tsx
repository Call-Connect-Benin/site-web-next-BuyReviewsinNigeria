"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { testimonialsData } from "@/data/homepage";
import { Star, MapPin, Quote } from "@/components/icons";

const accentColors = ['bg-google-blue', 'bg-google-green', 'bg-google-red'];

export function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-google-blue/[0.02] to-white py-12 sm:py-16">
      {/* Subtle background image */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src="/images/nigerian-business-illustration.jpeg"
          alt=""
          fill
          className="object-contain object-center opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonialsData.testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="relative overflow-hidden rounded-xl border border-border bg-white p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Decorative quote icon */}
              <Quote className="absolute -right-2 -top-2 h-20 w-20 text-google-blue/5" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-google-yellow" />
                ))}
              </div>

              {/* Quote */}
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-6 pt-4 relative">
                <div className={`absolute top-0 left-0 h-0.5 w-12 ${accentColors[index % 3]}`} />
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
