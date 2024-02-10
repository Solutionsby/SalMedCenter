import './treatment.scss'
import {Button} from "../button/Button"


export const Treatment = () =>{
    return(
        <div className="treatment-wrapper">
        <Button className={"treatment"} linkActive={true} link={"/"}>Wskazania do leczenia</Button>
        <Button className={"treatment"} linkActive={false} link={"/"}>Przeciwskazania do leczenia</Button>
        </div>
    )
}