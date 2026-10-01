import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productsData } from '@/data/products';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-semibold text-soil uppercase tracking-wider block mb-1">
              Natural Organic Formulations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary font-sans">
              Our Core Soil Products
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold text-base group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-surface border border-brandBorder rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image */}
                <div className="relative h-64 w-full bg-cream-dark/50 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-soil border border-brandBorder/60">
                    {product.tagline}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-sans">
                    {product.name}
                  </h3>
                  <p className="text-sm text-brandText-muted mb-4 leading-relaxed line-clamp-3">
                    {product.shortDescription}
                  </p>

                  {/* Benefit Checklist */}
                  <ul className="space-y-2 mb-6">
                    {product.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2 text-xs font-medium text-brandText"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{benefit.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 pt-0 space-y-3">
                <WhatsAppBuyButton
                  productName={product.name}
                  type="product"
                  className="w-full text-sm py-3"
                />
                <Link
                  href={`/products/${product.slug}`}
                  className="block text-center text-xs font-semibold text-soil hover:text-primary transition-colors py-1"
                >
                  View Full Specifications & Dosage &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
