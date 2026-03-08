"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./form-field";
import { Shield, CheckCircle, Users } from "@/components/icons";

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

const BUSINESS_TYPES = [
  "Restaurants",
  "Hotels",
  "Hospitals & Clinics",
  "Car Dealerships",
  "Auto Mechanics",
  "Plumbers",
  "Electricians",
  "Locksmiths",
  "Lawyers",
  "Real Estate Agents",
  "Dentists",
  "Pharmacies",
  "Schools & Universities",
  "Banks",
  "Supermarkets",
  "Salons & Barbershops",
  "Gyms & Fitness Centers",
  "Churches",
  "Event Centers",
  "Logistics & Delivery",
  "Tech Companies",
  "Fashion Boutiques",
  "Construction",
  "Cleaning Services",
  "Photography Studios",
] as const;

const PACKAGES = [
  { value: "starter", label: "Starter Pack -- 5 Reviews (N25,000)" },
  { value: "growth", label: "Growth Pack -- 15 Reviews (N65,000)" },
  { value: "business", label: "Business Pack -- 30 Reviews (N120,000)" },
  { value: "enterprise", label: "Enterprise Pack -- 50+ Reviews (Custom)" },
] as const;

const getStartedSchema = z.object({
  businessName: z
    .string()
    .min(2, "Business name must be at least 2 characters")
    .max(100, "Business name must be under 100 characters"),
  businessType: z.string().min(1, "Please select your business type"),
  city: z.string().min(1, "Please select your city"),
  googleMapsUrl: z
    .string()
    .url("Please enter a valid URL")
    .refine(
      (url) =>
        url.includes("google.com/maps") ||
        url.includes("goo.gl/maps") ||
        url.includes("maps.app.goo.gl"),
      "Please enter a valid Google Maps URL"
    ),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be under 15 digits")
    .regex(/^[+]?[\d\s-]+$/, "Please enter a valid phone number"),
  package: z.string().min(1, "Please select a package"),
  message: z.string().max(500, "Message must be under 500 characters").optional(),
});

type GetStartedFormData = z.infer<typeof getStartedSchema>;

const inputStyles =
  "w-full rounded-[var(--radius-sm)] border border-border bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 transition-shadow focus:outline-none focus:ring-2 focus:ring-google-blue/40 focus:border-google-blue";
const selectStyles =
  "w-full rounded-[var(--radius-sm)] border border-border bg-white px-4 py-2.5 text-sm text-text-primary transition-shadow focus:outline-none focus:ring-2 focus:ring-google-blue/40 focus:border-google-blue appearance-none cursor-pointer";
const errorInputStyles = "border-google-red focus:ring-google-red/40 focus:border-google-red";

export function GetStartedForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<GetStartedFormData>({
    resolver: zodResolver(getStartedSchema),
  });

  const onSubmit = async (data: GetStartedFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType: "get-started", ...data }),
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
          Thank you for your submission!
        </h3>
        <p className="text-text-secondary">
          We have received your request and will get back to you within 24 hours
          with a tailored plan for your business.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        noValidate
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField
            label="Business Name"
            error={errors.businessName?.message}
            required
          >
            <input
              type="text"
              placeholder="e.g. Mama Nkechi's Kitchen"
              className={`${inputStyles} ${errors.businessName ? errorInputStyles : ""}`}
              {...register("businessName")}
            />
          </FormField>

          <FormField
            label="Business Type"
            error={errors.businessType?.message}
            required
          >
            <select
              className={`${selectStyles} ${errors.businessType ? errorInputStyles : ""}`}
              defaultValue=""
              {...register("businessType")}
            >
              <option value="" disabled>
                Select industry
              </option>
              {BUSINESS_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
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

          <FormField
            label="Google Maps URL"
            error={errors.googleMapsUrl?.message}
            required
          >
            <input
              type="url"
              placeholder="https://maps.app.goo.gl/..."
              className={`${inputStyles} ${errors.googleMapsUrl ? errorInputStyles : ""}`}
              {...register("googleMapsUrl")}
            />
          </FormField>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
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
        </div>

        <FormField label="Package" error={errors.package?.message} required>
          <select
            className={`${selectStyles} ${errors.package ? errorInputStyles : ""}`}
            defaultValue=""
            {...register("package")}
          >
            <option value="" disabled>
              Select a package
            </option>
            {PACKAGES.map((pkg) => (
              <option key={pkg.value} value={pkg.value}>
                {pkg.label}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Message (Optional)" error={errors.message?.message}>
          <textarea
            rows={4}
            placeholder="Tell us about your goals or any specific requirements..."
            className={`${inputStyles} resize-none ${errors.message ? errorInputStyles : ""}`}
            {...register("message")}
          />
        </FormField>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-[var(--radius-sm)] bg-google-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-google-blue/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-google-blue/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Submitting..." : "Get Started Now"}
        </button>
      </form>

      {/* Trust Signals */}
      <div className="mt-8 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-google-blue/10">
            <Shield className="h-5 w-5 text-google-blue" />
          </div>
          <span className="text-sm font-medium text-text-primary">
            30-Day Guarantee
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-google-green/10">
            <CheckCircle className="h-5 w-5 text-google-green" />
          </div>
          <span className="text-sm font-medium text-text-primary">
            500+ Businesses Served
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-google-blue/10">
            <Users className="h-5 w-5 text-google-blue" />
          </div>
          <span className="text-sm font-medium text-text-primary">
            Certified Local Guides
          </span>
        </div>
      </div>
    </div>
  );
}
