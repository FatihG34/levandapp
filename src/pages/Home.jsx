import React from 'react';
import Hurma from '../assets/hurma2.png';
import Ceviz from '../assets/ceviz.png';
import Badem from '../assets/badem.png';
import Kaju from '../assets/kaju.png';
import BrazilCeviz from '../assets/brezilyacevizi.png';
import Aycekirdegi from '../assets/aycekirdegi.png';
import CamFıstıgı from '../assets/cam_fıstıgı.png';

const sildes = [Hurma, Ceviz, Badem, Kaju, BrazilCeviz, Aycekirdegi, CamFıstıgı]

const Home = () => {
    return (
        <div>
            <div className="drawer drawer-end drawer-mobile z-10">
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
