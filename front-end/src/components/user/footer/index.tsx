import CopyRight from "./CopyRight";
import PopularPostList from "../common/RecentPostList";
import { ABOUT_DESCRIPTION, ABOUT_ADDRESS, ABOUT_EMAIL, ABOUT_PHONE } from "../../../constants";
import NewsLetter from "./NewsLetter";

const Footer = () => {
    return (
      <>
        <NewsLetter />
        <footer className="ts-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12 fadeInUp">
                <div className="footer-left-widget">
                  <h3 className="widget-title">
                    <span>About Us</span>
                  </h3>
                  <div className="textwidget">
                    <p>{ABOUT_DESCRIPTION}</p>
                  </div>
                </div>
                <div className="widget_text footer-left-widget">
                  <div className="textwidget custom-html-widget">
                    <ul className="footer-info">
                      <li>
                        <i className="fa fa-home" />
                        {ABOUT_ADDRESS}
                      </li>
                      <li>
                        <i className="ts-icon ts-icon-phone2" />
                        {ABOUT_PHONE}
                      </li>
                      <li>
                        <i className="fa fa-envelope" />
                        {ABOUT_EMAIL}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-left-widget">
                  <div className="footer-social">
                    <ul className="xs-social-list xs-social-list-v6 digiqole-social-list">
                      <li>
                        <a href="#" target="_blank">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Footer social end */}
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-6">
                <div className="footer-widget footer-center-widget">
                  <h3 className="widget-title">
                    <span>Popular Post</span>
                  </h3>
                  <PopularPostList />
                </div>
              </div>
              <div className="col-lg-4  col-md-6">
                <div className="footer-widget footer-right-widget">
                  <a href="#">
                    <img
                      width={285}
                      height={375}
                      src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2020/07/widget_banner.png"
                      className="image wp-image-3495 attachment-full size-full lazyloaded"
                      alt=""
                      style={{ maxWidth: "100%", height: "auto" }}
                      data-ll-status="loaded"
                    />
                  </a>
                </div>
              </div>
              {/* end col */}
            </div>
          </div>
        </footer>
        <CopyRight />
      </>
    );
}

export default Footer;
