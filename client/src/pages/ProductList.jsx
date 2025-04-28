import React from 'react'
import ProductCard from '../components/ProductCard'
import Navbar from '../components/Navbar'
import products from '../data/products';


export default function ProductList() {
    // const [products, setProducts] = useState([])


    return (
        <div>
            <Navbar />
            <h1 className='font-bold text-2xl pl-8 pt-6'>Casual</h1>
                <ProductCard products={products} />
        </div>
    )
}
