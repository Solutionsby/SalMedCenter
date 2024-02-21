import { Link } from "react-router-dom";
import "./mainNavigation.scss";
import { useState } from "react";
import { MenuNavigation } from "./ManuNavigation/MenuNavigation";
import { MenuNavigationLandscape } from "./ManuNavigation/MenuNavigationLandscape/MenuNavigationLandscape";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";

interface NavigationProps {
  changeLanguage: (language: string) => void;
  languageFromUrl: string | null;
  defaultLanguage: string;
}


export const MainNavigation: React.FC<NavigationProps> = ({
  changeLanguage,
  languageFromUrl,
  defaultLanguage,
}) => {
  const [active, setActive] = useState(false);
  const [curentLanguage, setCurentLanguage] = useState(
    languageFromUrl || defaultLanguage
  );
 

  const menuSwitch = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    toggle: boolean,
    onlyClose: boolean
  ) => {
    if (onlyClose) {
      setter(false);
    } else {
      setter(!toggle);
    }
  };
  return (
    <div className="navigation-wrapper">
      <div className="navigation-logo-wrapper">
        <Link to="/" onClick={() => menuSwitch(setActive, active, true)}>
          <div className="navigation-logo"></div>
        </Link>
      </div>
      <MenuNavigationLandscape />
      <LanguageSelector
        changeLanguage={changeLanguage}
        curentLanguage={curentLanguage}
        setCurentLanguage={setCurentLanguage}
      />
      <div
        className={active ? "burger-menu-wrapper open" : "burger-menu-wrapper"}
        onClick={() => menuSwitch(setActive, active, false)}
      >
        <div className={active ? "bars open" : "bars"}></div>
        <div className={active ? "bars open" : "bars"}></div>
        <div className={active ? "bars open" : "bars"}></div>
      </div>

      <MenuNavigation
        isActive={active}
        toggle={() => menuSwitch(setActive, active, false)}
      />
    </div>
  );
};
