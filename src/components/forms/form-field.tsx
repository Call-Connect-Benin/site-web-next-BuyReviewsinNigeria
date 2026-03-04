"use client";

import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode;
  required?: boolean;
  className?: string;
}

export function FormField({
  label,
  error,
  children,
  required = false,
  className = "",
}: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      <label className="text-sm font-medium text-text-primary">
        {label}
        {required && (
          <span className="ml-0.5 text-google-red" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="text-xs text-google-red" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
