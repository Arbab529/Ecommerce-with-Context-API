import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-primary py-12'>
            <div className="container mx-auto">
                <p className='flex items-center justify-center text-white text-xl'>
                    Copyright &copy; Arbab Anjum {new Date().getFullYear()}. All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer