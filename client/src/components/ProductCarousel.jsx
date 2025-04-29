import { motion, useTransform, useViewportScroll } from 'framer-motion';
import React from 'react';
import products from '../data/products';

export default function ProductCarousel() {
    const { scrollY } = useViewportScroll();

    const x = useTransform(scrollY, [0, 1000], [0, -500]);

    return (
        <div className="overflow-hidden w-full py-16">
            <div className='flex flex-col justify-center items-center pb-12'>
                <p className='uppercase '>Welcome to</p>
                <h3 className='uppercase font-bold text-2xl'>3r creative</h3>
            </div>
            <motion.div
                style={{ x }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="flex gap-6 px-6"
            >
                {[...products, ...products].map((product, index) => (
                <motion.div
                    key={index}
                    className="min-w-[300px] h-[400px] rounded-2xl overflow-hidden shadow-md flex-shrink-0 bg-white"
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0.6, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                    <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                    />
                </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
