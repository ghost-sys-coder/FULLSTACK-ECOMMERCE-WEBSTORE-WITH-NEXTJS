import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'

interface HeroSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  backgroundImageUrl?: string;
  ctaText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description, imageUrl, backgroundImageUrl, ctaText }) => {
  const hasBackground = Boolean(backgroundImageUrl && backgroundImageUrl.trim() !== "");

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden mb-16 pt-10">
      {/* Background Image */}
      {hasBackground && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImageUrl ?? ""}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <span className='text-red pb-2 block'>Bold & Sporty</span>
            <h1 className="text-black text-7xl font-jost">{title}</h1>
            <p className="text-xl md:text-2xl text-black max-w-lg">
              {description}
            </p>
            <div className="flex justify-start items-center sm:flex-row gap-4">
              <Button className='bg-black text-white rounded-4xl cursor-pointer'>
                {ctaText}
              </Button>
            </div>
          </div>

          {/* Shoe Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src={imageUrl}
                alt="Featured Shoe"
                width={500}
                height={500}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection