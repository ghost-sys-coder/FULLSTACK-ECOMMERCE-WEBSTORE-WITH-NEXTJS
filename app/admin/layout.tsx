import React from 'react'
import { SidebarProvider, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar'
import AppSidebar from '@/components/shared/AppSidebar'
import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import AccessDeniedComponent from '@/components/shared/AccessDeniedComponent'
import { FormProvider } from '@/context/FormStepperContext'

const AdminLayout = async (props: LayoutProps<"/admin">) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        return <AccessDeniedComponent message='You must be signed in to access this page' />
    }

    if (session?.user.role !== "admin") {
        return <AccessDeniedComponent message='You do not have permission to access this page' />
    }
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <FormProvider>
                    <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                        <SidebarTrigger className="-ml-1" />
                        <div className="flex-1" />
                    </header>
                    <main className="flex-1 overflow-auto p-4">
                        {props.children}
                    </main>
                </FormProvider>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default AdminLayout