'use client'

import PaddingContainer from '@/components/layout/padding-container'
import Image from 'next/image'
import { AiFillFacebook, AiFillGoogleCircle } from 'react-icons/ai'

import { useAuth } from '@/context/AuthContext'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Giris() {
    const { googleSignIn, user } = useAuth()
    const router = useRouter()

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user != null) {
            router.push('/account')
        }
    }, [user, router])

    return (
        <PaddingContainer>
            <>
                <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
                    <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
                        <Image
                            className='mx-auto h-10 w-auto'
                            src='/logo.png'
                            width={200}
                            height={200}
                            alt='Your Company'
                        />
                        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                            Sign in to your account
                        </h2>
                    </div>

                    <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                        <form className='space-y-6' action='#' method='POST'>
                            <div>
                                <label
                                    htmlFor='email'
                                    className='block text-sm font-medium leading-6 text-gray-900'>
                                    Email address
                                </label>
                                <div className='mt-2'>
                                    <input
                                        id='email'
                                        name='email'
                                        type='email'
                                        autoComplete='email'
                                        required
                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    />
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center justify-between'>
                                    <label
                                        htmlFor='password'
                                        className='block text-sm font-medium leading-6 text-gray-900'>
                                        Password
                                    </label>
                                    <div className='text-sm'>
                                        <a
                                            href='#'
                                            className='font-semibold text-indigo-600 hover:text-indigo-500'>
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    <input
                                        id='password'
                                        name='password'
                                        type='password'
                                        autoComplete='current-password'
                                        required
                                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type='submit'
                                    className='flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <div className='divide-y'>
                            <p className='mt-10 text-center text-sm text-gray-500 mb-5'>
                                Not a member?{' '}
                                <a
                                    href='#'
                                    className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
                                    Start a 14 day free trial
                                </a>
                            </p>
                            <div className='flex items-center pt-5 justify-between gap-2'>
                                <button className='flex items-center gap-2 border p-2 flex-1 rounded'>
                                    <AiFillFacebook
                                        size={30}
                                        className='fill-blue-600'
                                    />
                                    <p>Facebook</p>
                                </button>
                                <button
                                    className='flex items-center gap-2 border p-2 flex-1 rounded'
                                    onClick={handleGoogleSignIn}>
                                    <AiFillGoogleCircle
                                        size={30}
                                        className='fill-red-600'
                                    />
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
