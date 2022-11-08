import React from 'react';
import Hurma from '../assets/hurma2.png';
import Ceviz from '../assets/ceviz.png';
import Badem from '../assets/badem.png';
import Kaju from '../assets/kaju.png';
import BrazilCeviz from '../assets/brezilyacevizi.png';
import Aycekirdegi from '../assets/aycekirdegi.png';
import CamFıstıgı from '../assets/cam_fıstıgı.png';

const Home = () => {
    return (
        <div>

            <div id="animation-carousel" class="relative" data-carousel="static">
                {/* <!-- Carousel wrapper --> */}
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* <!-- Item 1 --> */}
                    <div class="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item="">
                        <img src={Hurma} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div class="duration-200 ease-linear absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item="">
                        <img src={Ceviz} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 3 --> */}
                    <div class="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item="active">
                        <img src={Badem} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 4 --> */}
                    <div class="duration-200 ease-linear absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item="">
                        <img src={Kaju} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    {/* <!-- Item 5 --> */}
                    <div class="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item="">
                        <img src={BrazilCeviz} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div class="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item="">
                        <img src={Aycekirdegi} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div class="hidden duration-200 ease-linear absolute inset-0 transition-all transform" data-carousel-item="">
                        <img src={CamFıstıgı} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                {/* <!-- Slider controls --> */}
                <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <div className="drawer drawer-end drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-40 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li title='Hurma'><a><img src={Hurma} alt="hurma" width={75} /></a></li>
                        <li title='Ceviz'><a><img src={Ceviz} alt="Ceviz" width={60} /></a></li>
                        <li title='Badem'><a><img src={Badem} alt="Badem" width={60} /></a></li>
                        <li title='Kaju'><a><img src={Kaju} alt="Kaju" width={70} /></a></li>
                        <li title='Brazilya Cevizi'><a><img src={BrazilCeviz} alt="BrazilCeviz" width={75} /></a></li>
                        <li title='Aycekirdegi'><a><img src={Aycekirdegi} alt="Aycekirdegi" width={75} /></a></li>
                        <li title='Çam Fıstıgı'><a><img src={CamFıstıgı} alt="CamFıstıgı" width={65} /></a></li>
                    </ul>

                </div>
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <div>
                        gggg1
                    </div>
                    <div>
                        gggg2
                    </div>
                    <div>
                        gggg3
                    </div>
                    <div>
                        gggg4
                    </div>
                    <div>
                        gggg5
                    </div>
                    <div>
                        gggg6
                    </div>
                    <div>
                        gggg7
                    </div>

                    <label htmlFor="my-drawer-2" className="btn btn-outline drawer-button lg:hidden">Open drawer</label>
                </div>

            </div>
        </div>
    )
}

export default Home
