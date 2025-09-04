import React from 'react';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Save, User, Bell, Shield, CreditCard, Globe } from 'lucide-react'

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
                                    defaultValue="Nike Store"
                                    className="h-9 w-full rounded-md border bg-background px-3 py-1 text-sm"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor='description' className="text-sm font-medium">Store Description</label>
                                <Textarea
                                    id='description'
                                    rows={3}
                                    defaultValue="Your premier destination for Nike products."
                                    className="w-full rounded-md border bg-background px-3 py-2 text-sm"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label htmlFor='email' className="text-sm font-medium">Contact Email</label>
                                <input
                                    id='email'
                                    type="email"
                                    defaultValue="contact@nikestore.com"
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
                                <select title='currency' className="h-9 w-full rounded-md border bg-background px-3 py-1 text-sm">
                                    <option value="USD">USD ($)</option>
                                    <option value="EUR">EUR (€)</option>
                                    <option value="GBP">GBP (£)</option>
                                </select>
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
                                <label className="flex items-center justify-between">
                                    <span className="text-sm">Order notifications</span>
                                    <input type="checkbox" defaultChecked className="rounded" />
                                </label>
                                <label className="flex items-center justify-between">
                                    <span className="text-sm">Customer inquiries</span>
                                    <input type="checkbox" defaultChecked className="rounded" />
                                </label>
                                <label className="flex items-center justify-between">
                                    <span className="text-sm">Low stock alerts</span>
                                    <input type="checkbox" defaultChecked className="rounded" />
                                </label>
                                <label className="flex items-center justify-between">
                                    <span className="text-sm">Marketing emails</span>
                                    <input type="checkbox" className="rounded" />
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
                                <label className="text-sm font-medium">Two-Factor Authentication</label>
                                <div className="flex items-center space-x-2">
                                    <Input type="checkbox" className="rounded" />
                                    <span className="text-sm">Enable 2FA for admin accounts</span>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium">Session Timeout</label>
                                <select
                                    title='Session Timeout'
                                    name='select'
                                    className="h-9 w-full rounded-md border bg-background px-3 py-1 text-sm">
                                    <option value="30">30 minutes</option>
                                    <option value="60">1 hour</option>
                                    <option value="240">4 hours</option>
                                    <option value="480">8 hours</option>
                                </select>
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
                                <label className="text-sm font-medium">Admin Email</label>
                                <input
                                    type="email"
                                    defaultValue="admin@nikestore.com"
                                    className="h-9 w-full rounded-md border bg-background px-3 py-1 text-sm"
                                />
                            </div>
                            <div className="grid gap-2">
                                <label className="text-sm font-medium">Change Password</label>
                                <button className="inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm hover:bg-accent">
                                    Change Password
                                </button>
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