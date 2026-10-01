'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mainNavItems } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { Menu } from 'lucide-react';
import { MobileNav } from '@/components/layout/MobileNav';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';

export const Navbar: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Subset of primary navbar links for clean desktop display
  const primaryLinks = [
    { label: 'About', href: '/about' },
    { label: 'Products', href: '/products' },
    { label: 'Quality & Testing', href: '/quality' },
    { label: 'Dealer Inquiry', href: '/dealer' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full glass-cream border-b border-brandBorder/60 transition-all">
        {/* Skip link for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-primary text-cream px-4 py-2 rounded-md z-50"
        >
          Skip to main content
        </a>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Urvara Shakti Home"
          >
            <Image
              src="/logo/logo-transparent.webp"
              alt="Urvara Shakti Logo"
              width={180}
              height={52}
              priority
              className="h-12 object-contain transition-transform group-hover:scale-105"
              style={{ width: 'auto' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {primaryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-brandText hover:text-primary transition-colors py-1 relative group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Menu Trigger */}
          <div className="flex items-center gap-4">
            <WhatsAppBuyButton
              type="general"
              customText="Shop Now"
              variant="primary"
              className="hidden sm:inline-flex text-sm py-2.5 px-5"
            />

            <button
              onClick={() => setMobileNavOpen(true)}
              className="lg:hidden p-2 text-primary hover:text-primary-dark rounded-lg hover:bg-cream-dark/50 transition-colors"
              aria-label="Open Mobile Navigation Menu"
              aria-expanded={mobileNavOpen}
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />
    </>
  );
};
