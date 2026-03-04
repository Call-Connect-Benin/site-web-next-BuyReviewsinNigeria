import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonSharedProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = ButtonSharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonSharedProps> & {
    href?: undefined;
  };

type ButtonAsLink = ButtonSharedProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonSharedProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-google-blue text-white hover:bg-google-blue/90 focus-visible:ring-google-blue/50",
  secondary:
    "bg-white text-text-primary border border-border hover:bg-bg-dark focus-visible:ring-border",
  outline:
    "bg-transparent text-google-blue border border-google-blue hover:bg-google-blue/5 focus-visible:ring-google-blue/50",
  ghost:
    "bg-transparent text-text-secondary hover:bg-bg-dark hover:text-text-primary focus-visible:ring-border",
  danger:
    "bg-google-red text-white hover:bg-google-red/90 focus-visible:ring-google-red/50",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm gap-1.5 rounded-sm",
  md: "px-5 py-2.5 text-base gap-2 rounded-md",
  lg: "px-7 py-3.5 text-lg gap-2.5 rounded-lg",
};

function Spinner() {
  return (
    <svg
      className="animate-spin h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

function resolveClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className: string
) {
  const base =
    "inline-flex items-center justify-center font-heading font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  return `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
}

function ButtonAsLinkComponent({
  href,
  variant = "primary",
  size = "md",
  icon,
  isLoading = false,
  children,
  className = "",
  ...rest
}: ButtonAsLink) {
  const classes = resolveClasses(variant, size, className);
  return (
    <Link href={href} className={classes} {...rest}>
      {isLoading ? <Spinner /> : icon ? icon : null}
      {children}
    </Link>
  );
}

function ButtonAsButtonComponent({
  variant = "primary",
  size = "md",
  icon,
  isLoading = false,
  children,
  className = "",
  disabled,
  href: _,
  ...rest
}: ButtonAsButton) {
  const classes = resolveClasses(variant, size, className);
  return (
    <button className={classes} disabled={isLoading || disabled} {...rest}>
      {isLoading ? <Spinner /> : icon ? icon : null}
      {children}
    </button>
  );
}

export function Button(props: ButtonProps) {
  if (props.href) {
    return <ButtonAsLinkComponent {...(props as ButtonAsLink)} />;
  }
  return <ButtonAsButtonComponent {...(props as ButtonAsButton)} />;
}
