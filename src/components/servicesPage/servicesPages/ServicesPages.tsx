import { useTranslation } from "react-i18next";
import { Header } from "../../header/Header";
import {services} from '../../db/services.json'
import { DownloadForm } from "../../downloadForm/DownloadForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import "./servicesPages.scss";
import { useLanguage } from "../../../context/Context";

interface priceObject {
  content: {
    id:number;
    price:number;
    visitHeader: string;
    headerImg: string;
  };
  isFirstService?:boolean
}

export const ServicesPages: React.FC<priceObject> = ({ content, isFirstService,}) => {
  const { t } = useTranslation("serviceSection");
  const filtredList = services.filter((item, index)=> index !== content.id)
  const { currentLanguage} = useLanguage();
  console.log(currentLanguage)
  return (
    <div className="services-pages-wrapper">
      <Header image={content.headerImg}>
        <div className="header-blend">
          <h1>{t(content.visitHeader)}</h1>
        </div>
      </Header>

      <div className="services-pages-descripon-wrapper">
        <div className="services-descripton">{t(`servicesContent.${content.id}.content`)}</div>
        <div className="services-price-list">
        <div className="price-line"></div>
            <h4>{t(`servicesContent.${content.id}.priceText`)}</h4>
            <h3>{content.price} zł</h3>
          <div className="price-line"></div>

        </div>
        {(isFirstService && currentLanguage != "en")&& <div className="first-time-visit-wrapper">
          <p className="description">{t("servicesContent.0.descripton")}</p>
          <DownloadForm />        
          </div>}
    <div className="service-component service">{filtredList.map(({id,fontAwsomeIcon,descriptionKey,linkPath})=>(
      <div key={id} className="services-component-wrapper service-in-service">
      <Link to={linkPath} className="services-links">
        <div className="service-icon">
          <FontAwesomeIcon icon={fontAwsomeIcon as IconProp} />
        </div>
        <div className="service-texts">
          <h2 className="service-description">{t(descriptionKey)}</h2>
          <p>{t("services.more")}</p>
        </div>
      </Link>
    </div>

    ))}</div>
      </div>

    </div>
  );
};
