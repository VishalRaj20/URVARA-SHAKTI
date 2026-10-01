'use client';

import React from 'react';
import { siteConfig } from '@/data/site';

export const DealerForm: React.FC = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const city = (form.elements.namedItem('city') as HTMLInputElement).value;
        const business = (form.elements.namedItem('business') as HTMLInputElement).value;
        const msg = `Hello Urvara Shakti, my name is ${name} from ${city} (${business}). I am applying to become an authorized dealer.`;
        window.open(
          `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`,
          '_blank'
        );
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-brandText mb-1.5">
            Your Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Ramesh Kumar"
            className="w-full bg-cream border border-brandBorder rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-brandText mb-1.5">
            City / Region *
          </label>
          <input
            type="text"
            name="city"
            required
            placeholder="e.g. Jaipur, Rajasthan"
            className="w-full bg-cream border border-brandBorder rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-brandText mb-1.5">
          Nursery / Business Name *
        </label>
        <input
          type="text"
          name="business"
          required
          placeholder="e.g. Green Planet Plant Nursery"
          className="w-full bg-cream border border-brandBorder rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-cream hover:bg-primary-dark font-semibold rounded-full py-3.5 text-sm transition-colors shadow-md"
      >
        Submit Application via WhatsApp
      </button>
    </form>
  );
};
