import './treatment.scss'
import {Button} from "../button/Button"
import { useTranslation } from "react-i18next";


export const Treatment = () =>{
    const { t } = useTranslation("button")
    return(
        <div className="treatment-wrapper">
        <Button className={"treatment"} linkActive={true} link={"indications"}>{t("ButtonText.IndicationsButton")}</Button>
        <Button className={"treatment"} linkActive={true} link={"contraindications"}>{t("ButtonText.Contraindications")}</Button>
        </div>
    )
}