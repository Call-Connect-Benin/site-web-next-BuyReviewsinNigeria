"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, LogoIcon } from "@/components/icons/logo";
import { mainNavigation, mobileNavigation } from "@/data/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "@/components/icons";
import { iconMap } from "@/components/icons";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <LogoIcon className="h-8 w-8 sm:hidden" />
            <Logo className="hidden h-8 w-auto sm:block" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {mainNavigation.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.megaMenu ? setActiveMega(item.label) : undefined
                }
                onMouseLeave={() => setActiveMega(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    pathname.startsWith(item.href) && item.href !== "/"
                      ? "text-google-blue"
                      : "text-text-primary hover:text-google-blue"
                  }`}
                >
                  {item.label}
                  {item.megaMenu && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform ${
                        activeMega === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </Link>

                {/* Mega menu */}
                {item.megaMenu && activeMega === item.label && (
                  <div className="absolute left-1/2 top-full z-50 w-[700px] -translate-x-1/2 pt-2">
                    <div className="grid grid-cols-3 gap-6 rounded-xl border border-border bg-white p-6 shadow-xl">
                      {item.megaMenu.map((col) => (
                        <div key={col.title}>
                          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-secondary">
                            {col.title}
                          </h3>
                          <ul className="space-y-1">
                            {col.links.map((link) => {
                              const Icon = link.icon
                                ? iconMap[link.icon]
                                : null;
                              return (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className="group flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-bg"
                                    onClick={() => setActiveMega(null)}
                                  >
                                    {Icon && (
                                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-text-secondary group-hover:text-google-blue" />
                                    )}
                                    <div>
                                      <div className="text-sm font-medium text-text-primary group-hover:text-google-blue">
                                        {link.label}
                                      </div>
                                      {link.description && (
                                        <div className="mt-0.5 text-xs text-text-secondary">
                                          {link.description}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/get-started/"
              className="hidden rounded-lg bg-google-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-google-blue/90 sm:inline-flex"
            >
              Get Started
            </Link>
            <button
              type="button"
              className="rounded-lg p-2 text-text-primary lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="space-y-1">
              {mobileNavigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      pathname === link.href
                        ? "bg-google-blue/5 text-google-blue"
                        : "text-text-primary hover:bg-bg"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                    <ArrowRight className="h-4 w-4 text-text-secondary" />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 border-t border-border pt-4">
              <Link
                href="/get-started/"
                className="block rounded-lg bg-google-blue py-3 text-center text-base font-semibold text-white"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
