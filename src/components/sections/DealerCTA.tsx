import React from 'react';
import Link from 'next/link';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';
import { Store, Building2, Trees, Flower2, ArrowRight } from 'lucide-react';

export const DealerCTA: React.FC = () => {
  const targetGroups = [
    { icon: Store, name: 'Plant Nurseries & Retailers' },
    { icon: Trees, name: 'Parks & Landscape Architects' },
    { icon: Flower2, name: 'Housing Societies & Communities' },
    { icon: Building2, name: 'Commercial Farms & Orchards' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-cream border-t border-brandBorder/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface border border-brandBorder rounded-3xl p-8 lg:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold text-soil uppercase tracking-wider block">
              Commercial & Supply Partnerships
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-sans leading-tight">
              Become a Dealer or Order in Bulk Tonnage
            </h2>
            <p className="text-base text-brandText-muted leading-relaxed">
              We partner with plant nurseries, agricultural dealers, landscape contractors, and housing societies across India to supply premium bulk bio-compost and potting soil.
            </p>

            {/* Target Group Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 pt-2">
              {targetGroups.map((group, idx) => {
                const Icon = group.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-cream p-3 rounded-xl border border-brandBorder/60"
                  >
                    <Icon className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-xs font-semibold text-brandText">
                      {group.name}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <WhatsAppBuyButton
                type="dealer"
                customText="Inquire for Dealership"
                variant="primary"
                className="py-3.5 px-6 text-sm"
              />
              <Link
                href="/bulk-orders"
                className="inline-flex items-center justify-center gap-2 border border-brandBorder bg-cream text-soil hover:bg-cream-dark font-medium rounded-full px-6 py-3.5 text-sm transition-colors"
              >
                <span>Bulk Order Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column / Quick Card */}
          <div className="lg:col-span-5 bg-primary text-cream p-8 rounded-2xl space-y-4 shadow-md">
            <h3 className="text-xl font-bold font-sans text-cream">
              Why Partner With Urvara Shakti?
            </h3>
            <ul className="space-y-3 text-sm text-cream/90">
              <li className="flex items-start gap-2">
                <span className="text-secondary-light font-bold">•</span>
                <span>Direct supply from controlled bio-composting facilities.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-light font-bold">•</span>
                <span>Consistent batch quality with parameter test tracking.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-light font-bold">•</span>
                <span>Attractive margin structures for retail nurseries.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary-light font-bold">•</span>
                <span>Reliable logistics and packaging options.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
