import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import { AnimatePresence } from 'framer-motion';

export default function App() {
  const location = useLocation();


  return (
    <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </AnimatePresence>
  )
}
