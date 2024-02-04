import './notFound.scss'
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";



export const NotFound: React.FC = ()=>{
    const { t } = useTranslation("translation");
return(
   <div className="page-not-found">
    <Link className='logo-return' to="/"><div className="page-not-found-logo"></div></Link>.
    <div className="page-not-found-text">
    <h1>{t("pageNotFound.title")}</h1>
    <p>{t("pageNotFound.paragrafOne")}</p>
    <p>
        {t("pageNotFound.return")} 
    </p>
    <Link to="/">{t("pageNotFound.mainPage")}</Link>
    
    </div>
   </div>
)

}