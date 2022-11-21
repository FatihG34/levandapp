import React, { useContext, useEffect, useState } from 'react';
import Hurma from '../assets/hurma2.png';
import Ceviz from '../assets/ceviz.png';
import Badem from '../assets/badem.png';
import Kaju from '../assets/kaju.png';
import BrazilCeviz from '../assets/brezilyacevizi.png';
import Aycekirdegi from '../assets/aycekirdegi.png';
import CamFıstıgı from '../assets/cam_fıstıgı.png';
import Levand from '../assets/maint.png';
import { TfiAngleDoubleUp, TfiArrowCircleLeft } from "react-icons/tfi";
import { AppContextProv } from '../context/AppContext';

// const sildes = [Hurma, Ceviz, Badem, Kaju, BrazilCeviz, Aycekirdegi, CamFıstıgı]

const Home = () => {
    const [silderOpener, setSilderOpener] = useState(false)
    const { setTheme } = useContext(AppContextProv)
    useEffect(() => {
        setSilderOpener(false)
    }, [])
    return (
        <div id='main'>
            <TfiArrowCircleLeft title='Products Menu' className={silderOpener ? 'md:hidden fixed right-8 btn btn-circle' : 'md:hidden fixed right-8 btn btn-circle rotate-180'} onClick={() => setSilderOpener(!silderOpener)} />
            <div className={silderOpener ? `hidden` : `fixed right-5 top-40 z-10`}>
                <ul className="flex flex-col items-center p-4 w-30 bg-base-100 text-base-content rounded-full py-3 shadow-lg">
                    {/* <!-- Sidebar content here --> */}
                    <li title='Hurma'><a href='#hurma'><img src={Hurma} alt="hurma" width={40} className='transition ease-in-out hover:-translate-1 hover:scale-110' /></a></li>
                    <li title='Ceviz'><a href='#ceviz'><img src={Ceviz} alt="Ceviz" width={40} className='transition ease-in-out hover:-translate-y-1 hover:scale-110' /></a></li>
                    <li title='Badem'><a href='#badem'><img src={Badem} alt="Badem" width={40} className='transition ease-in-out hover:-translate-y-1 hover:scale-110' /></a></li>
                    <li title='Kaju'><a href='#kaju'><img src={Kaju} alt="Kaju" width={40} className='transition ease-in-out hover:-translate-y-1 hover:scale-110' /></a></li>
                    <li title='Brazilya Cevizi'><a href='#brazilCeviz'><img src={BrazilCeviz} alt="BrazilCeviz" width={40} className='transition ease-in-out hover:-translate-y-1 hover:scale-110' /></a></li>
                    <li title='Aycekirdegi'><a href='#aycekirdegi'><img src={Aycekirdegi} alt="Aycekirdegi" width={40} className='transition ease-in-out hover:-translate-y-1 hover:scale-110' /></a></li>
                    <li title='Çam Fıstıgı'><a href='#camFıstıgı'><img src={CamFıstıgı} alt="CamFıstıgı" width={40} className='transition ease-in-out hover:-translate-y-1 hover:scale-110' /></a></li>
                </ul>
            </div>


            <div className="flex flex-col items-center justify-center">
                <div className='text-center h-screen w-full rounded-xl bg-stone-200'>
                    <img src={Levand} alt="Levand" />
                    <h3>Levand Gıda</h3>
                </div>
                <div className='text-center h-screen' id='hurma'>
                    <img src={Hurma} alt="Hurma" />
                    <h3>Levand Gıda</h3>
                </div>

                <div className='text-center h-screen' id='ceviz'>
                    <img src={Ceviz} alt="Ceviz" />
                    <h3>Levand Gıda</h3>
                </div>
                <div className='text-center h-screen' id='badem'>
                    <img src={Badem} alt="Badem" />
                    <h3>Levand Gıda</h3>
                </div>
                <div className='text-center h-screen' id='kaju'>
                    <img src={Kaju} alt="Kaju" />
                    <h3>Levand Gıda</h3>
                </div>
                <div className='text-center h-screen' id='brazilCeviz'>
                    <img src={BrazilCeviz} alt="BrazilCeviz" />
                    <h3>Levand Gıda</h3>
                </div>
                <div className='text-center h-screen' id='aycekirdegi'>
                    <img src={Aycekirdegi} alt="Aycekirdegi" />
                    <h3>Levand Gıda</h3>
                </div>
                <div className='text-center h-screen' id='camFıstıgı'>
                    <img src={CamFıstıgı} alt="CamFıstıgı" />
                    <h3>Levand Gıda</h3>
                </div>

            </div>
            <a href="#main"><button className='fixed bottom-10 right-8 btn btn-circle btn-outline'><TfiAngleDoubleUp /></button></a>
        </div>
    )
}

export default Home
