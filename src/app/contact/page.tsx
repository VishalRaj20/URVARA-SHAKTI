import React from 'react';
import { siteConfig } from '@/data/site';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';
import { ContactForm } from '@/components/contact/ContactForm';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
} from 'lucide-react';

export const metadata = {
  title: 'Contact Us — Get in Touch with Urvara Shakti',
  description:
    'Contact Urvara Shakti for product inquiries, dealer applications, bulk orders, or technical soil support. Address, phone, email, WhatsApp.',
};

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-cream-dark/40 border-b border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <MessageSquare className="w-4 h-4" />
              <span>Reach Out To Us</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary font-sans">
              Contact Urvara Shakti
            </h1>
            <p className="text-lg text-brandText-muted leading-relaxed">
              Have questions about organic compost, soil testing, dealership options, or bulk tonnage orders? We are here to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl font-bold text-primary font-sans border-b border-brandBorder/60 pb-3">
                Direct Contact Details
              </h2>

              <div className="bg-cream border border-brandBorder rounded-2xl p-6 space-y-5 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-soil uppercase">Registered Office</h3>
                    <p className="text-sm font-medium text-brandText pt-0.5">
                      {siteConfig.contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-brandBorder/60">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-soil uppercase">Phone Line</h3>
                    <p className="text-sm font-medium text-brandText pt-0.5">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-brandBorder/60">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-soil uppercase">Email Address</h3>
                    <p className="text-sm font-medium text-brandText pt-0.5">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-brandBorder/60">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-soil uppercase">Operating Hours</h3>
                    <p className="text-sm font-medium text-brandText pt-0.5">
                      {siteConfig.contact.operatingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp CTA */}
              <div className="bg-primary text-cream rounded-3xl p-6 space-y-3 shadow-md">
                <h3 className="text-lg font-bold font-sans">
                  Instant Support via WhatsApp
                </h3>
                <p className="text-xs text-cream/80">
                  Chat directly with our team for quick responses to orders and technical questions.
                </p>
                <WhatsAppBuyButton
                  type="general"
                  customText="Chat Now on WhatsApp"
                  variant="secondary"
                  className="w-full text-xs py-3"
                />
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-7 bg-cream border border-brandBorder rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
              <h2 className="text-2xl font-bold text-primary font-sans border-b border-brandBorder/60 pb-3">
                Send Us a Message
              </h2>
              <p className="text-xs text-brandText-muted">
                Submitting this form composes a pre-filled WhatsApp message or opens your email client directly.
              </p>

              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Embed Facade */}
      <section className="py-12 bg-cream border-t border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-surface border border-brandBorder rounded-3xl p-8 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-soil/15 text-soil flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-primary font-sans">
              Headquarters Location Map
            </h3>
            <p className="text-sm text-brandText-muted max-w-md mx-auto">
              {siteConfig.contact.address}
            </p>
            <div className="pt-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(siteConfig.contact.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-soil text-cream hover:bg-soil-dark px-6 py-2.5 rounded-full text-xs font-semibold transition-colors"
              >
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
