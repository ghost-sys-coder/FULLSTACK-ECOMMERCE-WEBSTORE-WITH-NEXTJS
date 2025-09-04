"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Package, ShoppingCart, Users, BarChart3, Settings } from 'lucide-react'
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '../ui/sidebar'

const AppSidebar = () => {
    const pathname = usePathname()

    const menuItems = [
        {
            title: 'Dashboard',
            url: '/admin',
            icon: Home,
        },
        {
            title: 'Products',
            url: '/admin/products',
            icon: Package,
        },
        {
            title: 'Orders',
            url: '/admin/orders',
            icon: ShoppingCart,
        },
        {
            title: 'Customers',
            url: '/admin/customers',
            icon: Users,
        },
        {
            title: 'Analytics',
            url: '/admin/analytics',
            icon: BarChart3,
        },
        {
            title: 'Settings',
            url: '/admin/settings',
            icon: Settings,
        },
    ]

    return (
        <Sidebar>
            <SidebarHeader className="border-b border-sidebar-border">
                <div className="flex items-center gap-2 px-2 py-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <Package className="h-4 w-4" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold">Shopora Admin</span>
                        <span className="text-xs text-muted-foreground">Dashboard</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                                        <Link href={item.url}>
                                            <item.icon className="h-4 w-4" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}

export default AppSidebar