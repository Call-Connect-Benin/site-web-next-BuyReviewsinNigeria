import type React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  showText?: boolean;
}

/** Full logo: "BuyReviews" in Google colors + "inAfrica" in green */
export function Logo({ showText = true, ...props }: LogoProps) {
  if (!showText) {
    return <LogoIcon {...props} />;
  }

  return (
    <svg
      viewBox="0 0 300 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BuyReviewsInAfrica"
      role="img"
      {...props}
    >
      {/* "B" - Google Blue */}
      <text x="0" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="700" fontSize="28" fill="#4285F4">B</text>
      {/* "u" - Google Blue */}
      <text x="18" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="700" fontSize="28" fill="#4285F4">u</text>
      {/* "y" - Google Red */}
      <text x="36" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="700" fontSize="28" fill="#EA4335">y</text>
      {/* "R" - Google Yellow */}
      <text x="52" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="700" fontSize="28" fill="#FBBC04">R</text>
      {/* "e" - Google Blue */}
      <text x="70" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="700" fontSize="28" fill="#4285F4">e</text>
      {/* "v" - Google Green */}
      <text x="86" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="700" fontSize="28" fill="#34A853">v</text>
      {/* "i" - Google Red */}
      <text x="102" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="700" fontSize="28" fill="#EA4335">i</text>
      {/* "e" - Google Blue */}
      <text x="112" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="700" fontSize="28" fill="#4285F4">e</text>
      {/* "w" - Google Yellow */}
      <text x="128" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="700" fontSize="28" fill="#FBBC04">w</text>
      {/* "s" - Google Green */}
      <text x="148" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="700" fontSize="28" fill="#34A853">s</text>
      {/* "in" - text secondary */}
      <text x="166" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="400" fontSize="28" fill="#5F6368">in</text>
      {/* "Africa" - Google Green */}
      <text x="192" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="700" fontSize="28" fill="#34A853">Africa</text>
    </svg>
  );
}

/** Icon-only logo: "BR" monogram in Google colors */
export function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="BuyReviewsInAfrica"
      role="img"
      {...props}
    >
      {/* Background circle */}
      <rect width="40" height="40" rx="8" fill="#4285F4" />
      {/* "B" */}
      <text x="4" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="800" fontSize="26" fill="white">B</text>
      {/* "R" */}
      <text x="20" y="30" fontFamily="var(--font-heading), Inter, sans-serif" fontWeight="800" fontSize="26" fill="#FBBC04">R</text>
    </svg>
  );
}
