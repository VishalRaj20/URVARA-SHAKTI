'use client';

import React from 'react';
import { siteConfig } from '@/data/site';

export const BulkForm: React.FC = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const sector = (form.elements.namedItem('sector') as HTMLSelectElement).value;
        const qty = (form.elements.namedItem('qty') as HTMLInputElement).value;
        const location = (form.elements.namedItem('location') as HTMLInputElement).value;
        const msg = `Hello Urvara Shakti, I am requesting a bulk quote for ${sector}. Quantity: ${qty}, Location: ${location}. Please contact me.`;
        window.open(
          `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`,
          '_blank'
        );
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-xs font-semibold text-brandText mb-1.5">
          Select Sector / Category *
        </label>
        <select
          name="sector"
          required
          className="w-full bg-cream border border-brandBorder rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="Nurseries">Plant Nursery</option>
          <option value="Parks">Parks & City Gardens</option>
          <option value="Landscapers">Landscape Architecture</option>
          <option value="Educational Institutions">Educational Institution</option>
          <option value="Housing Societies">Housing Society</option>
          <option value="Commercial Farm">Commercial Farm / Orchard</option>
          <option value="Government Project">Government Project</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-brandText mb-1.5">
            Estimated Quantity (Tons / Bags) *
          </label>
          <input
            type="text"
            name="qty"
            required
            placeholder="e.g. 5 Tons or 200 Bags"
            className="w-full bg-cream border border-brandBorder rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-brandText mb-1.5">
            Delivery Location / City *
          </label>
          <input
            type="text"
            name="location"
            required
            placeholder="e.g. Noida, UP"
            className="w-full bg-cream border border-brandBorder rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-cream hover:bg-primary-dark font-semibold rounded-full py-3.5 text-sm transition-colors shadow-md"
      >
        Send Bulk Quote Request via WhatsApp
      </button>
    </form>
  );
};
