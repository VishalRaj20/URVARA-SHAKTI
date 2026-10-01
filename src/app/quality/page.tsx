import React from 'react';
import Image from 'next/image';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';
import {
  FileCheck2,
  ShieldCheck,
  Download,
  CheckCircle2,
  FlaskConical,
} from 'lucide-react';

export const metadata = {
  title: 'Certifications & Quality Testing — Laboratory Parameters',
  description:
    'Every batch of Urvara Shakti bio-compost is tested for Organic Carbon, Nitrogen, Phosphorus, Potassium, Calcium, Magnesium, Sulphur, Iron, Zinc, Manganese, Copper, and Boron.',
};

export default function QualityPage() {
  const parameters = [
    { name: 'Organic Carbon', symbol: 'C', group: 'Primary Carbon Base' },
    { name: 'Nitrogen', symbol: 'N', group: 'Primary Macro-Nutrient' },
    { name: 'Phosphorus', symbol: 'P', group: 'Primary Macro-Nutrient' },
    { name: 'Potassium', symbol: 'K', group: 'Primary Macro-Nutrient' },
    { name: 'Calcium', symbol: 'Ca', group: 'Secondary Earth Mineral' },
    { name: 'Magnesium', symbol: 'Mg', group: 'Secondary Earth Mineral' },
    { name: 'Sulphur', symbol: 'S', group: 'Secondary Earth Mineral' },
    { name: 'Iron', symbol: 'Fe', group: 'Essential Micro-Nutrient' },
    { name: 'Zinc', symbol: 'Zn', group: 'Essential Micro-Nutrient' },
    { name: 'Manganese', symbol: 'Mn', group: 'Essential Micro-Nutrient' },
    { name: 'Copper', symbol: 'Cu', group: 'Essential Micro-Nutrient' },
    { name: 'Boron', symbol: 'B', group: 'Essential Micro-Nutrient' },
  ];

  return (
    <div className="bg-cream min-h-screen">
      {/* Page Header */}
      <section className="pt-12 pb-16 bg-cream-dark/40 border-b border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <FlaskConical className="w-4 h-4" />
              <span>Rigorous Batch Validation</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary font-sans">
              Certifications & Quality Testing
            </h1>
            <p className="text-lg text-brandText-muted leading-relaxed">
              Many products in the market are sold without proper testing or quality validation. At Urvara Shakti, quality assurance is a core commitment across every batch.
            </p>
          </div>
        </div>
      </section>

      {/* Why Quality Matters Narrative */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-soil uppercase tracking-wider block">
                Scientific Assurance
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary font-sans">
                Why Quality Matters
              </h2>
              <p className="text-base text-brandText-muted leading-relaxed">
                Raw, un-cured compost can introduce dangerous weed seeds, active pathogens, or harmful heavy chemical residues into your garden beds.
              </p>
              <p className="text-base text-brandText-muted leading-relaxed">
                Every batch of Urvara Shakti Bio Compost undergoes controlled aerobic fermentation and laboratory parameter testing to guarantee non-caustic, weed-seed-free, micro-biologically rich organic humus.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-cream border border-brandBorder rounded-2xl p-4 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brandText">Aerobically Cured</h3>
                    <p className="text-xs text-brandText-muted">Zero raw ammonia burns or foul odors.</p>
                  </div>
                </div>
                <div className="bg-cream border border-brandBorder rounded-2xl p-4 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-brandText">100% Pathogen Free</h3>
                    <p className="text-xs text-brandText-muted">Tested for safe urban & edible plant growing.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Lab Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-brandBorder shadow-xl h-[420px]">
                <Image
                  src="/images/quality/quality-lab.webp"
                  alt="Urvara Shakti soil laboratory parameter testing"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent p-6 flex flex-col justify-end text-cream">
                  <p className="text-xs font-semibold text-secondary-light uppercase">
                    Batch Testing Standard
                  </p>
                  <p className="text-lg font-bold font-sans">
                    Guaranteed nutrient density across 12 vital parameters.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Laboratory Testing Parameters Grid */}
      <section className="py-16 lg:py-24 bg-cream border-t border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold text-soil uppercase tracking-wider block">
              Nutrient Spectrum
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-sans">
              Laboratory Testing Parameters
            </h2>
            <p className="text-base text-brandText-muted">
              Our packaging and batch quality reports highlight these tested indicators to ensure consistent field performance.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {parameters.map((param, idx) => (
              <div
                key={idx}
                className="bg-surface border border-brandBorder rounded-2xl p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 text-primary font-bold text-lg flex items-center justify-center font-mono group-hover:bg-primary group-hover:text-cream transition-colors">
                  {param.symbol}
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary font-sans">
                    {param.name}
                  </h3>
                  <p className="text-xs text-soil font-medium">
                    {param.group}
                  </p>
                </div>
                <div className="pt-2 border-t border-brandBorder/60 text-[11px] text-brandText-muted flex items-center justify-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                  <span>Lab Evaluated</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Test Reports Section */}
      <section className="py-16 lg:py-24 bg-surface border-t border-brandBorder/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <FileCheck2 className="w-8 h-8" />
          </div>

          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-primary font-sans">
              Download Test Reports
            </h2>
            <p className="text-base text-brandText-muted max-w-xl mx-auto leading-relaxed">
              We provide downloadable PDF batch quality analysis reports for bulk agricultural buyers, nurseries, and commercial institutions.
            </p>
          </div>

          <div className="bg-cream border border-brandBorder rounded-3xl p-8 max-w-2xl mx-auto space-y-6 shadow-sm">
            <div className="flex items-center justify-between p-4 bg-surface border border-brandBorder rounded-xl text-left">
              <div>
                <h3 className="text-sm font-bold text-primary font-sans">
                  Urvara Shakti Bio Compost — Official Batch Test Report
                </h3>
                <p className="text-xs text-brandText-muted">PDF Format • Parameter Analysis Spectrum</p>
              </div>
              <WhatsAppBuyButton
                type="general"
                customText="Request PDF via WA"
                variant="outline"
                className="text-xs py-2 px-4"
              />
            </div>
            <p className="text-xs text-brandText-muted italic">
              Official PDF reports are dispatched instantly via WhatsApp or email upon request.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
