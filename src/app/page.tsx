import { HomeHero } from '@/components/hero/HomeHero';
import { WhySoilMatters } from '@/components/sections/WhySoilMatters';
import { FeaturedProducts } from '@/components/sections/FeaturedProducts';
import { QualityTeaser } from '@/components/sections/QualityTeaser';
import { BrandStoryTeaser } from '@/components/sections/BrandStoryTeaser';
import { DealerCTA } from '@/components/sections/DealerCTA';
import { FAQTeaser } from '@/components/sections/FAQTeaser';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhySoilMatters />
      <FeaturedProducts />
      <QualityTeaser />
      <BrandStoryTeaser />
      <DealerCTA />
      <FAQTeaser />
    </>
  );
}
