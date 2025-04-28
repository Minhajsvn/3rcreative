import React from 'react'
import Navbar from '../components/Navbar'
import rightArrow from '../assets/right-arrow.svg';
import deleteIcon from '../assets/delete-icon.svg'
import rightIcon from '../assets/right-arrow2.svg'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';


export default function Cart() {
    const { cartItems, removeCartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);
    const navigate = useNavigate();

    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div>
            <Navbar />
            <button 
            onClick={() => navigate('/products')}
            className='flex justify-center items-center w-40 lg:w-52 h-6 rounded-md hover:bg-gray-200 hover:border-amber-50 cursor-pointer transition-all duration-400 mt-4 ml-4'>
                <img src={rightArrow} alt="left arrow" className='scale-x-[-1]' />
                Back to products    
            </button>

            <h1 className='font-bold text-3xl ml-6 lg:ml-14 py-6'>Your Cart</h1>
            <div className='w-screen md:flex justify-around items-start px-4'>
                {cartItems.length === 0 ? (
                            <div className='flex items-center mt-6 ml-16'>
                                <p className=''>Your cart is empty.</p>
                            </div>
                    ) : (
                        <div className="w-full md:w-4/6 border border-gray-300 rounded-2xl space-y-6 md:mx-6 lg:mx-10 mb-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between border-b border-gray-300 mx-6 lg:mx-10 py-4">
                                <div className="flex items-center space-x-4">
                                    <img src={item.image} alt={item.title} className="hidden lg:block w-16 h-16 object-cover rounded" />
                                    <div className='space-y-2'>
                                        <h3 className="font-semibold">{item.title}</h3>
                                        <p>${item.price}</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-end space-y-2'>
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={() => removeCartItems(item.id)}
                                    >
                                    <img src={deleteIcon} alt="delete-icon" />
                                    </button>
                                    <div className="flex space-x-2 mt-1">
                                        <button
                                            className="bg-gray-200 px-2 rounded"
                                            onClick={() => decreaseQuantity(item.id)}
                                        >-</button>
                                        <span>{item.quantity}</span>
                                        <button
                                            className="bg-gray-200 px-2 rounded"
                                            onClick={() => increaseQuantity(item.id)}
                                        >+</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                            
                        </div>
                    )}
                <div className='w-full md:w-3/6 border border-gray-300 rounded-2xl space-y-4 p-6 mr-6 lg:mr-10 mb-2'>
                    <h3 className='font-bold text-lg'>Order Summary</h3>
                    <div className='flex justify-between items-center border-b border-gray-300 pb-4'>
                        <div className='space-y-2'>
                            <p>Subtotal</p>
                            <p>Delivery</p>
                        </div>
                        <div>
                            <p>${subtotal}</p>
                            <p>$15</p>
                        </div>
                    </div>
                    <div className='flex justify-between space-y-2'>
                        <p>Total</p>
                        <p>${subtotal + 15}</p>
                    </div>
                    <button 
                    onClick={() => {
                        alert("Order Placed Successfully")
                        navigate('/products')
                    }}
                    className='flex justify-center items-center w-full h-12 bg-black text-gray-100 rounded-3xl hover:bg-neutral-700 transition-all duration-400 cursor-pointer gap-2'>
                        Go to Checkout 
                        <img src={rightIcon} alt="right-arrow" />
                    </button>
                </div>
            </div>
            
            
        </div>
    )
}
