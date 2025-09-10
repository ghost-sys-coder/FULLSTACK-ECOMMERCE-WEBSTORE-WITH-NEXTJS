"use client";
import React from 'react'
import { useFormContext } from '@/context/FormStepperContext';

const Stepper = () => {
    const { currentStep } = useFormContext();

    console.log({currentStep})

    const steps = ["Basic Info", "Category", "Pricing Info", "Media"];

    return (
        <div className='flex justify-between h-auto items-center my-3'>
            {steps.map((step, index) => (
                <div
                    key={index}
                    className={` stepper ${currentStep === index + 1 && "active"} ${index + 1 < currentStep && "complete"
                        }`}
                >
                    <div className="step">{index + 1}</div>
                    <p className="text-gray-500 text-sm">{step}</p>
                </div>
            ))}
        </div>
    )
}

export default Stepper