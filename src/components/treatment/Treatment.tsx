import './treatment.scss'
import {Button} from "../button/Button"


export const Treatment = () =>{
    return(
        <div className="treatment-wrapper">
        <Button className={"treatment"} linkActive={true} link={"/"}>Test1</Button>
        <Button className={"treatment"} linkActive={false} link={"/"}>Test2</Button>
        </div>
    )
}