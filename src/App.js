import React, { useState, createContext, useEffect } from 'react';
import ReactDom from 'react-dom';
import ReactSwitch from 'react-switch';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { LanguageProvider } from './components/Language/LanguageContext'; // Import the LanguageProvider


// JS
import Menus from './components/Sidebar/Menus.js';
import Sidebar from './components/Sidebar/Sidebar';
import ThemeToggle from './components/Light-Dark Mode/ThemeToggle';

// CSS
import './App.css';
import './components/Light-Dark Mode/ThemeToggle.css';

// ICONs
import { BsGlobe } from "react-icons/bs";

export const ThemeContext = createContext("light");
const languages = [
  {
    code: 'fa',
    name: 'Persian',
    country_code: 'fa',
    dir: 'rtl',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'uk'
  }
]


function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find( l => l.code === currentLanguageCode)
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <LanguageProvider>
        <div className='App' id={theme}>
          <div className='flex'>
            <Sidebar />
          </div>
        </div>
      </LanguageProvider>
    </ThemeContext.Provider>
  );
}

export default App;
