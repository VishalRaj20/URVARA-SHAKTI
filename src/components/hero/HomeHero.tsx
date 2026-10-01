import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';
import { Sprout, ArrowRight, ShieldCheck } from 'lucide-react';

export const HomeHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-cream pt-8 pb-16 lg:pt-14 lg:pb-24">
      {/* Background Soft Organic Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-cream-dark/60 border border-brandBorder px-4 py-1.5 rounded-full shadow-sm">
              <Sprout className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm font-semibold text-soil tracking-wide">
                {siteConfig.tagline} — Restore Soil Life
              </span>
            </div>

            {/* Official Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.1] tracking-tight font-sans">
              Healthy Soil.{' '}
              <span className="text-soil block sm:inline">Healthy Plants.</span>{' '}
              <span className="text-primary-dark">Healthy Planet.</span>
            </h1>

            {/* Official Subheading */}
            <p className="text-lg sm:text-xl text-brandText-muted max-w-2xl leading-relaxed">
              {siteConfig.subheading} Rich in organic carbon and beneficial soil microbes for thriving gardens and sustainable harvests.
            </p>

            {/* Key Value Badges */}
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-medium text-brandText pt-2">
              <div className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-lg border border-brandBorder/60">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>100% Organic Cured Humus</span>
              </div>
              <div className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-lg border border-brandBorder/60">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Tested Nutrient Parameters</span>
              </div>
              <div className="flex items-center gap-1.5 bg-surface px-3 py-1.5 rounded-lg border border-brandBorder/60">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Zero Chemical Additives</span>
              </div>
            </div>

            {/* CTAs Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Primary CTA */}
              <WhatsAppBuyButton
                type="general"
                customText="Shop Now via WhatsApp"
                variant="primary"
                className="py-4 px-7 text-base shadow-md"
              />

              {/* Secondary CTA */}
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 bg-cream-light hover:bg-cream-dark text-primary border border-brandBorder font-medium rounded-full px-6 py-3.5 text-base transition-colors"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Tertiary CTA */}
              <Link
                href="/dealer"
                className="inline-flex items-center justify-center text-soil hover:text-soil-dark font-semibold text-sm underline underline-offset-4 py-2"
              >
                Become a Dealer
              </Link>
            </div>
          </div>

          {/* Right Hero Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame Border */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-primary/20 via-secondary/30 to-soil/20 blur-xl opacity-70" />

              {/* Main Sprout Hero Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-brandBorder shadow-2xl bg-surface">
                <Image
                  src="/images/hero/hero-sprout.webp"
                  alt="Vibrant seedling sprouting from Urvara Shakti rich organic bio-compost soil"
                  width={800}
                  height={900}
                  priority
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Overlaid Soil Life Callout Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-cream/95 backdrop-blur-md p-4 rounded-xl border border-brandBorder shadow-lg">
                  <p className="text-xs font-semibold text-soil uppercase tracking-wider">
                    Soil Micro-Biome Active
                  </p>
                  <p className="text-sm font-medium text-brandText mt-0.5">
                    Microbial density that restores natural root nitrogen absorption.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
