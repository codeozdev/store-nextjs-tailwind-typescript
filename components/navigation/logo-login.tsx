'use client'

import Image from 'next/image'
import SearchBar from './searchbar'
import PaddingContainer from '../layout/padding-container'
import Link from 'next/link'
import { AiOutlineUser, AiOutlineHeart } from 'react-icons/ai'
import { SlBasket } from 'react-icons/sl'

import { useAuth } from '@/context/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function LogoLogin() {
  const { user } = useAuth()

  return (
    <PaddingContainer>
      <div className='flex items-center justify-between mt-10'>
        <div className='relative w-8 h-8 md:w-14 md:h-14'>
          <Link href='/'>
            <Image src='/logo.png' fill alt='logo' />
          </Link>
        </div>
        <SearchBar />
        <ul className='flex items-center gap-2 md:gap-8'>
          <li>
            {user?.displayName ? (
              <Link href='/account' className='hover:text-red-600  md:block md:w-[85px] text-center truncate'>
                {user?.displayName}
              </Link>
            ) : (
              <Link href='/giris' className='flex items-center gap-2  hover:text-red-600'>
                <AiOutlineUser />
                <p className='text-sm font-medium hidden md:block'>Giriş Yap</p>
              </Link>
            )}
          </li>
          <li>
            <Link href='#' className='flex items-center gap-2  hover:text-red-600'>
              <SlBasket />
              <p className='text-sm font-medium hidden md:block'>Sepetim</p>
            </Link>
          </li>
        </ul>
      </div>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </PaddingContainer>
  )
}
