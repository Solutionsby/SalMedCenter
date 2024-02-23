import "./languageSelector.scss";
import {changeLanguage} from '../../i18nextSetup/i18nextSetup'
import { useLanguage } from "../../context/Context";



export const LanguageSelector: React.FC= ({


}) => {
  const { currentLanguage, setCurrentLanguage } = useLanguage();

  const loaclLanguageSet = (language: string) => {
    localStorage.setItem("language", language);
  };
  const handleLanguageChange = (language: string) => {
    changeLanguage(language);
    setCurrentLanguage(language);
    loaclLanguageSet(language);
  };
  return (
    <div className="language-selector-wrapper">
      <div className="language-pl language">
        <div
          className="language-selector-cover"
          onClick={() => handleLanguageChange("pl")}
          style={{
            backgroundColor:
            currentLanguage === "pl" ? "transparent" : "rgba(0,0,0,0.7)",
          }}
        ></div>
      </div>
      <div className="language-selector-linie"></div>
      <div className="language-en language">
        <div
          className="language-selector-cover"
          onClick={() => handleLanguageChange("en")}
          style={{
            backgroundColor:
            currentLanguage === "en" ? "transparent" : "rgba(0,0,0,0.7)",
          }}
        ></div>
      </div>
    </div>
  );
};
