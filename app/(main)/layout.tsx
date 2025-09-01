import React, { ReactNode } from 'react'
import Footer from '@/components/shared/footer'
import Navbar from '@/components/shared/navbar'


const MainLayout = async ({ children }: { children: ReactNode }) => {
  
    return (
        <main className="">
            <Navbar />
            {children}
            <Footer />
        </main>
    )
}

export default MainLayout