'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { faqData, faqCategories } from '@/data/faq';
import { siteConfig } from '@/data/site';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';
import * as Accordion from '@radix-ui/react-accordion';
import { HelpCircle, ChevronDown, ShoppingBag, ExternalLink, Store } from 'lucide-react';

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredFaqs =
    selectedCategory === 'all'
      ? faqData
      : faqData.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="bg-cream min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-cream-dark/40 border-b border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <HelpCircle className="w-4 h-4" />
              <span>Questions & Answers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary font-sans">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-brandText-muted leading-relaxed">
              Find detailed answers regarding Urvara Shakti Bio Compost, Ready-to-Use Soil, Plant Enhancer, dosage, storage, and dealer partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-6 bg-surface border-b border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-primary text-cream shadow-sm'
                    : 'bg-cream border border-brandBorder text-brandText hover:bg-cream-dark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordion FAQs */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq) => (
              <Accordion.Item
                key={faq.id}
                value={faq.id}
                className="bg-cream border border-brandBorder rounded-2xl overflow-hidden transition-all"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-base sm:text-lg text-primary hover:text-primary-dark transition-colors group">
                    <span>{faq.question}</span>
                    <ChevronDown className="w-5 h-5 shrink-0 text-soil transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="p-5 sm:p-6 pt-0 text-sm sm:text-base text-brandText-muted leading-relaxed border-t border-brandBorder/40">
                  <p className="pt-3">{faq.answer}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </section>

      {/* SHOP NOW Purchase Options Footer Section */}
      <section className="py-16 lg:py-24 bg-cream border-t border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-secondary/15 text-primary-dark px-3.5 py-1 rounded-full text-xs font-semibold">
              <ShoppingBag className="w-4 h-4" />
              <span>SHOP NOW — Official Channels</span>
            </div>
            <h2 className="text-3xl font-bold text-primary font-sans">
              Ready to Order Urvara Shakti?
            </h2>
            <p className="text-base text-brandText-muted">
              Select Bio Compost, Ready-to-Use Soil, or Plant Enhancer via your preferred channel:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* WhatsApp Direct */}
            <div className="bg-surface border border-brandBorder rounded-2xl p-6 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center font-bold">
                WA
              </div>
              <h3 className="text-lg font-bold text-primary font-sans">
                Direct WhatsApp
              </h3>
              <p className="text-xs text-brandText-muted">
                Order directly from our factory warehouse with instant chat support.
              </p>
              <WhatsAppBuyButton
                type="general"
                customText="Order via WhatsApp"
                variant="primary"
                className="w-full text-xs py-2.5"
              />
            </div>

            {/* Amazon */}
            <div className="bg-surface border border-brandBorder rounded-2xl p-6 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-full bg-soil/15 text-soil flex items-center justify-center font-bold">
                AZ
              </div>
              <h3 className="text-lg font-bold text-primary font-sans">
                Amazon India
              </h3>
              <p className="text-xs text-brandText-muted">
                Fast Prime delivery across India on Amazon.
              </p>
              <a
                href={siteConfig.purchaseChannels.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full bg-soil text-cream hover:bg-soil-dark rounded-full py-2.5 text-xs font-semibold transition-colors"
              >
                <span>Amazon Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Flipkart */}
            <div className="bg-surface border border-brandBorder rounded-2xl p-6 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/15 text-primary flex items-center justify-center font-bold">
                FK
              </div>
              <h3 className="text-lg font-bold text-primary font-sans">
                Flipkart
              </h3>
              <p className="text-xs text-brandText-muted">
                Explore product packs on Flipkart.
              </p>
              <a
                href={siteConfig.purchaseChannels.flipkartUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 w-full bg-primary text-cream hover:bg-primary-dark rounded-full py-2.5 text-xs font-semibold transition-colors"
              >
                <span>Flipkart Store</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Dealer Locator */}
            <div className="bg-surface border border-brandBorder rounded-2xl p-6 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-full bg-secondary/20 text-primary-dark flex items-center justify-center font-bold">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-primary font-sans">
                Dealer Locator
              </h3>
              <p className="text-xs text-brandText-muted">
                Locate local plant nurseries stocking Urvara Shakti compost.
              </p>
              <Link
                href="/dealer"
                className="inline-flex items-center justify-center gap-1.5 w-full bg-cream-dark text-primary hover:bg-cream border border-brandBorder rounded-full py-2.5 text-xs font-semibold transition-colors"
              >
                <span>Locate Dealer</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
