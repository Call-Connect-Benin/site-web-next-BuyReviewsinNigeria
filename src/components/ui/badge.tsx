import React from "react";

type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "outline";
type BadgeSize = "sm" | "md";

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-bg-dark text-text-secondary",
  primary: "bg-google-blue/10 text-google-blue",
  success: "bg-google-green/10 text-google-green",
  warning: "bg-google-yellow/10 text-google-yellow",
  danger: "bg-google-red/10 text-google-red",
  outline: "bg-transparent text-text-secondary border border-border",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export function Badge({
  variant = "default",
  size = "sm",
  children,
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center font-heading font-medium rounded-full ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
}
