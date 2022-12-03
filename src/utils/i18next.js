import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';



i18next
    .use(HttpApi)
    .use(I18NextHttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'ar', 'tr'],
        fallbackLng: 'tr',
        debug: true,
        // Options for language detector
        detection: {
            order: ['path', 'cookie', 'htmlTag', 'localStorage', ' sessionStorage', 'navigator', 'subdomain'],
            caches: ['cookie'],
        },
        backend: {
            loadPath: '../assets/i18n/{{lng}}/translation.json',
        }
    })

export default i18next;