import React from 'react';
import ProductCard from '@/components/shared/productCard';
import { products } from '@/constants';
import HeroSection from '@/components/shared/heroSection';
import TrendingSection from '@/components/shared/trendingSection';

const Home = () => {
  return (
    <div className="container mx-auto">
      <HeroSection
        title='Style That Moves With You'
        description='Not just style. Not just comfort. But a perfect blend of both that moves with you.'
        imageUrl='/hero-shoe.png'
        backgroundImageUrl='/hero-bg.png'
        ctaText='Find your Shoe'
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <TrendingSection />

      <HeroSection
        title="Elevate Your Run"
        description="Experience the perfect fusion of style and performance with our latest collection."
        imageUrl='/feature.png'
        ctaText='Shop Now'
      />
    </div>
  );
};

export default Home;