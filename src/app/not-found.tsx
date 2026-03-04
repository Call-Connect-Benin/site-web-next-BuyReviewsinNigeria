import Link from "next/link";
import { Search, Home, ArrowRight } from "@/components/icons";

const popularLinks = [
  { label: "Google Review Collection", href: "/services/google-review-collection/" },
  { label: "View Pricing", href: "/pricing/" },
  { label: "Industries We Serve", href: "/industries/" },
  { label: "Locations", href: "/locations/" },
  { label: "How It Works", href: "/how-it-works/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Contact Us", href: "/contact/" },
  { label: "Get Started", href: "/get-started/" },
];

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center bg-bg">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-google-blue/10">
          <Search className="h-10 w-10 text-google-blue" />
        </div>

        <h1 className="mt-8 font-heading text-4xl font-bold text-text-primary">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-google-blue px-6 py-3 font-semibold text-white hover:bg-google-blue/90"
          >
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="font-heading text-lg font-semibold text-text-primary">
            Popular Pages
          </h2>
          <ul className="mt-4 space-y-2">
            {popularLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1 text-sm text-google-blue hover:underline"
                >
                  <ArrowRight className="h-3 w-3" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
