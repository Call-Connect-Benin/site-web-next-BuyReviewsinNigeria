import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund policy for BuyReviewsInNigeria.com. Our 30-day retention guarantee and refund terms.",
  alternates: { canonical: "https://buyreviewsinnigeria.com/refund-policy/" },
  robots: { index: false, follow: true },
};

export default function RefundPolicyPage() {
  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="font-heading text-4xl font-bold text-text-primary">
          Refund Policy
        </h1>
        <p className="mt-4 text-sm text-text-secondary">Last updated: March 2026</p>

        <div className="mt-12 space-y-8 text-text-secondary [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text-primary [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          <div>
            <h2>30-Day Retention Guarantee</h2>
            <p>We stand behind the quality and authenticity of every review we deliver. Our 30-day retention guarantee means:</p>
            <ul>
              <li>If any review is removed by Google within 30 days of posting, we will replace it at no additional cost</li>
              <li>Replacement reviews are delivered within 2 weeks of the reported removal</li>
              <li>You must notify us within 7 days of noticing a review removal</li>
            </ul>
          </div>
          <div>
            <h2>Full Refund Conditions</h2>
            <p>A full refund is available if:</p>
            <ul>
              <li>We are unable to begin your order within 14 days of payment</li>
              <li>We cannot fulfill the agreed-upon number of reviews</li>
              <li>You cancel before any reviews have been posted</li>
            </ul>
          </div>
          <div>
            <h2>Partial Refund Conditions</h2>
            <p>A partial refund (for undelivered reviews) is available if:</p>
            <ul>
              <li>We are unable to complete your full order after reviews have started posting</li>
              <li>Delivery exceeds the agreed timeline by more than 30 days</li>
            </ul>
          </div>
          <div>
            <h2>Non-Refundable Conditions</h2>
            <ul>
              <li>Reviews removed by Google after the 30-day guarantee period</li>
              <li>Business profile changes made by you that affect existing reviews</li>
              <li>Google account suspensions not caused by our service</li>
              <li>Dissatisfaction with review content (we offer revisions instead)</li>
            </ul>
          </div>
          <div>
            <h2>How to Request a Refund</h2>
            <p>To request a refund or replacement, <Link href="/contact/" className="text-google-blue hover:underline">contact us</Link> with your order details and reason for the request. We aim to process all refund requests within 5 business days.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
