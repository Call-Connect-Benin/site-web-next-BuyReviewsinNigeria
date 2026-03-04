"use client";

import { AlertTriangle } from "@/components/icons";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[60vh] items-center bg-bg">
      <div className="mx-auto max-w-md px-4 py-24 text-center sm:px-6">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-google-red/10">
          <AlertTriangle className="h-10 w-10 text-google-red" />
        </div>

        <h1 className="mt-8 font-heading text-3xl font-bold text-text-primary">
          Something Went Wrong
        </h1>
        <p className="mt-4 text-text-secondary">
          An unexpected error occurred. Please try again.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-8 rounded-lg bg-google-blue px-6 py-3 font-semibold text-white hover:bg-google-blue/90"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
