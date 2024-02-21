import { Header } from '../../header/Header'
import {contriandications} from '../../db/contraindications.json'
import { useTranslation } from "react-i18next";
import './contraindications.scss'
import { Button } from '../../button/Button';


export const Contraindications =()=>{
    const { t } = useTranslation("contraindactions");
    return(
       <div className="contraindications-wrapper">
         <Header image={"/img/headers/Treatment/Indications/Indications.jpg"} />
         <h2>{t("Contraindications.contraindicationsMainText")}</h2>
         <div className="contraidications-button-wrapper">{contriandications.map(({id,title})=>(
            <Button key={id} className='contradications-button' >{t(`Contraindications.${title}.${id}.sicnes`)}</Button>
         ))}</div>
         <Button className="indications" linkActive={true} link='/indications'>{t("Contraindications.buttonText")}</Button>
       </div>
    )
}