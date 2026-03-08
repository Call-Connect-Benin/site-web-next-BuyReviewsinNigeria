import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { buildBreadcrumbs } from "@/lib/internal-links";
import { PromoForm } from "@/components/forms/promo-form";
import { Phone, Mail, MapPin, Globe } from "@/components/icons";
import { contactInfo } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with BuyReviewsInNigeria. Contact us for pricing, support, or partnership inquiries.",
  alternates: { canonical: "https://buyreviewsinnigeria.com/contact/" },
};

const contactColorBgs = [
  "rounded-lg bg-google-blue/5 p-4",
  "rounded-lg bg-google-red/5 p-4",
  "rounded-lg bg-google-green/5 p-4",
  "rounded-lg bg-google-yellow/5 p-4",
];

export default function ContactPage() {
  const breadcrumbs = buildBreadcrumbs([
    { label: "Contact", href: "/contact/" },
  ]);

  return (
    <main className="bg-bg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbs} />
      </div>

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute inset-0 dot-pattern-light" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-text-primary">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              Have a question or ready to get started? Reach out to our team.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-xl font-semibold text-text-primary">
                Get In Touch
              </h2>
              <div className="mt-6 space-y-4">
                <div className={`flex items-start gap-3 ${contactColorBgs[0]}`}>
                  <Phone className="mt-0.5 h-5 w-5 text-google-blue" />
                  <div>
                    <p className="font-medium text-text-primary">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-sm text-text-secondary hover:text-google-blue">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${contactColorBgs[1]}`}>
                  <Mail className="mt-0.5 h-5 w-5 text-google-red" />
                  <div>
                    <p className="font-medium text-text-primary">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-sm text-text-secondary hover:text-google-blue">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${contactColorBgs[2]}`}>
                  <Globe className="mt-0.5 h-5 w-5 text-google-green" />
                  <div>
                    <p className="font-medium text-text-primary">WhatsApp</p>
                    <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-google-blue">
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
                <div className={`flex items-start gap-3 ${contactColorBgs[3]}`}>
                  <MapPin className="mt-0.5 h-5 w-5 text-google-yellow" />
                  <div>
                    <p className="font-medium text-text-primary">Location</p>
                    <p className="text-sm text-text-secondary">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="glass-dark shadow-xl rounded-xl overflow-hidden">
                <div className="h-1 rounded-t-xl bg-gradient-to-r from-google-blue via-google-red to-google-green" />
                <div className="p-8">
                  <div className="mb-4 inline-block rounded-full bg-google-green/10 px-3 py-1 text-sm font-semibold text-google-green">
                    Limited Offer
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-text-primary">
                    Get 5 Free Google Reviews with Your First Order*
                  </h2>
                  <div className="mt-6">
                    <PromoForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
