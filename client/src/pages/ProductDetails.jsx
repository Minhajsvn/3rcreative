import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import rightArrow from '../assets/right-arrow.svg';
import QuantityButton from '../components/QuantityButton';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartProvider';



export default function ProductDetails() {
    const { addToCart } = useContext(CartContext);
    const [productDetails, setProductDetails] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchProductDetails = (id) => {
        const product = products.find((product) => product.id === Number(id));
        setProductDetails(product);
    };

    useEffect(() => {
        fetchProductDetails(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [id]);

    return (
        <div>
            <Navbar />
            <button 
            onClick={() => navigate('/products')}
            className='flex justify-center items-center w-52 h-6 rounded-md hover:bg-gray-200 hover:border-amber-50 cursor-pointer transition-all duration-400 mt-4 lg:ml-4'>
                <img src={rightArrow} alt="left arrow" className='scale-x-[-1]' />
                Back to products    
            </button>

            <div className='w-full md:flex justify-evenly items-start py-5 px-4 lg:px-0'>
                <div className='w-full md:w-2/6 rounded-2xl overflow-hidden'>
                    <img src={productDetails.image} alt={productDetails.title} className='w-full h-full object-cover' />
                </div>
                <div className='w-full md:w-3/6 border-b border-gray-300 space-y-3 mt-3 lg:mt-0'>
                    <h2 className='font-bold text-3xl lg:text-4xl'>{productDetails.title}</h2>
                    <h1 className='font-bold text-3xl'>${productDetails.price}</h1>
                    <p className='text-gray-400 text-sm lg:text-base mb-5'>{productDetails.description}</p>

                    <div className='flex justify-between'>
                        <QuantityButton />
                        <button 
                        onClick={() => {
                            navigate('/cart')
                            addToCart(productDetails)
                        }}
                        className='flex-1 w-full md:w-55 h-12 bg-black text-gray-100 rounded-3xl hover:bg-neutral-700 transition-all duration-400 cursor-pointer ml-4'>Add to Cart</button>
                    </div>  
                </div>

                
            </div>
        </div>
    )
}
