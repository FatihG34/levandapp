import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const Product = () => {
    const [zoomImg, setZoomImg] = useState(false)
    const { state } = useLocation()
    const { product } = state
    const [showImg, setShowImg] = useState(product.nutImg[1])
    const { t } = useTranslation()
    const navigate = useNavigate()
    const { str } = useParams()
    console.log(state)
    console.log(product);

    useEffect(() => {
        document.title = product.nutName + "- Levand Gıda Ltd.";
        window.scrollTo(0, 0)
    }, [product.nutName])

    return (
        <section className=''>
            <div className='h-20 -mt-20 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-green-300 via-green-500 to-slate-700'></div>
            <article className='p-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-300 via-green-500 to-slate-700'>
                <article className=''>
                    <h1 className='text-2xl text-center'>{product.nutName} </h1>
                    <p className='text-center w-10/12 mx-auto'>{product.nutInfo} </p>
                </article>
                <picture className='flex flex-wrap items-center justify-evenly gap-4 mt-6 w-10/12 mx-auto'
                // style={{ webkitMaskImage: "url('https://w7.pngwing.com/pngs/85/668/png-transparent-hexagon-computer-icons-angle-us-pentagon-others-angle-rectangle-triangle-thumbnail.png')", maskImage: `url(${product.nutImg})` }}
                >
                    {product.nutImg.map((image, index) => (
                        <img src={image} alt={product.nutName} className="rounded-xl w-20 h-20 md:w-72 md:h-72" key={index} />
                    ))}
                </picture>

                {/* <div className="hero min-h-screen w-9/12 mx-auto bg-transparent rounded-2xl" style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px" }}>
                    <div className="hero-content flex-col lg:flex-row">
                        <figure className=''>
                            <figure className='flex justify-evenly mb-6'>
                                {
                                    product.nutImg.map((image, index) => (
                                        <img src={image} alt={product.nutName} className="rounded-xl w-10 h-10 cursor-pointer" key={index} onClick={() => setShowImg(image)} />
                                    ))
                                }
                            </figure>
                            <img src={showImg} alt={product.nutName} className="max-w-xl max-h-max rounded-lg shadow-2xl" />
                        </figure>
                        <div>
                            <h1 className="text-5xl font-bold">{product.nutName}</h1>
                            <p className="py-6">{product.nutInfo}</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div> */}

                <button className='-ml-6 mt-8 btn btn-link text-amber-300 no-underline' onClick={() => navigate(-1)}>{t("go-back")}</button>
            </article>
        </section>
    )
}

export default Product
