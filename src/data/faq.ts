export interface FAQItem {
  id: string;
  category: 'general' | 'usage' | 'products' | 'dealer' | 'sustainability';
  question: string;
  answer: string;
}

export const faqCategories = [
  { id: 'all', label: 'All Questions' },
  { id: 'general', label: 'General & Brand' },
  { id: 'products', label: 'Products & Compost' },
  { id: 'usage', label: 'Usage & Application' },
  { id: 'dealer', label: 'Dealer & Bulk' },
];

export const faqData: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What makes Urvara Shakti products unique?',
    answer:
      'Urvara Shakti focuses on restorative soil microbiology rather than quick chemical fixes. Our organic bio-composts and potting media are fully aerobically cured, rich in organic carbon, and free from harmful chemicals or pathogens.',
  },
  {
    id: 'faq-2',
    category: 'general',
    question: 'What does "Kyari ki Kilkari" mean?',
    answer:
      '"Kyari ki Kilkari" represents the joyous laughter and thriving life of plants growing in a nurtured garden bed. It is our promise to bring vitality and joy back to your garden soil.',
  },
  {
    id: 'faq-3',
    category: 'products',
    question: 'Are Urvara Shakti composts safe for organic food growing?',
    answer:
      'Yes, 100%. All our soil products are composed of natural organic mass and beneficial microbes, making them ideal for organic vegetable gardening, fruit trees, and herbs.',
  },
  {
    id: 'faq-4',
    category: 'usage',
    question: 'How often should I feed my potted plants?',
    answer:
      'Top-dress potted plants with Urvara Shakti Bio Compost every 30 to 45 days. For extra growth and flowering, spray Urvara Shakti Plant Enhancer every 14 days.',
  },
  {
    id: 'faq-5',
    category: 'dealer',
    question: 'How can I become an authorized dealer or distributor?',
    answer:
      'We welcome partnerships with plant nurseries, garden centers, and agricultural retail outlets. Click on "Become a Dealer" or connect directly via WhatsApp to receive dealer terms and bulk pricing catalogues.',
  },
  {
    id: 'faq-6',
    category: 'dealer',
    question: 'Do you supply bulk orders for housing societies and commercial farms?',
    answer:
      'Yes! We supply bulk tonnage for residential housing societies, urban parks, commercial nurseries, landscape architects, and agricultural farms.',
  },
];
