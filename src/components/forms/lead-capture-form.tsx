"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "@/components/icons";

const leadCaptureSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  businessName: z
    .string()
    .min(2, "Business name is required")
    .max(100, "Business name must be under 100 characters"),
});

type LeadCaptureFormData = z.infer<typeof leadCaptureSchema>;

const inputStyles =
  "w-full rounded-[var(--radius-sm)] border border-border bg-white px-3 py-2 text-sm text-text-primary placeholder:text-text-secondary/60 transition-shadow focus:outline-none focus:ring-2 focus:ring-google-blue/40 focus:border-google-blue";
const errorInputStyles = "border-google-red focus:ring-google-red/40 focus:border-google-red";

export function LeadCaptureForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LeadCaptureFormData>({
    resolver: zodResolver(leadCaptureSchema),
  });

  const onSubmit = async (_data: LeadCaptureFormData) => {
    // TODO: Send to API endpoint
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="flex items-center gap-2 rounded-[var(--radius-sm)] border border-google-green/30 bg-google-green/5 px-4 py-3">
        <CheckCircle className="h-5 w-5 shrink-0 text-google-green" />
        <p className="text-sm font-medium text-text-primary">
          Thank you! We will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      <div>
        <input
          type="text"
          placeholder="Business name"
          aria-label="Business name"
          className={`${inputStyles} ${errors.businessName ? errorInputStyles : ""}`}
          {...register("businessName")}
        />
        {errors.businessName && (
          <p className="mt-1 text-xs text-google-red" role="alert">
            {errors.businessName.message}
          </p>
        )}
      </div>

      <div>
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          className={`${inputStyles} ${errors.email ? errorInputStyles : ""}`}
          {...register("email")}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-google-red" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-[var(--radius-sm)] bg-google-blue px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-google-blue/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-google-blue/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Submitting..." : "Get a Free Quote"}
      </button>
    </form>
  );
}
