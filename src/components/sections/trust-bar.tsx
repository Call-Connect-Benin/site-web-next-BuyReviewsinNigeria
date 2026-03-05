"use client";

import { trustBarItems } from "@/data/homepage";
import { iconMap } from "@/components/icons";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-gradient-to-r from-google-blue/5 via-white to-google-green/5 py-6 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop: static centered flex layout */}
        <div className="hidden md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-4 md:gap-y-3">
          {trustBarItems.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.text}
                className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text-secondary shadow-sm shrink-0"
              >
                <Icon className="h-5 w-5 text-google-blue" />
                <span>{item.text}</span>
              </div>
            );
          })}
        </div>

        {/* Mobile: marquee animation */}
        <div className="md:hidden">
          <div className="flex animate-marquee gap-4">
            {[...trustBarItems, ...trustBarItems].map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={`${item.text}-${index}`}
                  className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium text-text-secondary shadow-sm shrink-0"
                >
                  <Icon className="h-5 w-5 text-google-blue" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
