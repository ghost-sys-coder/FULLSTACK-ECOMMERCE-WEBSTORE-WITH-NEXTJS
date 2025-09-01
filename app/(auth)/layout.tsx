import React from 'react'


const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
    

    return (
        <main className="min-h-screen flex">
            <div className="bg-black min-h-screen flex-1 hidden lg:flex flex-col justify-center items-start gap-6 p-8 relative">
                <div className="flex flex-col gap-4 sticky top-[50%] -translate-y-[50%]">
                    <h1 className='text-3xl font-bold text-white'>Shopora</h1>
                    <p className='text-light-300'>
                        Shopora – Your ultimate destination for trendy, high-quality fashion and lifestyle essentials. Explore the latest collections in sneakers, apparel, and accessories with seamless shopping and fast delivery.
                    </p>
                    <div className="flex gap-2">
                        {[1, 2, 3].map((item) => (
                            <div className="w-2 h-2 shadow-md rounded-full bg-light-100" key={item}></div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex-1 p-8">
                <div className="space-y-6 max-w-[400px] mx-auto">
                    {children}
                </div>
            </div>
        </main>
    )
}

export default AuthLayout