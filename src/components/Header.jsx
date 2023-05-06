import React, { useContext, useEffect, useState } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs'
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg'

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { itemAmount } = useContext(CartContext);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    }, []);
    return (
        <header className={`${isActive ? 'bg-orange-300' : 'bg-white shadow-md'} py-3 px-10 fixed w-full z-10 transition`}>
            <div className='container flex justify-between items-center mx-auto h-full'>
                <Link to={'/'}>
                    <div >
                        <img src={logo} alt="" className='w-[40px]' />
                    </div>
                </Link>
                <div className='flex items-center gap-7'>
                    <a href="https://arbab-anjum.netlify.app" target='_blank'>My Portfolio</a>
                    <div onClick={() => setIsOpen(!isOpen)} className='flex relative cursor-pointer'>
                        <BsBag className='text-2xl cursor-pointer flex relative' />
                        <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] flex items-center justify-center rounded-full text-white'>{itemAmount}</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header