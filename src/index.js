import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';

import './index.css';
import reportWebVitals from './reportWebVitals';
//import 'flag-icon-css/css/flag-icon.min.css';

import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

import App from './App'; // Import the 'App' component correctly

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'fa'],
    fallbackLng: 'en',
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locals/{{lng}}/translation.json',
    },
    react: {
      useSuspense: false,
    },
  });

  const loadingMarkup = (
    <div className=''>
      <h2>Loading...</h2>
    </div>
  )

  ReactDOM.createRoot(document.getElementById('root')).render(
    <Suspense fallback={loadingMarkup}>
      <React.StrictMode>
        <I18nextProvider i18n={i18n}>
          <App />
        </I18nextProvider>
      </React.StrictMode>
    </Suspense>
    
  );