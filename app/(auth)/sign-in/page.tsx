'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'
import { ShoppingBag } from 'lucide-react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const result = await authClient.signIn.email({
        email,
        password,
      })

      if (result.error) {
        setError(result.error.message || 'Sign in failed')
      } else {
        // Redirect will be handled by Better Auth
        window.location.href = '/'
      }
    } catch (err) {
      console.log("An error occurred during sign in", err);
      setError('An error occurred during sign in')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialSignIn = async (provider: 'google' | 'github') => {
    setIsLoading(true)
    setError('')

    try {
      const result = await authClient.signIn.social({
        provider,
      })

      if (result.error) {
        setError(result.error.message || 'Social sign in failed')
      }
    } catch (err) {
      console.log("An error occuured during social sign in", err);
      setError('An error occurred during social sign in')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6 max-w-[400px] mx-auto">
      <div className="text-center">
        <p className='text-gray-600 text-sm pb-4'>Don&apos;t have an account?
          <Link href={"/sign-up"} className='text-black underline'>Sign Up</Link>
        </p>
        <h2 className="text-heading-3 font-jost pb-2">Welcome to Shopora!</h2>
        <p className='text-gray-600 text-sm'>
          Login & start your shopping today!!
          <ShoppingBag className='inline-block ml-2 mb-1 text-orange' size={18} />
        </p>
        <div className="flex gap-2 my-4">
          <Button className='cursor-pointer hover:bg-gray-300' onClick={() => handleSocialSignIn("google")}>
            <FaGoogle />
            <span>Continue with Google</span>
          </Button>
          <Button className='cursor-pointer hover:bg-gray-300' onClick={() => handleSocialSignIn("github")}>
            <FaGithub />
            <span>Continue with Github</span>
          </Button>
        </div>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="text-sm text-gray-500">OR Login with</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      <form onSubmit={handleEmailSignIn} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-dark-900">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium text-dark-900">
            Password
          </label>
          <Input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <div className="text-red p-3 rounded-md bg-red/10 text-sm">
            {error}
          </div>
        )}

        <Button type="submit" className="w-full bg-black text-white cursor-pointer" disabled={isLoading}>
          {isLoading ? 'Signing In...' : 'Sign In'}
        </Button>
      </form>
    </div>
  )
}

export default SignInPage