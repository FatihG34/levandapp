import React, { createContext, useState } from 'react';
import { injectThemes } from 'daisyui/src/colors/functions';
import { useTranslation } from 'react-i18next';
import Hurma from '../assets/hurma2.png';
import Ceviz from '../assets/ceviz.png';
import Badem from '../assets/badem.png';
import Kaju from '../assets/kaju.png';
import BrezilyaCevizi from '../assets/brezilyacevizi.png';
import Aycekirdegi from '../assets/aycekirdegi.png';
import CamFıstıgı from '../assets/cam_fıstıgı.png';
import Levand from '../assets/maint.png';
import YaglıTohum from '../assets/yaglitohumlar.jpg';
import Kuruyemis from '../assets/kuruyemis.jpg';
import Harnup from '../assets/harnup.jpg';

export const AppContextProv = createContext();


const AppContext = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const { t } = useTranslation()
    const products = [
        {
            productCategory: "Kuruyemiş",
            productImage: Kuruyemis,
            productDesc: "",
            product: [
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
            ]
        },
        {
            productCategory: "Kuru Meyveler",
            productImage: Harnup,
            productDesc: "",
            product: [
                {
                    nutName: t("Hurma"),
                    nutName2: "Hurma",
                    nutImg: Hurma,
                    nutInfo: t('nutInfo_hurma'),
                },
                {
                    nutName: t("Hurma"),
                    nutName2: "Hurma",
                    nutImg: "Keçi Boynuzu",
                    nutInfo: t('nutInfo_hurma'),
                },
            ]
        },
        {
            productCategory: "Yağlı Tohumlar",
            productImage: YaglıTohum,
            productDesc: "",
            product: [
                {
                    nutName: t("Ay_cekirdegi"),
                    nutName2: "Ayçekirdeği",
                    nutImg: Aycekirdegi,
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