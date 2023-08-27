'use client'

import PaddingContainer from '@/components/layout/padding-container'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

export default function Account() {
  const { user, logout } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    try {
      await logout()
      toast.success('Logout success')
    } catch (err) {
      toast.error(err.message)
    }
  }

  useEffect(() => {
    if (!user === null) {
      router.push('/')
    }
  })

  return (
    <PaddingContainer>
      <div className='flex flex-col w-full items-center mt-40 space-y-5'>
        <div className='flex flex-col items-center gap-4'>
          <img src={user?.photoURL} className='rounded-lg' alt='foto' />
          <h1 className='font-bold text-4xl'>Welcome, {user?.displayName}</h1>
        </div>
        <div>
          <p className='font-semibold text-red-500'>
            Email: <span className='text-black'>{user?.email}</span>
          </p>
          <p className='font-semibold text-red-500'>
            Last Login: <span className='text-black'>{user?.metadata.lastSignInTime}</span>
          </p>
          <p className='font-semibold text-red-500'>
            Phone: <span className='text-black'>{user?.metadata.phoneNumber}</span>
          </p>
        </div>
        <Link href='/'>
          <button
            onClick={handleSignOut}
            className='px-2 py-1 bg-red-500 rounded-lg text-white font-medium'
            type='button'>
            Logout
          </button>
        </Link>
      </div>
    </PaddingContainer>
  )
}

/*
{user?.photoURL}
{userState?.displayName}
{user?.email}
{userState?.metadata.lastSignInTime}
{userState?.metadata.phoneNumber}
*/
