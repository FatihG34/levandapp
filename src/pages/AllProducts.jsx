import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';

const AllProducts = (props) => {
    const { state } = useLocation()
    console.log(state)
    const { products } = state
    console.log(products)


    return (
        <div className='flex flex-col justify-center items-center gap-5 w-full'>
            <img src={products.productImage} alt="" className='w-full -mt-20' />
            <h1>{products.productCategory}</h1>
            <div className=''>
                {
                    products.product.map((item, index) => (
                        <div key={index} className='flex justify-evenly items-center gap-4'>
                            <div className='w-8/12'>
                                <h1>{item.nutName}</h1>
                                <p>{item.nutInfo}</p>
                            </div>
                            <img className="mask mask-squircle w-96" src={item.nutImg} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllProducts
