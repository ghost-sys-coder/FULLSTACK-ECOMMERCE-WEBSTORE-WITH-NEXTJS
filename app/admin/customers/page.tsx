import React from 'react'
import { Search, Mail, Phone, MapPin, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'

const CustomersPage = () => {
    const customers = [
        {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            phone: '+1 (555) 123-4567',
            location: 'New York, NY',
            orders: 12,
            totalSpent: '$1,250.00',
            status: 'Active',
            joinDate: '2023-06-15',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            phone: '+1 (555) 234-5678',
            location: 'Los Angeles, CA',
            orders: 8,
            totalSpent: '$890.00',
            status: 'Active',
            joinDate: '2023-08-22',
        },
        {
            id: 3,
            name: 'Bob Johnson',
            email: 'bob@example.com',
            phone: '+1 (555) 345-6789',
            location: 'Chicago, IL',
            orders: 15,
            totalSpent: '$2,100.00',
            status: 'Active',
            joinDate: '2023-04-10',
        },
        {
            id: 4,
            name: 'Alice Brown',
            email: 'alice@example.com',
            phone: '+1 (555) 456-7890',
            location: 'Houston, TX',
            orders: 5,
            totalSpent: '$450.00',
            status: 'Inactive',
            joinDate: '2023-11-05',
        },
        {
            id: 5,
            name: 'Charlie Wilson',
            email: 'charlie@example.com',
            phone: '+1 (555) 567-8901',
            location: 'Phoenix, AZ',
            orders: 9,
            totalSpent: '$780.00',
            status: 'Active',
            joinDate: '2023-09-18',
        },
    ]

    const getStatusColor = (status: string) => {
        return status === 'Active'
            ? 'text-green-600 bg-green-100'
            : 'text-gray-600 bg-gray-100'
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
                    <p className="text-muted-foreground">
                        Manage your customer database and relationships.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">
                        Import
                    </button>
                    <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                        Add Customer
                    </button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-lg border bg-card p-6">
                    <div className="flex items-center">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-muted-foreground">Total Customers</p>
                            <p className="text-2xl font-bold">{customers.length}</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border bg-card p-6">
                    <div className="flex items-center">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-muted-foreground">Active Customers</p>
                            <p className="text-2xl font-bold">
                                {customers.filter(c => c.status === 'Active').length}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border bg-card p-6">
                    <div className="flex items-center">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-muted-foreground">Total Orders</p>
                            <p className="text-2xl font-bold">
                                {customers.reduce((sum, c) => sum + c.orders, 0)}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg border bg-card p-6">
                    <div className="flex items-center">
                        <div className="flex-1">
                            <p className="text-sm font-medium text-muted-foreground">Avg. Order Value</p>
                            <p className="text-2xl font-bold">$125.50</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-lg border bg-card">
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="relative">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <input
                                    placeholder="Search customers..."
                                    className="pl-8 h-9 w-[300px] rounded-md border bg-background px-3 py-1 text-sm shadow-sm"
                                />
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            {customers.length} customers
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left font-medium p-4">Customer</th>
                                        <th className="text-left font-medium p-4">Contact</th>
                                        <th className="text-left font-medium p-4">Orders</th>
                                        <th className="text-left font-medium p-4">Total Spent</th>
                                        <th className="text-left font-medium p-4">Status</th>
                                        <th className="text-left font-medium p-4">Join Date</th>
                                        <th className="text-left font-medium p-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {customers.map((customer) => (
                                        <tr key={customer.id} className="border-b hover:bg-muted/50">
                                            <td className="p-4">
                                                <div>
                                                    <p className="font-medium">{customer.name}</p>
                                                    <p className="text-sm text-muted-foreground flex items-center">
                                                        <MapPin className="mr-1 h-3 w-3" />
                                                        {customer.location}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <div className="space-y-1">
                                                    <p className="text-sm flex items-center">
                                                        <Mail className="mr-1 h-3 w-3" />
                                                        {customer.email}
                                                    </p>
                                                    <p className="text-sm flex items-center">
                                                        <Phone className="mr-1 h-3 w-3" />
                                                        {customer.phone}
                                                    </p>
                                                </div>
                                            </td>
                                            <td className="p-4 font-medium">{customer.orders}</td>
                                            <td className="p-4 font-medium">{customer.totalSpent}</td>
                                            <td className="p-4">
                                                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(customer.status)}`}>
                                                    {customer.status}
                                                </span>
                                            </td>
                                            <td className="p-4 text-sm text-muted-foreground">{customer.joinDate}</td>
                                            <td className="p-4">
                                                <Button className="inline-flex items-center justify-center rounded-md border p-2 hover:bg-accent">
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomersPage