
import React, { createContext, useState, useContext } from 'react';

// Create a new context for managing the language
export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Initialize the current language state
  const [language, setLanguage] = useState('en'); // Default to English

  // Function to change the language
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to access the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};
