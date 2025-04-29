import React from 'react'
import ProductCard from '../components/ProductCard'
import Navbar from '../components/Navbar'
import products from '../data/products';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';


export default function ProductList() {
    // const [products, setProducts] = useState([])


    return (
        <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4, type: 'spring' }}
        >
            <Navbar />
            <h1 className='font-bold text-2xl pl-8 pt-6'>Casual</h1>
            <ProductCard products={products} />
            <Footer />
        </motion.div>
    )
}
