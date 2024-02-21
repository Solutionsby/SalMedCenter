import { Header } from '../../../header/Header'
import { useTranslation } from "react-i18next";
import {disases} from '../../../db/disases.json'
import indications from '../../../db/indications.json'
import './disasesPage.scss'
import { Button } from '../../../button/Button';


interface DisasesProps{
    id:Number,
}


export const DisasesPage:React.FC<DisasesProps> =({id})=>{
    const { t } = useTranslation("disasesTranslation");
    const filteredList = indications.diseases.filter((item, index)=> index !== id)

    return (
        <div className="disases-page-wrapper">
            <Header image={"/img/headers/Treatment/disases/disases.jpg"} className={"disases-header-wrapper"}>
                <div className="disases-header"><h2>{t(`diseases.${id}.sicnes`)}</h2></div></Header>
            <div className="main-text">
                {/* @ts-ignore */}
                <p>{t(disases[id].mainText)}</p>
            </div>
            <div className='line'></div>
             {/* @ts-ignore */}
            <div className="links">
                <h2>{t("SourceMaterials")}</h2>
                 {/* @ts-ignore */}
                {disases[id].links.map(({title,herf})=>(
                <a href={herf}>{title}</a>
            ))}</div>
             <div className="diseases-list">{filteredList.map(({id,title,path})=>(
                <Button key={id} className={"disases-button"} linkActive={true} link={path}>{t(`${title}.${id}.sicnes`)}</Button>              
            ))}</div>

        </div>  )
}