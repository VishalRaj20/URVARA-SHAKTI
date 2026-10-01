export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const mainNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Quality & Testing', href: '/quality' },
  { label: 'Dealer Inquiry', href: '/dealer' },
  { label: 'Bulk Orders', href: '/bulk-orders' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const footerNavItems = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'Brand Story', href: '/about' },
    { label: 'Quality Parameters', href: '/quality' },
    { label: 'Photo Gallery', href: '/gallery' },
    { label: 'Soil Health Blog', href: '/blog' },
  ],
  products: [
    { label: 'Bio Compost', href: '/products/bio-compost' },
    { label: 'Ready-to-use Soil Mix', href: '/products/ready-to-use-soil' },
    { label: 'Plant Enhancer', href: '/products/plant-enhancer' },
    { label: 'All Products Overview', href: '/products' },
  ],
  commercial: [
    { label: 'Become a Dealer', href: '/dealer' },
    { label: 'Bulk Orders & Farms', href: '/bulk-orders' },
    { label: 'Contact & Support', href: '/contact' },
    { label: 'Frequently Asked Questions', href: '/faq' },
  ],
};
