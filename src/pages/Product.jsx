import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Product = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    console.log(state)
    const { product } = state
    console.log(product);

    useEffect(() => {
        document.title = product.nutName + "- Levand Gıda Ltd."
    }, [product.nutName])

    return (
        <>
            <div className='h-20 -mt-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-200 via-green-400 to-purple-700'></div>
            <div className='relative flex flex-col items-center justify-center p-5 h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-200 via-green-400 to-purple-700'>
                <h1 className='text-2xl'>{product.nutName} </h1>
                <p className=''>{product.nutInfo} </p>
                <div className='flex items-center justify-center gap-3'>
                    <img src={product.nutImg} alt="" width={300} />
                </div>
                <button className='absolute bottom-0 left-0 btn btn-link text-amber-300 no-underline' onClick={() => navigate(-1)}>Go Back</button>

            </div>
        </>
    )
}

export default Product
