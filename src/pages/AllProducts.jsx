import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const AllProducts = (props) => {
    const { state } = useLocation()
    console.log(state)
    const { products } = state
    console.log(products)


    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <h1>{products.productCategory}</h1>
            <img src={products.productImage} alt="" srcset="" />
        </div>
    )
}

export default AllProducts
