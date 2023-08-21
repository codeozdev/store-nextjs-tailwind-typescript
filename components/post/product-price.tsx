'use client'

import { useState, useEffect } from 'react'

interface Props {
    product: Product
}

export default function ProductPrice({ product }: Props) {
    const item = product.price
    const [total, setTotal] = useState(product.price)
    const [quantitiy, setQuantitiy] = useState(1)

    useEffect(() => {
        setTotal(quantitiy * item)
    }, [quantitiy, item])

    return (
        <div className='flex items-center justify-between'>
            <h2 className='text-gray-500 font-bold text-xl md:text-3xl'>
                ${total.toFixed(2)}
            </h2>

            <div className='flex items-center'>
                <div className='flex justify-between w-full p-1 ring-1 ring-red-300 outline-none'>
                    <span>Quantity</span>
                    <div className='flex items-center gap-2 md:gap-4 text-center'>
                        <button
                            //min miktar 1
                            onClick={() =>
                                setQuantitiy((prev) =>
                                    prev > 1 ? prev - 1 : 1,
                                )
                            }>
                            {'<'}
                        </button>
                        <span>{quantitiy}</span>
                        <button
                            //max miktar 9
                            onClick={() =>
                                setQuantitiy((prev) =>
                                    prev < 9 ? prev + 1 : 9,
                                )
                            }>
                            {'>'}
                        </button>
                    </div>
                </div>
                <div>
                    <button className='uppercase  bg-red-500 text-white p-1 px-2 ring-1 ring-red-500'>
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}
