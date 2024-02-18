import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationPL from "../locales/pl/translation.json";
import disasesTranslationPL from "../locales/pl/disasesTranslation.json"

const currentUrl = document.location.search;
const urlParams = new URLSearchParams(currentUrl);
const defaultLanguage = "pl";
const languageFromLocalStorage = localStorage.getItem('language');
export const languageFromUrl = urlParams.get("lang");
export const defaultLanguageFromLocalStorage = languageFromLocalStorage ? languageFromLocalStorage : defaultLanguage;


export function changeLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

i18n.use(initReactI18next).init({
    resources: {
      en: { translation: translationEN },
      pl: { translation: translationPL,disasesTranslation:disasesTranslationPL },
    },
    lng: languageFromUrl || defaultLanguageFromLocalStorage ,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  export default i18n;