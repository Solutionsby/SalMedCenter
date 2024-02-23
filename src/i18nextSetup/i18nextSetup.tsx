import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "../locales/en/translation.json";
import translationPL from "../locales/pl/translation.json";
import disasesTranslationPL from "../locales/pl/disasesTranslation.json"
import disasesTranslationEN from "../locales/en/disasesTranslation.json"
import aboutSectionPL from "../locales/pl/aboutSection.json"
import aboutSectionEN from '../locales/en/aboutSection.json'
import servicesPL from '../locales/pl/serviceSection.json'
import servicesEN from '../locales/en/serviceSection.json'
import buttonPL from '../locales/pl/button.json'
import buttonEN from '../locales/en/button.json'
import navigationPL from '../locales/pl/navigation.json'
import navigationEN from '../locales/en/navigation.json'
import privatyPolicyPL from '../locales/pl/privatyPolicy.json'
import privatyPolicyEN from '../locales/en/privatyPolicy.json'
import contraindactionsPL from "../locales/pl/contraindactions.json"
import contraindactionsEN from "../locales/en/contraindactions.json"

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
      en: { translation: translationEN, aboutSection:aboutSectionEN, serviceSection:servicesEN,button:buttonEN,disasesTranslation:disasesTranslationEN, navigation:navigationEN, privatyPolicy:privatyPolicyEN, contraindactions:contraindactionsEN },
      pl: { translation: translationPL,disasesTranslation:disasesTranslationPL,aboutSection:aboutSectionPL, serviceSection:servicesPL, button:buttonPL, navigation:navigationPL, privatyPolicy:privatyPolicyPL,contraindactions:contraindactionsPL  },
    },
    lng: languageFromUrl || defaultLanguageFromLocalStorage ,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

  export default i18n;