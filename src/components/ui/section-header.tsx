import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
      {badge && (
        <div className="mb-4">
          <Badge variant="primary" size="md">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
