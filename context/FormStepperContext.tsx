"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState, Dispatch, SetStateAction } from "react";

import { ProductFormData } from "@/types";

interface FormValuesType {
    formValues: ProductFormData | null;
    updateFormValues: (x: Partial<ProductFormData>) => void;
    currentStep: number;
    setCurrentStep: Dispatch<SetStateAction<number>>;
}

interface Props {
    children: React.ReactNode
}

const FormContext = createContext<FormValuesType | null>(null);

export const FormProvider = ({ children }: Props) => {
    const [formValues, setFormValues] = useState<ProductFormData | null>(null);
    const [currentStep, setCurrentStep] = useState(1);

    const updateFormValues = (updatedData: any) => {
        setFormValues((prevData) => ({ ...prevData, ...updatedData }))
    }

    const values = {
        formValues,
        updateFormValues,
        currentStep,
        setCurrentStep
    }

    return (
        <FormContext.Provider value={values}>
            {children}
        </FormContext.Provider>
    )

}


export const useFormContext = () => {
    const context = useContext(FormContext);
    if (context === null) {
        throw new Error("context must be used within the context provider");
    }

    return context;
}
