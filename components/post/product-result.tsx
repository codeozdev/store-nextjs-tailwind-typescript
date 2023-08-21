import PaddingContainer from '../layout/padding-container'
import ProductResultItem from './product-result-item'

interface Props {
    products: Product[]
}

export default function ProductResult({ products }: Props) {

    return (
        <PaddingContainer>
            <div className='my-5 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
              
                {products.map((product) => (
                    <ProductResultItem key={product.id} product={product} />
                ))}
            </div>
        </PaddingContainer>
    )
}
