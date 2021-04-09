import { RootStateOrAny, useSelector } from "react-redux";
import { Category } from "types/model";
import "styles/user/css/header_style.css";
import "styles/user/css/library_custom.css";

type HeaderProps = {
  categories?: Category[]
};


export const Header: React.FC<HeaderProps> = (props) => {
  const { categories } = props

  return (
    <header id="navbar" className="header">
      <div className="grid wide">
        <nav className="header_navigation">
          <ul className="header_navigation__list">
            {categories?.map((item: Category) => (
              <li key={item.id} className="header_navigation__list-item">
                <a href="#" className="header_navigation__list-item--link">
                  {item.title}
                  <i className="fas fa-chevron-down"></i>
                </a>
              </li>
            ))}
          </ul>
          <ul className="header_navigation__list"></ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
