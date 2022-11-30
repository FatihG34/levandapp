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
import { TfiAngleDoubleUp, TfiArrowCircleLeft } from "react-icons/tfi";



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
        <div id='main'>
            <div className={`fixed top-48  ${silderOpener ? 'right-0' : '-right-36'} z-10`}>
                <ul className="menu bg-slate-200 w-56 p-2 rounded-l-box relative">
                    <TfiArrowCircleLeft title='Products Menu' className={`absolute -top-12 btn btn-circle ${silderOpener && 'rotate-180'}`} onClick={() => setSilderOpener(!silderOpener)} />
                    {/* <!-- Sidebar content here --> */}
                    <li onClick={() => setSilderOpener(false)} title='Hurma' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Hurma'><img src={Hurma} alt="hurma" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t('Hurma')}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Ceviz' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Ceviz'><img src={Ceviz} alt="Ceviz" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t('Ceviz')}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Badem' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Badem'><img src={Badem} alt="Badem" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t('Badem')}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Kaju' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Kaju'><img src={Kaju} alt="Kaju" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t('Kaju')}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Brezilya Cevizi' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Brezilya Cevizi'><img src={BrezilyaCevizi} alt="BrazilCeviz" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t("Brezilya_Cevizi")}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Ayçekirdeği' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Ayçekirdeği'><img src={Aycekirdegi} alt="Aycekirdegi" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t("Ay_cekirdegi")}</span></a></li>
                    <li onClick={() => setSilderOpener(false)} title='Çam Fıstıgı' className='hover-bordered transition ease-in-out hover:-translate-1 hover:scale-110'><a href='#Çam Fıstığı'><img src={CamFıstıgı} alt="CamFıstıgı" width={40} /><span className={`${silderOpener ? 'inline' : 'hidden'}`} >{t("Cam_fıstıgı")}</span></a></li>
                </ul>
            </div>


            <div className="flex flex-col items-center justify-center">
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
            <a href="#main"><button className='fixed bottom-10 right-8 btn btn-circle btn-outline'><TfiAngleDoubleUp /></button></a>
        </div>
    )
}

export default Home
