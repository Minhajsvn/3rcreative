import React from 'react'
import twitter from '../assets/footer/twitter1.svg'
import facebook from '../assets/footer/facebook1.svg'
import instagram from '../assets/footer/instagram1.svg'
import github from '../assets/footer/github1.svg'
import visa from '../assets/footer/visa.svg'
import mastercard from '../assets/footer/mastercard.svg'
import paypal from '../assets/footer/paypal.svg'
import apple from '../assets/footer/apple.svg'
import gpay from '../assets/footer/gpay.svg'

export default function Footer() {
    return (
        <div className='px-20'>
            <div className='flex justify-between items-center px-20 pt-30 pb-15 mb-4 border-b border-gray-400'>
            <div className='w-1/5 space-y-4'>
                <h3 className='block uppercase font-bold text-2xl'>3r Creative</h3>
                <p className='text-gray-400'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                <div className='flex space-x-5'>
                    <img src={twitter} alt="twitter" />
                    <img src={facebook} alt="facebook" />
                    <img src={instagram} alt="instagram" />
                    <img src={github} alt="github" />
                </div>
            </div>
            <div className='space-y-2'>
                <h3 className='text-lg'>Company</h3>
                <p className='text-gray-400'>About</p>
                <p className='text-gray-400'>Works</p>
                <p className='text-gray-400'>Features</p>
                <p className='text-gray-400'>Career</p>
            </div>
            <div className='space-y-2'>
                <h3 className='text-lg'>Help</h3>
                <p className='text-gray-400'>Delivery Details</p>
                <p className='text-gray-400'>Customer Support</p>
                <p className='text-gray-400'>Terms & Conditions</p>
                <p className='text-gray-400'>Privacy Policy</p>
            </div>
            <div  className='space-y-2'>
                <h3 className='text-lg'>FAQ</h3>
                <p className='text-gray-400'>Account</p>
                <p className='text-gray-400'>Manage Deliveries</p>
                <p className='text-gray-400'>Orders</p>
                <p className='text-gray-400'>Payments</p>
            </div>
            <div className='space-y-2'>
                <h3 className='text-lg'>Resources</h3>
                <p className='text-gray-400'>Free eBooks</p>
                <p className='text-gray-400'>Development Tutorial</p>
                <p className='text-gray-400'>How to - Blog</p>
                <p className='text-gray-400'>Youtube Playlist</p>
            </div>
        </div>
            <div className='flex justify-between items-center px-16 pb-10'>
                <p>3R Creative © 2000-2023, All Rights Reserved</p>
                <div className='flex space-x-5'>
                <img src={visa} alt="visa" />
                <img src={mastercard} alt="mastercard" />
                <img src={paypal} alt="paypal" />
                <img src={apple} alt="apple" />
                <img src={gpay} alt="gpay" />
                </div>
            </div>
        </div>
    )
}






