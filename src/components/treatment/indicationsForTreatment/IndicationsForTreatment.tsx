import { Header } from '../../header/Header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from "react-i18next";
import './indicationsForTreatment.scss'
import { useState } from 'react';



export const Indications =()=>{
    const { t } = useTranslation("translation");
    const [istoggle, setToggle] =useState(true);

    const toggleClass = ()=>{
        setToggle(prevState =>!prevState);
    }
    console.log(istoggle)
    return (
        <div className="indications-wrapper">
            <Header image={"/img/headers/Treatment/Indications/Indications.jpg"} />
            <div className= {`warning-wrapper ${istoggle ? "active": ""}`}>
                <div className="warning">
                 <div className={`close-pop-up ${istoggle ? "visible": ""}`} onClick={toggleClass}>
                <div></div>
                <div></div>
            </div>
                <div className="important">
                <FontAwesomeIcon className='warning-icon' icon={"fa-solid fa-triangle-exclamation" as IconProp}/>
                <h2>{t("treatment.warnigTitle")}</h2>
                </div>
                <div className="warning-paragraf">
                    <p>{t("treatment.warningParagraf")}</p>
                </div>

            </div>
            </div>
        </div>
    )
}