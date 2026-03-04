import { Star, StarHalf, StarOutline } from "@/components/icons";

type StarSize = "sm" | "md" | "lg";

interface StarRatingProps {
  rating: number;
  size?: StarSize;
  showValue?: boolean;
}

const sizeMap: Record<StarSize, { icon: number; text: string }> = {
  sm: { icon: 16, text: "text-sm" },
  md: { icon: 20, text: "text-base" },
  lg: { icon: 24, text: "text-lg" },
};

export function StarRating({
  rating,
  size = "md",
  showValue = false,
}: StarRatingProps) {
  const { icon, text } = sizeMap[size];
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="inline-flex items-center gap-0.5">
      {Array.from({ length: fullStars }, (_, i) => (
        <Star key={`full-${i}`} width={icon} height={icon} />
      ))}
      {hasHalf && <StarHalf width={icon} height={icon} />}
      {Array.from({ length: emptyStars }, (_, i) => (
        <StarOutline key={`empty-${i}`} width={icon} height={icon} />
      ))}
      {showValue && (
        <span className={`ml-1.5 font-heading font-semibold text-text-primary ${text}`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
