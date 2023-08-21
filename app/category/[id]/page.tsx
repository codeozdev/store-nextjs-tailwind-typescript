import ProductImage from '@/components/post/product-image'

interface Props {
    params: {
        id: string
    }
}

export default async function ProductPage({ params: { id } }: Props) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product: Product = await res.json()

    return (
        <div>
            <ProductImage product={product} />
        </div>
    )
}
