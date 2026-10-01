import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { Heart, ArrowRight } from 'lucide-react';

export const BrandStoryTeaser: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary text-cream relative overflow-hidden">
      {/* Background Subtle Leaf Motif Overlay */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full text-cream">
          <path d="M50 0 C70 30 90 40 100 70 C80 100 50 100 0 100 C10 60 30 30 50 0 Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 bg-cream/15 text-secondary-light px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          <Heart className="w-4 h-4" />
          <span>Our Brand Philosophy</span>
        </div>

        {/* Closing Philosophy Quote */}
        <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-sans text-cream max-w-4xl mx-auto">
          &ldquo;{siteConfig.brandStory.heroQuote}&rdquo;
        </blockquote>

        {/* Vision Line */}
        <p className="text-xl sm:text-2xl text-secondary-light font-semibold italic">
          {siteConfig.brandStory.visionTitle}
        </p>

        <p className="text-base sm:text-lg text-cream/80 max-w-2xl mx-auto leading-relaxed">
          {siteConfig.brandStory.whoWeAre}
        </p>

        <div className="pt-4">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 bg-cream text-primary hover:bg-cream-light px-7 py-3.5 rounded-full font-semibold text-base transition-colors shadow-lg"
          >
            <span>Read Our Complete Story</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
