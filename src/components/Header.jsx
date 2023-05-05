import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs'

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    return (
        <header className='bg-orange-100'>
            <div>header</div>
            <div onClick={() => setIsOpen(!isOpen)}>
                <BsBag className='text-2xl cursor-pointer flex relative' />
            </div>
        </header>
    )
}

export default Header