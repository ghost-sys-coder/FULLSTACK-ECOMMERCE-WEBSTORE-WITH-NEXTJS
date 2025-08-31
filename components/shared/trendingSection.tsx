import React from 'react';
import Image from 'next/image';
import { trendingItems } from '@/constants';
import { Button } from '../ui/button';

const TrendingSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Trending Now</h2>
        <div className="">
          {trendingItems.slice(0, 1).map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-8 relative">
              <div className="relative w-full h-96">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 absolute top-0 left-0 right-0 bottom-0 w-full h-full flex flex-col gap-5 justify-start items-start text-left text-white bg-gradient-to-r from-black/70 via-black/40 to-transparent py-10 px-4">
                <h3 className="text-3xl font-semibold mb-2 text-light-100 uppercase">{item.title}</h3>
                <p className="text-light-100">{item.description}</p>
                <Button className='bg-white text-black cursor-pointer'>Shop Now</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {trendingItems.slice(1).map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative">
              <div className="relative w-full h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 absolute bottom-0 left-0">
                <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;