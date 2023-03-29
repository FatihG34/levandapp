import Cookies from 'js-cookie';
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const AllProducts = (props) => {
    const currentLanguageCode = Cookies.get('i18next') || 'tr';
    const navigate = useNavigate()
    const { state } = useLocation()
    const { t } = useTranslation()
    const { products } = state
    const controlDependency = t('products')

    console.log(controlDependency)
    console.log(products.productCategory)
    console.log(currentLanguageCode)
    console.log(state)
    // const Retry = () => ({ state } = useLocation())

    useEffect(() => {
        const { products } = state
        document.title = products.productCategory + "- Levand Gıda Ltd."
        window.scrollTo(0, 0)
    }, [state, controlDependency, products.productCategory, currentLanguageCode])


    return (
        <>
            <div className='flex flex-col justify-center items-center gap-5 w-full -mt-20 h-80  bg-center bg-cover bg-no-repeat'
                style={{ backgroundImage: `url(${products.productImage})` }}
            >
            </div>
            <div className='bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-400 via-gray-500 to-slate-400 p-8'>
                {/* <h1 className='text-3xl bg-lime-100 w-56 text-center p-3 rounded-xl'>{products.productCategory}</h1> */}
                <h1 className='text-3xl bg-lime-100 w-56 mx-auto text-center p-3 rounded-xl'>{products.productCategory}</h1>
                <div className='flex flex-wrap justify-center items-start pt-16 gap-8 lg:h-[40rem]'>

                    {
                        products.product.map((item, index) => (
                            <div
                                key={index}
                                className='cursor-pointer bg-center bg-cover bg-no-repeat w-40 lg:w-56 h-40 lg:h-56 flex justify-center items-end rounded-md hover:scale-105 transition hover:ease-in-out outline-2 outline-lime-300 outline-double outline-offset-4'
                                style={{ backgroundImage: `url(${item.nutImg[0]})` }}
                                onClick={() => navigate(`/products/${item.nutName}`, { state: { product: item }, replace: false })}
                            >
                                <h1 className='bg-white bg-opacity-90 rounded-md w-28 text-center'>{item.nutName}</h1>
                                {/* <img className="mask mask-squircle w-96" src={item.nutImg} alt="" /> */}
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AllProducts
