import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for BuyReviewsInNigeria.com. How we collect, use, and protect your data.",
  alternates: { canonical: "https://buyreviewsinnigeria.com/privacy-policy/" },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-bg">
      <section className="mx-auto max-w-3xl px-6 py-24">
        <h1 className="font-heading text-4xl font-bold text-text-primary">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-text-secondary">
          Last updated: March 2026
        </p>

        <div className="mt-12 space-y-8 text-text-secondary [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-text-primary [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
          <div>
            <h2>1. Information We Collect</h2>
            <p>
              When you use BuyReviewsInNigeria.com, we may collect the following
              information:
            </p>
            <ul>
              <li>Business name and contact information (name, email, phone)</li>
              <li>Google Maps URL and business location</li>
              <li>Payment information (processed securely through third-party providers)</li>
              <li>Communication records (emails, form submissions)</li>
              <li>Website usage data (via analytics cookies)</li>
            </ul>
          </div>

          <div>
            <h2>2. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>Process and fulfill your review orders</li>
              <li>Communicate about your order status</li>
              <li>Assign Local Guides to your business location</li>
              <li>Send relevant marketing communications (with consent)</li>
              <li>Improve our services and website experience</li>
            </ul>
          </div>

          <div>
            <h2>3. Data Sharing</h2>
            <p>
              We share your business details only with assigned Local Guides on a
              need-to-know basis for the purpose of fulfilling your order. We do
              not sell, rent, or trade your personal information to third parties.
            </p>
          </div>

          <div>
            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to
              protect your data against unauthorized access, alteration, or
              destruction.
            </p>
          </div>

          <div>
            <h2>5. Cookies</h2>
            <p>
              Our website uses cookies for analytics and functionality purposes.
              You can control cookie settings through your browser preferences.
            </p>
          </div>

          <div>
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data we hold</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </div>

          <div>
            <h2>7. Contact Us</h2>
            <p>
              For privacy-related inquiries, please{" "}
              <Link href="/contact/" className="text-google-blue hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
