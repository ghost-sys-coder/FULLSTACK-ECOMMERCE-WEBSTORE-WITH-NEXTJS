"use client";
import React, { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useFormContext } from '@/context/FormStepperContext';
import { Textarea } from '../ui/textarea';
import ButtonStepper from './ButtonStepper';

const BasicInfoStep = () => {
  const { setCurrentStep, currentStep } = useFormContext();
  const [formValues, setFormValues] = useState({
    name: "",
    brand: "",
    description: ""
  });

  const [errors, setErrors] = useState<{
    name?: string;
    brand?: string;
    description?: string
  }>({});


  const handleNext = () => {
    const newErrors: { name?: string; brand?: string; description?: string } = {};

    if (!formValues.name.trim()) newErrors.name = "Product name is required!";
    if (!formValues.brand.trim()) newErrors.brand = "Product brand is required";
    if (!formValues.description.trim()) newErrors.description = "Product description is required!";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setCurrentStep(currentStep + 1);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  return (
    <div className='flex flex-col gap-6'>
      <div className="flex flex-col gap-2">
        <Label htmlFor='name'>Product Name</Label>
        <Input
          name='name'
          placeholder='Enter product name...'
          value={formValues.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="text-[12px] text-red-600 text-center">{errors.name}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor='brand'>Product Name</Label>
        <Input
          name='brand'
          placeholder='Enter product brand...'
          value={formValues.brand}
          onChange={handleChange}
        />
        {errors.brand && (
          <p className="text-[12px] text-red-600 text-center">{errors.brand}</p>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor='description'>Product Description</Label>
        <Textarea
          id='description'
          name='description'
          value={formValues.description}
          onChange={handleChange}
          className='min-h-[180px] w-full rounded-md shadow-md p-2'
          placeholder='Product Description...'
        />
        {errors.description && (
          <p className="text-[12px] text-red-600 text-center">{errors.description}</p>
        )}
      </div>
      <ButtonStepper handleNext={handleNext} />
    </div>
  )
}

export default BasicInfoStep