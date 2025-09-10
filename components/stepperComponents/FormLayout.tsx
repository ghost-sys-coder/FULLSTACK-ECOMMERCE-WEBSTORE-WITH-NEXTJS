import React, { ReactNode } from 'react'

interface FormLayoutProps {
    children: ReactNode
}

const FormLayout: React.FC<FormLayoutProps> = ({ children }) => {
    return (
        <div className='max-w-3xl w-full mx-auto'>
            {children}
        </div>
    )
}

export default FormLayout