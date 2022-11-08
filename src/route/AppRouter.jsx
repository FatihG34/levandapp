import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';
import AboutUs from '../pages/AboutUs';
import Home from '../pages/Home';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/aboutus' element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
