import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import icons from "../db/icons.json";
import "./buttonContact.scss";
interface ButtonProps {
  children: string;
  classname: string;
  telephon: string;
}

export const ButtonContact: React.FC<ButtonProps> = ({
  children,
  classname,
  telephon,
}) => {

  return (
    <div className={`button-wrapper-contact ${classname}`}>
      <button className="button-call">
        <a href={`tel:+48${telephon}`}>
          <FontAwesomeIcon icon={icons.telephone as IconProp} />
          {children}
        </a>
      </button>
    </div>
  );
};
