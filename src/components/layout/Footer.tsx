'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/data/site';
import { footerNavItems } from '@/data/navigation';
import { ArrowRight, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';

/* ─── SVG Icons ─── */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

/* ─── Social pill button ─── */
const SocialLink: React.FC<{
  href: string;
  label: string;
  children: React.ReactNode;
  colorCls?: string;
}> = ({ href, label, children, colorCls = 'bg-cream/10 hover:bg-cream/20' }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className={`w-9 h-9 flex items-center justify-center rounded-full text-cream transition-all duration-200 ${colorCls}`}
  >
    {children}
  </a>
);

/* ─── Nav link list ─── */
const NavList: React.FC<{ items: { label: string; href: string }[] }> = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item) => (
      <li key={item.href}>
        <Link
          href={item.href}
          className="text-cream/70 hover:text-secondary-light text-sm transition-colors inline-flex items-center gap-1 group"
        >
          <ArrowRight className="w-3.5 h-3.5 text-secondary opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
          <span>{item.label}</span>
        </Link>
      </li>
    ))}
  </ul>
);

/* ─── Mobile accordion section ─── */
const AccordionSection: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream/10">
      <button
        onClick={() => setOpen((p) => !p)}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold uppercase tracking-widest text-cream/80">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-secondary transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </div>
  );
};

/* ══════════════════════
   FOOTER
══════════════════════ */
export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}`;

  const socialLinks = (
    <div className="flex items-center gap-3">
      {siteConfig.socials.facebook && (
        <SocialLink href={siteConfig.socials.facebook} label="Facebook">
          <FacebookIcon />
        </SocialLink>
      )}
      {siteConfig.socials.instagram && (
        <SocialLink href={siteConfig.socials.instagram} label="Instagram">
          <InstagramIcon />
        </SocialLink>
      )}
      <SocialLink href={whatsappUrl} label="WhatsApp" colorCls="bg-[#25D366]/20 hover:bg-[#25D366]/40">
        <WhatsAppIcon />
      </SocialLink>
      <SocialLink href="https://youtube.com/@urvarashakti" label="YouTube" colorCls="bg-red-600/20 hover:bg-red-600/40">
        <YoutubeIcon />
      </SocialLink>
    </div>
  );

  return (
    <footer className="bg-primary text-cream-light border-t border-primary-dark relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/8 rounded-full blur-3xl pointer-events-none" />

      {/* ══ DESKTOP (md+) ═══════════════════════════════════ */}
      <div className="hidden md:block max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 pb-10 border-b border-cream/10">
          {/* Brand */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <div className="bg-cream p-3 rounded-xl inline-block shadow-md">
                <Image
                  src="/logo/logo-transparent.webp"
                  alt="Urvara Shakti Logo"
                  width={180}
                  height={52}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-cream/80 text-sm max-w-sm leading-relaxed">
              {siteConfig.headline} {siteConfig.subheading}
            </p>
            <p className="text-secondary-light font-semibold text-sm italic">
              — {siteConfig.tagline} —
            </p>
            <WhatsAppBuyButton
              type="general"
              customText="Order on WhatsApp"
              variant="secondary"
              className="text-sm py-2.5 px-5"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/50 mb-4">
              Quick Links
            </h3>
            <NavList items={footerNavItems.quickLinks} />
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/50 mb-4">
              Our Products
            </h3>
            <NavList items={footerNavItems.products} />
          </div>

          {/* Commercial */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-cream/50 mb-4">
              Commercial
            </h3>
            <NavList items={footerNavItems.commercial} />
          </div>
        </div>

        {/* Desktop bottom bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          {socialLinks}
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-cream transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-cream transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="hover:text-cream transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* ══ MOBILE (< md) ════════════════════════════════════ */}
      <div className="md:hidden relative z-10">

        {/* Logo + tagline + WhatsApp CTA */}
        <div className="flex flex-col items-center gap-3 pt-10 pb-6 px-5 border-b border-cream/10">
          <Link href="/">
            <div className="bg-cream p-2.5 rounded-xl inline-block shadow-md">
              <Image
                src="/logo/logo-transparent.webp"
                alt="Urvara Shakti Logo"
                width={140}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </div>
          </Link>
          <p className="text-secondary-light font-semibold text-sm italic text-center">
            — {siteConfig.tagline} —
          </p>
          <WhatsAppBuyButton
            type="general"
            customText="Order on WhatsApp"
            variant="secondary"
            className="text-sm py-2.5 px-5 mt-1"
          />
        </div>

        {/* Accordion nav */}
        <div className="px-5">
          <AccordionSection title="About">
            <NavList items={footerNavItems.quickLinks} />
          </AccordionSection>
          <AccordionSection title="Explore">
            <NavList items={footerNavItems.products} />
          </AccordionSection>
          <AccordionSection title="Studio">
            <NavList items={footerNavItems.commercial} />
          </AccordionSection>
        </div>

        {/* Contact block */}
        <div className="px-5 py-6 space-y-3 border-t border-cream/10 mt-1">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-2.5 text-sm text-cream/75 hover:text-secondary-light transition-colors"
          >
            <Phone className="w-4 h-4 text-secondary shrink-0" />
            {siteConfig.contact.phone}
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="flex items-center gap-2.5 text-sm text-cream/75 hover:text-secondary-light transition-colors"
          >
            <Mail className="w-4 h-4 text-secondary shrink-0" />
            {siteConfig.contact.email}
          </a>
          <div className="flex items-start gap-2.5 text-sm text-cream/65">
            <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
            <span>{siteConfig.contact.address}</span>
          </div>
        </div>

        {/* Social icons row */}
        <div className="px-5 pb-6 border-t border-cream/10 pt-5">
          {socialLinks}
        </div>

        {/* Mobile copyright strip */}
        <div className="bg-black/20 px-5 py-4 text-center text-xs text-cream/45">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
