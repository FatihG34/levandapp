import React, { useContext, useEffect, useState } from 'react';
import Hurma from '../assets/hurma2.png';
import Ceviz from '../assets/ceviz.png';
import Badem from '../assets/badem.png';
import Kaju from '../assets/kaju.png';
import BrezilyaCevizi from '../assets/brezilyacevizi.png';
import Aycekirdegi from '../assets/aycekirdegi.png';
import CamFıstıgı from '../assets/cam_fıstıgı.png';
import Levand from '../assets/maint.png';
import { TfiAngleDoubleUp, TfiArrowCircleLeft } from "react-icons/tfi";
import { AppContextProv } from '../context/AppContext';

// const sildes = [Hurma, Ceviz, Badem, Kaju, BrazilCeviz, Aycekirdegi, CamFıstıgı]
const nutsInfo = [
    {
        nutName: "Hurma",
        nutImg: Hurma,
        nutInfo: "Hurma, Mikroplarla Savaşır İçeriğindeki A ve C vitamini sayesinde vücudun zararlı bakterilerden ve mikroplardan temizlenmesine yardımcı olan güçlü bir antioksidan.Yüksek besin değerinin yanında, bağışıklık sistemini güçlendiren selenyumdan da zengin olması antioksidan etkisini artırır.",
    },
    {
        nutName: "Ceviz",
        nutImg: Ceviz,
        nutInfo: "Ceviz sağlıklı yağlar, lifler, vitaminler ve mineraller içerir. Cevizler, diğer yaygın sert kabuklu kuru yemişlerden, daha yüksek oranda antioksidan aktivitesine sahiptir. İç cevizin etrafını saran zarda, E vitamini, melatonin ve polifenol adı verilen bileşikler antioksidan özelliği sağlar.",
    },
    {
        nutName: "Badem",
        nutImg: Badem,
        nutInfo: "Badem son derece yüksek besin ihtiva eder. E vitamini, kalsiyum, fosfor, demir ve magnezyum açısından zengin bir kaynaktır. Ayrıca, çinko, selenyum, bakır ve niasin içerir. Diğer bütün türleriyle karşılaştırıldığında besin değerleri ve faydalı bileşenleri ile ön plana çıkmaktadır.",
    },
    {
        nutName: "Kaju",
        nutImg: Kaju,
        nutInfo: "Lezzetli yapısıyla  en çok tercih edilen Antik ürünleri arasında arasında yer alır. Çinko içerdiğinden gribe karşı koruyucu etkisi vardır, bağışıklık sistemini güçlendirir, büyüme ve gelişmeyi olumlu etkiler.Her gün tüketilmesi gereken atıştırmalıklardan biridir. İçerdiği minerallerden magnezyum (276 mg/100 gr) kemik ve sinir dokusunu besler, kasların çalışmasını düzenler, kalp atışlarını düzenler. Kansızlığın önemli rahatsızlıklara yol açtığı hamile ve çocuklarda D vitamini içeriği ile eksikliği giderir, kemikleri ve bağışıklık sistemini güçlendirir.",
    },
    {
        nutName: "Brezilya Cevizi",
        nutImg: BrezilyaCevizi,
        nutInfo: "Selenyum minerali bakımından en zengin besinlerden biridir.  Brezilya cevizleri bu nedenle atıştırmalık olarak değil 'süper besin' olarak tüketilmektedir. Healthline'da yer alan bilgiye göre günlük belirli miktarda tüketilen Brezilya cevizi kalp, beyin ve bağışıklık sistemini desteklemeye yardımcı olur. Brezilya cevizinin faydaları nedir diye soracak olursak en başta selenyum minerali bakımında zengin olduğunu görürüz.",
    },
    {
        nutName: "Ayçekirdeği",
        nutImg: Aycekirdegi,
        nutInfo: "Selenyum minerali bakımından en zengin besinlerden biridir.  Brezilya cevizleri bu nedenle atıştırmalık olarak değil 'süper besin' olarak tüketilmektedir. Healthline'da yer alan bilgiye göre günlük belirli miktarda tüketilen Brezilya cevizi kalp, beyin ve bağışıklık sistemini desteklemeye yardımcı olur. Brezilya cevizinin faydaları nedir diye soracak olursak en başta selenyum minerali bakımında zengin olduğunu görürüz.",
    },
    {
        nutName: "Çam Fıstığı",
        nutImg: CamFıstıgı,
        nutInfo: "Çam fıstığı, yağ asidi içeriği sayesinde iştahı bastırır ve kilo vermeye yardımcı olur. Çam fıstığındaki besin maddelerinin mükemmel kombinasyonu enerjiyi artırırken, magnezyum ve protein gibi diğer önemli mineraller kalp krizlerini ve şeker hastalığını önlemeye yardımcı olur.",
    },
]

const Home = () => {
    const [silderOpener, setSilderOpener] = useState(false)
    const { setTheme } = useContext(AppContextProv)
    useEffect(() => {
        setSilderOpener(false)
    }, [])
    return (
        <div id='main'>
            <TfiArrowCircleLeft title='Products Menu' className={`lg:hidden fixed right-8 btn btn-circle ${!silderOpener && 'rotate-180'}`} onClick={() => setSilderOpener(!silderOpener)} />
            <div className={silderOpener ? `hidden` : `fixed right-5 top-40 z-10`}>
                <ul className="flex flex-col items-center p-4 w-30 bg-base-100 text-base-content rounded-full py-3 shadow-lg">
                    {/* <!-- Sidebar content here --> */}
                    <li title='Hurma'><a href='#Hurma'><img src={Hurma} alt="hurma" width={40} className='transition ease-in-out hover:-translate-1 hover:scale-110' /></a></li>
                    <li title='Ceviz'><a href='#Ceviz'><img src={Ceviz} alt="Ceviz" width={40} className='transition ease-in-out hover:-translate-y-1 hover:scale-110' /></a></li>
                    <li title='Badem'><a href='#Badem'><img src={Badem} alt="Badem" width={40} className='transition ease-in-out hover:-translate-y-1 hover:scale-110' /></a></li>
                    <li title='Kaju'><a href='#Kaju'><img src={Kaju} alt="Kaju" width={40} className='transition ease-in-out hover:-translate-y-1 hover:scale-110' /></a></li>
                    <li title='Brezilya Cevizi'><a href='#Brezilya Cevizi'><img src={BrezilyaCevizi} alt="BrazilCeviz" width={40} className='transition ease-in-out hover:-translate-y-1 hover:scale-110' /></a></li>
                    <li title='Ayçekirdeği'><a href='#Ayçekirdeği'><img src={Aycekirdegi} alt="Aycekirdegi" width={40} className='transition ease-in-out hover:-translate-y-1 hover:scale-110' /></a></li>
                    <li title='Çam Fıstıgı'><a href='#Çam Fıstığı'><img src={CamFıstıgı} alt="CamFıstıgı" width={40} className='transition ease-in-out hover:-translate-y-1 hover:scale-110' /></a></li>
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
                {
                    nutsInfo?.map((item, index) => (
                        <div key={index} className={`hero min-h-screen ${(index % 2 === 0) ? 'bg-base-800' : 'bg-base-200'}`} id={item.nutName}>
                            <div className={`hero-content flex-col ${(index % 2 === 0) ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                <img src={item.nutImg} alt={item.nutName} className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl font-bold">{item.nutName} Hakkında</h1>
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
