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

export function Flag(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  );
}

export function Quote(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3z" />
    </svg>
  );
}

export function Store(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <path d="M3 9l1-4h16l1 4" />
      <path d="M3 9v1a3 3 0 006 0V9" />
      <path d="M9 9v1a3 3 0 006 0V9" />
      <path d="M15 9v1a3 3 0 006 0V9" />
      <path d="M4 22V12" />
      <path d="M20 22V12" />
      <path d="M4 22h16" />
      <path d="M10 17h4v5h-4z" />
    </svg>
  );
}

export function Utensils(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 00-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />
    </svg>
  );
}

export function Hotel(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <path d="M3 7v11" />
      <path d="M3 18h18" />
      <path d="M21 18V11a2 2 0 00-2-2H10v9" />
      <path d="M3 11h7" />
      <circle cx="6.5" cy="13.5" r="1.5" />
    </svg>
  );
}

export function Hospital(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M12 7v10" />
      <path d="M7 12h10" />
    </svg>
  );
}

export function Tooth(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <path d="M12 2C9.5 2 7 3.5 6 5.5c-1.5 3-.5 5.5 0 8 .5 2.5 0 5 1 7s2 1.5 3-1c.5-1.5 1-2 2-2s1.5.5 2 2c1 2.5 2 3 3 1s.5-4.5 1-7c.5-2.5 1.5-5 0-8C17 3.5 14.5 2 12 2z" />
    </svg>
  );
}

export function Bank(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <path d="M3 21h18" />
      <path d="M3 10h18" />
      <path d="M12 2L2 10h20L12 2z" />
      <path d="M5 10v11" />
      <path d="M19 10v11" />
      <path d="M9 10v11" />
      <path d="M15 10v11" />
    </svg>
  );
}

export function PartyPopper(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <path d="M5.8 11.3L2 22l10.7-3.79" />
      <path d="M4 3h.01" />
      <path d="M22 8h.01" />
      <path d="M15 2h.01" />
      <path d="M22 20h.01" />
      <path d="M22 2l-2.24.75a1 1 0 00-.35 1.68l.83.83a1 1 0 001.68-.35L22 2z" />
      <path d="M8.5 2.75L10.13 5a1 1 0 01-.88 1.5H6.5a1 1 0 01-.88-1.5L7.25 2.75" />
      <path d="M21.13 15.88L19 14.25a1 1 0 00-1.5.88v2.75a1 1 0 001.5.88l2.13-1.63" />
      <path d="M5.8 11.3l4.97 1.86a2 2 0 002.47-1.19l.1-.27a2 2 0 00-1.08-2.58L7.28 7.06" />
      <path d="M12.7 9.12l1.86 4.97" />
    </svg>
  );
}

export function Laptop(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" ry="2" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

export function Lock(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

export function InfoCircle(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

export function XCircle(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  );
}

export function ArrowLeft(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

export function ChevronLeft(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

export function Play(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

export function Download(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function Upload(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  );
}

export function Filter(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

export function Sort(props: SvgProps) {
  return (
    <svg {...defaults} className="h-6 w-6" {...props}>
      <path d="M11 5h10" />
      <path d="M11 9h7" />
      <path d="M11 13h4" />
      <path d="M3 17l3 3 3-3" />
      <path d="M6 18V4" />
    </svg>
  );
}
