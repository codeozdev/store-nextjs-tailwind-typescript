import PaddingContainer from '../layout/padding-container'
import ProductResultItem from './product-result-item'

interface Props {
    product: Product[]
}

export default function ProductResult({ product }: Props) {
    return (
        <PaddingContainer>
            <div className='mt-5 grid md:grid-cols-6'>
                {product.map((item) => (
                    <ProductResultItem key={item.id} item={item} />
                ))}
            </div>
        </PaddingContainer>
    )
}
