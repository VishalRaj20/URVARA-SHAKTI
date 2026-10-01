export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  image: string;
  benefits: Array<{ title: string; description: string }>;
  suitableFor: string[];
  usageInstructions: Array<{ title: string; text: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const productsData: Product[] = [
  {
    id: 'bio-compost',
    slug: 'bio-compost',
    name: 'Bio Compost',
    tagline: 'Nutrient-Rich Organic Soil Conditioner',
    shortDescription:
      'Nutrient-rich organic compost created from naturally decomposed biodegradable matter to enrich soil naturally and boost root vitality.',
    overview:
      'Urvara Shakti Bio Compost is a nutrient-rich organic soil conditioner created from naturally decomposed biodegradable organic matter. The compost enriches soil naturally, improves soil structure, supports beneficial microbial activity, and encourages healthy plant growth.',
    image: '/images/products/bio-compost.webp',
    benefits: [
      {
        title: 'Improves Soil Fertility',
        description: 'Adds valuable organic matter naturally to depleted soils.',
      },
      {
        title: 'Better Water Retention',
        description: 'Supports moisture conservation and keeps soil hydrated longer.',
      },
      {
        title: 'Improves Soil Structure',
        description: 'Enhances aeration and root penetration capacity.',
      },
      {
        title: 'Supports Strong Root Growth',
        description: 'Creates highly favourable organic growing conditions.',
      },
      {
        title: 'Supports Sustainable Growing',
        description: 'Suitable for environmentally conscious gardening and farming.',
      },
    ],
    suitableFor: [
      'Indoor Plants',
      'Outdoor Plants',
      'Vegetables',
      'Fruits',
      'Flowering Plants',
      'Trees',
      'Lawns',
      'Kitchen Gardens',
      'Nurseries',
      'Farms',
    ],
    usageInstructions: [
      {
        title: 'For Pots',
        text: 'Add 100-200 grams depending on plant size around the root zone.',
      },
      {
        title: 'For Gardens',
        text: 'Mix evenly into topsoil before planting or during routine soil feeding.',
      },
      {
        title: 'For Crops',
        text: 'Apply around root zones and incorporate into soil during field preparation.',
      },
      {
        title: 'Water After Application',
        text: 'Maintain proper soil moisture by watering thoroughly right after application.',
      },
    ],
    faqs: [
      {
        question: 'What is Bio Compost?',
        answer:
          'Bio Compost is a nutrient-dense organic soil conditioner created from naturally decomposed biodegradable organic matter.',
      },
      {
        question: 'How often should I apply Bio Compost?',
        answer:
          'For potted plants, apply 100-200 grams every 30 to 45 days. For garden beds and crops, apply during soil preparation and active vegetative growth stages.',
      },
      {
        question: 'Is it safe for indoor plants and kitchen vegetables?',
        answer:
          'Yes, 100%! Urvara Shakti Bio Compost is chemical-free, weed-seed free, and completely safe for all indoor house plants, flowering pots, and edible kitchen crops.',
      },
    ],
  },
  {
    id: 'ready-to-use-soil',
    slug: 'ready-to-use-soil',
    name: 'Ready-to-Use Soil',
    tagline: 'Professionally Blended Ready Planting Medium',
    shortDescription:
      'Professionally prepared planting medium designed for immediate use. No mixing required.',
    overview:
      'A professionally prepared planting medium designed for immediate use. No mixing required. Simply fill the pot, planter, grow bag, or bed and start planting right away.',
    image: '/images/products/ready-soil-mix.webp',
    benefits: [
      {
        title: 'Saves Preparation Time',
        description: 'Eliminates raw ingredient mixing mess and labor effort.',
      },
      {
        title: 'Balanced Growing Medium',
        description: 'Scientifically proportioned for root aeration and water drainage.',
      },
      {
        title: 'Better Root Establishment',
        description: 'Allows tender roots to expand rapidly without soil compaction.',
      },
      {
        title: 'Suitable for Beginners',
        description: 'Foolproof potting medium ideal for urban and home gardeners.',
      },
      {
        title: 'Ideal for Urban Gardening',
        description: 'Lightweight formulation perfect for balcony decks and planters.',
      },
    ],
    suitableFor: [
      'Balcony Gardens',
      'Terrace Gardens',
      'Indoor Plants',
      'Flower Pots',
      'Kitchen Gardens',
    ],
    usageInstructions: [
      {
        title: 'Preparation',
        text: 'Ensure planter or pot has functional bottom drainage holes.',
      },
      {
        title: 'Filling Container',
        text: 'Simply fill the pot, planter, grow bag, or garden bed with Ready-to-Use Soil.',
      },
      {
        title: 'Planting & Firming',
        text: 'Insert seedling root ball, press gently around the base, and water thoroughly.',
      },
    ],
    faqs: [
      {
        question: 'Do I need to mix this with garden soil or sand?',
        answer:
          'No! Urvara Shakti Ready-to-Use Soil is completely pre-blended and ready to use straight out of the bag.',
      },
      {
        question: 'Can I use this for balcony planters?',
        answer:
          'Yes, it is specially formulated to be lightweight, porous, and moisture-retaining, making it perfect for balcony and terrace containers.',
      },
    ],
  },
  {
    id: 'plant-enhancer',
    slug: 'plant-enhancer',
    name: 'Plant Enhancer',
    tagline: 'Liquid Growth Support & Foliar Vitality Formula',
    shortDescription:
      'Liquid growth-support formulation developed to improve plant vigor, foliage development, and stronger growth.',
    overview:
      'Urvara Shakti Plant Enhancer is a liquid growth-support formulation developed to improve plant vigor, support healthy foliage development, and encourage stronger growth across all plant species.',
    image: '/images/products/plant-enhancer.webp',
    benefits: [
      {
        title: 'Supports Plant Growth',
        description: 'Boosts vegetative vigor and speeds up plant greening.',
      },
      {
        title: 'Improves Nutrient Utilization',
        description: 'Helps plants absorb micro-nutrients more efficiently.',
      },
      {
        title: 'Promotes Healthy Foliage',
        description: 'Enhances leaf size, shine, and chlorophyll density.',
      },
      {
        title: 'Supports Flowering and Fruiting',
        description: 'Prevents flower drop and boosts bloom abundance.',
      },
      {
        title: 'Easy Application',
        description: 'Simple dilution format for quick foliar spray or soil drenching.',
      },
    ],
    suitableFor: [
      'Flowering Ornamentals',
      'Indoor Foliage Plants',
      'Vegetable Plants & Fruit Trees',
      'Lawn & Nursery Crops',
    ],
    usageInstructions: [
      {
        title: 'Dilution',
        text: 'Mix recommended dosage (5ml) with 1 Liter of clean water.',
      },
      {
        title: 'Root Zone Application',
        text: 'Apply around the root zone soil of potted plants every 14 days.',
      },
      {
        title: 'Foliar Spray Application',
        text: 'Spray gently onto plant leaves early morning or late evening for maximum stomata absorption.',
      },
    ],
    faqs: [
      {
        question: 'How do I apply Plant Enhancer?',
        answer:
          'Mix recommended dosage with water and apply around the root zone or spray evenly on plant leaves during early morning or late evening.',
      },
    ],
  },
];
