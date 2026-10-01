export interface BlogPost {
  slug: string;
  title: string;
  category: 'Soil Health' | 'Gardening' | 'Environment' | 'Agriculture' | 'Plant Care';
  excerpt: string;
  readTime: string;
  publishedAt: string;
  author: string;
  image: string;
  content: string[];
}

export const blogCategories = [
  'All',
  'Soil Health',
  'Gardening',
  'Environment',
  'Agriculture',
  'Plant Care',
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-soil-health-matters',
    title: 'Why Soil Health Matters: The Foundation of Thriving Ecosystems',
    category: 'Soil Health',
    excerpt:
      'Healthy soil is the foundation of every thriving garden, farm, landscape, and ecosystem. Discover how organic carbon restores vitality.',
    readTime: '4 min read',
    publishedAt: '2026-09-10',
    author: 'Urvara Shakti Soil Team',
    image: '/images/hero/hero-sprout.webp',
    content: [
      'Healthy soil is the foundation of every thriving garden, farm, landscape, and ecosystem.',
      'When soil loses its organic matter, plant growth declines, water retention decreases, chemical dependency increases, and crop productivity suffers.',
      'Through scientific bio-composting, we replenish organic carbon, rebuild beneficial micro-biomes, and empower plants to absorb natural nutrients deep from the earth.',
    ],
  },
  {
    slug: 'understanding-organic-matter-in-soil',
    title: 'Understanding Organic Matter: The Sponge and Battery of Soil',
    category: 'Soil Health',
    excerpt:
      'Learn how organic humus holds moisture, feeds beneficial soil microbes, and buffers soil against nutrient leaching.',
    readTime: '5 min read',
    publishedAt: '2026-09-14',
    author: 'Urvara Shakti Agronomist',
    image: '/images/products/bio-compost.webp',
    content: [
      'Organic matter acts as both a sponge for water and a battery for plant nutrients in fertile soil.',
      'Adding well-cured bio-compost restores soil pore structure, allowing oxygen to reach root zones while holding up to 5 times its weight in water.',
    ],
  },
  {
    slug: 'terrace-gardening-guide-urban-homes',
    title: 'Terrace Gardening Guide: Creating Green Sanctuaries in Urban Spaces',
    category: 'Gardening',
    excerpt:
      'Transform urban rooftops and balcony decks into lush food and flower gardens using pre-mixed organic soil mediums.',
    readTime: '6 min read',
    publishedAt: '2026-09-18',
    author: 'Urvara Shakti Green Team',
    image: '/images/products/ready-soil-mix.webp',
    content: [
      'Urban container gardening requires lightweight, high-porosity potting media that do not compact over time.',
      'Using pre-blended Ready-to-Use Soil ensures instant root setup, superior drainage, and zero messy raw ingredient mixing.',
    ],
  },
  {
    slug: 'best-plants-for-beginners',
    title: 'Best Plants for Beginners: Easy-to-Grow House & Garden Varieties',
    category: 'Gardening',
    excerpt:
      'Starting your green journey? Here are resilient foliage and flowering plants that thrive with organic bio-compost.',
    readTime: '4 min read',
    publishedAt: '2026-09-22',
    author: 'Urvara Shakti Horticulture Expert',
    image: '/images/products/plant-enhancer.webp',
    content: [
      'Resilient indoor plants like Pothos, Snake Plant, and Peace Lily blossom effortlessly when top-dressed with bio-compost every month.',
    ],
  },
  {
    slug: 'reducing-chemical-dependency-in-gardening',
    title: 'Reducing Chemical Dependency: Restoring Natural Earth Balance',
    category: 'Environment',
    excerpt:
      'Decades of excessive synthetic fertilizers have damaged natural land microbiology. Learn how organic alternatives reverse the trend.',
    readTime: '5 min read',
    publishedAt: '2026-09-25',
    author: 'Urvara Shakti Eco Team',
    image: '/images/hero/hero-sprout.webp',
    content: [
      'Excessive chemical nitrogen burns soil microbiology and degrades natural land structure.',
      'By switching to bio-compost and bio-stimulant foliar sprays, gardeners foster long-term soil carbon and protect local water tables.',
    ],
  },
  {
    slug: 'organic-farming-benefits-and-soil-fertility',
    title: 'Organic Farming Benefits: Long-Term Soil Fertility Management',
    category: 'Agriculture',
    excerpt:
      'How commercial farms and orchards rebuild topsoil fertility, boost crop resilience, and reduce input costs naturally.',
    readTime: '7 min read',
    publishedAt: '2026-09-28',
    author: 'Urvara Shakti Senior Agronomist',
    image: '/images/products/bio-compost.webp',
    content: [
      'Organic farming focuses on feeding the soil micro-biome rather than forcing plant foliage with quick chemical salts.',
      'Bio-compost application enhances earthworm populations and preserves soil moisture during heatwaves.',
    ],
  },
  {
    slug: 'root-health-guide-and-nutrient-deficiency-signs',
    title: 'Root Health Guide: Identifying & Fixing Nutrient Deficiencies Early',
    category: 'Plant Care',
    excerpt:
      'Yellowing leaves, stunted shoots, and weak stems are clear warning signs. Here is how to diagnose and nourish your plants.',
    readTime: '5 min read',
    publishedAt: '2026-09-30',
    author: 'Urvara Shakti Plant Care Team',
    image: '/images/products/plant-enhancer.webp',
    content: [
      'Root health determines plant leaf brightness and flower yield.',
      'Applying liquid Plant Enhancer provides instant foliar nutrition, overcoming root nutrient lockout during temperature shifts.',
    ],
  },
];
