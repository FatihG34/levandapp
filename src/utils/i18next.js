import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';



i18next
    .use(LanguageDetector)
    .use(HttpApi)
    .use(I18NextHttpBackend)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'tr', 'ar'],
        lng: 'tr',
        fallbackLng: 'tr',
        debug: true,
        // Options for language detector
        detection: {
            order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'path', 'navigator', 'subdomain'],
            caches: ['cookie', 'sessionStorage'],
        },
        backend: {
            loadPath: '../assets/i18n/{{lng}}/translation.json',
        }
    })

export default i18next;