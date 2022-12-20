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

    }, [])
    return (
        <div id='main' className='scroll-smooth h-full -mt-[4.75rem]'>
            <div className={`container mx-auto flex flex-col items-stretch justify-center scroll-smooth w-full`}>
                <div className="hero min-h-screen w-full" style={{ backgroundImage: `url("https://i.sozcu.com.tr/wp-content/uploads/2019/10/14/shutterstock_601199999.jpg")` }}>
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
            </div>
            <div className='h-full bg-fixed bg-center bg-no-repeat bg-cover bg-[url("https://betalab.com.tr/wp-content/uploads/2019/11/Kuruyemi%C5%9F-ve-Kuru-Meyvelerde-Su-Aktivitesi-%C3%96l%C3%A7%C3%BCm%C3%BC.jpg")]'>
                <div className='h-full p-5'>
                    <h1 className='text-center text-3xl bg-green-300 w-96 mx-auto'>{t('products')}</h1>
                    <p className='text-center text-3xl bg-green-300 w-96 mx-auto mt-4'>Burası daha bitmedi bir miktar daha işi var</p>
                    <div className="grid grid-cols-4 gap-2 w-10/12 mx-auto p-2">
                        {
                            nutsInfo.map((item, index) => (
                                <div className='bg-white bg-opacity-50 border border-red-300 hover:bg-opacity-100' key={index} >
                                    <h3 className='text-center font-bold'>{item.nutName}</h3>
                                    <img src={item.nutImg} alt={item.nutName} />

                                </div>
                            ))
                        }

                    </div>

                </div>
            </div>
            {/* <a href="#main"><button className='fixed bottom-10 right-8 btn btn-circle btn-outline'><TfiAngleDoubleUp /></button></a> */}
        </div>
    )
}

export default Home
