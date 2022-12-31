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
import Macadamia from '../assets/Macadamia.jpg';
import Fıstık from '../assets/siirtFistgi.jpg';
import PekanCevizi from '../assets/pekanCevizi.jpeg';

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
                    nutName: "Siirt Fıstığı",
                    nutName2: "Siirt Fıstığı",
                    nutImg: Fıstık,
                    nutInfo: t('nutInfo_brezilyaCevizi'),
                },
                {
                    nutName: "Pekan Cevizi",
                    nutName2: "Pekan Cevizi",
                    nutImg: PekanCevizi,
                    nutInfo: t('nutInfo_brezilyaCevizi'),
                },
                {
                    nutName: "Macadamia",
                    nutName2: "Macadamia",
                    nutImg: Macadamia,
                    nutInfo: t('nutInfo_brezilyaCevizi'),
                },
                // {
                //     nutName: t("Ceviz"),
                //     nutName2: "Ceviz",
                //     nutImg: Ceviz,
                //     nutInfo: t('nutInfo_ceviz'),
                // },
                // {
                //     nutName: t("Badem"),
                //     nutName2: "Badem",
                //     nutImg: Badem,
                //     nutInfo: t('nutInfo_badem'),
                // },
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
                    nutImg: Hurma,
                    nutInfo: t('nutInfo_hurma'),
                },
                {
                    nutName: "Keçiboynuzu",
                    nutName2: "Keçiboynuzu",
                    nutImg: Harnup,
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
                    nutImg: Aycekirdegi,
                    nutInfo: t('nutInfo_aycekirdegi'),
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