import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function Container({
  className = "",
  children,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}
