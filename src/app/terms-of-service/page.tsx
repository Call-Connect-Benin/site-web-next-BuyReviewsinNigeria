import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for BuyReviewsInNigeria.com. Read our terms before using our services.",
  alternates: { canonical: "https://buyreviewsinnigeria.com/terms-of-service/" },
  robots: { index: false, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="font-heading text-4xl font-bold text-text-primary">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-text-secondary">Last updated: March 2026</p>

        <div className="mt-12 space-y-8 text-text-secondary [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text-primary [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          <div>
            <h2>1. Service Description</h2>
            <p>BuyReviewsInNigeria.com connects businesses with certified Google Local Guides who provide authentic reviews based on genuine experiences with your business.</p>
          </div>
          <div>
            <h2>2. Eligibility</h2>
            <p>You must be a legally registered business in Nigeria or operating within Nigeria to use our services. You must be at least 18 years old.</p>
          </div>
          <div>
            <h2>3. Service Delivery</h2>
            <ul>
              <li>Reviews are delivered over the timeframe specified in your package</li>
              <li>Delivery timelines are estimates and may vary</li>
              <li>We reserve the right to refuse service</li>
              <li>All reviews are written by real people based on genuine experiences</li>
            </ul>
          </div>
          <div>
            <h2>4. Payment Terms</h2>
            <p>Payment is required in full before service delivery begins. All prices are in Nigerian Naira (NGN).</p>
          </div>
          <div>
            <h2>5. Retention Guarantee</h2>
            <p>We provide a 30-day retention guarantee. See our <Link href="/refund-policy/" className="text-google-blue hover:underline">Refund Policy</Link> for full details.</p>
          </div>
          <div>
            <h2>6. Limitations</h2>
            <ul>
              <li>We do not guarantee specific star ratings or review content</li>
              <li>We do not guarantee changes in search ranking</li>
              <li>We are not responsible for Google algorithm changes</li>
            </ul>
          </div>
          <div>
            <h2>7. Contact</h2>
            <p>For questions, please <Link href="/contact/" className="text-google-blue hover:underline">contact us</Link>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
