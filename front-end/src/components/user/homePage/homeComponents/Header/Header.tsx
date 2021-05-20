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
  const [activeId, setActiveId] = useState<number>();
  const [isActiveHome, setIsActiveHome] = useState<boolean>(true);
  const [headerStyle, setHeaderStyle] = useState<string>();

  const pathname = history?.location?.pathname;

  useEffect(() => {
    if (pathname && pathname === "/home") {
      setIsActiveHome(true);
      setActiveId(undefined);
    }
  }, [pathname]);

  useEffect(() => {
    getListCategory();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset >= 300) {
      setHeaderStyle("fixed");
    } else {
      setHeaderStyle("none");
    }
  };

  const handleShowHeader = () => {
    if (headerClass === "header") {
      setHeaderClass("header responsive");
    } else {
      setHeaderClass("header");
    }
  };

  const handleGoHome = () => {
    setIsActiveHome(true);
    setActiveId(undefined);
    history.push({
      pathname: `/${Path.HOME_PAGE}`,
    });
  };

  const handleGoCategory = (category_id: number, index: number) => {
    setIsActiveHome(false);
    setActiveId(index);
    setHeaderClass("header");
    history.push({
      pathname: `/${Path.CATEGORY}/${category_id}`,
    });
  };

  return (
    <header className={`${headerClass} ${headerStyle}`} id="myTopnav">
      <a
        onClick={handleGoHome}
        className={
          isActiveHome
            ? "header_navigation__list-item active"
            : "header_navigation__list-item"
        }
      >
        <div className="header_navigation__list-item--link">
          {txtConstants.home.toUpperCase()}
        </div>
      </a>
      {categories?.slice(0, 5)?.map((item: Category, index: number) => (
        <a
          onClick={() => handleGoCategory(item?.id, index)}
          key={item.id}
          className={
            activeId === index
              ? "header_navigation__list-item active"
              : "header_navigation__list-item"
          }
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
