import React from 'react'
import Link from 'next/link'
import { AlertCircle, Lock } from 'lucide-react'

interface AccessDeniedProps {
    message?: string;
}

const AccessDeniedComponent: React.FC<AccessDeniedProps> = ({message}) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="w-8 h-8 text-red-600" />
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900 mb-4">Access Denied</h1>
                    <p className="text-slate-600 mb-8">
                        {message}
                    </p>

                    <div className="space-y-3">
                        <Link
                            href="/sign-in"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                            <Lock className="w-4 h-4" />
                            <span>Sign In</span>
                        </Link>

                        <Link
                            href="/"
                            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-3 px-4 rounded-lg transition-colors duration-200 my-5 block"
                        >
                            Go Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccessDeniedComponent