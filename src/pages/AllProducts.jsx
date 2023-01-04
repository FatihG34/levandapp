import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const AllProducts = (props) => {
    const currentLanguageCode = Cookies.get('i18next') || 'tr';
    const navigate = useNavigate()
    const { state } = useLocation()
    // const { t } = useTranslation()
    console.log(state)
    const { products } = state
    console.log(products)
    useEffect(() => {
        console.log(products.productCategory)
        document.title = products.productCategory + "- Levand Gıda Ltd."
    }, [products.productCategory, currentLanguageCode])


    return (
        <div>
            <div className='flex flex-col justify-center items-center gap-5 w-full -mt-20 h-80  bg-center bg-cover bg-no-repeat'
                style={{ backgroundImage: `url(${products.productImage})` }}
            >
                <h1 className='sticky top-24 text-3xl bg-lime-100 w-56 text-center p-3 rounded-xl'>{products.productCategory}</h1>
            </div>
            <div className='h-[80vh] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black'>
                {/* <h1 className='text-3xl bg-lime-100 w-56 text-center p-3 rounded-xl'>{products.productCategory}</h1> */}
                <div className='flex flex-wrap justify-evenly items-center gap-4 h-full'>

                    {
                        products.product.map((item, index) => (
                            <div
                                key={index}
                                className='cursor-pointer bg-center bg-cover bg-no-repeat w-40 h-40 flex justify-center items-end rounded-md outline-2 outline-lime-300 outline-double outline-offset-4'
                                style={{ backgroundImage: `url(${item.nutImg})` }}
                                onClick={() => navigate('/product', { state: { product: item }, replace: false })}
                            >
                                <h1 className='text-white'>{item.nutName}</h1>
                                {/* <img className="mask mask-squircle w-96" src={item.nutImg} alt="" /> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AllProducts
