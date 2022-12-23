import { t } from 'i18next';
import React from 'react';
import BlackBG from '../assets/blackGold.jpg';

const AboutUs = () => {
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
                            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
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
            <div className={`grid grid-rows-3 gap-3 items-center justify-center h-screen `}>
                <div className='grid grid-cols-5 justify-center items-center p-10'>
                    <h1 className='col-span-2 p-3 text-center'>Levand Gıda</h1>
                    <p className='col-span-3 p-3 shadow-md rounded-md'>{t("home_desc_levand")}</p>
                    {/* <img src={BlackBG} alt="" /> */}
                </div>
                <div className='grid grid-cols-5 justify-center items-center p-10'>
                    <h1 className='col-span-2 p-3 text-center'>{t("amacımız")}</h1>
                    <p className='col-span-3 p-3 shadow-md rounded-md'>{t("home_desc_levand")}</p>
                </div>
                <div className='grid grid-cols-5 justify-center items-center p-10'>
                    <h1 className='col-span-2 p-3 text-center'>{t("hedefimiz")}</h1>
                    <p className='col-span-3 p-3 shadow-md rounded-md'>{t("home_desc_levand")}</p>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
