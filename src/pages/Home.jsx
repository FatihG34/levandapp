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
    const [allTheme, setAllTheme] = useState('')
    const [silderOpener, setSilderOpener] = useState(false)
    const { theme, setTheme } = useContext(AppContextProv)
    const handleSubmit = (e) => {
        e.preventDefault()
        setTheme(allTheme)
    }
    useEffect(() => {
        setSilderOpener(false)
        setTheme('cyberpunk')
    }, [])
    console.log(theme)
    return (
        <div id='main'>
            <form className='w-4 max-w-xs' >
                <select className="select select-bordered " onChange={(e) => setTheme(e.target.value)}>
                    <option disabled selected>Theme</option>
                    <option value={'dark'}>dark</option>
                    <option value={'light'}>light</option>
                </select>
                {/* <button type='submit'>theme</button> */}
            </form>
            <button title='Products Menu' onClick={() => setSilderOpener(!silderOpener)} className={silderOpener ? 'md:hidden fixed right-2' : 'md:hidden fixed right-2 rotate-180'}> <TfiArrowCircleLeft /> </button>
            <div className={silderOpener ? `hidden fixed right-6 top-32 z-10 ` : `fixed right-6 top-32 z-10`}>
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
                <div className='text-center h-screen w-screen bg-stone-200'>
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
            <a href="#main"><button className='fixed bottom-2 right-10 btn btn-circle btn-outline'><TfiAngleDoubleUp /></button></a>
        </div>
    )
}

export default Home
