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

export function Car(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M5 17h14M5 17a2 2 0 01-2-2v-4l2.58-5.16A2 2 0 017.37 4h9.26a2 2 0 011.79 1.11L21 10v5a2 2 0 01-2 2M5 17a2 2 0 00-2 2v1h2.59a2 2 0 001.41-.59l.83-.83" />
      <path d="M19 17a2 2 0 012 2v1h-2.59a2 2 0 01-1.41-.59l-.83-.83" />
      <circle cx="7.5" cy="17" r="0.5" fill="currentColor" />
      <circle cx="16.5" cy="17" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function Wrench(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

export function Key(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

export function Scale(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <line x1="12" y1="3" x2="12" y2="21" />
      <polyline points="1 12 5 8 9 12" />
      <path d="M1 12a4 4 0 008 0" />
      <polyline points="15 12 19 8 23 12" />
      <path d="M15 12a4 4 0 008 0" />
      <line x1="5" y1="8" x2="19" y2="8" />
    </svg>
  );
}

export function Smile(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" y1="9" x2="9.01" y2="9" />
      <line x1="15" y1="9" x2="15.01" y2="9" />
    </svg>
  );
}

export function Pill(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M10.5 1.5l-8 8a5.66 5.66 0 008 8l8-8a5.66 5.66 0 00-8-8z" />
      <line x1="6" y1="14" x2="14" y2="6" />
    </svg>
  );
}

export function GraduationCap(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M22 10l-10-5L2 10l10 5 10-5z" />
      <path d="M6 12v5c0 2 3 4 6 4s6-2 6-4v-5" />
      <line x1="22" y1="10" x2="22" y2="16" />
    </svg>
  );
}

export function CreditCard(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
      <line x1="1" y1="10" x2="23" y2="10" />
    </svg>
  );
}

export function ShoppingCart(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" />
    </svg>
  );
}

export function Scissors(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

export function Dumbbell(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M6.5 6.5h11M6.5 17.5h11" />
      <rect x="2" y="5" width="4.5" height="14" rx="1" />
      <rect x="17.5" y="5" width="4.5" height="14" rx="1" />
      <line x1="12" y1="5" x2="12" y2="19" />
    </svg>
  );
}

export function Church(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 2v5" />
      <path d="M9.5 4.5h5" />
      <path d="M12 7l7 5v10H5V12l7-5z" />
      <path d="M10 22v-4a2 2 0 014 0v4" />
    </svg>
  );
}

export function Calendar(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function Truck(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

export function Monitor(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

export function Shirt(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10h12V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z" />
    </svg>
  );
}

export function HardHat(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M2 18h20v2H2z" />
      <path d="M4 18v-3a8 8 0 0116 0v3" />
      <path d="M12 3v4" />
      <path d="M8 18v-2" />
      <path d="M16 18v-2" />
    </svg>
  );
}

export function CameraIcon(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

export function Camera(props: SvgProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
