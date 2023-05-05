import React, { createContext, useState } from 'react'

export const SidebarContext = createContext();

const SidebarProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen(false);
    }

    const values = {
        isOpen,
        setIsOpen,
        handleClose
    }
    return (
        <SidebarContext.Provider value={values}>
            {children}
        </SidebarContext.Provider>
    )
}

export default SidebarProvider