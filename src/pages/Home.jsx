import { useTranslation } from 'react-i18next';
import React, { useContext } from 'react';
import { AppContextProv } from '../context/AppContext';
import Levand from '../assets/maint.png';
import Banner from '../assets/levandsended.jpg';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const { products } = useContext(AppContextProv);
    const navigate = useNavigate()
    const { t } = useTranslation()


    return (
        <div id='main' className='scroll-smooth h-full -mt-[4.75rem] w-full'>
            <div className={`mx-auto flex flex-col items-stretch justify-center scroll-smooth w-full`}>
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
            <section className='h-96 flex justify-evenly items-center xs:p-4 md:p-0 bg-[#529E9B]'>
                <article className='w-96'>
                    <h1 className='font-bold mb-5'>Levand Gıda Ltd.</h1>
                    <p className='text-justify'>{t("home_desc_levand")} </p>

                </article>
                <figure className='flex flex-col items-center p-2'>
                    <img className="mask mask-decagon" width={450} src={Banner} alt="Levand Gıda Ltd." />
                    {/* <figcaption>Buraya firmanıza ait bir görsel gelebilir</figcaption> */}
                </figure>
            </section>
            {/* parallax started here 👇🏻 */}
            <div className='h-full bg-fixed bg-center bg-no-repeat bg-cover bg-[url("https://betalab.com.tr/wp-content/uploads/2019/11/Kuruyemi%C5%9F-ve-Kuru-Meyvelerde-Su-Aktivitesi-%C3%96l%C3%A7%C3%BCm%C3%BC.jpg")]'>
                <div className='xs:[35rem] md:h-[28rem] p-5 flex flex-col justify-center items-center gap-5'>
                    <h1 className='text-center text-3xl bg-white bg-opacity-80 rounded-lg w-64 mx-auto'>{t('products')}</h1>
                    {/* <p className='text-center text-3xl bg-green-300 w-96 mx-auto mt-4'>Burası daha bitmedi bir miktar daha işi var</p> */}
                    <div className="grid md:grid-cols-3 xs:gap-5 md:gap-6 w-10/12 mx-auto p-2">

                        {
                            products?.map((item, index) => (
                                <div key={index} onClick={() => navigate('/products', { state: { products: item }, replace: false })} className='cursor-pointer bg-white bg-opacity-50 border border-red-300 hover:bg-opacity-100 h-48 bg-center bg-no-repeat bg-cover outline-double outline-offset-2 p-2 hover:scale-105 transition ease-in-out' style={{ backgroundImage: `url(${item.productImage})` }}>
                                    <h3 className='text-center font-bold bg-white w-1/2 bg-opacity-80 mx-auto rounded-lg'>{item.productCategory}</h3>
                                    {/* <img src={item.productImage} alt={item.nutName} /> */}
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
