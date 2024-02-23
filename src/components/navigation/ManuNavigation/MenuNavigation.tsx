import "./menuNavigation.scss";
import { Link } from "react-router-dom";
import {navigation} from "../../db/navigation.json"
import {button} from "../../db/navigation.json"
import { useTranslation } from "react-i18next";
import { Button } from "../../button/Button";

export const MenuNavigation: React.FC<{
  isActive: boolean;
  toggle: () => void;
}> = ({ isActive, toggle }) => {
  const { t } = useTranslation("navigation");

  return (
    <div className={isActive ? "menu-navigation open" : "menu-navigation"}>
      <ul className="menu-ul-wrapper-portrait">
        {navigation.map(({id,path,title})=>(
          <li key={id}>
            <Link to={path} onClick={toggle}>
              {t(title)}
            </Link>
          </li>
        ))}
        <Button className="button-menu-contact" linkActive={false} link={button.number}>{t('navigation.button')}</Button>
      </ul>
    </div>
  );
};

