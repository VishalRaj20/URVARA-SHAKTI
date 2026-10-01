'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { mainNavItems } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { X, MessageSquare } from 'lucide-react';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-surface-dark/60 backdrop-blur-sm lg:hidden transition-opacity duration-300"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-label="Mobile Navigation Menu"
    >
      <div
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-cream p-6 shadow-2xl flex flex-col justify-between border-l border-brandBorder"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header inside Drawer */}
          <div className="flex items-center justify-between pb-6 border-b border-brandBorder">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <Image
                src="/logo/logo-transparent.webp"
                alt="Urvara Shakti Logo"
                width={140}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <button
              onClick={onClose}
              className="p-2 text-primary hover:text-primary-dark rounded-full hover:bg-cream-dark transition-colors"
              aria-label="Close Mobile Navigation"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="mt-6 flex flex-col gap-3">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="py-2.5 px-3 text-lg font-medium text-brandText hover:text-primary hover:bg-cream-light rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-xs bg-secondary/20 text-primary px-2 py-0.5 rounded-full font-semibold">
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        {/* Drawer Footer CTA */}
        <div className="pt-6 border-t border-brandBorder flex flex-col gap-3">
          <WhatsAppBuyButton
            type="general"
            customText="Shop Now via WhatsApp"
            className="w-full text-center"
          />
          <p className="text-xs text-center text-brandText-muted">
            {siteConfig.tagline} — Restore Soil Life
          </p>
        </div>
      </div>
    </div>
  );
};
