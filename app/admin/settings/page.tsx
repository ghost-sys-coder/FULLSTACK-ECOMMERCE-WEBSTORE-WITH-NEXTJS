import React from 'react';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Save, User, Bell, Shield, CreditCard, Globe } from 'lucide-react'
import SelectComponent from '@/components/dashboard/SelectComponent';

const currencies = [
    { value: 'USD', symbol: '$', name: 'US Dollar' },
    { value: 'EUR', symbol: '€', name: 'Euro' },
    { value: 'GBP', symbol: '£', name: 'British Pound' },
]

const session = [
    { value: "30", name: "30 minutes" },
    { value: "60", name: "1 hour" },
    { value: "240", name: "4 hours" },
    { value: "480", name: "8 hours" },
    { value: "1440", name: "24 hours" },
]

const SettingsPage = () => {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                <p className="text-muted-foreground">
                    Manage your store settings and preferences.
                </p>
            </div>

            <div className="grid gap-6">
                {/* General Settings */}
                <div className="rounded-lg border bg-card">
                    <div className="p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <Globe className="h-5 w-5" />
                            <h3 className="text-lg font-medium">General Settings</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <label htmlFor='store' className="text-sm font-medium">Store Name</label>
                                <Input
                                    id='store'
                                    type="text"
                                    defaultValue="Shopora"
                                    className="h-9 w-full rounded-md border bg-background px-3 py-1 text-sm"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor='description' className="text-sm font-medium">Store Description</label>
                                <Textarea
                                    id='description'
                                    rows={3}
                                    defaultValue="Your premier destination for genuine, and authentic products."
                                    className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor='email' className="text-sm font-medium">Contact Email</label>
                                <input
                                    id='email'
                                    type="email"
                                    defaultValue="support@shopora.com"
                                    className="h-9 w-full rounded-md border bg-background px-3 py-1 text-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Payment Settings */}
                <div className="rounded-lg border bg-card">
                    <div className="p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <CreditCard className="h-5 w-5" />
                            <h3 className="text-lg font-medium">Payment Settings</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <label className="text-sm font-medium">Currency</label>
                                <SelectComponent
                                    options={currencies}
                                    placeholder='Select Currency'
                                />
                            </div>
                            <div className="grid gap-2">
                                <p className="text-sm font-medium">Payment Methods</p>
                                <div className="space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" defaultChecked className="rounded" />
                                        <span className="text-sm">Credit Card</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" defaultChecked className="rounded" />
                                        <span className="text-sm">PayPal</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input type="checkbox" className="rounded" />
                                        <span className="text-sm">Apple Pay</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notification Settings */}
                <div className="rounded-lg border bg-card">
                    <div className="p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <Bell className="h-5 w-5" />
                            <h3 className="text-lg font-medium">Notifications</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor='order-notifications' className="flex items-center justify-between">
                                    <span className="text-sm">Order notifications</span>
                                    <input id='order-notifications' type="checkbox" defaultChecked className="rounded" />
                                </label>
                                <label htmlFor='customer-queries' className="flex items-center justify-between">
                                    <span className="text-sm">Customer inquiries</span>
                                    <input id='customer-queries' type="checkbox" defaultChecked className="rounded" />
                                </label>
                                <label htmlFor='low-stock' className="flex items-center justify-between">
                                    <span className="text-sm">Low stock alerts</span>
                                    <input id='low-stock' type="checkbox" defaultChecked className="rounded" />
                                </label>
                                <label htmlFor='marketing-emails' className="flex items-center justify-between">
                                    <span className="text-sm">Marketing emails</span>
                                    <input id='marketing-emails' type="checkbox" className="rounded" />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Security Settings */}
                <div className="rounded-lg border bg-card">
                    <div className="p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <Shield className="h-5 w-5" />
                            <h3 className="text-lg font-medium">Security</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <label htmlFor='2fa' className="text-sm font-medium">Two-Factor Authentication</label>
                                <div className="flex items-center space-x-2">
                                    <input
                                        name='2fa'
                                        id='2fa'
                                        type="checkbox" className="rounded"
                                    />
                                    <span className="text-sm">Enable 2FA for admin accounts</span>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium">Session Timeout</label>
                                <SelectComponent
                                    options={session}
                                    placeholder='Select Session Duration'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Account Settings */}
                <div className="rounded-lg border bg-card">
                    <div className="p-6">
                        <div className="flex items-center space-x-2 mb-4">
                            <User className="h-5 w-5" />
                            <h3 className="text-lg font-medium">Account</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="grid gap-2">
                                <label htmlFor='admin-email' className="text-sm font-medium">Admin Email</label>
                                <input
                                    id='admin-email'
                                    type="email"
                                    defaultValue="admin@shopora.com"
                                    className="h-9 w-full rounded-md border bg-background px-3 py-1 text-sm"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium">Change Password</label>
                                <Button className="">
                                    Change Password
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                        <Save className="mr-2 h-4 w-4" />
                        Save Changes
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SettingsPage