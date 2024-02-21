import "./menuNavigationLandscape.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {navigation} from "../../../db/navigation.json"

export const MenuNavigationLandscape = () => {
  const { t } = useTranslation("navigation");

  return (
    <div className="menu-navigation-landscep-wrapper">
      <ul className="menu-ul-wrapper-landscape">
      {navigation.map(({id,path,title})=>(
          <li key={id}>
            <Link to={path}>
              {t(title)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
