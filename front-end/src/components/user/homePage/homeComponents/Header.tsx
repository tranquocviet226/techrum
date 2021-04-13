import { useEffect } from "react";
import "styles/user/css/header_style.css";
import "styles/user/css/library_custom.css";
import { Category } from "types/model";

type HeaderProps = {
  categories?: Category[]
  getListCategory: () => void
};

export const Header: React.FC<HeaderProps> = (props) => {
  const { categories, getListCategory } = props

  useEffect(() => {
    getListCategory();
  }, []);
  
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
                <ul className="menu_drop__home">
                  {item.sub_category.map((subCategort) => (
                    <li key={subCategort.id} className="menu_drop__home-list">
                      <a href="#" className="menu_drop__home-list--link">
                        {subCategort.title}
                      </a>
                    </li>
                  ))}
                </ul>
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
