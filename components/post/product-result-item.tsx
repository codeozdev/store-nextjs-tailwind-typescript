'use client'

import Link from 'next/link'
import ProductImage from './product-image'

interface Props {
    product: Product
}

export default function ProductResultItem({ product }: Props) {
    return (
        <div>
            <Link
                href={`/category/${product.id}`}
                className='h-96 flex flex-col border p-5 hover:scale-105 transition-transform ease-out duration-200'>
                <div className='relative max-h-72 flex-1'>
                    <ProductImage product={product} fill />
                </div>
                <div className='font-semibold flex items-center justify-between mt-4 mb-1'>
                    <p className='truncate w-44 text-sm'>{product.title}</p>
                    <p className='font-semibold'>${product.price}</p>
                </div>
            </Link>
        </div>
    )
}
