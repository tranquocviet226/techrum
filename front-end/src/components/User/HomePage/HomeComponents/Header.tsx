
import './header_style.css'
import './library_custom.css'
const Header = () => {
  return (
    <header id="navbar" className="header">
        <div className="grid wide">
        <nav className="header_navigation">
            <ul className="header_navigation__list">
                <li className="header_navigation__list-item">
                    <a href="#" className="header_navigation__list-item--link">
                        home
                        <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="menu_drop__home">
                        <li className="menu_drop__home-list">
                            <a href="#" className="menu_drop__home-list--link">
                                home 1
                            </a>
                        </li>
                        <li className="menu_drop__home-list">
                            <a href="#" className="menu_drop__home-list--link">
                                home 2
                            </a>
                        </li>
                        <li className="menu_drop__home-list">
                            <a href="#" className="menu_drop__home-list--link">
                                home 3
                            </a>
                        </li>
                        <li className="menu_drop__home-list">
                            <a href="#" className="menu_drop__home-list--link">
                                home 4
                            </a>
                        </li>
                        <li className="menu_drop__home-list">
                            <a href="#" className="menu_drop__home-list--link">
                                home 5
                            </a>
                        </li>
                        <li className="menu_drop__home-list">
                            <a href="#" className="menu_drop__home-list--link">
                                home 6
                            </a>
                        </li>
                        <li className="menu_drop__home-list">
                            <a href="#" className="menu_drop__home-list--link">
                                home 7
                            </a>
                        </li>
                        <li className="menu_drop__home-list">
                            <a href="#" className="menu_drop__home-list--link">
                                home 8 (box layout)
                            </a>
                        </li>
                        <li className="menu_drop__home-list">
                            <a href="#" className="menu_drop__home-list--link">
                                home 9
                            </a>
                        </li>
                        <li className="menu_drop__home-list">
                            <a href="#" className="menu_drop__home-list--link">
                                home 10
                            </a> 
                        </li>
                        <li className="menu_drop__home-list">
                            <a href="#" className="menu_drop__home-list--link">
                                home ads
                            </a> 
                        </li>
                    </ul>
                </li>
                <li className="header_navigation__list-item">
                    <a href="#" className="header_navigation__list-item--link">
                        technology
                    </a>
                </li>
                <li className="header_navigation__list-item">
                    <a href="#" className="header_navigation__list-item--link">
                        lifestyle
                        <i className="fas fa-chevron-down"></i>
                    </a>
                </li>
                <li className="header_navigation__list-item">
                    <a href="#" className="header_navigation__list-item--link">
                        travel
                        <i className="fas fa-chevron-down"></i>
                    </a>
                </li>
                <li className="header_navigation__list-item">
                    <a href="#" className="header_navigation__list-item--link">
                        video
                        <i className="fas fa-chevron-down"></i>
                    </a>
                </li>
                <li className="header_navigation__list-item">
                    <a href="#" className="header_navigation__list-item--link">
                        feature
                        <i className="fas fa-chevron-down"></i>
                    </a>
                </li>
            </ul>
            <ul className="header_navigation__list">
                
            </ul>
        </nav>
        </div>
    </header>
    
  );
};

export default Header;
