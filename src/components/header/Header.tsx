
import "./header.scss";

interface HeaderElements {
  image: string;
  children?: React.ReactNode;
  className?:string;
}

export const Header: React.FC<HeaderElements> = ({ image, children, className }) => {
  return (
    <div
      className={`header-wrapper ${className}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
};
