import React from 'react';
import { buildWhatsAppUrl, whatsappTemplates } from '@/lib/whatsapp';
import { MessageSquare } from 'lucide-react';

interface WhatsAppBuyButtonProps {
  productName?: string;
  type?: 'product' | 'dealer' | 'bulk' | 'general';
  targetGroup?: string;
  customText?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'floating';
}

export const WhatsAppBuyButton: React.FC<WhatsAppBuyButtonProps> = ({
  productName = 'Organic Compost',
  type = 'product',
  targetGroup,
  customText,
  className = '',
  variant = 'primary',
}) => {
  let message = whatsappTemplates.productInquiry(productName);

  if (type === 'dealer') {
    message = whatsappTemplates.dealerInquiry();
  } else if (type === 'bulk') {
    message = whatsappTemplates.bulkInquiry(targetGroup);
  } else if (type === 'general') {
    message = whatsappTemplates.generalInquiry();
  }

  const url = buildWhatsAppUrl(message);

  const baseStyles =
    'inline-flex items-center justify-center gap-2.5 font-medium rounded-full transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 select-none cursor-pointer';

  const variants = {
    primary:
      'bg-primary text-cream-light hover:bg-primary-dark shadow-sm hover:shadow-md px-6 py-3.5 text-base',
    secondary:
      'bg-secondary text-surface-dark font-semibold hover:bg-secondary-light shadow-sm px-6 py-3.5 text-base',
    outline:
      'border-2 border-primary text-primary hover:bg-primary hover:text-cream-light px-5 py-3 text-base',
    floating:
      'fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300',
  };

  const buttonText = customText || (type === 'dealer' ? 'Inquire for Dealership' : type === 'bulk' ? 'Request Bulk Quote' : 'Buy Now via WhatsApp');

  if (variant === 'floating') {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Urvara Shakti on WhatsApp"
        className={`${variants.floating} ${className}`}
      >
        <MessageSquare className="w-6 h-6 fill-current" />
      </a>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <MessageSquare className="w-5 h-5 shrink-0" />
      <span>{buttonText}</span>
    </a>
  );
};
