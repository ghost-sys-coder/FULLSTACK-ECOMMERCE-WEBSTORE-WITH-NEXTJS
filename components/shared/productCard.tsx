import React from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  subCategory?: string;
  brand: string;
  imageUrl: string;
  featured: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex gap-2 justify-between items-center">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-md font-bold text-green-600 mb-2">${product.price}</p>
      </div>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
    </div>
  );
};

export default ProductCard;