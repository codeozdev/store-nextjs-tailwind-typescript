import ProductContent from '@/components/post/product-result'

export default async function Home({ searchParams }: { searchParams: any }) {
    const genre = searchParams.genre

    let url

    if (genre === 'fetchAll') {
        url = 'https://fakestoreapi.com/products'
    } else if (genre === 'fetchKadin') {
        url = "https://fakestoreapi.com/products/category/women's clothing"
    } else if (genre === 'fetchErkek') {
        url = "https://fakestoreapi.com/products/category/men's clothing"
    } else if (genre === 'fetchTaki') {
        url = 'https://fakestoreapi.com/products/category/jewelery'
    } else if (genre === 'fetchElektironik') {
        url = 'https://fakestoreapi.com/products/category/electronics'
    } else {
        url = ''
    }

    const res = await fetch(url)
    const products: Product[] = await res.json()

    return (
        <main>
            <ProductContent products={products} />
        </main>
    )
}
