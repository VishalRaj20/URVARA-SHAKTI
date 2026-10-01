export interface SiteConfig {
  name: string;
  tagline: string;
  headline: string;
  subheading: string;
  url: string;
  description: string;
  brandStory: {
    heroQuote: string;
    whoWeAre: string;
    ourStory: string[];
    visionTitle: string;
    visionText: string;
    visionPoints: string[];
    missionText: string;
    missionPoints: string[];
    leadershipPhilosophy: string;
    values: Array<{ title: string; description: string }>;
  };
  contact: {
    whatsappNumber: string;
    phone: string;
    email: string;
    address: string;
    operatingHours: string;
    mapEmbedUrl?: string;
  };
  socials: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
  purchaseChannels: {
    whatsapp: boolean;
    amazonUrl?: string;
    flipkartUrl?: string;
    dealerLocatorUrl?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Urvara Shakti',
  tagline: 'Kyari Ki Kilkari',
  headline: 'Healthy Soil. Healthy Plants. Healthy Planet.',
  subheading:
    'Scientifically tested organic solutions designed to improve soil fertility, strengthen roots, enhance plant growth, and support sustainable gardening and agriculture.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  description:
    'Urvara Shakti produces premium organic bio-compost, ready-to-use potting soil, and liquid plant enhancers designed to restore micro-biome health to your soil.',
  brandStory: {
    heroQuote: 'We are not simply selling compost. We are helping restore life to the soil.',
    whoWeAre:
      'Urvara Shakti is a soil health-focused company committed to developing organic growing solutions that support healthier plants, stronger roots, and more fertile soil.',
    ourStory: [
      "India's soil is silently losing its natural strength.",
      'For decades, excessive chemical usage, declining organic matter, soil erosion, and environmental pollution have reduced the fertility of our land. As soil health declines, farmers and gardeners become increasingly dependent on synthetic fertilizers and chemicals to maintain productivity.',
      'At Urvara Shakti, we believe that healthy soil is the foundation of healthy plants, healthy food, healthy communities, and a healthy planet.',
      'Our journey began with a simple mission: to transform valuable organic resources into sustainable solutions that restore soil fertility naturally.',
      'Through scientific composting, quality testing, and environmentally responsible practices, we create products that nourish the soil, strengthen root systems, improve water retention, and support healthier plant growth.',
      'Every bag of Urvara Shakti represents our commitment to rebuilding soil health, reducing chemical dependency, supporting sustainable agriculture, and creating greener living spaces for future generations.',
    ],
    visionTitle: 'Restoring Soil. Reviving Nature. Sustaining Life.',
    visionText:
      "To become India's most trusted soil health and sustainable growing solutions company by helping farmers, gardeners, institutions, and communities rebuild soil fertility naturally while reducing environmental pollution and chemical dependency.",
    visionPoints: [
      'Soil is rich in organic matter.',
      'Food is grown with fewer chemicals.',
      'Water remains cleaner and safer.',
      'Urban and rural green spaces continue to flourish.',
      'Sustainable agriculture becomes the standard rather than the exception.',
    ],
    missionText:
      'Our mission is to improve soil health through scientifically developed organic products that enhance plant growth, improve soil structure, increase water retention, and support environmentally responsible cultivation practices.',
    missionPoints: [
      'Improve soil fertility naturally.',
      'Promote sustainable gardening and farming.',
      'Reduce dependence on chemical fertilizers.',
      'Support healthy plant growth.',
      'Increase awareness about soil health.',
      'Contribute to a greener and healthier environment.',
    ],
    leadershipPhilosophy:
      'We believe that the future of agriculture and gardening depends on restoring the natural balance of soil ecosystems.',
    values: [
      {
        title: 'Sustainability',
        description: 'Creating products that support long-term environmental health.',
      },
      {
        title: 'Quality',
        description: 'Every product undergoes strict quality control and testing.',
      },
      {
        title: 'Transparency',
        description: 'Clear information, honest communication, and scientific validation.',
      },
      {
        title: 'Innovation',
        description: 'Developing better solutions for soil and plant health.',
      },
      {
        title: 'Responsibility',
        description: 'Supporting future generations through responsible environmental practices.',
      },
    ],
  },
  contact: {
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919876543210',
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+91 98765 43210',
    email: process.env.NEXT_PUBLIC_EMAIL || 'contact@urvarashakti.com',
    address:
      process.env.NEXT_PUBLIC_OFFICE_ADDRESS ||
      'Urvara Shakti Soil Solutions Pvt. Ltd., Industrial Area, Sector 12, New Delhi - 110001, India',
    operatingHours: 'Monday – Saturday: 9:00 AM – 6:00 PM IST',
  },
  socials: {
    instagram: 'https://instagram.com/urvarashakti',
    facebook: 'https://facebook.com/urvarashakti',
    linkedin: 'https://linkedin.com/company/urvarashakti',
  },
  purchaseChannels: {
    whatsapp: true,
    amazonUrl: 'https://amazon.in',
    flipkartUrl: 'https://flipkart.com',
    dealerLocatorUrl: '/dealer',
  },
};
