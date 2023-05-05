import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { CartContext } from '../contexts/CartContext';

const CartItem = ({ item }) => {
    const { id, title, image, price, amount } = item;
    const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);
    return (
        <div className='border-b-[1px] gap-x-4 flex py-2 lg:px-6 w-full font-light text-gray-500'>
            <div className='w-full min-h-[150px] flex items-center gap-x-4'>
                <Link to={`/product/${id}`}>
                    <img src={image} alt="Product Image" className='max-w-[80px]' />
                </Link>
                <div className='w-full'>
                    {/* Title & Icon */}
                    <div className='flex justify-between mb-2'>
                        <Link to={`/product/${id}`} className='text-sm font-medium max-w-[240px] uppercase text-primary hover:underline'>{title}</Link>
                        <div className='cursor-pointer text-xl' onClick={() => removeFromCart(id)}>
                            <IoMdClose className='text-gray-500 hover:text-red-500 transition ' />
                        </div>
                    </div>
                    <div className="flex gap-x-2 text-sm h-[36px] items-center">
                        {/* Qty */}
                        <div className='flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium '>
                            <div className='flex-1 h-full flex justify-center items-center cursor-pointer hover:bg-gray-200' onClick={() => decreaseAmount(id)}>
                                <IoMdRemove />
                            </div>
                            <div className='flex h-full justify-center items-center px-4'>
                                {amount}
                            </div>
                            <div className='flex-1 h-full flex justify-center items-center cursor-pointer hover:bg-gray-200' onClick={() => increaseAmount(id)}>
                                <IoMdAdd />
                            </div>
                        </div>
                        {/* Item Price */}
                        <div className='flex-1 flex justify-around text-primary items-center'>
                            $ {price}
                        </div>
                        {/* Final Price */}
                        <div className='flex-1 flex justify-end text-primary items-center font-medium'>
                            {`$ ${parseFloat(item.price * amount).toFixed(2)}`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem