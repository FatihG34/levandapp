import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import About1 from '../assets/about_1.jpg';
import fistik from '../assets/fıstıkAboutUs.webp'
import levand from '../assets/levandTransparent.png'
//* C: \Users\fthgn\Desktop\levand\AppLevand\AppLevand\levandapp\src\assets\fıstıkAboutUs.webp


const AboutUs = () => {
    const [parallaxHeight, setParallaxHeight] = useState(window.innerHeight);
    const [backgroundPositionY, setBackgroundPositionY] = useState(0);
    const { t } = useTranslation()
    const controlDependency = t('contact_us')
    useEffect(() => {
        document.title = t('about_us') + " - Levand Gıda Ltd.";
        window.scrollTo(0, 0)
        function handleResize() {
            setParallaxHeight(window.innerHeight);
        }

        function handleScroll() {
            const offset = window.pageYOffset;
            setBackgroundPositionY(offset * 0.7);
        }

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controlDependency, t])
    return (
        <div className='-mt-20'>
            {/* <div id="carouselExampleCaptions" className="carousel slide relative w-10/12 h-auto mx-auto pt-20" data-bs-ride="carousel">
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
                            src="https://cdn.pixabay.com/photo/2016/07/05/16/53/leaves-1498985_960_720.jpg"
                            className="block w-full"
                            alt="..."
                        />
                        <div className="carousel-caption hidden md:block absolute top-1/2 text-center">
                            <div className='bg-white bg-opacity-80 p-2 rounded-3xl text-black'>
                                <h5 className="text-xl">Our Company alwasy fresh</h5>
                                <h6 className="text-xl">We effort to give you always pure and healthy foods</h6>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item relative float-left w-full">
                        <img
                            src="https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428_960_720.jpg"
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
                            src="https://arkeofili.com/wp-content/uploads/2020/02/hurma1.jpg"
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
            </div> */}

            <div className={`bg-fixed bg-center bg-no-repeat bg-cover flex items-end justify-center xs:pt-52 xs:pb-20 xs:h-[${parallaxHeight}px] xs:bg-[center_${backgroundPositionY}px] lg:h-96`} style={{ backgroundImage: `url(${fistik})` }}>
                <div className='bg-color4 w-80 lg:w-6/12 p-5 flex flex-col items-center rounded-md'>
                    <img src={levand} alt="Levand-Transparent-Logo" width={200} />
                    <h3 className='font-semibold font-serif antialiased italic tracking-wide text-center'>We effort to give you always pure and healthy foods</h3>
                </div>
            </div>

            <div className="bg-color4 flex flex-col items-center" >
                <div className={`bg-fixed bg-center bg-no-repeat bg-cover flex items-center p-[5%]`} style={{ backgroundImage: `url(${fistik})` }}>
                    <div className='grid grid-cols-5 justify-center items-center lg:gap-5 bg-color4 p-3 shadow-md rounded-md'>
                        <h1 className='col-span-1 p-3 text-center'>Levand Gıda</h1>
                        <p className='col-span-3 p-3 shadow-md rounded-md bg-color3'>{t("home_desc_levand")} {t("home_desc_levand")}</p>
                        <img src={About1} alt="Levand Gıda" className='mask mask-star-2 col-span-1 w-48' style={{ maskRepeat: 'no-repeat' }} />
                    </div>
                </div>
                <div className='grid lg:grid-cols-5 justify-center items-center lg:gap-5 p-[8%] shadow-md rounded-md'>
                    <img src={About1} alt="Levand Gıda" className='mask mask-triangle-4 col-span-1 w-48' style={{ maskRepeat: 'no-repeat' }} />
                    <h1 className='col-span-1 p-3 text-center'>{t("amacımız")}</h1>
                    <p className='col-span-3 p-3 shadow-md rounded-md'>{t("home_desc_levand")} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt perferendis quisquam, sed nulla fuga, facilis corporis eos nobis, eveniet doloribus dolorem repellendus corrupti ducimus aperiam labore cupiditate praesentium. Nesciunt quibusdam dolor pariatur natus, numquam perspiciatis eos neque officiis eligendi consequuntur velit nihil libero ex iste fuga asperiores ipsum iure excepturi dolores aliquid suscipit adipisci. Tempore numquam consectetur deserunt reprehenderit eveniet! Itaque suscipit ipsa quis, doloribus in sit culpa tenetur. Odit, ipsum quisquam accusantium placeat cupiditate alias quae numquam ab voluptatum iusto corrupti, totam neque? Atque quo fugiat expedita, corrupti dolores possimus ea asperiores dolorum at, ut porro. Hic, minima possimus?</p>
                </div>
                <div className={`bg-fixed bg-center bg-no-repeat bg-cover flex items-center xs:h-[${parallaxHeight}px] xs:bg-[center_${backgroundPositionY}px] lg:h-96 p-[5%]`} style={{ backgroundImage: `url(${fistik})` }}>

                    <div className='grid lg:grid-cols-5 justify-center items-center lg:gap-5 bg-color4 p-5 rounded-md'>
                        <p className='col-span-3 p-3 shadow-md rounded-md xs:order-3 lg:order-1'>{t("home_desc_levand")} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam odit explicabo voluptate quia eius, amet est repellat facilis consectetur distinctio asperiores voluptatum voluptates sapiente labore possimus. Porro, eaque corporis! Incidunt ipsa odio asperiores! Eligendi dolorum nulla quam, maiores iure hic officiis suscipit ex odio totam maxime voluptates, sequi ab error ducimus, iusto non voluptas quibusdam. Asperiores reiciendis sit voluptate quidem enim, non ipsam odio. Soluta, explicabo facere voluptatem atque, id blanditiis delectus laborum quidem nihil hic vel itaque mollitia repellat minus adipisci aperiam, quas possimus amet in earum. Praesentium commodi quaerat enim odio fugit voluptatum incidunt illo pariatur ea rem!</p>
                        <h1 className='col-span-1 p-3 text-center xs:order-2 lg:order-2'>{t("hedefimiz")}</h1>
                        <img src={About1} alt="Levand Gıda" className='mask xs:mask-triangle-4 lg:mask-triangle-3 col-span-1 w-48 xs:order-1 lg:order-3' style={{ maskRepeat: 'no-repeat' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
