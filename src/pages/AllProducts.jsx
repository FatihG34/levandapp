import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const AllProducts = (props) => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const { t } = useTranslation()
    console.log(state)
    const { products } = state
    console.log(products)
    useEffect(() => {
        document.title = products.productCategory + "- Levand Gıda Ltd."
    }, [products.productCategory])


    return (
        <div className='flex flex-col justify-center items-center gap-5 w-full'>
            <img src={products.productImage} alt="" className='w-full -mt-20' />
            <h1>{products.productCategory}</h1>
            <div className=''>
                {
                    products.product.map((item, index) => (
                        <div
                            className='flex justify-evenly items-center gap-4'
                            key={index}
                            onClick={() => navigate('/product', { state: { product: item }, replace: false })}
                        >
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
