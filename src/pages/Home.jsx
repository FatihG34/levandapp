import { useTranslation } from 'react-i18next';
import React, { useContext, useEffect, useState } from 'react';
import { AppContextProv } from '../context/AppContext';
import Hurma from '../assets/hurma2.png';
import Ceviz from '../assets/ceviz.png';
import Badem from '../assets/badem.png';
import Kaju from '../assets/kaju.png';
import BrezilyaCevizi from '../assets/brezilyacevizi.png';
import Aycekirdegi from '../assets/aycekirdegi.png';
import CamFıstıgı from '../assets/cam_fıstıgı.png';
import Levand from '../assets/maint.png';
import { TfiAngleDoubleUp, TfiArrowCircleRight } from "react-icons/tfi";



const Home = () => {
    const [silderOpener, setSilderOpener] = useState(false);
    const { setTheme } = useContext(AppContextProv);
    const { t } = useTranslation()
    const nutsInfo = [
        {
            nutName: t("Hurma"),
            nutName2: "Hurma",
            nutImg: Hurma,
            nutInfo: t('nutInfo_hurma'),
        },
        {
            nutName: t("Ceviz"),
            nutName2: "Ceviz",
            nutImg: Ceviz,
            nutInfo: t('nutInfo_ceviz'),
        },
        {
            nutName: t("Badem"),
            nutName2: "Badem",
            nutImg: Badem,
            nutInfo: t('nutInfo_badem'),
        },
        {
            nutName: t("Kaju"),
            nutName2: "Kaju",
            nutImg: Kaju,
            nutInfo: t('nutInfo_kaju'),
        },
        {
            nutName: t("Brezilya_Cevizi"),
            nutName2: "Brezilya Cevizi",
            nutImg: BrezilyaCevizi,
            nutInfo: t('nutInfo_brezilyaCevizi'),
        },
        {
            nutName: t("Ay_cekirdegi"),
            nutName2: "Ayçekirdeği",
            nutImg: Aycekirdegi,
            nutInfo: t('nutInfo_aycekirdegi'),
        },
        {
            nutName: t("Cam_fıstıgı"),
            nutName2: "Çam Fıstığı",
            nutImg: CamFıstıgı,
            nutInfo: t('nutInfo_camFıstıgı'),
        },
    ]
    useEffect(() => {
        setSilderOpener(false)
    }, [])
    return (
        <div id='main' className='scroll-smooth'>
            {/* <div className={`fixed top-40  ${silderOpener ? 'right-0' : '-right-36'} z-10`}>
                <ul className="menu bg-slate-200 w-56 p-2 rounded-l-box relative">
                    <TfiArrowCircleLeft title='Products Menu' className={`absolute -top-12 btn btn-circle ${silderOpener && 'rotate-180'}`} onClick={() => setSilderOpener(!silderOpener)} />
                    
                   
                    <li onClick={() => setSilderOpener(false)} title='Ceviz' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Ceviz'><img src={Ceviz} alt="Ceviz" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t('Ceviz')}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Badem' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Badem'><img src={Badem} alt="Badem" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t('Badem')}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Kaju' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Kaju'><img src={Kaju} alt="Kaju" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t('Kaju')}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Brezilya Cevizi' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Brezilya Cevizi'><img src={BrezilyaCevizi} alt="BrazilCeviz" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t("Brezilya_Cevizi")}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Ayçekirdeği' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Ayçekirdeği'><img src={Aycekirdegi} alt="Aycekirdegi" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t("Ay_cekirdegi")}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Çam Fıstıgı' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Çam Fıstığı'><img src={CamFıstıgı} alt="CamFıstıgı" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t("Cam_fıstıgı")}</span></a></li>
                </ul>
            </div> */}
            {/* <TfiArrowCircleLeft title='Products Menu' className={`absolute -top-12 btn btn-circle ${silderOpener && 'rotate-180'}`} onClick={() => setSilderOpener(!silderOpener)} /> */}
            <div className={`fixed right-0 flex flex-col items-center ${silderOpener ? 'w-16' : 'xs:w-full md:w-40'} z-40 h-[calc(100%-75px)] overflow-hidden text-gray-800 bg-base-200 rounded-l-sm`}>
                <div className="flex items-center w-full px-3 mt-3 cursor-pointer" onClick={() => setSilderOpener(!silderOpener)} >
                    <TfiArrowCircleRight title='Products Menu' className={`${silderOpener && 'rotate-180'} text-2xl`} />
                    <span className={`ml-2 text-sm font-bold ${silderOpener && 'hidden'} `}>{t("cesitlerimiz")}</span>
                </div>
                <div className="w-full px-2">
                    <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-500 hover:text-gray-300" href='#Hurma' title={t('Hurma')}>
                            <img src={Hurma} alt="hurma" width={40} />
                            <span className={`ml-2 text-sm font-medium ${silderOpener && 'hidden'}`}>{t('Hurma')}</span>
                        </a>
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-500 hover:text-gray-300" href='#Ceviz' title={t("Ceviz")}>
                            <img src={Ceviz} alt="Ceviz" width={40} />
                            <span className={`ml-2 text-sm font-medium ${silderOpener && 'hidden'}`}>{t("Ceviz")}</span>
                        </a>
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-500 hover:text-gray-300" href='#Badem' title={t('Badem')}>
                            <img src={Badem} alt="Badem" width={40} />
                            <span className={`ml-2 text-sm font-medium ${silderOpener && 'hidden'}`}>{t('Badem')}</span>
                        </a>
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-500 hover:text-gray-300" href='#Kaju' title={t('Kaju')}>
                            <img src={Kaju} alt="Kaju" width={40} />
                            <span className={`ml-2 text-sm font-medium ${silderOpener && 'hidden'}`}>{t('Kaju')}</span>
                        </a>
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-500 hover:text-gray-300" href='#Brezilya Cevizi' title={t("Brezilya_Cevizi")}>
                            <img src={BrezilyaCevizi} alt="BrazilCeviz" width={40} />
                            <span className={`ml-2 text-sm font-medium ${silderOpener && 'hidden'}`}>{t("Brezilya_Cevizi")}</span>
                        </a>
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-500 hover:text-gray-300" href='#Ayçekirdeği' title={t("Ay_cekirdegi")}>
                            <img src={Aycekirdegi} alt="Aycekirdegi" width={40} />
                            <span className={`ml-2 text-sm font-medium ${silderOpener && 'hidden'}`}>{t("Ay_cekirdegi")}</span>
                        </a>
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-500 hover:text-gray-300" href='#Çam Fıstığı' title={t("Cam_fıstıgı")}>
                            <img src={CamFıstıgı} alt="CamFıstıgı" width={40} />
                            <span className={`ml-2 text-sm font-medium ${silderOpener && 'hidden'}`}>{t("Cam_fıstıgı")}</span>
                        </a>
                    </div>
                    {/* <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-green-500 hover:text-gray-300" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className={`ml-2 text-sm font-medium ${silderOpener && 'hidden'}`}>Products</span>
                        </a>
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            <span className={`ml-2 text-sm font-medium ${silderOpener && 'hidden'}`}>Settings</span>
                        </a>
                        <a className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <span className={`ml-2 text-sm font-medium ${silderOpener && 'hidden'}`}>Messages</span>
                            <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
                        </a>
                    </div> */}
                </div>
                <a className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-green-500 hover:text-gray-300" href="#">

                    <TfiAngleDoubleUp className="w-6 h-6 stroke-current" href="#main" />
                </a>
            </div>


            <div className={`container mx-auto flex flex-col items-stretch justify-center scroll-smooth ${silderOpener ? 'w-[clac(100vw-4rem)]' : 'w-[clac(100vw-10rem)]'}`}>
                <div className={`hero min-h-screen ${silderOpener ? 'md:w-[calc(100%-4rem)]' : 'md:w-[calc(100%-10rem)]'}`} style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                    <div className={`hero-overlay bg-opacity-60`}></div>
                    <div className={`hero-content text-center text-neutral-content`}>
                        <div className="max-w-md">
                            <img src={Levand} alt="Levand" />
                            <h1 className="mb-5 text-5xl font-bold">Levand Gıda</h1>
                            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
                            <p className="mb-5">{t('hello')} </p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                    </div>
                </div>
                {
                    nutsInfo?.map((item, index) => (
                        <div key={index} className={`hero min-h-screen ${silderOpener ? 'md:w-[calc(100%-4rem)]' : 'md:w-[calc(100%-10rem)]'} ${(index % 2 === 0) ? 'bg-base-800' : 'bg-base-200'}`} id={item.nutName2}>
                            <div className={`hero-content flex-col ${(index % 2 === 0) ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                <img src={item.nutImg} alt={item.nutName} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold">{item.nutName}</h1>
                                    <p className="py-6">{item.nutInfo}</p>
                                    {/* <button className="btn btn-primary">Get Started</button> */}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* <a href="#main"><button className='fixed bottom-10 right-8 btn btn-circle btn-outline'><TfiAngleDoubleUp /></button></a> */}

            <div data-dial-init className="fixed top-20 left-4 group">
                <button type="button" data-dial-toggle="speed-dial-menu-text-inside-button" aria-controls="speed-dial-menu-text-inside-button" aria-expanded="false" class="flex justify-center items-center w-16 h-16 text-white bg-blue-700 rounded-full hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                    <svg aria-hidden="true" class="w-8 h-8 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                    <span class="sr-only">Open actions menu</span>
                </button>
                <div id="speed-dial-menu-text-inside-button" class="flex flex-col items-center mb-4 space-y-2">
                    {
                        nutsInfo.map((item, index) => (
                            <button key={index} href={item.nutName2} type="button" class="w-16 h-16 text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                                {/* <svg aria-hidden="true" class="mx-auto mt-px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg> */}
                                <img src={item.nutImg} alt={item.nutName} className='mx-auto mt-px w-6 h-6' />
                                <span class="block mb-px text-xs font-medium">{item.nutName}</span>
                            </button>
                        ))
                    }

                    {/* <button type="button" class="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                        <svg aria-hidden="true" class="mx-auto mt-px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path></svg>
                        <span class="block mb-px text-xs font-medium">Share</span>
                    </button>
                    <button type="button" class="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                        <svg aria-hidden="true" class="mx-auto mt-px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clip-rule="evenodd"></path></svg>
                        <span class="block mb-px text-xs font-medium">Print</span>
                    </button>
                    <button type="button" class="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                        <svg aria-hidden="true" class="mx-auto mt-px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z" fill-rule="evenodd"></path></svg>
                        <span class="block mb-px text-xs font-medium">Save</span>
                    </button>
                    <button type="button" class="w-[56px] h-[56px] text-gray-500 bg-white rounded-full border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400">
                        <svg aria-hidden="true" class="mx-auto mt-px w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path></svg>
                        <span class="block mb-px text-xs font-medium">Copy</span>
                    </button> */}
                </div>

            </div>
        </div>
    )
}

export default Home
