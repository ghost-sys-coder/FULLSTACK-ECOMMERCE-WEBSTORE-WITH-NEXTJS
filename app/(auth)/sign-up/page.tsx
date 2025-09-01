'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { ShoppingBag } from 'lucide-react'
import { FaGithub, FaGoogle } from "react-icons/fa";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'

const SignUpPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    try {
      const result = await authClient.signUp.email({
        email,
        password,
        name,
      })

      if (result.error) {
        setError(result.error.message || 'Sign up failed')
      } else {
        // Redirect will be handled by Better Auth
        window.location.href = '/'
      }
    } catch (err) {
      console.log("An error occurred during sign up", err);
      setError('An error occurred during sign up')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialSignUp = async (provider: 'google' | 'github') => {
    setIsLoading(true)
    setError('')

    try {
      const result = await authClient.signIn.social({
        provider,
      })

      if (result.error) {
        setError(result.error.message || 'Social sign up failed')
      }
    } catch (err) {
      console.log("An error occurred during social sign up", err);
      setError('An error occurred during social sign up')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6 max-w-[400px] mx-auto">
      <div className="text-center">
        <p className='text-gray-600 text-sm pb-4'>Already have an account?
          <Link href={"/sign-in"} className='text-black underline'>Sign In</Link>
        </p>
        <h2 className="text-heading-3 font-jost pb-2">Join Shopora today!</h2>
        <p className='text-gray-600 text-sm'>
          Create an account & start your shopping journey!
          <ShoppingBag className='inline-block ml-2 mb-1 text-orange' size={18} />
        </p>
        <div className="flex gap-2 my-4">
          <Button className='cursor-pointer hover:bg-gray-300' onClick={() => handleSocialSignUp("google")}>
            <FaGoogle />
            <span>Continue with Google</span>
          </Button>
          <Button className='cursor-pointer hover:bg-gray-300' onClick={() => handleSocialSignUp("github")}>
            <FaGithub />
            <span>Continue with Github</span>
          </Button>
        </div>
      </div>
      <div className="flex gap-2 justify-between items-center">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="text-sm text-gray-500">OR Sign up with</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      <form onSubmit={handleEmailSignUp} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-dark-900">
            Full Name
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="text-sm font-medium text-dark-900">
            Confirm Password
          </label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <div className="text-red p-3 rounded-md bg-red/10 text-sm">
            {error}
          </div>
        )}

        <Button type="submit" className="w-full bg-black text-white cursor-pointer" disabled={isLoading}>
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </Button>
      </form>
    </div>
  )
}

export default SignUpPage