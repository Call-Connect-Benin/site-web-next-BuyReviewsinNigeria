import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { footerColumns, footerBottomLinks, contactInfo } from "@/data/navigation";
import { Phone, Mail } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {/* Logo + contact column */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/">
              <Logo className="h-8 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-text-secondary">
              Nigeria&apos;s leading platform for authentic Google Reviews from
              certified Local Guides.
            </p>
            <div className="mt-4 space-y-2">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-google-blue"
              >
                <Phone className="h-4 w-4" />
                {contactInfo.phone}
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-google-blue"
              >
                <Mail className="h-4 w-4" />
                {contactInfo.email}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-text-primary">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-google-blue"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-sm text-text-secondary">
            &copy; {new Date().getFullYear()} BuyReviewsInNigeria.com. All
            rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {footerBottomLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary transition-colors hover:text-google-blue"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
