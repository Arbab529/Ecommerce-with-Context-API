import React from 'react'
import WomanImg from '../assets/img/woman_hero.png'
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <section className=' h-[570px] md:h-[800px] bg-hero bg-cover bg-center py-24'>
            <div div className="container mx-auto flex justify-around h-full" >
                <div className='flex flex-col justify-center'>
                    <div className='font-semibold uppercase flex items-center'>
                        <div className='w-10 h-[2px] bg-orange-600 mr-3'></div>New Trend
                    </div>
                    <h1 className="font-light mb-4 text-[40px] md:text-[70px] leading-[1.1]">
                        AUTUMN SALE STYLISH <br />
                        <span className="font-semibold">WOMENS</span>
                    </h1>
                    <Link to='/' className=' self-start font-semibold border-b-2 border-primary'>Discover More</Link>
                </div>
                <div className='hidden lg:block'>
                    <img src={WomanImg} alt="Hero Image" className='' />
                </div>
            </div >
        </section >
    )
}

export default Hero