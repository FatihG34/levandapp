import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BlackBG from '../assets/blackGold.jpg';
import About1 from '../assets/about_1.jpg';

const AboutUs = () => {
    const { t } = useTranslation()

    useEffect(() => {
        document.title = t('about_us') + " - Levand Gıda Ltd."
    }, [t('contact_us')])
    return (
        <div className='-mt-20'>
            <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img
                            src={BlackBG}
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Our Company alwasy fresh</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <h5 className="text-xl">Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className={`grid grid-rows-3 gap-5 items-center justify-center bg-color4 p-[5%]`} >
                <div className='grid grid-cols-5 justify-center items-center gap-5'>
                    <h1 className='col-span-1 p-3 text-center'>Levand Gıda</h1>
                    <p className='col-span-3 p-3 shadow-md rounded-md bg-color3'>{t("home_desc_levand")} {t("home_desc_levand")}</p>
                    <img src={About1} alt="Levand Gıda" className='mask mask-star-2 col-span-1 w-48' />
                </div>
                <div className='grid grid-cols-5 justify-center items-center gap-5'>
                    <img src={About1} alt="Levand Gıda" className='mask mask-triangle-4 col-span-1 w-48' />
                    <h1 className='col-span-1 p-3 text-center'>{t("amacımız")}</h1>
                    <p className='col-span-3 p-3 shadow-md rounded-md'>{t("home_desc_levand")}</p>
                </div>
                <div className='grid grid-cols-5 justify-center items-center gap-5'>
                    <h1 className='col-span-1 p-3 text-center'>{t("hedefimiz")}</h1>
                    <p className='col-span-3 p-3 shadow-md rounded-md'>{t("home_desc_levand")}</p>
                    <img src={About1} alt="Levand Gıda" className='mask mask-triangle-3 col-span-1 w-48' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs
