import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import CartItem from './CartItem'

import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { cart, clearCart, total } = useContext(CartContext);

    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white shadow-2xl fixed top-0 h-full md:w-[35vw] lg:w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            {/* Sidebar header */}
            <div className='flex justify-between items-center py-6 border-b'>
                <div className='uppercase text-sm font-semibold'>Shopping Bag ({`${cart.length}`})</div>
                <div className="cursor-pointer w-8 h-8 flex justify-center items-center" onClick={handleClose}>
                    <IoMdArrowForward className='text-2xl' />
                </div>
            </div>
            {/* Cart Items */}
            {
                cart.length ? (
                    <>
                        <div className='flex flex-col gap-y-2 h-[450px] overflow-y-auto overflow-x-hidden border-b'>
                            {
                                cart.map(item => {
                                    return (
                                        <CartItem key={item.id} item={item} />
                                    )
                                })
                            }
                        </div>
                        <div className='flex w-full items-center justify-between mt-3'>
                            <div className='uppercase font-semibold'>
                                <span>Total: </span>$ {parseFloat(total).toFixed(2)}
                            </div>
                            <div className='cursor-pointer py-4 bg-red-600 text-white w-12 h-12 flex items-center justify-center text-xl' onClick={clearCart}>
                                <FiTrash2 />
                            </div>
                        </div>
                        <Link to='/' className='bg-gray-200 flex p-4 text-primary items-center justify-center w-full font-medium mt-2'>View Cart</Link>
                        <Link to='/' className='bg-primary flex p-4 text-white items-center justify-center w-full font-medium mt-2'>Checkout</Link>
                    </>
                ) : (
                    <div className='flex items-center justify-center h-full'>Cart Empty</div>
                )
            }

        </div>
    )
}

export default Sidebar