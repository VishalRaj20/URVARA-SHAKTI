'use client';

import React from 'react';
import Link from 'next/link';
import { faqData } from '@/data/faq';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export const FAQTeaser: React.FC = () => {
  const topFaqs = faqData.slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-surface border-t border-brandBorder/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary font-sans">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-brandText-muted">
            Find quick answers about organic bio-compost, dosage, and soil care.
          </p>
        </div>

        {/* Accordion */}
        <Accordion.Root
          type="single"
          collapsible
          className="space-y-4"
        >
          {topFaqs.map((faq) => (
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

        <div className="text-center pt-10">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-base group"
          >
            <span>View All Frequently Asked Questions</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};
