import React from 'react';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';
import { siteConfig } from '@/data/site';
import { BulkForm } from '@/components/bulk/BulkForm';
import {
  Truck,
  Trees,
  Building2,
  Flower2,
  GraduationCap,
  Landmark,
  Sprout,
} from 'lucide-react';

export const metadata = {
  title: 'Bulk Orders & Commercial Supply — Tonnage Bio Compost',
  description:
    'Customized bulk compost tonnage supply for Nurseries, Parks, Landscapers, Educational Institutions, Housing Societies, Farms, and Government Projects.',
};

export default function BulkOrdersPage() {
  const targetSectors = [
    {
      icon: Sprout,
      name: 'Plant Nurseries',
      description: 'Bulk potting compost for plant production and seedling trays.',
    },
    {
      icon: Trees,
      name: 'Parks & City Gardens',
      description: 'Municipal park maintenance and turf grass top-dressing.',
    },
    {
      icon: Flower2,
      name: 'Landscape Architects',
      description: 'Custom soil medium supply for commercial landscaping projects.',
    },
    {
      icon: GraduationCap,
      name: 'Educational Institutions',
      description: 'Campus greening and botanical garden organic soil enrichment.',
    },
    {
      icon: Building2,
      name: 'Housing Societies',
      description: 'Residential garden beds, lawn maintenance, and potted plants.',
    },
    {
      icon: Landmark,
      name: 'Commercial Farms & Orchards',
      description: 'Bulk tonnage field bio-compost for fruit and vegetable crops.',
    },
    {
      icon: Truck,
      name: 'Government Projects',
      description: 'Afforestation, highway greening, and urban forestry projects.',
    },
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Page Header */}
      <section className="pt-12 pb-16 bg-cream-dark/40 border-b border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Truck className="w-4 h-4" />
              <span>Commercial Tonnage Supply</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary font-sans">
              Bulk Orders & Custom Quotations
            </h1>
            <p className="text-lg text-brandText-muted leading-relaxed">
              We supply high-volume organic bio-compost, ready-to-use potting soil, and liquid enhancers for commercial institutions, housing societies, farms, and government greening projects.
            </p>
          </div>
        </div>
      </section>

      {/* Target Sectors Grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold text-soil uppercase tracking-wider block">
              Who We Serve
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-sans">
              Target Sectors for Bulk Supply
            </h2>
            <p className="text-base text-brandText-muted">
              Customized tonnage packaging, direct truck transport, and batch test certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetSectors.map((sector, idx) => {
              const Icon = sector.icon;
              return (
                <div
                  key={idx}
                  className="bg-cream border border-brandBorder rounded-2xl p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-primary font-sans">
                      {sector.name}
                    </h3>
                    <p className="text-sm text-brandText-muted leading-relaxed">
                      {sector.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-brandBorder/60">
                    <WhatsAppBuyButton
                      type="bulk"
                      targetGroup={sector.name}
                      customText={`Request Quote for ${sector.name}`}
                      variant="outline"
                      className="w-full text-xs py-2.5"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Request Form & WhatsApp */}
      <section className="py-16 lg:py-24 bg-cream border-t border-brandBorder/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-sans">
              Request a Customized Bulk Quotation
            </h2>
            <p className="text-base text-brandText-muted max-w-xl mx-auto">
              Tell us your required quantity (tons or bags) and delivery location to receive an instant commercial quote.
            </p>
          </div>

          <div className="bg-surface border border-brandBorder rounded-3xl p-8 sm:p-10 shadow-lg text-left max-w-2xl mx-auto space-y-6">
            <BulkForm />
          </div>
        </div>
      </section>
    </div>
  );
}
