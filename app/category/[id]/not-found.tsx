'use client'

import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center mt-20 space-y-2'>
            <h1 className='text-9xl font-bold'>404</h1>
            <p className='text-4xl text-center'>Aradığınız Sayfa Bulunamadı!</p>
            <Link href='/' className='bg-red-500 px-5 py-2 rounded text-white'>Anasayfaya İçin Tıklayınız.</Link>
        </div>
    )
}
