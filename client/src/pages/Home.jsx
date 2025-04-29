import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import ProductCarousel from '../components/ProductCarousel'
import { motion } from 'framer-motion';


export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: 'spring', duration: 0.5 }}
        >
            <Navbar />
            <Hero />
            <Banner />
            <ProductCarousel />
            <Footer />
        </motion.div>
    )
}
