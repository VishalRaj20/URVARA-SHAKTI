import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';
import { LeafDivider } from '@/components/ui/LeafDivider';
import {
  Sprout,
  Target,
  Compass,
  CheckCircle2,
  Heart,
  ShieldCheck,
  Award,
  Users,
} from 'lucide-react';

export const metadata = {
  title: 'About Us — Brand Story & Vision',
  description:
    'Discover Urvara Shakti: Restoring soil fertility naturally through scientific bio-composting, quality parameters, and sustainable agriculture.',
};

export default function AboutPage() {
  const story = siteConfig.brandStory;

  return (
    <div className="bg-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 bg-cream-dark/40 overflow-hidden border-b border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sprout className="w-4 h-4" />
              <span>Who We Are</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary font-sans leading-tight">
              {story.whoWeAre}
            </h1>
            <p className="text-lg text-brandText-muted leading-relaxed">
              We transform valuable organic resources into sustainable solutions that restore soil fertility naturally.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Narrative */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold text-soil uppercase tracking-wider block">
                The Journey of Urvara Shakti
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary font-sans">
                Our Story: Rebuilding India&apos;s Soil Strength
              </h2>

              <div className="space-y-4 text-base text-brandText leading-relaxed">
                {story.ourStory.map((paragraph, index) => (
                  <p key={index} className="text-brandText-muted">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Highlight Quote Box */}
              <div className="p-6 bg-cream border-l-4 border-primary rounded-r-2xl space-y-2 shadow-sm">
                <blockquote className="text-xl font-bold text-primary font-sans italic">
                  &ldquo;{story.heroQuote}&rdquo;
                </blockquote>
                <p className="text-xs font-semibold text-soil uppercase tracking-wider">
                  — Kyari Ki Kilkari Philosophy
                </p>
              </div>
            </div>

            {/* Visual Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-brandBorder shadow-xl">
                <Image
                  src="/images/about/about-hero.webp"
                  alt="Restoring soil fertility with Urvara Shakti organic bio-compost"
                  width={800}
                  height={900}
                  className="w-full h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent p-6 flex flex-col justify-end text-cream">
                  <p className="text-xs font-semibold uppercase tracking-wider text-secondary-light">
                    Scientific Composting
                  </p>
                  <p className="text-lg font-bold font-sans">
                    Nourishing soil, strengthening roots, and preserving clean water.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section className="py-16 lg:py-24 bg-cream border-t border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-surface border border-brandBorder rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-primary font-sans">
                OUR VISION
              </h3>
              <p className="text-lg font-semibold text-soil italic">
                &ldquo;{story.visionTitle}&rdquo;
              </p>
              <p className="text-sm text-brandText-muted leading-relaxed">
                {story.visionText}
              </p>

              <div className="pt-2 border-t border-brandBorder/60 space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  We Envision A Future Where:
                </p>
                <ul className="space-y-2">
                  {story.visionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-brandText font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-surface border border-brandBorder rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-soil/10 text-soil flex items-center justify-center">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-primary font-sans">
                OUR MISSION
              </h3>
              <p className="text-sm text-brandText-muted leading-relaxed">
                {story.missionText}
              </p>

              <div className="pt-2 border-t border-brandBorder/60 space-y-2.5">
                <p className="text-xs font-semibold uppercase tracking-wider text-soil">
                  We Aim To:
                </p>
                <ul className="space-y-2">
                  {story.missionPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-brandText font-medium">
                      <CheckCircle2 className="w-4 h-4 text-soil shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 lg:py-24 bg-surface border-t border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold text-soil uppercase tracking-wider block">
              Ethical Foundation
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-sans">
              OUR CORE VALUES
            </h2>
            <p className="text-base text-brandText-muted">
              Every bag of Urvara Shakti is built upon these 5 unwavering principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {story.values.map((val, idx) => (
              <div
                key={idx}
                className="bg-cream border border-brandBorder rounded-2xl p-6 text-center space-y-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-primary font-sans">
                  {val.title}
                </h4>
                <p className="text-xs text-brandText-muted leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

          {/* Leadership Philosophy Footer */}
          <div className="mt-16 bg-primary text-cream rounded-3xl p-8 text-center max-w-3xl mx-auto space-y-3 shadow-lg">
            <h3 className="text-xl font-bold font-sans">
              Leadership Philosophy
            </h3>
            <p className="text-base text-cream/90 italic max-w-xl mx-auto">
              &ldquo;{story.leadershipPhilosophy}&rdquo;
            </p>
            <div className="pt-2">
              <WhatsAppBuyButton
                type="general"
                customText="Connect with Urvara Shakti"
                variant="secondary"
                className="py-3 px-6 text-sm"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
