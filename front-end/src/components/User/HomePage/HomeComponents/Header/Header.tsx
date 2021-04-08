import { RootStateOrAny, useSelector } from "react-redux";
import { Category } from "types/Post";
import "./header_style.css";
import "./library_custom.css";

export const Header = () => {
  const categories = useSelector((state: RootStateOrAny) => {
    return state.categories.categories;
  });

  return (
    <header id="navbar" className="header">
      <div className="grid wide">
        <nav className="header_navigation">
          <ul className="header_navigation__list">
            {categories.map((item: Category) => (
              <li className="header_navigation__list-item">
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
