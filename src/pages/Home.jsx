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
                    
                    <li onClick={() => setSilderOpener(false)} title='Hurma' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Hurma'><img src={Hurma} alt="hurma" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t('Hurma')}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Ceviz' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Ceviz'><img src={Ceviz} alt="Ceviz" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t('Ceviz')}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Badem' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Badem'><img src={Badem} alt="Badem" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t('Badem')}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Kaju' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Kaju'><img src={Kaju} alt="Kaju" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t('Kaju')}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Brezilya Cevizi' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Brezilya Cevizi'><img src={BrezilyaCevizi} alt="BrazilCeviz" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t("Brezilya_Cevizi")}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Ayçekirdeği' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Ayçekirdeği'><img src={Aycekirdegi} alt="Aycekirdegi" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t("Ay_cekirdegi")}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Çam Fıstıgı' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Çam Fıstığı'><img src={CamFıstıgı} alt="CamFıstıgı" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t("Cam_fıstıgı")}</span></a></li>
                </ul>
            </div> */}
            {/* <TfiArrowCircleLeft title='Products Menu' className={`absolute -top-12 btn btn-circle ${silderOpener && 'rotate-180'}`} onClick={() => setSilderOpener(!silderOpener)} /> */}
            <div className={`fixed right-0 flex flex-col items-center ${silderOpener ? 'w-16' : 'w-40'} h-[calc(100vh-90px)] overflow-hidden text-gray-400 bg-gray-100 rounded-l-lg`}>
                <div className="flex items-center w-full px-3 mt-3 cursor-pointer" onClick={() => setSilderOpener(!silderOpener)} >
                    <TfiArrowCircleRight title='Products Menu' className={`${silderOpener && 'rotate-180'}`} />
                    <span className={`ml-2 text-sm font-bold ${silderOpener && 'hidden'} `}>The App</span>
                </div>
                <div className="w-full px-2">
                    <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href='#Hurma'>
                            <img src={Hurma} alt="hurma" width={40} />
                            <span className={`ml-2 text-sm font-medium ${silderOpener && 'hidden'}`}>{t('Hurma')}</span>
                        </a>
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">Search</span>
                        </a>
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">Insights</span>
                        </a>
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">Docs</span>
                        </a>
                    </div>
                    <div className="flex flex-col items-center w-full mt-2 border-t border-gray-700">
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">Products</span>
                        </a>
                        <a className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">Settings</span>
                        </a>
                        <a className="relative flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gray-700 hover:text-gray-300" href="#">
                            <svg className="w-6 h-6 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                            <span className="ml-2 text-sm font-medium">Messages</span>
                            <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
                        </a>
                    </div>
                </div>
                <a className="flex items-center justify-center w-full h-16 mt-auto bg-gray-200 hover:bg-gray-700 hover:text-gray-300" href="#">

                    <TfiAngleDoubleUp className="w-6 h-6 stroke-current" href="#main" />
                </a>
            </div>


            <div className={`absolute flex flex-col items-center justify-center scroll-smooth ${silderOpener ? 'w-[clac(100vw-4rem)]' : 'w-[clac(100vw-10rem)]'}`}>
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
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
                        <div key={index} className={`hero min-h-screen ${(index % 2 === 0) ? 'bg-base-800' : 'bg-base-200'}`} id={item.nutName2}>
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
        </div>
    )
}

export default Home
