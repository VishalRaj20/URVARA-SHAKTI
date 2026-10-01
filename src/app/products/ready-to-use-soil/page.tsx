import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productsData } from '@/data/products';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';
import {
  Sprout,
  CheckCircle2,
  ArrowLeft,
  BookOpen,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Ready-to-Use Soil — Pre-mixed Premium Potting Medium',
  description:
    'A professionally prepared planting medium designed for immediate use. No mixing required. Simply fill the pot and start planting.',
};

export default function ReadySoilPage() {
  const product = productsData.find((p) => p.slug === 'ready-to-use-soil');
  if (!product) notFound();

  return (
    <div className="bg-cream min-h-screen">
      {/* Breadcrumb Header */}
      <section className="pt-8 pb-12 bg-cream-dark/40 border-b border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-soil hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Products</span>
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-soil uppercase tracking-wider block mb-1">
                {product.tagline}
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary font-sans">
                {product.name}
              </h1>
            </div>
            <WhatsAppBuyButton
              productName={product.name}
              type="product"
              className="py-3.5 px-7"
            />
          </div>
        </div>
      </section>

      {/* Main Details Section */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Product Image Frame */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 space-y-6">
                <div className="relative rounded-3xl overflow-hidden border-2 border-brandBorder bg-cream h-[420px] shadow-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-cream/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-primary border border-brandBorder">
                    No Mixing Required
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-cream border border-brandBorder rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-semibold text-brandText">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <span>Balanced coco-peat, perlite & bio-compost formulation</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-brandText">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <span>Lightweight & ideal for balcony planter decks</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Specification Details */}
            <div className="lg:col-span-7 space-y-10">
              {/* Product Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary font-sans border-b border-brandBorder/60 pb-3">
                  Product Overview
                </h2>
                <p className="text-base text-brandText leading-relaxed">
                  {product.overview}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary font-sans border-b border-brandBorder/60 pb-3">
                  Key Benefits
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.benefits.map((b, idx) => (
                    <div
                      key={idx}
                      className="bg-cream border border-brandBorder rounded-xl p-4 space-y-1"
                    >
                      <div className="flex items-center gap-2 text-sm font-bold text-primary">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{b.title}</span>
                      </div>
                      <p className="text-xs text-brandText-muted pl-6">
                        {b.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suitable For */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-primary font-sans border-b border-brandBorder/60 pb-3">
                  Suitable For
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {product.suitableFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-cream border border-brandBorder text-brandText text-sm px-4 py-2 rounded-xl font-medium shadow-sm"
                    >
                      🪴 {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* How To Use */}
              <div className="space-y-4 bg-cream border border-brandBorder rounded-3xl p-6 sm:p-8">
                <div className="flex items-center gap-2 text-primary font-bold text-xl font-sans">
                  <BookOpen className="w-6 h-6 text-soil" />
                  <h2>How To Use (Simple Steps)</h2>
                </div>
                <div className="space-y-4 pt-2">
                  {product.usageInstructions.map((inst, idx) => (
                    <div
                      key={idx}
                      className="bg-surface border border-brandBorder/80 rounded-xl p-4 space-y-1"
                    >
                      <h3 className="text-sm font-bold text-soil">
                        {inst.title}
                      </h3>
                      <p className="text-sm text-brandText-muted leading-relaxed">
                        {inst.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product FAQs */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-primary font-bold text-xl font-sans border-b border-brandBorder/60 pb-3">
                  <HelpCircle className="w-5 h-5 text-soil" />
                  <h2>Product FAQs</h2>
                </div>
                <div className="space-y-3">
                  {product.faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="bg-cream border border-brandBorder rounded-2xl p-5 space-y-2"
                    >
                      <h3 className="text-base font-bold text-primary">
                        {faq.question}
                      </h3>
                      <p className="text-sm text-brandText-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6">
                <WhatsAppBuyButton
                  productName={product.name}
                  type="product"
                  className="w-full sm:w-auto py-4 px-8 text-base shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
