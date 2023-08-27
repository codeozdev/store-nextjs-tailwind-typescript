'use client'

import PaddingContainer from '@/components/layout/padding-container'
import Image from 'next/image'
import { AiFillFacebook, AiFillGoogleCircle } from 'react-icons/ai'

import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { auth } from '@/firebase/config'

interface Props {
  fullName: string
  email: string
  password: string
}

const defaultForm = {
  fullName: '',
  email: '',
  password: '',
}

export default function LoginPage() {
  const [formField, setFormField] = useState<Props>(defaultForm)
  const { fullName, email, password } = formField
  const [showPassword, setShowPassword] = useState(false)

  const { googleSignIn, user, createUser, updateUserName } = useAuth()

  const router = useRouter()

  const resetFormFields = () => {
    setFormField(defaultForm)
  }

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
      toast.success('Sign in was successful with Google')
      router.push('/')
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  const handleSbutmit = async (e: any) => {
    e.preventDefault()

    try {
      await createUser(email, password)

      await updateUserName(fullName)
      toast.success('Sign in was successful with Email')

      resetFormFields()
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error('email already in use')
      } else if (error.code === 'auth/weak-password') {
        toast.error('password should be at least 6 characters')
      } else {
        toast.error('Please fill in all fields')
      }
    }
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setFormField({ ...formField, [name]: value })
  }

  useEffect(() => {
    if (auth.currentUser === null) {
      router.push('/register')
    } else {
      router.push('/')
    }
  })

  return (
    <PaddingContainer>
      <>
        <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
            <Image className='mx-auto h-10 w-auto' src='/logo.png' width={200} height={200} alt='Your Company' />
            <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
              Sign in to your account
            </h2>
          </div>

          <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
            <form className='space-y-6' onSubmit={handleSbutmit}>
              <div>
                <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                  Full Name
                </label>
                <div className='mt-2'>
                  <input
                    name='fullName'
                    value={fullName}
                    type='text'
                    required
                    onChange={handleChange}
                    className='block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 outline-none'
                  />
                </div>
                <label htmlFor='email' className='block text-sm font-medium leading-6 text-gray-900'>
                  Email address
                </label>
                <div className='mt-2'>
                  <input
                    name='email'
                    type='email'
                    value={email}
                    required
                    onChange={handleChange}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 outline-none'
                  />
                </div>
              </div>

              <div>
                <div className='flex items-center justify-between'>
                  <label htmlFor='password' className='block text-sm font-medium leading-6 text-gray-900'>
                    Password
                  </label>
                  <div className='text-sm'>
                    <a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className='mt-2 relative'>
                  <input
                    name='password'
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    required
                    onChange={handleChange}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2 outline-none'
                  />
                  {showPassword ? (
                    <AiFillEyeInvisible
                      className='absolute right-2 top-3'
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <AiFillEye className='absolute right-2 top-3' onClick={() => setShowPassword(!showPassword)} />
                  )}
                </div>
              </div>

              <div>
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Sign Up
                </button>
              </div>
            </form>

            <div className='divide-y'>
              <p className='mt-10 text-center text-sm text-gray-500 mb-5'>
                Not a member?{' '}
                <a href='#' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
                  Start a 14 day free trial
                </a>
              </p>
              <div className='flex items-center pt-5 justify-between gap-2'>
                <button className='flex items-center gap-2 border p-2 flex-1 rounded'>
                  <AiFillFacebook size={30} className='fill-blue-600' />
                  <p>Facebook</p>
                </button>
                <button className='flex items-center gap-2 border p-2 flex-1 rounded' onClick={handleGoogleSignIn}>
                  <AiFillGoogleCircle size={30} className='fill-red-600' />
                  <p>Google</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </PaddingContainer>
  )
}
