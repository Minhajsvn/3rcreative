import React from 'react'
// import product1 from '../assets/products/Gradient Graphic T-shirt.png';
import rightArrow from '../assets/right-arrow.svg';
import { Link } from 'react-router-dom';


export default function ProductCard({ products }) {
    return (
        <div className='flex flex-wrap gap-25 justify-center items-center pt-6 pb-40'>
            {products.map((product) => (
                <div key={product.id} className="w-72 h-72 cursor-pointer">
                <Link to={`/products/${product.id}`}>
                    <div className="w-72 h-72 rounded-2xl overflow-hidden">
                        <img src={product.image} alt="Gradient Graphic T-shirt" className="w-full h-full object-cover" />
                    </div>
                    <h4 className="mt-2 font-medium">{product.title}</h4>
                    <div className="flex justify-between mt-2">
                        <h3 className="font-semibold">${product.price}</h3>
                            <button className="flex justify-center items-center w-32 h-6 text-sm border rounded-2xl hover:bg-gray-200 hover:border-amber-50 cursor-pointer transition-all duration-400">
                                View Details
                                <img src={rightArrow} alt="" className='w-4 h-4' />
                            </button>
                    </div>
                </Link>
            </div>
            ))}
        </div>
    )
}
