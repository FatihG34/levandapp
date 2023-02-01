import React, { createContext, useState } from 'react';
// import { injectThemes } from 'daisyui/src/colors/functions';
import { useTranslation } from 'react-i18next';

//! Kuru Meyveler
import Hurma1 from '../assets/products/kuruMeyveler/hurma/hurma_11.png';
import Hurma2 from '../assets/products/kuruMeyveler/hurma/hurma_8.png';
import Hurma from '../assets/products/kuruMeyveler/hurma/hurma2.png';
import Harnup from '../assets/products/kuruMeyveler/keciboynuzu/harnup.jpg';
//! Yaglı Tohumlar
import YaglıTohum from '../assets/products/yaglıTohumlar/yaglitohumlar.jpg';
import CamFıstıgı from '../assets/products/yaglıTohumlar/camFıstıgı/cam_fıstıgı.png';
import Aycekirdegi from '../assets/products/yaglıTohumlar/aycekirdegi/aycekirdegi.png';
//! kuruyemis
import Kaju from '../assets/products/kuruyemis/kaju/kaju.png';
import BrezilyaCevizi from '../assets/products/kuruyemis/brezilyacevizi/brezilyacevizi.png';
import Kuruyemis from '../assets/products/kuruyemis/kuruyemis.jpg';
import Macadamia from '../assets/products/kuruyemis/macadamia/Macadamia.jpg';
import Fıstık from '../assets/products/kuruyemis/fistik/siirtFistgi.jpg';
import PekanCevizi from '../assets/products/kuruyemis/pekancevizi/pekanCevizi.jpeg';

export const AppContextProv = createContext();


const AppContext = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const { t } = useTranslation()
    const products = [
        {
            productCategory: t("kuruyemis"),
            productImage: Kuruyemis,
            productDesc: "",
            product: [
                {
                    nutName: t("Kaju"),
                    nutName2: "Kaju",
                    nutImg: [Kaju],
                    nutInfo: t('nutInfo_kaju'),
                },
                {
                    nutName: t("Brezilya_Cevizi"),
                    nutName2: "Brezilya Cevizi",
                    nutImg: [BrezilyaCevizi],
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
                    nutImg: [Hurma1, Hurma2, Hurma],
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
                    nutName: t("Ay_cekirdegi"),
                    nutName2: "Kabak Çekirdeği İçi",
                    nutImg: [Aycekirdegi],
                    nutInfo: t('nutInfo_aycekirdegi'),
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
        products

    }
    return (
        <AppContextProv.Provider value={value}>
            {children}
        </AppContextProv.Provider>
    )
}

export default AppContext