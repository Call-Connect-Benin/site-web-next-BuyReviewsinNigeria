import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement>;

const defaults = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ChevronRight(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export function ChevronDown(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function ArrowRight(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function Menu(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function X(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
