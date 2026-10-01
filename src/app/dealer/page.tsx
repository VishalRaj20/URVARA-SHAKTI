import React from 'react';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';
import { DealerForm } from '@/components/dealer/DealerForm';
import {
  Store,
  TrendingUp,
  Megaphone,
  GraduationCap,
  Sparkles,
  Phone,
  Mail,
  Building2,
} from 'lucide-react';
import { siteConfig } from '@/data/site';

export const metadata = {
  title: 'Become a Dealer — Partner Network & Commercial Supply',
  description:
    'Join the Urvara Shakti dealer network. Enjoy attractive margins, marketing support, product training, and growing demand for organic soil products.',
};

export default function DealerPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Attractive Margins',
      description: 'Competitive wholesale dealer margins designed for sustainable nursery profitability.',
    },
    {
      icon: Megaphone,
      title: 'Marketing Support',
      description: 'Digital brand marketing campaigns, localized banners, and point-of-sale materials.',
    },
    {
      icon: GraduationCap,
      title: 'Product Training',
      description: 'Complete technical guidance on compost dosage, potting medium specs, and plant care.',
    },
    {
      icon: Sparkles,
      title: 'Growing Demand',
      description: 'Rapidly rising consumer demand for chemical-free urban gardening & sustainable soil inputs.',
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Page Header */}
      <section className="pt-12 pb-16 bg-cream-dark/40 border-b border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Store className="w-4 h-4" />
              <span>Commercial Partnership</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary font-sans">
              Become a Dealer / Distributor
            </h1>
            <p className="text-lg text-brandText-muted leading-relaxed">
              Join the expanding Urvara Shakti dealer network across India. Supply high-performance organic bio-composts and potting media to retail gardeners, nurseries, and agricultural farms.
            </p>
          </div>
        </div>
      </section>

      {/* Dealer Benefits Grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold text-soil uppercase tracking-wider block">
              Why Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-sans">
              Dealer Network Benefits
            </h2>
            <p className="text-base text-brandText-muted">
              We empower our retail partners with premium products and end-to-end commercial backing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-cream border border-brandBorder rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-primary font-sans">
                    {b.title}
                  </h3>
                  <p className="text-sm text-brandText-muted leading-relaxed">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form & Direct WhatsApp Contact */}
      <section className="py-16 lg:py-24 bg-cream border-t border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left WhatsApp / Direct Info */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-semibold text-soil uppercase tracking-wider block">
                Quick Onboarding
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary font-sans">
                Start Your Dealership Application
              </h2>
              <p className="text-base text-brandText-muted leading-relaxed">
                Connect directly with our distribution team via WhatsApp or telephone to discuss regional dealership terms, minimum order quantities, and pricing structures.
              </p>

              <div className="bg-surface border border-brandBorder rounded-2xl p-6 space-y-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xs font-semibold text-soil uppercase">Head Office</h3>
                    <p className="text-sm text-brandText">{siteConfig.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xs font-semibold text-soil uppercase">Phone Line</h3>
                    <p className="text-sm text-brandText">{siteConfig.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <h3 className="text-xs font-semibold text-soil uppercase">Email Inquiry</h3>
                    <p className="text-sm text-brandText">{siteConfig.contact.email}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <WhatsAppBuyButton
                  type="dealer"
                  customText="Chat Dealership on WhatsApp"
                  variant="primary"
                  className="w-full sm:w-auto py-3.5 px-7"
                />
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7 bg-surface border border-brandBorder rounded-3xl p-8 sm:p-10 shadow-lg space-y-6">
              <h3 className="text-2xl font-bold text-primary font-sans">
                Dealer Application Form
              </h3>
              <p className="text-xs text-brandText-muted">
                Submitting this form composes a pre-filled WhatsApp inquiry with your dealership details.
              </p>

              <DealerForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
