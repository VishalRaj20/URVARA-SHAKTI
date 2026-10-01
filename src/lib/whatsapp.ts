import { siteConfig } from '@/data/site';

/**
 * Builds a direct WhatsApp chat URL with a custom pre-filled message.
 * Formats the number (digits only, no '+' or spaces).
 * Warns in console if the number is still a placeholder.
 */
export function buildWhatsAppUrl(message: string): string {
  const number = siteConfig.contact.whatsappNumber;

  if (!number || number.includes('TODO_')) {
    if (typeof window !== 'undefined') {
      console.warn(
        '⚠️ [URVARA SHAKTI WARNING] WhatsApp phone number is set to placeholder:',
        number,
        '\nPlease update siteConfig.contact.whatsappNumber in src/data/site.ts with your official digits (e.g. 919876543210).'
      );
    }
  }

  // Strip non-digit characters
  const cleanNumber = number.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message.trim());

  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

/**
 * WhatsApp Message Templates
 */
export const whatsappTemplates = {
  productInquiry: (productName: string) =>
    `Hello Urvara Shakti, I am interested in purchasing ${productName}. Please share the price and available pack sizes.`,
  dealerInquiry: () =>
    `Hello Urvara Shakti, I am interested in becoming an authorized dealer/distributor. Please share dealership terms and onboarding process.`,
  bulkInquiry: (targetGroup?: string) =>
    `Hello Urvara Shakti, I would like to place a bulk order${
      targetGroup ? ` for ${targetGroup}` : ''
    }. Please connect me with your bulk order sales team.`,
  generalInquiry: () =>
    `Hello Urvara Shakti, I have an inquiry regarding your sustainable soil-health products.`,
};
