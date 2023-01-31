import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Product = () => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { state } = useLocation()
    const { str } = useParams()
    console.log(state)
    const { product } = state
    console.log(product);

    useEffect(() => {
        document.title = product.nutName + "- Levand Gıda Ltd.";
        window.scrollTo(0, 0)
    }, [product.nutName])

    return (
        <section>
            <div className='h-20 -mt-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-300 via-green-500 to-slate-700'></div>
            <article className='relative flex flex-col items-center justify-center p-5 h-[90vh] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-300 via-green-500 to-slate-700'>
                <h1 className='text-2xl'>{product.nutName} </h1>
                <p className='w-7/12'>{product.nutInfo} </p>
                <div className='flex items-center justify-center gap-3 mt-5'
                // style={{ webkitMaskImage: "url('https://w7.pngwing.com/pngs/85/668/png-transparent-hexagon-computer-icons-angle-us-pentagon-others-angle-rectangle-triangle-thumbnail.png')", maskImage: `url(${product.nutImg})` }}
                >
                    <img src={product.nutImg} alt="" width={300} className="rounded-xl" />
                </div>
                <button className='absolute bottom-0 left-0 btn btn-link text-amber-300 no-underline' onClick={() => navigate(-1)}>{t("go-back")}</button>

            </article>
        </section>
    )
}

export default Product
