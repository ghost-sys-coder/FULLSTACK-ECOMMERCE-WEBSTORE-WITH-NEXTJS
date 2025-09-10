"use client";
import React, { useState } from 'react'
import { Search, Edit, Trash2, Eye, Plus } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ProductCreationDialog from '@/components/dashboard/ProductCreationDialog'
import SelectComponent from '@/components/dashboard/SelectComponent';


const products = [
  {
    id: 1,
    name: 'Nike Air Max 270',
    category: 'Running',
    price: '$150.00',
    stock: 45,
    status: 'Active',
    image: '/shoes/shoe-1.jpg',
  },
  {
    id: 2,
    name: 'Nike React Element 55',
    category: 'Lifestyle',
    price: '$130.00',
    stock: 23,
    status: 'Active',
    image: '/shoes/shoe-2.webp',
  },
  {
    id: 3,
    name: 'Nike Air Force 1',
    category: 'Casual',
    price: '$110.00',
    stock: 67,
    status: 'Active',
    image: '/shoes/shoe-3.webp',
  },
  {
    id: 4,
    name: 'Nike Dunk Low',
    category: 'Basketball',
    price: '$100.00',
    stock: 12,
    status: 'Low Stock',
    image: '/shoes/shoe-4.webp',
  },
  {
    id: 5,
    name: 'Nike Blazer Mid',
    category: 'Casual',
    price: '$90.00',
    stock: 0,
    status: 'Out of Stock',
    image: '/shoes/shoe-5.avif',
  },
]

const categories = [
  { name: 'Running', value: 'running' },
  { name: 'Lifestyle', value: 'lifestyle' },
  { name: 'Casual', value: 'casual' },
  { name: 'Basketball', value: 'basketball' },
]


const ProductsPage = () => {
  const [openModal, setOpenModal] = useState(false);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-green-600 bg-green-100'
      case 'Low Stock':
        return 'text-yellow-600 bg-yellow-100'
      case 'Out of Stock':
        return 'text-red-600 bg-red-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="space-y-6 relative">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products</h1>
          <p className="text-muted-foreground">
            Manage your product catalog and inventory.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">
            Import
          </Button>
          <Button
            onClick={() => setOpenModal(!openModal)}
            className='cursor-pointer inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent'>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
          {openModal && (
            <ProductCreationDialog onClose={() => setOpenModal(false)} />
          )}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">Total Products</p>
              <p className="text-2xl font-bold">{products.length}</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">In Stock</p>
              <p className="text-2xl font-bold">
                {products.filter(p => p.stock > 0).length}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">Low Stock</p>
              <p className="text-2xl font-bold">
                {products.filter(p => p.stock > 0 && p.stock <= 20).length}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-6">
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-sm font-medium text-muted-foreground">Out of Stock</p>
              <p className="text-2xl font-bold">
                {products.filter(p => p.stock === 0).length}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-card">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  placeholder="Search products..."
                  className="pl-8 h-9 w-[300px] rounded-md border bg-background px-3 py-1 text-sm shadow-sm"
                />
              </div>
              <SelectComponent
                options={categories}
                placeholder='Filter by Category'
              />
            </div>
            <div className="text-sm text-muted-foreground">
              {products.length} products
            </div>
          </div>

          <div className="mt-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-medium p-4">Product</th>
                    <th className="text-left font-medium p-4">Category</th>
                    <th className="text-left font-medium p-4">Price</th>
                    <th className="text-left font-medium p-4">Stock</th>
                    <th className="text-left font-medium p-4">Status</th>
                    <th className="text-left font-medium p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b hover:bg-muted/50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <Image
                            src={product.image}
                            alt={product.name}
                            className="h-10 w-10 rounded-md object-cover"
                            width={100}
                            height={100}
                          />
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <p className="text-sm text-muted-foreground">ID: {product.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-sm">{product.category}</td>
                      <td className="p-4 font-medium">{product.price}</td>
                      <td className="p-4">
                        <span className={`text-sm ${product.stock === 0 ? 'text-red-600' :
                            product.stock <= 20 ? 'text-yellow-600' :
                              'text-green-600'
                          }`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(product.status)}`}>
                          {product.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <Button className="inline-flex items-center justify-center rounded-md border p-2 hover:bg-accent">
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button className="inline-flex items-center justify-center rounded-md border p-2 hover:bg-accent">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button className="inline-flex items-center justify-center rounded-md border p-2 hover:bg-accent text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage