import React, { useContext } from 'react'
// product context
import { ProductsContext } from '../contexts/ProductContext'
import Product from '../components/Product'

const Home = () => {
    const { products } = useContext(ProductsContext)
    // const filteredProducts = products.filter((item) => {
    //     return item.category === "men's clothing" || item.category === "women's clothing"
    // })
    // console.log(filteredProducts);
    return (
        <section className='py-16'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-sm mx-auto md:max-w-none md:mx-0'>
                    {products.map((product) => {
                        return (
                            <Product key={product.id} product={product} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Home