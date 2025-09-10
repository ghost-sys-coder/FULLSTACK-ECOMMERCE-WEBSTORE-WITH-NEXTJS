"use client";
import React, { useState } from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import ButtonStepper from './ButtonStepper';


const CategoryStep = () => {
  const [formValues, setFormValues] = useState({
    category: "",
    subCategory: "",
    status: {
      active: "active",
      inactive: "inactive",
      discontinued: "discontinued",
      out_of_stock: "out_of_stock",
      pre_order: "pre_order"
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className="flex flex-col gap-2">
        <Label htmlFor='category'>Category</Label>
        <Input
          id='category'
          name='category'
          value={formValues.category}
          placeholder='Provide product category'
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor='subCategory'>SubCategory</Label>
        <Input
          id='subCategory'
          name='subCategory'
          placeholder='Enter sub category if available'
          value={formValues.subCategory}
          onChange={handleChange}
        />
      </div>
      <ButtonStepper />
    </div>
  )
}

export default CategoryStep