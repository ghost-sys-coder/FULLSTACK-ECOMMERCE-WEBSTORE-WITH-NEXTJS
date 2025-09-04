import React from 'react'
import { DollarSign, ShoppingCart, Users, Package } from 'lucide-react'

const DashboardPage = () => {
    const metrics = [
        {
            title: 'Total Sales',
            value: '$45,231.89',
            change: '+20.1% from last month',
            icon: DollarSign,
        },
        {
            title: 'Orders',
            value: '+2350',
            change: '+180.1% from last month',
            icon: ShoppingCart,
        },
        {
            title: 'Customers',
            value: '+12,234',
            change: '+19% from last month',
            icon: Users,
        },
        {
            title: 'Products',
            value: '+573',
            change: '+201 since last month',
            icon: Package,
        },
    ]

    const recentOrders = [
        { id: '#3210', customer: 'John Doe', amount: '$250.00', status: 'Completed' },
        { id: '#3211', customer: 'Jane Smith', amount: '$150.00', status: 'Processing' },
        { id: '#3212', customer: 'Bob Johnson', amount: '$350.00', status: 'Shipped' },
        { id: '#3213', customer: 'Alice Brown', amount: '$75.00', status: 'Completed' },
    ]

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome back! Here&apos;s what&apos;s happening with your store today.
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {metrics.map((metric) => (
                    <div key={metric.title} className="rounded-lg border bg-card p-6 shadow-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-muted-foreground">
                                    {metric.title}
                                </p>
                                <p className="text-2xl font-bold">{metric.value}</p>
                            </div>
                            <metric.icon className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">
                            {metric.change}
                        </p>
                    </div>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="rounded-lg border bg-card col-span-4">
                    <div className="p-6">
                        <h3 className="text-lg font-medium">Recent Orders</h3>
                        <div className="mt-4 space-y-4">
                            {recentOrders.map((order) => (
                                <div key={order.id} className="flex items-center justify-between border-b pb-4">
                                    <div>
                                        <p className="font-medium">{order.id}</p>
                                        <p className="text-sm text-muted-foreground">{order.customer}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-medium">{order.amount}</p>
                                        <p className={`text-sm ${
                                            order.status === 'Completed' ? 'text-green-600' :
                                            order.status === 'Processing' ? 'text-yellow-600' :
                                            'text-blue-600'
                                        }`}>
                                            {order.status}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border bg-card col-span-3">
                    <div className="p-6">
                        <h3 className="text-lg font-medium">Quick Actions</h3>
                        <div className="mt-4 space-y-2">
                            <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                                Add New Product
                            </button>
                            <button className="w-full rounded-md border px-4 py-2 text-sm hover:bg-accent">
                                View All Orders
                            </button>
                            <button className="w-full rounded-md border px-4 py-2 text-sm hover:bg-accent">
                                Manage Customers
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage