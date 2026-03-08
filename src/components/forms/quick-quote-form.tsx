"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./form-field";
import { CheckCircle } from "@/components/icons";

const CITIES = [
  "Lagos",
  "Abuja",
  "Port Harcourt",
  "Ibadan",
  "Kano",
  "Kaduna",
  "Benin City",
  "Enugu",
  "Warri",
  "Calabar",
  "Owerri",
  "Uyo",
  "Abeokuta",
  "Jos",
  "Ilorin",
] as const;

const quickQuoteSchema = z.object({
  businessName: z
    .string()
    .min(2, "Business name must be at least 2 characters")
    .max(100, "Business name must be under 100 characters"),
  reviewCount: z
    .number()
    .min(5, "Minimum of 5 reviews")
    .max(500, "For 500+ reviews, please contact us directly"),
  city: z.string().min(1, "Please select your city"),
  email: z.string().email("Please enter a valid email address"),
});

type QuickQuoteFormData = z.infer<typeof quickQuoteSchema>;

function getEstimatedPrice(count: number): string {
  if (count < 5) return "--";
  if (count <= 5) return "N25,000";
  if (count <= 15) return "N65,000";
  if (count <= 30) return "N120,000";
  return "Custom";
}

function getPriceDescription(count: number): string {
  if (count < 5) return "Enter at least 5 reviews";
  if (count <= 5) return "Starter Pack";
  if (count <= 15) return "Growth Pack";
  if (count <= 30) return "Business Pack";
  return "Enterprise Pack -- We will prepare a custom quote";
}

const inputStyles =
  "w-full rounded-[var(--radius-sm)] border border-border bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 transition-shadow focus:outline-none focus:ring-2 focus:ring-google-blue/40 focus:border-google-blue";
const selectStyles =
  "w-full rounded-[var(--radius-sm)] border border-border bg-white px-4 py-2.5 text-sm text-text-primary transition-shadow focus:outline-none focus:ring-2 focus:ring-google-blue/40 focus:border-google-blue appearance-none cursor-pointer";
const errorInputStyles = "border-google-red focus:ring-google-red/40 focus:border-google-red";

export function QuickQuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<QuickQuoteFormData>({
    resolver: zodResolver(quickQuoteSchema),
    defaultValues: {
      reviewCount: 5,
    },
  });

  const reviewCount = useWatch({ control, name: "reviewCount" });
  const currentCount = Number(reviewCount) || 0;
  const estimatedPrice = getEstimatedPrice(currentCount);
  const priceDescription = getPriceDescription(currentCount);

  const onSubmit = async (data: QuickQuoteFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType: "quick-quote", ...data, reviewCount: String(data.reviewCount) }),
    });
    if (!res.ok) throw new Error("Failed to send");
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-[var(--radius-md)] border border-google-green/30 bg-google-green/5 p-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-google-green/10">
          <CheckCircle className="h-8 w-8 text-google-green" />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-text-primary">
          Quote request received!
        </h3>
        <p className="text-text-secondary">
          We will send your personalized quote to your email within a few hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <FormField
        label="Business Name"
        error={errors.businessName?.message}
        required
      >
        <input
          type="text"
          placeholder="Your business name"
          className={`${inputStyles} ${errors.businessName ? errorInputStyles : ""}`}
          {...register("businessName")}
        />
      </FormField>

      <FormField
        label="Number of Reviews"
        error={errors.reviewCount?.message}
        required
      >
        <input
          type="number"
          min={5}
          max={500}
          placeholder="5"
          className={`${inputStyles} ${errors.reviewCount ? errorInputStyles : ""}`}
          {...register("reviewCount", { valueAsNumber: true })}
        />
      </FormField>

      {/* Price Estimate Display */}
      <div className="rounded-[var(--radius-sm)] border border-google-blue/20 bg-google-blue/5 px-4 py-3">
        <div className="flex items-baseline justify-between">
          <span className="text-sm text-text-secondary">Estimated Price</span>
          <span className="text-lg font-bold text-google-blue">
            {estimatedPrice}
          </span>
        </div>
        <p className="mt-1 text-xs text-text-secondary">{priceDescription}</p>
      </div>

      <FormField label="City" error={errors.city?.message} required>
        <select
          className={`${selectStyles} ${errors.city ? errorInputStyles : ""}`}
          defaultValue=""
          {...register("city")}
        >
          <option value="" disabled>
            Select your city
          </option>
          {CITIES.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </FormField>

      <FormField label="Email" error={errors.email?.message} required>
        <input
          type="email"
          placeholder="you@business.com"
          className={`${inputStyles} ${errors.email ? errorInputStyles : ""}`}
          {...register("email")}
        />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-[var(--radius-sm)] bg-google-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-google-blue/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-google-blue/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Getting Quote..." : "Get My Quote"}
      </button>
    </form>
  );
}
