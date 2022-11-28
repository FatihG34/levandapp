import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tw-elements';
import AppContext from "./context/AppContext";
import i18next from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import "/node_modules/flag-icon-css/css/flag-icons.min.css"

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

const loadingMarkup = (
  <div className="py-4 text-center">
    <h3>Loading...</h3>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <AppContext>
        <App />
      </AppContext>
    </React.StrictMode>
  </Suspense>
);

