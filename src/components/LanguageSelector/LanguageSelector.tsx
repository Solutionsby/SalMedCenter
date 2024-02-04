import "./languageSelector.scss";

interface LanguageSelectorProps {
  changeLanguage: (language: string) => void;
  setCurentLanguage: (language: string) => void;
  curentLanguage: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  changeLanguage,
  setCurentLanguage,
  curentLanguage,
}) => {
  const loaclLanguageSet = (language: string) => {
    localStorage.setItem("Language", language);
  };
  const handleLanguageChange = (language: string) => {
    changeLanguage(language);
    setCurentLanguage(language);
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
              curentLanguage === "pl" ? "transparent" : "rgba(0,0,0,0.7)",
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
              curentLanguage === "en" ? "transparent" : "rgba(0,0,0,0.7)",
          }}
        ></div>
      </div>
    </div>
  );
};
