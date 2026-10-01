'use client';

import React from 'react';
import { Send } from 'lucide-react';
import { siteConfig } from '@/data/site';

export const ContactForm: React.FC = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const subject = (form.elements.namedItem('subject') as HTMLInputElement).value;
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
        const text = `Hello Urvara Shakti, my name is ${name}. Subject: ${subject}. Message: ${message}`;
        window.open(
          `https://wa.me/${siteConfig.contact.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`,
          '_blank'
        );
      }}
      className="space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-brandText mb-1.5">
            Your Name *
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="e.g. Ananya Sharma"
            className="w-full bg-surface border border-brandBorder rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-brandText mb-1.5">
            Inquiry Subject *
          </label>
          <input
            type="text"
            name="subject"
            required
            placeholder="e.g. Bio Compost Usage Question"
            className="w-full bg-surface border border-brandBorder rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-brandText mb-1.5">
          Your Message *
        </label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Write your message or inquiry here..."
          className="w-full bg-surface border border-brandBorder rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-cream hover:bg-primary-dark font-semibold rounded-full py-3.5 text-sm transition-colors shadow-md flex items-center justify-center gap-2"
      >
        <Send className="w-4 h-4" />
        <span>Send Message via WhatsApp</span>
      </button>
    </form>
  );
};
