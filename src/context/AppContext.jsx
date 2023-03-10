import React, { createContext, useState } from 'react';
// import { injectThemes } from 'daisyui/src/colors/functions';
import { useTranslation } from 'react-i18next';

//! Kuru Meyveler
import Hurma1 from '../assets/products/kuruMeyveler/hurma/hurma_11.webp';
// import Hurma1 from '../assets/products/kuruMeyveler/hurma/hurma_11.png';
// import Hurma1 from '../assets/products/kuruMeyveler/hurma/hurma_11.svg';
import Hurma2 from '../assets/products/kuruMeyveler/hurma/hurma_8.png';
import Hurma3 from '../assets/products/kuruMeyveler/hurma/hurma_17.png';
import Hurma4 from '../assets/products/kuruMeyveler/hurma/hurma_10.png';
import Hurma5 from '../assets/products/kuruMeyveler/hurma/hurma_12.png';
import Hurma6 from '../assets/products/kuruMeyveler/hurma/hurma_1.png';
import Harnup from '../assets/products/kuruMeyveler/keciboynuzu/harnup.jpg';
//! Yaglı Tohumlar
import YaglıTohum from '../assets/products/yaglıTohumlar/yaglitohumlar.jpg';
import CamFıstıgı from '../assets/products/yaglıTohumlar/camFıstıgı/cam_fıstıgı.png';
import Aycekirdegi from '../assets/products/yaglıTohumlar/aycekirdegi/aycekirdegi.png';
import Kabakcekirdegi1 from '../assets/products/yaglıTohumlar/kabakcekirdegiici/kabakici_1.png';
import Kabakcekirdegi2 from '../assets/products/yaglıTohumlar/kabakcekirdegiici/kabakici_2.png';
import Kabakcekirdegi3 from '../assets/products/yaglıTohumlar/kabakcekirdegiici/kabakici_3.png';
import Kabakcekirdegi4 from '../assets/products/yaglıTohumlar/kabakcekirdegiici/kabakici_4.png';
//! kuruyemis
import Kaju1 from '../assets/products/kuruyemis/kaju/kaju_1.png';
import Kaju2 from '../assets/products/kuruyemis/kaju/kaju_2.jpg';
import Kaju3 from '../assets/products/kuruyemis/kaju/kaju_3.png';
import Kaju4 from '../assets/products/kuruyemis/kaju/kaju_4.png';
import Kaju8 from '../assets/products/kuruyemis/kaju/kaju_8.png';
import BrezilyaCevizi from '../assets/products/kuruyemis/brezilyacevizi/brezilyacevizi_1.webp';
import BrezilyaCevizi2 from '../assets/products/kuruyemis/brezilyacevizi/brezilyacevizi_2.webp';
import BrezilyaCevizi3 from '../assets/products/kuruyemis/brezilyacevizi/brezilyacevizi_3.webp';
import BrezilyaCevizi4 from '../assets/products/kuruyemis/brezilyacevizi/brezilyacevizi_4.webp';
import BrezilyaCevizi6 from '../assets/products/kuruyemis/brezilyacevizi/brezilyacevizi_6.webp';
import Kuruyemis from '../assets/products/kuruyemis/kuruyemis.jpg';
import Macadamia from '../assets/products/kuruyemis/macadamia/Macadamia.jpg';
import Fıstık from '../assets/products/kuruyemis/fistik/siirtFistgi.jpg';
import PekanCevizi from '../assets/products/kuruyemis/pekancevizi/pekanCevizi.jpeg';

import i18next from 'i18next';

export const AppContextProv = createContext();


const AppContext = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const { t } = useTranslation()

    const changeLang = (lang) => {
        i18next.changeLanguage(lang)
    }
    const products = [
        {
            productCategory: t("kuruyemis"),
            productImage: Kuruyemis,
            productDesc: "",
            product: [
                {
                    nutName: t("Kaju"),
                    nutName2: "Kaju",
                    nutImg: [Kaju1, Kaju2, Kaju3, Kaju4, Kaju8],
                    nutInfo: t('nutInfo_kaju'),
                },
                {
                    nutName: t("Brezilya_Cevizi"),
                    nutName2: "Brezilya Cevizi",
                    nutImg: [BrezilyaCevizi6, BrezilyaCevizi, BrezilyaCevizi3, BrezilyaCevizi4, BrezilyaCevizi2],
                    nutInfo: t('nutInfo_brezilyaCevizi'),
                },
                {
                    nutName: "Siirt Fıstığı",
                    nutName2: "Siirt Fıstığı",
                    nutImg: [Fıstık],
                    nutInfo: t('nutInfo_brezilyaCevizi'),
                },
                {
                    nutName: "Pekan Cevizi",
                    nutName2: "Pekan Cevizi",
                    nutImg: [PekanCevizi],
                    nutInfo: t('nutInfo_brezilyaCevizi'),
                },
                {
                    nutName: "Macadamia",
                    nutName2: "Macadamia",
                    nutImg: [Macadamia],
                    nutInfo: t('nutInfo_brezilyaCevizi'),
                },
            ]
        },
        {
            productCategory: t("kuruMeyveler"),
            productImage: Harnup,
            productDesc: "",
            product: [
                {
                    nutName: t("Hurma"),
                    nutName2: "Hurma",
                    nutImg: [Hurma1, Hurma2, Hurma4, Hurma3, Hurma5, Hurma6],
                    nutInfo: t('nutInfo_hurma'),
                },
                {
                    nutName: "Keçiboynuzu",
                    nutName2: "Keçiboynuzu",
                    nutImg: [Harnup],
                    nutInfo: t('nutInfo_hurma'),
                },
            ]
        },
        {
            productCategory: t("yaglıTohumlar"),
            productImage: YaglıTohum,
            productDesc: "Süper Gıdalar",
            product: [
                {
                    nutName: t("kabak_cekirdegi"),
                    nutName2: "Kabak Çekirdeği İçi",
                    nutImg: [Kabakcekirdegi1, Kabakcekirdegi2, Kabakcekirdegi3, Kabakcekirdegi4],
                    nutInfo: t('nutInfo_kabakcekirdegi'),
                },
                {
                    nutName: t("Ay_cekirdegi"),
                    nutName2: "Ayçekirdeği",
                    nutImg: [Aycekirdegi],
                    nutInfo: t('nutInfo_aycekirdegi'),
                },
                {
                    nutName: t("Cam_fıstıgı"),
                    nutName2: "Çam Fıstığı",
                    nutImg: [CamFıstıgı],
                    nutInfo: t('nutInfo_camFıstıgı'),
                },
                {
                    nutName: t("Ay_cekirdegi"),
                    nutName2: "Ayçekirdeği",
                    nutImg: [Aycekirdegi],
                    nutInfo: t('nutInfo_aycekirdegi'),
                },
            ]
        },
    ]
    const value = {
        theme,
        setTheme,
        products,
        changeLang

    }
    return (
        <AppContextProv.Provider value={value}>
            {children}
        </AppContextProv.Provider>
    )
}

export default AppContext