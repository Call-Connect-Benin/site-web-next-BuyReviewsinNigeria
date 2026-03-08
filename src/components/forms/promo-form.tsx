"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./form-field";
import { CheckCircle } from "@/components/icons";

const promoSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be under 80 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be under 15 digits")
    .regex(/^[+]?[\d\s-]+$/, "Please enter a valid phone number"),
  googleMapsLink: z
    .string()
    .min(2, "Please enter your business name or Google Maps link"),
});

type PromoFormData = z.infer<typeof promoSchema>;

const inputStyles =
  "w-full rounded-[var(--radius-sm)] border border-border bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 transition-shadow focus:outline-none focus:ring-2 focus:ring-google-blue/40 focus:border-google-blue";
const errorInputStyles =
  "border-google-red focus:ring-google-red/40 focus:border-google-red";

export function PromoForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PromoFormData>({
    resolver: zodResolver(promoSchema),
  });

  const onSubmit = async (data: PromoFormData) => {
    setSubmitError(null);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formType: "promo", pageUrl: window.location.href, ...data }),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Server error (${res.status})`);
      }
      setIsSubmitted(true);
    } catch (err) {
      clearTimeout(timeout);
      if (err instanceof DOMException && err.name === "AbortError") {
        setSubmitError("Request timed out. Please try again.");
      } else {
        setSubmitError(
          err instanceof Error
            ? err.message
            : "Something went wrong. Please try again."
        );
      }
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-[var(--radius-md)] border border-google-green/30 bg-google-green/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-google-green/10">
          <CheckCircle className="h-8 w-8 text-google-green" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-text-primary">
          Request received!
        </h3>
        <p className="text-text-secondary">
          Thank you! Our team will contact you within 24 hours to set up your 5
          free reviews.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {submitError && (
        <div className="rounded-[var(--radius-sm)] border border-google-red/30 bg-google-red/5 px-4 py-3 text-sm text-google-red">
          {submitError}
        </div>
      )}

      <FormField label="Full Name" error={errors.name?.message} required>
        <input
          type="text"
          placeholder="John Doe"
          className={`${inputStyles} ${errors.name ? errorInputStyles : ""}`}
          {...register("name")}
        />
      </FormField>

      <FormField label="Email" error={errors.email?.message} required>
        <input
          type="email"
          placeholder="you@business.com"
          className={`${inputStyles} ${errors.email ? errorInputStyles : ""}`}
          {...register("email")}
        />
      </FormField>

      <FormField label="Phone" error={errors.phone?.message} required>
        <input
          type="tel"
          placeholder="+234 801 234 5678"
          className={`${inputStyles} ${errors.phone ? errorInputStyles : ""}`}
          {...register("phone")}
        />
      </FormField>

      <FormField
        label="Google Maps Business Name or Link"
        error={errors.googleMapsLink?.message}
        required
      >
        <input
          type="text"
          placeholder="Your business name or Google Maps link"
          className={`${inputStyles} ${errors.googleMapsLink ? errorInputStyles : ""}`}
          {...register("googleMapsLink")}
        />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-[var(--radius-sm)] bg-google-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-google-blue/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-google-blue/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Claim My 5 Free Reviews"}
      </button>

      <p className="text-center text-xs text-text-secondary">
        *Valid for new customers only. No credit card required.
      </p>
    </form>
  );
}
