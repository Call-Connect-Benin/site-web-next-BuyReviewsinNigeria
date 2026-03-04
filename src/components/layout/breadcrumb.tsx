import Link from "next/link";
import { ChevronRight } from "@/components/icons";
import type { BreadcrumbItem } from "@/lib/internal-links";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol
        className="flex flex-wrap items-center gap-1 text-sm text-text-secondary"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={item.href}
              className="flex items-center gap-1"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-border" />
              )}
              {isLast ? (
                <span
                  className="font-medium text-text-primary"
                  itemProp="name"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-google-blue"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
