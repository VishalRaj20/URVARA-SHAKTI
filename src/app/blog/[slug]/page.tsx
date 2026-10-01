import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';
import { notFound } from 'next/navigation';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <div className="bg-cream min-h-screen">
      {/* Article Header */}
      <section className="pt-8 pb-12 bg-cream-dark/40 border-b border-brandBorder/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-semibold text-soil hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog Articles</span>
          </Link>

          <div className="space-y-4">
            <span className="inline-block bg-primary/10 text-primary px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary font-sans leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-xs text-brandText-muted pt-2 border-t border-brandBorder/60">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-primary" />
                {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-primary" />
                {post.readTime}
              </span>
              <span>Published: {post.publishedAt}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="relative rounded-3xl overflow-hidden border border-brandBorder h-[360px] sm:h-[450px] shadow-md">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          <div className="bg-cream border border-brandBorder rounded-3xl p-8 sm:p-12 space-y-6 text-base text-brandText leading-relaxed">
            <p className="text-xl font-medium text-soil italic leading-relaxed border-l-4 border-primary pl-4">
              {post.excerpt}
            </p>

            {post.content.map((paragraph, idx) => (
              <p key={idx} className="text-brandText-muted">
                {paragraph}
              </p>
            ))}

            <div className="pt-6 border-t border-brandBorder/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-brandText font-semibold">
                Have questions about soil nutrition?
              </p>
              <WhatsAppBuyButton
                type="general"
                customText="Ask Our Agronomists on WhatsApp"
                variant="primary"
                className="text-xs py-2.5 px-5"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
