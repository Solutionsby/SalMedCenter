import './button.scss'
import { Link } from 'react-router-dom';

interface Props {
    className: string;
    children: string;
    link?:string;
    linkActive?:boolean;
}

export const Button: React.FC<Props> = ({className,linkActive,link,children}) =>{
    return(
        <div className={`button-wrapper ${className}`}>
            {linkActive ? <Link to={link!}>{children}</Link> :
             <a href={link}>{children}</a>}
        </div>
    )
}