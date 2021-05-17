import txtConstants from "constants/index";
import { Path } from "constants/path";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { Category } from "types/model";
import "./header_style.css";
import "./library_custom.css";

type HeaderProps = {
  categories?: Category[];
  getListCategory: () => void;
};

export const Header: React.FC<HeaderProps> = (props) => {
  const history = useHistory();
  const { categories, getListCategory } = props;
  const [headerClass, setHeaderClass] = useState<string>("header");

  useEffect(() => {
    getListCategory();
  }, []);

  const handleShowHeader = () => {
    if (headerClass === "header") {
      setHeaderClass("header responsive");
    } else {
      setHeaderClass("header");
    }
  };

  const handleGoHome = () => {
    history.push({
      pathname: `/${Path.HOME_PAGE}`,
    });
  };

  const handleGoCategory = (category_id: number) => {
    history.push({
      pathname: `/${Path.CATEGORY}/${category_id}`,
    });
  };

  return (
    <header className={headerClass} id="myTopnav">
      <a onClick={handleGoHome} className="header_navigation__list-item">
        <div className="header_navigation__list-item--link">
          {txtConstants.home.toUpperCase()}
        </div>
      </a>
      {categories?.slice(0, 5)?.map((item: Category) => (
        <a
          onClick={() => handleGoCategory(item?.id)}
          key={item.id}
          className="header_navigation__list-item"
        >
          <div className="header_navigation__list-item--link">
            {item.title}
            {item.sub_category && item.sub_category.length > 0 ? (
              <i className="fas fa-chevron-down"></i>
            ) : null}
          </div>
          <ul className="menu_drop__home">
            {item.sub_category.map((subCategort) => (
              <li key={subCategort.id} className="menu_drop__home-list">
                <a href="#" className="menu_drop__home-list--link">
                  {subCategort.title}
                </a>
              </li>
            ))}
          </ul>
        </a>
      ))}
      <a onClick={handleShowHeader} className="icon">
        <i className="fa fa-bars"></i>
      </a>
    </header>
  );
};

export default Header;
