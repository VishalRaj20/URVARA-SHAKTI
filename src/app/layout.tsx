import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppBuyButton } from '@/components/ui/WhatsAppBuyButton';
import { siteConfig } from '@/data/site';
import { generateOrganizationSchema } from '@/lib/seo';

const snPro = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sn-pro',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.headline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Bio Compost',
    'Organic Compost',
    'Soil Enhancer',
    'Ready to Use Soil',
    'Potting Mix',
    'Soil Microbiology',
    'Kyari ki Kilkari',
    'Terrace Gardening Soil',
    'Urban Gardening India',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: '/logo/favicon-32x32.png',
    shortcut: '/logo/favicon.ico',
    apple: '/logo/icon-192.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/logo/og-image.png`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — Kyari ki Kilkari`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.headline}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}/logo/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrganizationSchema();

  return (
    <html lang="en" className={`${snPro.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="font-sans antialiased bg-cream text-brandText flex flex-col min-h-screen">
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppBuyButton variant="floating" aria-label="WhatsApp Chat" />
      </body>
    </html>
  );
}
