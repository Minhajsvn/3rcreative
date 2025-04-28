import React from 'react'
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'
import hamburger from '../assets/hamburger.svg'
import userProfile from '../assets/user-profile.svg'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <nav className="relative flex justify-between items-center py-4 px-5 lg:px-20 border-b border-gray-300">
            <img src={hamburger} alt="button" className="absolute md:hidden" />

            <div className="flex items-center space-x-2 pl-8 lg:pl-0">
                <Link to="/">
                    <h1 className="block uppercase font-bold md:text-2xl lg:text-3xl">3r creative</h1>
                </Link>
            </div>

            <div className="hidden md:flex text-base items-center space-x-5 px-6">
                <button>Shop</button>
                <button>New Arrivals</button>
            </div>

            <div className="hidden md:block flex-1 pr-6 relative text-xs lg:text-sm">
                <img src={search} alt="search icon" className='absolute left-4 top-2 w-5' />
                <input
                type="text"
                placeholder="Search for products..."
                className="w-full h-9 text-gray-700 rounded-2xl bg-gray-100 px-10 py-2
                hover:bg-gray-200 focus:bg-white focus:outline-none focus:ring-1 focus:ring-gray-200" />
            </div>
            <div className="flex items-center space-x-5 px-4">
                <img src={search} alt="search icon" className='block md:hidden' />
                <Link to='/cart'>
                    <img src={cart} alt="cart icon" />
                </Link>
                <img src={userProfile} alt="user profile icon" />
            </div>
        </nav>

    )
}