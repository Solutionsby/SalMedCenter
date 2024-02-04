import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import icons from "../db/icons.json";
import "./button.scss";
interface ButtonProps {
  children: string;
  classname: string;
  telephon: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  classname,
  telephon,
}) => {
  return (
    <div className={`button-wrapper ${classname}`}>
      <button className="button-call">
        <a href={`tel:+48${telephon}`}>
          <FontAwesomeIcon icon={icons.telephone as IconProp} />
          {children}
        </a>
      </button>
    </div>
  );
};
