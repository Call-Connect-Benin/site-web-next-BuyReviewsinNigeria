import React from "react";

type DivProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className = "", children, ...props }: DivProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm hover:shadow-hover transition-shadow duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }: DivProps) {
  return (
    <div className={`px-6 pt-6 pb-0 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }: DivProps) {
  return (
    <div className={`px-6 py-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className = "", children, ...props }: DivProps) {
  return (
    <div
      className={`px-6 pb-6 pt-0 border-t border-border ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
