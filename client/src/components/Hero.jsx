import React from 'react'
import hero from '../assets/hero-image.png'
import heroMobile from '../assets/hero-mobile.png'
import { Link } from 'react-router-dom';


export default function Hero() {
    return (
        <section className="relative w-full md:flex justify-center items-center">
            <div className='w-screen md:w-1/2 lg:w-150 md:absolute left-8 lg:left-25 lg:top-45 px-5 py-5 space-y-5'>
                <h1 className='w-5/6 md:w-full font-bold text-4xl lg:text-6xl'>
                    FIND CLOTHES THAT MATCHES YOUR STYLE
                </h1>
                <p className='w-5/6 md:w-full text-xs lg:text-sm text-gray-500'>
                    Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                </p>
                <Link to="/products">
                    <button className="w-full md:w-55 h-12 bg-black text-gray-100 rounded-3xl hover:bg-neutral-700 transition-all duration-400 cursor-pointer">
                        Explore Products
                    </button>
                </Link>            
            </div>
            <img src={hero} alt="A man and woman posing - hero image" className="hidden md:block w-full object-cover" />
            <img src={heroMobile} alt="A man and woman posing - hero image" className='md:hidden block  w-full object-cover' />
        </section>
    )
}
