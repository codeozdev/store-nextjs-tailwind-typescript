'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
    item: Product
}

export default function ProductResultItem({ item }: Props) {
    const [loading, setLoading] = useState(true)

    return (
        <div>
            <Link href={`/category/${item.id}`}>
                <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                />
            </Link>
        </div>
    )
}
