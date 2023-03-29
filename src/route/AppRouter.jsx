import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from '../components/footer/Footer';
import AppBar from '../components/navbar/AppBar';
import Navbar from '../components/navbar/Navbar';
import AboutUs from '../pages/AboutUs';
import AllProducts from '../pages/AllProducts';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';
import Product from '../pages/Product';

const AppRouter = () => {
    return (
        <BrowserRouter>
            {/* <AppBar /> */}
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<AllProducts />} />
                <Route path='/products/:str' element={<Product />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/contact' element={<ContactUs />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter
