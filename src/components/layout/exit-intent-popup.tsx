"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { contactInfo } from "@/data/navigation";

const STORAGE_KEY = "exit-intent-dismissed";
const COOLDOWN_HOURS = 24;
const MOBILE_IDLE_MS = 30_000; // 30s of idle on mobile triggers popup

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const dismiss = useCallback(() => {
    setIsOpen(false);
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
  }, []);

  useEffect(() => {
    const lastDismissed = localStorage.getItem(STORAGE_KEY);
    if (lastDismissed) {
      const elapsed = Date.now() - parseInt(lastDismissed, 10);
      if (elapsed < COOLDOWN_HOURS * 60 * 60 * 1000) return;
    }

    let triggered = false;

    const trigger = () => {
      if (!triggered) {
        triggered = true;
        setIsOpen(true);
      }
    };

    // Desktop: mouse leaves toward top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) trigger();
    };

    // Mobile: back button / visibility change (user switching tabs)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") trigger();
    };

    // Mobile fallback: idle timeout (user stalls = about to leave)
    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    const resetIdle = () => {
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(trigger, MOBILE_IDLE_MS);
    };

    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    const activationTimer = setTimeout(() => {
      if (isMobile) {
        document.addEventListener("visibilitychange", handleVisibilityChange);
        // Start idle detection
        resetIdle();
        window.addEventListener("scroll", resetIdle, { passive: true });
        window.addEventListener("touchstart", resetIdle, { passive: true });
      } else {
        document.addEventListener("mouseleave", handleMouseLeave);
      }
    }, 5000);

    return () => {
      clearTimeout(activationTimer);
      if (idleTimer) clearTimeout(idleTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("scroll", resetIdle);
      window.removeEventListener("touchstart", resetIdle);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm sm:items-center sm:p-4"
      onClick={(e) => {
        // Close on backdrop click
        if (e.target === e.currentTarget) dismiss();
      }}
    >
      <div className="relative w-full max-w-2xl rounded-t-2xl bg-white shadow-2xl sm:rounded-2xl">
        {/* Close button - large and accessible on mobile */}
        <button
          onClick={dismiss}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700 sm:right-4 sm:top-4 sm:h-8 sm:w-8"
          aria-label="Close"
        >
          <svg className="h-6 w-6 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Drag handle for mobile */}
        <div className="flex justify-center pt-3 sm:hidden">
          <div className="h-1 w-10 rounded-full bg-gray-300" />
        </div>

        <div className="max-h-[85vh] overflow-y-auto p-5 sm:p-8">
          {/* Badge */}
          <div className="mb-3 inline-block rounded-full bg-google-green/10 px-4 py-1.5 text-sm font-bold text-google-green">
            🎁 Wait! Don&apos;t Leave Yet
          </div>

          <h2 className="font-heading text-xl font-bold text-text-primary sm:text-3xl">
            Get <span className="text-google-blue">5 Free Google Reviews</span> with Your First Order!
          </h2>

          <p className="mt-2 text-sm text-text-secondary sm:mt-3 sm:text-base">
            Watch how we help Nigerian businesses grow with authentic reviews from certified Local Guides.
          </p>

          {/* Loom Video */}
          <div className="mt-4 overflow-hidden rounded-xl shadow-lg sm:mt-5" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src="https://www.loom.com/embed/07d6d406731748b795f7ff96c105bc00"
              allow="fullscreen"
              className="absolute inset-0 h-full w-full border-0"
              title="BuyReviewsInNigeria Presentation"
            />
          </div>

          {/* CTA Buttons - only 2 options: Contact (WhatsApp) or Buy (Get Started) */}
          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
            <Link
              href="/get-started/"
              onClick={dismiss}
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-google-blue px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-google-blue/90 hover:shadow-lg"
            >
              🚀 Get Started Now
            </Link>
            <a
              href={contactInfo.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3.5 text-base font-semibold text-white shadow-md transition-all hover:bg-[#20bd5a] hover:shadow-lg"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Contact Us
            </a>
          </div>

          <p className="mt-3 text-center text-xs text-text-secondary sm:mt-4">
            *5 free reviews valid for new customers only. No credit card required.
          </p>
        </div>
      </div>
    </div>
  );
}
