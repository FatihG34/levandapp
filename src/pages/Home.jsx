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
                <div className="hero min-h-screen" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <img src={Levand} alt="Levand" />
                            <h1 className="mb-5 text-5xl font-bold">Levand Gıda</h1>
                            {/* <h1 className="mb-5 text-5xl font-bold">Hello there</h1> */}
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen bg-base-800" id='hurma'>
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={Hurma} alt="Hurma" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">About Medjoul</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen bg-base-200" id='ceviz'>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={Ceviz} alt="Ceviz" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Caviz Hakkında</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen bg-base-800" id='badem'>
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={Badem} alt="Badem" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Badem</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen bg-base-200" id='kaju'>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={Kaju} alt="Kaju" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Kaju</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen bg-base-800" id='brazilCeviz'>
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={BrazilCeviz} alt="BrazilCeviz" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Brezilya Cevizi</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen bg-base-200" id='aycekirdegi'>
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={Aycekirdegi} alt="Aycekirdegi" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Ayçekirdeği</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                    </div>
                </div>
                <div className="hero min-h-screen bg-base-800" id='camFıstıgı'>
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={CamFıstıgı} alt="CamFıstıgı" className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">Çam Fıstığı</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            {/* <button className="btn btn-primary">Get Started</button> */}
                        </div>
                    </div>
                </div>
            </div>
            <a href="#main"><button className='fixed bottom-10 right-8 btn btn-circle btn-outline'><TfiAngleDoubleUp /></button></a>
        </div>
    )
}

export default Home
