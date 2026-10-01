import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { productsData } from '@/data/products';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';
import {
  Sprout,
  CheckCircle2,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';

export const metadata = {
  title: 'Our Soil Products — Bio Compost, Ready-to-Use Soil & Plant Enhancer',
  description:
    'Explore Urvara Shakti organic Bio Compost, Ready-to-Use Soil Mix, and liquid Plant Enhancer for gardens, nurseries, balcony containers, and farms.',
};

export default function ProductsPage() {
  return (
    <div className="bg-cream min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-cream-dark/40 border-b border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Sprout className="w-4 h-4" />
              <span>Organic Soil Solutions</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary font-sans">
              Our Organic Products
            </h1>
            <p className="text-lg text-brandText-muted leading-relaxed">
              Scientifically developed organic formulations designed to improve soil fertility, strengthen root systems, increase water retention, and support sustainable cultivation.
            </p>
          </div>
        </div>
      </section>

      {/* Product Cards Listing */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {productsData.map((product, idx) => (
            <div
              key={product.id}
              className="bg-cream border border-brandBorder rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-lg transition-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Product Image */}
              <div
                className={`lg:col-span-5 relative rounded-2xl overflow-hidden border border-brandBorder bg-surface h-72 lg:h-96 ${
                  idx % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-semibold text-soil border border-brandBorder/60">
                  {product.tagline}
                </div>
              </div>

              {/* Product Details */}
              <div
                className={`lg:col-span-7 space-y-6 ${
                  idx % 2 === 1 ? 'lg:order-1' : ''
                }`}
              >
                <div>
                  <h2 className="text-3xl font-bold text-primary font-sans mb-2">
                    {product.name}
                  </h2>
                  <p className="text-base text-brandText-muted leading-relaxed">
                    {product.overview}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold text-soil uppercase tracking-wider">
                    Key Benefits:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.benefits.map((b, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2 text-xs font-medium text-brandText"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-brandText">{b.title}:</strong>{' '}
                          <span className="text-brandText-muted">{b.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suitable For Chips */}
                <div>
                  <p className="text-xs font-semibold text-soil uppercase tracking-wider mb-2">
                    Suitable For:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.suitableFor.map((item, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-surface border border-brandBorder/80 text-brandText text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <WhatsAppBuyButton
                    productName={product.name}
                    type="product"
                    className="py-3 px-6 text-sm"
                  />
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center justify-center gap-2 border border-brandBorder bg-surface hover:bg-cream-dark text-primary font-medium rounded-full px-6 py-3 text-sm transition-colors"
                  >
                    <span>View Full Usage & Dosage</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SHOP NOW — WhatsApp Only */}
      <section className="py-16 lg:py-24 bg-cream border-t border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 bg-secondary/15 text-primary-dark px-3.5 py-1 rounded-full text-xs font-semibold">
              <ShoppingBag className="w-4 h-4" />
              <span>SHOP NOW — Official Channel</span>
            </div>
            <h2 className="text-3xl font-bold text-primary font-sans">
              How to Buy Urvara Shakti Products
            </h2>
            <p className="text-base text-brandText-muted">
              Chat directly with our team on WhatsApp for custom quotes, pack sizes, and doorstep delivery.
            </p>
          </div>

          {/* Single WhatsApp card — centered */}
          <div className="flex justify-center">
            <div className="bg-surface border border-brandBorder rounded-2xl p-8 text-center space-y-5 shadow-sm hover:shadow-md transition-shadow w-full max-w-sm">
              {/* WhatsApp icon circle */}
              <div className="w-14 h-14 mx-auto rounded-full bg-[#25D366]/15 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="#25D366" className="w-7 h-7">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary font-sans">Direct WhatsApp Order</h3>
                <p className="text-sm text-brandText-muted mt-1.5 leading-relaxed">
                  Chat directly with our team for custom pack quotes, bulk pricing, and direct home delivery anywhere in India.
                </p>
              </div>
              <WhatsAppBuyButton
                type="general"
                customText="Order on WhatsApp"
                variant="primary"
                className="w-full text-sm py-3"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
