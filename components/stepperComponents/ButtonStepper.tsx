"use client";
import React from 'react'
import { cn } from '@/lib/utils';
import { useFormContext } from '@/context/FormStepperContext';
import { Button } from '../ui/button';

interface ButtonStepperProps {
    handleNext?: () => void;
    handlePrevious?: () => void;
}

const ButtonStepper: React.FC<ButtonStepperProps> = ({ handleNext, handlePrevious }) => {
    const { currentStep } = useFormContext();
    return (
        <div className={cn(
            "flex items-center gap-3 my-4",
            currentStep === 1 ? "justify-end" : "justify-between"
        )}>
            {currentStep !== 1 && (
                <Button
                    className='bg-gray-600 text-white cursor-pointer'
                    onClick={handlePrevious}>
                    Previous
                </Button>
            )}
            <Button
                className='bg-black/80 text-white cursor-pointer'
                onClick={handleNext}>
                Next
            </Button>
        </div>
    )
}

export default ButtonStepper