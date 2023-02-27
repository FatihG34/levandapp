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
        window.scrollTo(0, 0)
    }, [products.productCategory, currentLanguageCode])


    return (
        <div className=''>
            <div className='flex flex-col justify-center items-center gap-5 w-full -mt-20 h-80  bg-center bg-cover bg-no-repeat'
                style={{ backgroundImage: `url(${products.productImage})` }}
            >
                <h1 className='sticky top-24 text-3xl bg-lime-100 w-56 text-center p-3 rounded-xl'>{products.productCategory}</h1>
            </div>
            <div className='max-h-fit bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-400 via-gray-500 to-slate-400'>
                {/* <h1 className='text-3xl bg-lime-100 w-56 text-center p-3 rounded-xl'>{products.productCategory}</h1> */}
                <div className='grid grid-cols-2 lg:grid-cols-4 place-content-evenly justify-center content-center place-items-center gap-8 h-screen pt-4 w-8/12 mx-auto'>

                    {
                        products.product.map((item, index) => (
                            <div
                                key={index}
                                className='cursor-pointer bg-center bg-cover bg-no-repeat w-11/12 h-52 flex justify-center items-end rounded-md hover:scale-105 transition hover:ease-in-out outline-2 outline-lime-300 outline-double outline-offset-4'
                                style={{ backgroundImage: `url(${item.nutImg[0]})` }}
                                onClick={() => navigate(`/product`, { state: { product: item }, replace: false })}
                            >
                                <h1 className='bg-white bg-opacity-90 rounded-md w-28 text-center'>{item.nutName}</h1>
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
