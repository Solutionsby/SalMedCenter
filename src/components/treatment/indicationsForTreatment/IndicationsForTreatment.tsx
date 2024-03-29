import { Header } from '../../header/Header';
import {diseases} from '../../db/indications.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import { Button } from '../../button/Button';
import './indicationsForTreatment.scss';




export const Indications =()=>{
    const { t } = useTranslation("disasesTranslation");
    const [popupDisplayed, setPopupDisplayed] =useState(false);


    useEffect(()=>{
        const popupAlreadyDisplayed =localStorage.getItem('popupDisplayed') ;
        if(!popupAlreadyDisplayed){
            setPopupDisplayed(true)
        }

    },[])
    const handlepopUpClose = ()=>{
        localStorage.setItem('popupDisplayed', 'true');
        setPopupDisplayed(false)
    }
    return (
        <div className="indications-wrapper">
            <Header image={"/img/headers/Treatment/Indications/Indications.jpg"} className="header-incications" />
            <div className= {`warning-wrapper ${popupDisplayed ? "active": ""}`}>
                <div className="warning">
                 <div className={`close-pop-up ${popupDisplayed? "visible": ""}`} onClick={handlepopUpClose}>
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
            <div className="indications-header"><h2>{t("headerTretment")}</h2></div>
            <div className="diseases-list">{diseases.map(({id,title,path})=>(
                <Button key={id} className={"disases-button"} linkActive={true} link={path}>{t(`${title}.${id}.sicnes`)}</Button>              
            ))}</div>
            <Button className={"contraindications"} linkActive={true} link={'/contraindications'}>{t('contraindications-Button')}</Button>
        </div>
    )
}