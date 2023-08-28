'use client'

import PaddingContainer from '@/components/layout/padding-container'
import Image from 'next/image'

import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

interface Props {
  email: string
  password: string
}

const defaultForm = {
  email: '',
  password: '',
}

export default function ForgotPassword() {
  const [formField, setFormField] = useState<Props>(defaultForm)
  const { email } = formField

  const resetFormFields = () => {
    setFormField(defaultForm)
  }

  const { resetPassword } = useAuth()
  const router = useRouter()

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setFormField({ ...formField, [name]: value })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    if (!email) return toast.error('Please fill in all fields')

    try {
      await resetPassword(email)
      toast.success('Reset password email was sent')
      router.push('/giris')
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        toast.error('User not found')
      } else {
        toast.error('Something went wrong')
      }
    }
  }

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
            <form className='space-y-6' onSubmit={handleSubmit}>
              <div>
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
                <button
                  type='submit'
                  className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Send Reset Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </PaddingContainer>
  )
}
