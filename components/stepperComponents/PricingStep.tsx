"use client";
import React, { useState } from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import ButtonStepper from './ButtonStepper';

const PricingStep = () => {
  const [formValues, setFormValues] = useState({
    price: 0,
    stock: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className="flex flex-col gap-3">
        <Label htmlFor='price'>Product Price</Label>
        <Input
          type="number"
          id='price'
          name='price'
          value={formValues.price}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-3">
        <Label htmlFor='stock'>Product Stock</Label>
        <Input
          type="number"
          id='stock'
          name='stock'
          value={formValues.stock}
          onChange={handleChange}
        />
      </div>
      <ButtonStepper />
    </div>
  )
}

export default PricingStep