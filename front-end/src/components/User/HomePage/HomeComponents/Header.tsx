import logoDark from "assets/img/logo/logo-dark.png";

const Header = () => {
    return (
        <header id="header" className="header header-gradient">
            <div className=" header-wrapper  ">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="logo d-none" href="./index.html">
                            <img className="img-fluid" src={logoDark} alt="tech" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#primary-nav"
                            aria-controls="primary-nav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon">
                                <i className="fas fa-bars"></i>
                            </span>
                        </button>
                        <div id="primary-nav" className="collapse navbar-collapse">
                            <ul id="main-menu" className="navbar-nav">
                                <li
                                    id="menu-item-3679"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1878 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-3679 nav-item dropdown active"
                                >
                                    <a
                                        href="./index.html"
                                        className="nav-link active"
                                        data-toggle="dropdown"
                                    >
                                        Home
                        </a>
                                </li>
                                <li
                                    id="menu-item-3649"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3649 nav-item"
                                >
                                    <a href="#" className="nav-link">
                                        Technology
                        </a>
                                </li>
                                <li
                                    id="menu-item-3651"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-3651 nav-item dropdown"
                                >
                                    <a
                                        href="./index.php/category/lifestyle/index.html"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Lifestyle
                        </a>
                                </li>
                                <li
                                    id="menu-item-3652"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3652 nav-item"
                                >
                                    <a
                                        href="./index.php/category/lifestyle/travel/index.html"
                                        className="nav-link"
                                    >
                                        Travel
                        </a>
                                </li>
                                <li
                                    id="menu-item-3653"
                                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-3653 nav-item dropdown"
                                >
                                    <a
                                        href="./index.php/category/video/index.html"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Video
                        </a>
                                </li>
                                <li
                                    id="menu-item-3654"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3654 nav-item dropdown"
                                >
                                    <a
                                        href="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Features
                        </a>
                                </li>
                            </ul>
                        </div>
                        <ul className="social-links text-right"></ul>
                        {/* end social links */}
                        <div className="nav-search-area">
                            <div className="header-search-icon">
                                <a
                                    href="#modal-popup-2"
                                    className="navsearch-button nav-search-button xs-modal-popup"
                                >
                                    <i className="fab fa-facebook mr-4 ml-4"></i>
                                    <i className="fab fa-twitter mr-4"></i>
                                    <i className="fab fa-instagram mr-4"></i>
                                </a>
                            </div>
                            {/* xs modal */}
                            <div
                                className="zoom-anim-dialog mfp-hide modal-searchPanel ts-search-form"
                                id="modal-popup-2"
                            >
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="xs-search-panel">
                                            <form
                                                method="get"
                                                action="./index.html"
                                                className="digiqole-serach xs-search-group"
                                            >
                                                <div className="input-group">
                                                    <input
                                                        type="search"
                                                        className="form-control"
                                                        name="s"
                                                        placeholder="Search Keyword"
                                                        defaultValue=""
                                                    />
                                                    <button className="input-group-btn search-button">
                                                        <i className="fas fa-search"></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End xs modal */}
                            {/* end language switcher strart */}
                        </div>
                        {/* Site search end*/}
                    </nav>
                </div>
                {/* container end*/}
            </div>
        </header>
    )
}

export default Header;
