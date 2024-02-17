import { Header } from '../../header/Header';
import {diseases} from '../../db/indications.json';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import { Button } from '../../button/Button';
import './indicationsForTreatment.scss';




export const Indications =()=>{
    const { t } = useTranslation("translation");
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
            <Header image={"/img/headers/Treatment/Indications/Indications.jpg"} />
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
            <div className="indications-header"><h2>Lista Schorzeń, w których terapia Marihuaną może przyniesć korzyści</h2></div>
            <div className="diseases-list">{diseases.map(({id,title,path})=>(
                <Button key={id} className={"disases-button"} linkActive={true} link={path}>{t(`${title}.${id}.sicnes`)}</Button>              
            ))}</div>
            <Button className={"contraindications"} linkActive={true} link={'/contraindications'}>{t('Contraindications.contraindications-Button')}</Button>
        </div>
    )
}