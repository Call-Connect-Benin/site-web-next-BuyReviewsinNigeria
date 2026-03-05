export const googleColors = ["blue", "red", "yellow", "green"] as const;
export type GoogleColor = (typeof googleColors)[number];

export const colorConfig = {
  blue: {
    bg: "bg-google-blue/10",
    bgGradient: "bg-gradient-to-br from-google-blue/15 to-google-blue/5",
    text: "text-google-blue",
    border: "border-google-blue",
    borderTop: "border-t-google-blue",
    borderLeft: "border-l-google-blue",
    glow: "shadow-[0_0_16px_rgba(66,133,244,0.2)]",
    badgeBg: "bg-google-blue/8",
    gradient: "from-google-blue to-google-blue/70",
  },
  red: {
    bg: "bg-google-red/10",
    bgGradient: "bg-gradient-to-br from-google-red/15 to-google-red/5",
    text: "text-google-red",
    border: "border-google-red",
    borderTop: "border-t-google-red",
    borderLeft: "border-l-google-red",
    glow: "shadow-[0_0_16px_rgba(234,67,53,0.2)]",
    badgeBg: "bg-google-red/8",
    gradient: "from-google-red to-google-red/70",
  },
  yellow: {
    bg: "bg-google-yellow/10",
    bgGradient: "bg-gradient-to-br from-google-yellow/15 to-google-yellow/5",
    text: "text-google-yellow",
    border: "border-google-yellow",
    borderTop: "border-t-google-yellow",
    borderLeft: "border-l-google-yellow",
    glow: "shadow-[0_0_16px_rgba(251,188,4,0.2)]",
    badgeBg: "bg-google-yellow/8",
    gradient: "from-google-yellow to-google-yellow/70",
  },
  green: {
    bg: "bg-google-green/10",
    bgGradient: "bg-gradient-to-br from-google-green/15 to-google-green/5",
    text: "text-google-green",
    border: "border-google-green",
    borderTop: "border-t-google-green",
    borderLeft: "border-l-google-green",
    glow: "shadow-[0_0_16px_rgba(52,168,83,0.2)]",
    badgeBg: "bg-google-green/8",
    gradient: "from-google-green to-google-green/70",
  },
} as const;

export function getColorForIndex(index: number) {
  const key = index % googleColors.length;
  const color: GoogleColor = key === 0 ? "blue" : key === 1 ? "red" : key === 2 ? "yellow" : "green";
  return colorConfig[color];
}
