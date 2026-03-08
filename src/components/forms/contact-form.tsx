"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "./form-field";
import { CheckCircle } from "@/components/icons";

const SUBJECTS = [
  "General Inquiry",
  "Pricing Question",
  "Support Request",
  "Partnership Opportunity",
] as const;

const contactSchema = z.object({
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
  subject: z.string().min(1, "Please select a subject"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be under 1000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputStyles =
  "w-full rounded-[var(--radius-sm)] border border-border bg-white px-4 py-2.5 text-sm text-text-primary placeholder:text-text-secondary/60 transition-shadow focus:outline-none focus:ring-2 focus:ring-google-blue/40 focus:border-google-blue";
const selectStyles =
  "w-full rounded-[var(--radius-sm)] border border-border bg-white px-4 py-2.5 text-sm text-text-primary transition-shadow focus:outline-none focus:ring-2 focus:ring-google-blue/40 focus:border-google-blue appearance-none cursor-pointer";
const errorInputStyles = "border-google-red focus:ring-google-red/40 focus:border-google-red";

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formType: "contact", ...data }),
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
          Message sent successfully!
        </h3>
        <p className="text-text-secondary">
          Thank you for reaching out. Our team will respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Full Name" error={errors.name?.message} required>
          <input
            type="text"
            placeholder="Your full name"
            className={`${inputStyles} ${errors.name ? errorInputStyles : ""}`}
            {...register("name")}
          />
        </FormField>

        <FormField label="Email" error={errors.email?.message} required>
          <input
            type="email"
            placeholder="you@example.com"
            className={`${inputStyles} ${errors.email ? errorInputStyles : ""}`}
            {...register("email")}
          />
        </FormField>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Phone" error={errors.phone?.message} required>
          <input
            type="tel"
            placeholder="+234 801 234 5678"
            className={`${inputStyles} ${errors.phone ? errorInputStyles : ""}`}
            {...register("phone")}
          />
        </FormField>

        <FormField label="Subject" error={errors.subject?.message} required>
          <select
            className={`${selectStyles} ${errors.subject ? errorInputStyles : ""}`}
            defaultValue=""
            {...register("subject")}
          >
            <option value="" disabled>
              Select a subject
            </option>
            {SUBJECTS.map((subject) => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label="Message" error={errors.message?.message} required>
        <textarea
          rows={5}
          placeholder="How can we help you?"
          className={`${inputStyles} resize-none ${errors.message ? errorInputStyles : ""}`}
          {...register("message")}
        />
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-[var(--radius-sm)] bg-google-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-google-blue/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-google-blue/40 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
