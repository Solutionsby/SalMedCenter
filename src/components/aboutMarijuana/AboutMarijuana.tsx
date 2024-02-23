import './aboutMarijuana.scss'
import { useTranslation } from "react-i18next";


export const AboutMarijuana = () =>{
    const { t } = useTranslation("aboutSection");
    return(
        <div className="about-marijuana-wrapper">
            <h1>{t("aboutMarijuana.title")}</h1>
            <div className="about-marijuana-wrapper-paragraf">
                <p>{t("aboutMarijuana.paragrafOne")}</p>
                <p>{t("aboutMarijuana.paragrafTwo")}</p>
                <p>{t("aboutMarijuana.paragrafThree")}</p>
                <p>{t("aboutMarijuana.paragrafFour")}</p>
            </div>
        </div>
    )
}