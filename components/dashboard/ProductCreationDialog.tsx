import React from 'react'
import Stepper from '../stepperComponents/Stepper';
import FormLayout from '../stepperComponents/FormLayout';

import BasicInfoStep from '../stepperComponents/BasicInfoStep';
import CategoryStep from '../stepperComponents/CategoryStep';
import PricingStep from '../stepperComponents/PricingStep';
import MediaStep from '../stepperComponents/MediaStep';
import { useFormContext } from '@/context/FormStepperContext';

interface ProductCreationDialogProps {
  onClose: () => void;
}

const ProductCreationDialog: React.FC<ProductCreationDialogProps> = ({ onClose }) => {
  const { currentStep } = useFormContext();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoStep />
      case 2: 
        return <CategoryStep />
      case 3: 
        return <PricingStep />
      case 4:
        return <MediaStep />
      default:
        return null;
    }
  }

  return (
    <div className='fixed inset-0 bg-black/50 z-50 flex flex-col justify-center items-center'>
      <div className="max-w-4xl w-full p-4 rounded-md shadow-md bg-white">
        <Stepper />
        <FormLayout>
          {renderStep()}
        </FormLayout>
      </div>
    </div>
  )
}

export default ProductCreationDialog