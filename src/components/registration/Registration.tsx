import './registration.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from "react-i18next";
import contact from '../db/contact.json'


export const Registration = () =>{
    const { t } = useTranslation("translation");
    return(
       <div className='regestration-wrapper'><a href={`tel:+48${contact.telephone}`}>
       <FontAwesomeIcon icon={"fa-solid fa-clock" as IconProp}/>{t("registration.registrationText")}</a></div>
    )
}

