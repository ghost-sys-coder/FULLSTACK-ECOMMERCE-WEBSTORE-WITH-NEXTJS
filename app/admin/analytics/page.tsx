import React from 'react'
import { TrendingUp, TrendingDown, Users, ShoppingCart, DollarSign } from 'lucide-react'

const AnalyticsPage = () => {
    const metrics = [
        {
            title: 'Total Revenue',
            value: '$45,231.89',
            change: '+20.1%',
            trend: 'up',
            icon: DollarSign,
        },
        {
            title: 'Orders',
            value: '2,350',
            change: '+180.1%',
            trend: 'up',
            icon: ShoppingCart,
        },
        {
            title: 'Visitors',
            value: '12,234',
            change: '+19%',
            trend: 'up',
            icon: Users,
        },
        {
            title: 'Conversion Rate',
            value: '3.2%',
            change: '-0.5%',
            trend: 'down',
            icon: TrendingUp,
        },
    ]

    const topProducts = [
        { name: 'Nike Air Max 270', sales: 245, revenue: '$12,250' },
        { name: 'Nike React Element', sales: 189, revenue: '$9,450' },
        { name: 'Nike Air Force 1', sales: 156, revenue: '$7,800' },
        { name: 'Nike Dunk Low', sales: 134, revenue: '$6,700' },
        { name: 'Nike Blazer Mid', sales: 98, revenue: '$4,900' },
    ]

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
                <p className="text-muted-foreground">
                    Track your store&apos;s performance and insights.
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
                        <p className={`text-xs flex items-center mt-2 ${
                            metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}>
                            {metric.trend === 'up' ? (
                                <TrendingUp className="mr-1 h-3 w-3" />
                            ) : (
                                <TrendingDown className="mr-1 h-3 w-3" />
                            )}
                            {metric.change} from last month
                        </p>
                    </div>
                ))}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border bg-card">
                    <div className="p-6">
                        <h3 className="text-lg font-medium mb-4">Revenue Trend</h3>
                        <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                            Chart placeholder - Revenue over time
                        </div>
                    </div>
                </div>

                <div className="rounded-lg border bg-card">
                    <div className="p-6">
                        <h3 className="text-lg font-medium mb-4">Top Products</h3>
                        <div className="space-y-4">
                            {topProducts.map((product, index) => (
                                <div key={product.name} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
                                            {index + 1}
                                        </div>
                                        <div>
                                            <p className="font-medium">{product.name}</p>
                                            <p className="text-sm text-muted-foreground">{product.sales} sales</p>
                                        </div>
                                    </div>
                                    <p className="font-medium">{product.revenue}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-lg border bg-card">
                <div className="p-6">
                    <h3 className="text-lg font-medium mb-4">Traffic Sources</h3>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                                <span>Direct</span>
                            </div>
                            <span className="font-medium">45.2%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                                <span>Search</span>
                            </div>
                            <span className="font-medium">32.1%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                                <span>Social Media</span>
                            </div>
                            <span className="font-medium">15.8%</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                                <span>Referral</span>
                            </div>
                            <span className="font-medium">6.9%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnalyticsPage