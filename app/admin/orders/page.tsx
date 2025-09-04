import React from 'react'
import { Search, Filter, Eye, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'

const OrdersPage = () => {
    const orders = [
        {
            id: '#3210',
            customer: 'John Doe',
            email: 'john@example.com',
            amount: '$250.00',
            status: 'Completed',
            date: '2024-01-15',
            items: 3,
        },
        {
            id: '#3211',
            customer: 'Jane Smith',
            email: 'jane@example.com',
            amount: '$150.00',
            status: 'Processing',
            date: '2024-01-14',
            items: 2,
        },
        {
            id: '#3212',
            customer: 'Bob Johnson',
            email: 'bob@example.com',
            amount: '$350.00',
            status: 'Shipped',
            date: '2024-01-13',
            items: 5,
        },
        {
            id: '#3213',
            customer: 'Alice Brown',
            email: 'alice@example.com',
            amount: '$75.00',
            status: 'Completed',
            date: '2024-01-12',
            items: 1,
        },
        {
            id: '#3214',
            customer: 'Charlie Wilson',
            email: 'charlie@example.com',
            amount: '$420.00',
            status: 'Pending',
            date: '2024-01-11',
            items: 4,
        },
    ]

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Completed':
                return 'text-green-600 bg-green-100'
            case 'Processing':
                return 'text-yellow-600 bg-yellow-100'
            case 'Shipped':
                return 'text-blue-600 bg-blue-100'
            case 'Pending':
                return 'text-orange-600 bg-orange-100'
            default:
                return 'text-gray-600 bg-gray-100'
        }
    }

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
                    <p className="text-muted-foreground">
                        Manage and track all customer orders.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <button className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent">
                        <Filter className="mr-2 h-4 w-4" />
                        Filter
                    </button>
                    <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                        Export
                    </button>
                </div>
            </div>

            <div className="rounded-lg border bg-card">
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="relative">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <input
                                    placeholder="Search orders..."
                                    className="pl-8 h-9 w-[300px] rounded-md border bg-background px-3 py-1 text-sm shadow-sm"
                                />
                            </div>
                        </div>
                        <div className="text-sm text-muted-foreground">
                            {orders.length} orders
                        </div>
                    </div>

                    <div className="mt-6">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left font-medium p-4">Order ID</th>
                                        <th className="text-left font-medium p-4">Customer</th>
                                        <th className="text-left font-medium p-4">Amount</th>
                                        <th className="text-left font-medium p-4">Status</th>
                                        <th className="text-left font-medium p-4">Date</th>
                                        <th className="text-left font-medium p-4">Items</th>
                                        <th className="text-left font-medium p-4">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.id} className="border-b hover:bg-muted/50">
                                            <td className="p-4 font-medium">{order.id}</td>
                                            <td className="p-4">
                                                <div>
                                                    <p className="font-medium">{order.customer}</p>
                                                    <p className="text-sm text-muted-foreground">{order.email}</p>
                                                </div>
                                            </td>
                                            <td className="p-4 font-medium">{order.amount}</td>
                                            <td className="p-4">
                                                <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${getStatusColor(order.status)}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td className="p-4 text-sm text-muted-foreground">{order.date}</td>
                                            <td className="p-4 text-sm">{order.items}</td>
                                            <td className="p-4">
                                                <div className="flex items-center space-x-2">
                                                    <Button className="inline-flex items-center justify-center rounded-md border p-2 hover:bg-accent">
                                                        <Eye className="h-4 w-4" />
                                                    </Button>
                                                    <Button className="inline-flex items-center justify-center rounded-md border p-2 hover:bg-accent">
                                                        <MoreHorizontal className="h-4 w-4" />
                                                    </Button>
                                                </div>
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

export default OrdersPage