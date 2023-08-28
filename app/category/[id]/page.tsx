import PaddingContainer from '@/components/layout/padding-container'
import ProductImage from '@/components/post/product-image'
import ProductPrice from '@/components/post/product-price'
import { notFound } from 'next/navigation'

interface Props {
  params: {
    id: string
  }
}

export default async function ProductPage({ params: { id } }: Props) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product: Product = await res.json()

    return (
      <PaddingContainer>
        <div className='flex flex-col md:flex-row items-center gap-8 my-10 md:mt-36'>
          <ProductImage product={product} />

          <div className='divide-y'>
            <div className='space-y-2 pb-8'>
              <h1 className='font-bold text-sm md:text-2xl md:truncate'>{product.title}</h1>
              <ProductPrice product={product} />
            </div>

            <div className='pt-8'>
              <p className='text-xs md:text-sm'>{product.description}</p>
              <p className='text-xs text-red-400 mt-2'>count: {product.rating.count}</p>
            </div>
          </div>
        </div>
      </PaddingContainer>
    )
  } catch {
    notFound()
  }
}
