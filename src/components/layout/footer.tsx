import Link from "next/link";
import { Logo } from "@/components/icons/logo";
import { footerColumns, footerBottomLinks, contactInfo } from "@/data/navigation";
import { Phone, Mail, Globe, MapPin, Star } from "@/components/icons";

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
              certified Local Guides. A service by{" "}
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-google-blue hover:underline"
              >
                {contactInfo.company}
              </a>
              , a digital marketing agency with offices in France and Canada.
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
              <a
                href={contactInfo.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-text-secondary hover:text-google-blue"
              >
                <Globe className="h-4 w-4" />
                lannkin.com
              </a>
              <div className="flex items-start gap-2 text-sm text-text-secondary">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{contactInfo.companyAddress}</span>
              </div>
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

      {/* Trust Badge */}
      <div className="border-t border-border bg-gradient-to-r from-google-blue/5 via-transparent to-google-green/5">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5" />
            ))}
          </div>
          <p className="text-sm font-semibold text-text-primary">
            4.9/5
          </p>
          <p className="text-sm text-text-secondary">
            based on <span className="font-semibold text-text-primary">650+ reviews</span> from verified clients
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <div className="text-center text-sm text-text-secondary sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} BuyReviewsInNigeria.com. All
              rights reserved.
            </p>
            <p className="mt-1 text-xs text-text-secondary/70">
              {contactInfo.company} &middot; NEQ: {contactInfo.neq} &middot;{" "}
              {contactInfo.companyAddress}
            </p>
          </div>
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
