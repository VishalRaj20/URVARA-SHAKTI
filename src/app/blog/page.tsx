'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts, blogCategories, BlogPost } from '@/data/blog';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="bg-cream min-h-screen">
      {/* Header Banner */}
      <section className="pt-12 pb-16 bg-cream-dark/40 border-b border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Soil Health Knowledge Base</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-primary font-sans">
              Urvara Shakti Blog
            </h1>
            <p className="text-lg text-brandText-muted leading-relaxed">
              Articles, gardening guides, organic farming insights, and soil care tips to help you build thriving soil.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="py-8 bg-surface border-b border-brandBorder/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
            {blogCategories.map((cat) => (
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

      {/* Articles Grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.slug}
                className="bg-cream border border-brandBorder rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full bg-cream-dark overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-cream/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-soil border border-brandBorder/60">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-brandText-muted">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-primary" />
                        {post.author}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-primary font-sans leading-snug group-hover:text-primary-dark transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-sm text-brandText-muted leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-soil hover:text-primary transition-colors py-2"
                  >
                    <span>Read Complete Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
