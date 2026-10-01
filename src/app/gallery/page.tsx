'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  const categories = [
    'All',
    'Production Process',
    'Packaging',
    'Nursery Projects',
    'Customer Gardens',
    'Before & After Results',
  ] as const;

  const galleryItems = [
    {
      id: 1,
      category: 'Production Process',
      title: 'Aerobic Soil Composting Beds',
      image: '/images/hero/hero-sprout.webp',
      caption: 'Controlled temperature aerobic decomposition heap',
    },
    {
      id: 2,
      category: 'Packaging',
      title: 'Urvara Shakti Eco Packaging',
      image: '/images/products/bio-compost.webp',
      caption: 'Moisture-sealed bio compost packaging',
    },
    {
      id: 3,
      category: 'Nursery Projects',
      title: 'Urban Plant Nursery Soil Supply',
      image: '/images/about/about-hero.webp',
      caption: 'High-volume potted plant propagation setup',
    },
    {
      id: 4,
      category: 'Customer Gardens',
      title: 'Balcony Terrace Organic Garden',
      image: '/images/products/ready-soil-mix.webp',
      caption: 'Thriving rooftop organic vegetable garden bed',
    },
    {
      id: 5,
      category: 'Before & After Results',
      title: 'Vegetative Foliage Greening',
      image: '/images/products/plant-enhancer.webp',
      caption: 'Chlorophyll enhancement after 14 days of application',
    },
    {
      id: 6,
      category: 'Production Process',
      title: 'Soil Parameter Testing Setup',
      image: '/images/quality/quality-lab.webp',
      caption: 'Analytical evaluation of nitrogen & phosphorus',
    },
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-cream min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-cream-dark/40 border-b border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Camera className="w-4 h-4" />
              <span>Photo Showcase</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary font-sans">
              Photo Gallery
            </h1>
            <p className="text-lg text-brandText-muted leading-relaxed">
              Explore our composting facilities, product packaging, commercial nursery projects, and thriving customer gardens.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-surface border-b border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary text-cream shadow-sm'
                    : 'bg-cream border border-brandBorder text-brandText hover:bg-cream-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxImage({ src: item.image, title: item.title })}
                className="bg-cream border border-brandBorder rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group relative"
              >
                <div className="relative h-64 w-full bg-cream-dark overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-cream">
                    <ZoomIn className="w-8 h-8" />
                  </div>
                  <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-soil border border-brandBorder/60">
                    {item.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-primary font-sans mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brandText-muted">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-surface-dark/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-cream rounded-3xl overflow-hidden shadow-2xl border border-brandBorder"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-cream-dark text-primary rounded-full hover:bg-cream transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative h-[480px] w-full bg-cream-dark">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6 bg-cream text-center">
              <h3 className="text-xl font-bold text-primary font-sans">
                {lightboxImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
