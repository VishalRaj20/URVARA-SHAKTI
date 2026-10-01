import React from 'react';
import { Sprout, Droplets, Shield, TrendingUp, Sparkles } from 'lucide-react';

export const WhySoilMatters: React.FC = () => {
  const steps = [
    {
      icon: Sprout,
      title: '1. Micro-Biome Revival',
      description:
        'Enriches soil with organic carbon and aerobic microbes, unlocking bound soil nutrients for root intake.',
    },
    {
      icon: Droplets,
      title: '2. Water Retention',
      description:
        'Increases soil water-holding capacity, preventing drought stress and reducing watering frequency by up to 30%.',
    },
    {
      icon: Shield,
      title: '3. Natural Immunity',
      description:
        'Protects plant roots against soil-borne diseases naturally, reducing dependency on synthetic chemicals.',
    },
    {
      icon: TrendingUp,
      title: '4. Yield & Vitality',
      description:
        'Accelerates vegetative expansion, flower set, and fruit size for home gardens, nurseries, and farms.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface border-y border-brandBorder/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-secondary/15 text-primary-dark px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-secondary-dark" />
            <span>The Science of Soil Renewal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight font-sans">
            Why Soil Health Matters
          </h2>
          <p className="text-base sm:text-lg text-brandText-muted">
            True plant health isn&apos;t created with artificial chemicals — it starts deep in the soil micro-biome. Here is how Urvara Shakti restores natural fertility.
          </p>
        </div>

        {/* 4 Step Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-cream border border-brandBorder rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-brandText mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-brandText-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-brandBorder/40 text-xs font-medium text-soil italic">
                  Urvara Shakti Cycle
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
