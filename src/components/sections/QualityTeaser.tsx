import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileCheck2, ArrowRight } from 'lucide-react';

export const QualityTeaser: React.FC = () => {
  const nutrientGroups = [
    {
      title: 'Primary Nutrients & Carbon',
      items: ['Organic Carbon (C)', 'Nitrogen (N)', 'Phosphorus (P)', 'Potassium (K)'],
      color: 'bg-primary/10 border-primary/20 text-primary',
    },
    {
      title: 'Secondary Earth Nutrients',
      items: ['Calcium (Ca)', 'Magnesium (Mg)', 'Sulphur (S)'],
      color: 'bg-soil/10 border-soil/20 text-soil',
    },
    {
      title: 'Essential Micronutrients',
      items: ['Iron (Fe)', 'Zinc (Zn)', 'Manganese (Mn)', 'Copper (Cu)', 'Boron (B)'],
      color: 'bg-secondary/15 border-secondary/30 text-primary-dark',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface border-t border-brandBorder/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Rigorous Parameter Testing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-sans leading-tight">
              Tested Quality. Proven Soil Science.
            </h2>
            <p className="text-base text-brandText-muted leading-relaxed">
              We monitor 12 vital chemical and bio-physical parameters across our organic compost batches to ensure maximum nutrient density and zero toxic residues.
            </p>
            <div className="pt-2">
              <Link
                href="/quality"
                className="inline-flex items-center gap-2 bg-primary text-cream px-6 py-3.5 rounded-full font-medium text-base hover:bg-primary-dark transition-colors shadow-sm"
              >
                <FileCheck2 className="w-5 h-5" />
                <span>Explore Full Quality Spectrum</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Parameters Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {nutrientGroups.map((group, idx) => (
              <div
                key={idx}
                className="bg-cream border border-brandBorder rounded-2xl p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-brandText uppercase tracking-wider mb-4 pb-2 border-b border-brandBorder/60">
                    {group.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {group.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs font-semibold text-brandText flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-3 text-[11px] font-medium text-brandText-muted italic">
                  Tested across all batches
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
