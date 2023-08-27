'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

interface Props {
  title: string
  param: string
}

export default function NavigationItem({ title, param }: Props) {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')

  return (
    <div className=''>
      <Link
        href={`/?genre=${param}`}
        className={`hover:text-red-600
                ${genre && genre === param && 'underline underline-offset-4 decoration-2 decoration-red-500 rounded-lg'}
            `}>
        {title}
      </Link>
    </div>
  )
}
