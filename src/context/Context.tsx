// LanguageContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import {defaultLanguageFromLocalStorage,languageFromUrl } from '../i18nextSetup/i18nextSetup'

interface LanguageContextType {
  currentLanguage: string;
  setCurrentLanguage: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
const initialLanguage = defaultLanguageFromLocalStorage || languageFromUrl || 'pl';
const [currentLanguage, setCurrentLanguage] = useState(initialLanguage);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
