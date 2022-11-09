import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import AboutUs from '../pages/AboutUs';
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/contact' element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
