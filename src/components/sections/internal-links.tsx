import Link from "next/link";
import type { InternalLinkGroup } from "@/types";
import { ArrowRight } from "@/components/icons";

interface InternalLinksProps {
  groups: InternalLinkGroup[];
  title?: string;
}

export function InternalLinks({ groups, title = "Explore More" }: InternalLinksProps) {
  return (
    <section className="border-t border-border bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="font-heading text-2xl font-bold text-text-primary">
          {title}
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary">
                {group.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1.5 text-sm text-text-primary transition-colors hover:text-google-blue"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-border transition-colors group-hover:text-google-blue" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
