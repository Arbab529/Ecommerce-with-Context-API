import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'
import { ProductsContext } from '../contexts/ProductContext'

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useContext(ProductsContext);
    const { addToCart } = useContext(CartContext);

    const product = products.find((item) => {
        return item.id === parseInt(id);
    })
    if (!product) {
        return <section className='h-screen flex justify-center items-center'>
            Loading....
        </section>
    }
    const { title, price, description, image } = product;
    return (
        <section>
            <div className="container mx-auto pt-32 pb-16 px-3 lg:px-0 lg:py-32 lg:h-screen flex items-center">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className='flex-1 flex  items-center justify-center group cursor-pointer'>
                        <img className='max-w-[280px] group-hover:scale-110 transition duration-300' src={image} alt="Product Image" />
                    </div>
                    <div className='flex-1 text-center lg:text-left'>
                        <h1 className='text-[26px] font-medium mb-2 max-w-[450px] lg:mx-0 mx-auto'>{title}</h1>
                        <div className='text-xl text-orange-600 font-medium mb-6'>$ {price}</div>
                        <div className='mb-6'>{description}</div>
                        <button className='bg-primary py-3 px-6 text-white font-medium' onClick={() => addToCart(product, product.id)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails