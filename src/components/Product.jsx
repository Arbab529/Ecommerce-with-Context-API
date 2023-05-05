import React, { useContext } from 'react'
import { ProductsContext } from '../contexts/ProductContext'
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill, BsStarFill } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext'

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext)

    const { id, image, category, title, price, rating } = product;
    return (
        <div>
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt="Product Image" />
                    </div>
                </div>
                <div className='absolute top-4 -right-11 group-hover:right-4 p-2 flex gap-y-2 flex-col items-center transition-all duration-300 opacity-0 group-hover:opacity-100'>
                    <button onClick={() => addToCart(product, id)}>
                        <div className="flex justify-center items-center text-white bg-red-500 w-8 h-8">
                            <BsPlus className='text-2xl' />
                        </div>
                    </button>
                    <Link to={`/product/${id}`} className="flex justify-center items-center text-white bg-black w-8 h-8">
                        <BsEyeFill />
                    </Link>
                </div>
            </div>
            <div className=''>
                {/* <h1 className='text-xl'>{title.length > 22 ? `${title.slice(0, 19)}...` : `${title}`}</h1> */}
                <div className='text-sm font-semibold text-gray-400 mb-2 capitalize'>{category}</div>
                <Link to={`/product/${id}`}>
                    <div className='font-semibold mb-2'>{title}</div>
                </Link>
                <div className='font-semibold mb-2 text-orange-600'>${price}</div>
            </div>
        </div>
    )
}

export default Product