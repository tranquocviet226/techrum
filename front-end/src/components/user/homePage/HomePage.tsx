import { connect } from "react-redux";
import Slider from "containers/user/SliderContainer";
import NewContent from "./homeComponents/NewsContent";
import RecentPostList from '../common/PostList';
import Rating from '../common/Rating';
import CategoryFirst from "containers/user/CategoryFirstContainers";

const HomePage = () => {
  const theme = "bg-dark";
  return (
    <div
      data-elementor-type="wp-post"
      data-elementor-id={1878}
      className="elementor elementor-1878"
      data-elementor-settings="[]"
    >
      <div className="elementor-section-wrap">
        <Slider />
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-61505dd8 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="61505dd8"
          data-element_type="section"
          data-settings='{"ekit_has_onepagescroll_dot":"yes"}'
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6a3583ca"
              data-id="6a3583ca"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <NewContent />
                <CategoryFirst />
              </div>
            </div>
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1b831df5"
              data-id="1b831df5"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-24b69cd9 elementor-widget elementor-widget-newszone-title"
                  data-id="24b69cd9"
                  data-element_type="widget"
                  data-widget_type="newszone-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="section-heading heading-style3">
                      <h2 className="block-title">
                        <span className="title-angle-shap">Follow us</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-5164de3d elementor-widget elementor-widget-wp-widget-apsc_widget"
                  data-id="5164de3d"
                  data-element_type="widget"
                  data-widget_type="wp-widget-apsc_widget.default"
                >
                  <div className="elementor-widget-container">
                    <div className="apsc-icons-wrapper clearfix apsc-theme-1 apsc-font-awesome-five"></div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-4c57ac0 elementor-hidden-tablet elementor-hidden-phone elementor-widget elementor-widget-image"
                  data-id="4c57ac0"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-image">
                      <a href="#">
                        <img
                          src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2020/07/sidebar_banner.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-74cbf30f elementor-widget elementor-widget-newszone-post-list-tab"
                  data-id="74cbf30f"
                  data-element_type="widget"
                  data-widget_type="newszone-post-list-tab.default"
                >
                  <div className="elementor-widget-container">
                    <Rating />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-2061a215 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="2061a215"
          data-element_type="section"
          data-settings='{"background_background":"classic","ekit_has_onepagescroll_dot":"yes"}'
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4ee6a0a4"
              data-id="4ee6a0a4"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-5c517b36 elementor-widget elementor-widget-newszone-post-slider"
                  data-id="5c517b36"
                  data-element_type="widget"
                  data-widget_type="newszone-post-slider.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      data-controls='{"dot_nav_show":"yes","slider_loop":"yes","nav_show":"","auto_nav_slide":"no","item_count":4,"margin":30}'
                      className="post-slider  owl-carousel "
                    >
                      <div className="loadmore-style2 digiqole-post-slider  post-90 post type-post status-publish format-standard has-post-thumbnail hentry category-tech tag-technology">
                        <div className="post-block-style">
                          <div
                            className="post-thumb ts-resize"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/06/30/best-gardening-supplies-for-the-horticultural-hopeless/index.html"
                              className="img-link"
                              rel="bookmark"
                              title="Best garden wing supplies for the horticu ltural hopeless"
                            ></a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="./index.php/category/lifestyle/tech/index.html"
                                style={{
                                  backgroundColor: "#007bff",
                                  color: "#ffffff",
                                }}
                              >
                                Tech
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h4 className="post-title">
                              <a
                                href="./index.php/2019/06/30/best-gardening-supplies-for-the-horticultural-hopeless/index.html"
                                rel="bookmark"
                                title="Best garden wing supplies for the horticu ltural hopeless"
                              >
                                Best garden wing supplies for the horticu ltural
                              </a>
                            </h4>
                            <div className="post-meta ">
                              <span className="post-date">
                                <i
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                />
                                June 30, 2019
                              </span>
                            </div>
                          </div>
                          {/* Post content end */}
                        </div>
                        {/* Post Block style end */}
                      </div>
                      <div className="loadmore-style2 digiqole-post-slider  post-92 post type-post status-publish format-standard has-post-thumbnail hentry category-tech tag-technology">
                        <div className="post-block-style">
                          <div
                            className="post-thumb ts-resize"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/06/30/naturalistic-design-is-thriving-as-actual-nature-dies/index.html"
                              className="img-link"
                              rel="bookmark"
                              title="Naturalistic a design is thriv  as actual nature dies"
                            ></a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="./index.php/category/lifestyle/tech/index.html"
                                style={{
                                  backgroundColor: "#007bff",
                                  color: "#ffffff",
                                }}
                              >
                                Tech
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h4 className="post-title">
                              <a
                                href="./index.php/2019/06/30/naturalistic-design-is-thriving-as-actual-nature-dies/index.html"
                                rel="bookmark"
                                title="Naturalistic a design is thriv  as actual nature dies"
                              >
                                Naturalistic a design is thriv as actual nature
                              </a>
                            </h4>
                            <div className="post-meta ">
                              <span className="post-date">
                                <i
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                />
                                June 30, 2019
                              </span>
                            </div>
                          </div>
                          {/* Post content end */}
                        </div>
                        {/* Post Block style end */}
                      </div>
                      <div className="loadmore-style2 digiqole-post-slider  post-98 post type-post status-publish format-standard has-post-thumbnail hentry category-sports tag-sports">
                        <div className="post-block-style">
                          <div
                            className="post-thumb ts-resize"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/06/30/copa-america-luis-suarez-devastated-us/index.html"
                              className="img-link"
                              rel="bookmark"
                              title="Copa America: Luis Suarez devastated US"
                            ></a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="./index.php/category/lifestyle/sports/index.html"
                                style={{
                                  backgroundColor: "#4ca80b",
                                  color: "#ffffff",
                                }}
                              >
                                Sports
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h4 className="post-title">
                              <a
                                href="./index.php/2019/06/30/copa-america-luis-suarez-devastated-us/index.html"
                                rel="bookmark"
                                title="Copa America: Luis Suarez devastated US"
                              >
                                Copa America: Luis Suarez devastated US
                              </a>
                            </h4>
                            <div className="post-meta ">
                              <span className="post-date">
                                <i
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                />
                                June 30, 2019
                              </span>
                            </div>
                          </div>
                          {/* Post content end */}
                        </div>
                        {/* Post Block style end */}
                      </div>
                      <div className="loadmore-style2 digiqole-post-slider  post-105 post type-post status-publish format-standard has-post-thumbnail hentry category-lifestyle category-sports category-travel tag-sports">
                        <div className="post-block-style">
                          <div
                            className="post-thumb ts-resize"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/06/30/brazil-secretart-thiago-wary-lionel-mesi/index.html"
                              className="img-link"
                              rel="bookmark"
                              title="Brazil Secretart  Thiago  wary Lionel Mesi"
                            ></a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="./index.php/category/lifestyle/index.html"
                                style={{
                                  backgroundColor: "#fda400",
                                  color: "#ffffff",
                                }}
                              >
                                Lifestyle
                              </a>
                              <a
                                className="post-cat"
                                href="./index.php/category/lifestyle/sports/index.html"
                                style={{
                                  backgroundColor: "#4ca80b",
                                  color: "#ffffff",
                                }}
                              >
                                Sports
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h4 className="post-title">
                              <a
                                href="./index.php/2019/06/30/brazil-secretart-thiago-wary-lionel-mesi/index.html"
                                rel="bookmark"
                                title="Brazil Secretart  Thiago  wary Lionel Mesi"
                              >
                                Brazil Secretart Thiago wary Lionel Mesi
                              </a>
                            </h4>
                            <div className="post-meta ">
                              <span className="post-date">
                                <i
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                />
                                June 30, 2019
                              </span>
                            </div>
                          </div>
                          {/* Post content end */}
                        </div>
                        {/* Post Block style end */}
                      </div>
                      <div className="loadmore-style2 digiqole-post-slider  post-107 post type-post status-publish format-standard has-post-thumbnail hentry category-sports tag-sports">
                        <div className="post-block-style">
                          <div
                            className="post-thumb ts-resize"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/06/30/venezuela-elan-govt-and-opposit-the-property-collect-negote/index.html"
                              className="img-link"
                              rel="bookmark"
                              title="Venezuela elan govt and opposit  the property collect negote"
                            ></a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="./index.php/category/lifestyle/sports/index.html"
                                style={{
                                  backgroundColor: "#4ca80b",
                                  color: "#ffffff",
                                }}
                              >
                                Sports
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h4 className="post-title">
                              <a
                                href="./index.php/2019/06/30/venezuela-elan-govt-and-opposit-the-property-collect-negote/index.html"
                                rel="bookmark"
                                title="Venezuela elan govt and opposit  the property collect negote"
                              >
                                Venezuela elan govt and opposit the property
                                collect
                              </a>
                            </h4>
                            <div className="post-meta ">
                              <span className="post-date">
                                <i
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                />
                                June 30, 2019
                              </span>
                            </div>
                          </div>
                          {/* Post content end */}
                        </div>
                        {/* Post Block style end */}
                      </div>
                      <div className="loadmore-style2 digiqole-post-slider  post-94 post type-post status-publish format-standard has-post-thumbnail hentry category-tech tag-technology">
                        <div className="post-block-style">
                          <div
                            className="post-thumb ts-resize"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/07/06/the-secret-to-moving-this-ancient-sphinx-screening/index.html"
                              className="img-link"
                              rel="bookmark"
                              title="The secret to moving this ancient sphinx screening"
                            ></a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="./index.php/category/lifestyle/tech/index.html"
                                style={{
                                  backgroundColor: "#007bff",
                                  color: "#ffffff",
                                }}
                              >
                                Tech
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h4 className="post-title">
                              <a
                                href="./index.php/2019/07/06/the-secret-to-moving-this-ancient-sphinx-screening/index.html"
                                rel="bookmark"
                                title="The secret to moving this ancient sphinx screening"
                              >
                                The secret to moving this ancient sphinx
                                screening
                              </a>
                            </h4>
                            <div className="post-meta ">
                              <span className="post-date">
                                <i
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                />
                                July 6, 2019
                              </span>
                            </div>
                          </div>
                          {/* Post content end */}
                        </div>
                        {/* Post Block style end */}
                      </div>
                      <div className="loadmore-style2 digiqole-post-slider  post-96 post type-post status-publish format-standard has-post-thumbnail hentry category-tech tag-technology">
                        <div className="post-block-style">
                          <div
                            className="post-thumb ts-resize"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/07/10/harbour-amid-a-slowen-down-in-the-city/index.html"
                              className="img-link"
                              rel="bookmark"
                              title="Harbour amid a Slowen down in singer city screening"
                            ></a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="./index.php/category/lifestyle/tech/index.html"
                                style={{
                                  backgroundColor: "#007bff",
                                  color: "#ffffff",
                                }}
                              >
                                Tech
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h4 className="post-title">
                              <a
                                href="./index.php/2019/07/10/harbour-amid-a-slowen-down-in-the-city/index.html"
                                rel="bookmark"
                                title="Harbour amid a Slowen down in singer city screening"
                              >
                                Harbour amid a Slowen down in singer city
                              </a>
                            </h4>
                            <div className="post-meta ">
                              <span className="post-date">
                                <i
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                />
                                July 10, 2019
                              </span>
                            </div>
                          </div>
                          {/* Post content end */}
                        </div>
                        {/* Post Block style end */}
                      </div>
                      <div className="loadmore-style2 digiqole-post-slider  post-111 post type-post status-publish format-standard has-post-thumbnail hentry category-sports tag-sports">
                        <div className="post-block-style">
                          <div
                            className="post-thumb ts-resize"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/07/10/nancy-zhang-a-chinese-business-woman/index.html"
                              className="img-link"
                              rel="bookmark"
                              title="Nancy multi Chinese business woman trying"
                            ></a>
                            <div className="grid-cat">
                              <a
                                className="post-cat"
                                href="./index.php/category/lifestyle/sports/index.html"
                                style={{
                                  backgroundColor: "#4ca80b",
                                  color: "#ffffff",
                                }}
                              >
                                Sports
                              </a>
                            </div>
                          </div>
                          <div className="post-content">
                            <h4 className="post-title">
                              <a
                                href="./index.php/2019/07/10/nancy-zhang-a-chinese-business-woman/index.html"
                                rel="bookmark"
                                title="Nancy multi Chinese business woman trying"
                              >
                                Nancy multi Chinese business woman trying
                              </a>
                            </h4>
                            <div className="post-meta ">
                              <span className="post-date">
                                <i
                                  className="fa fa-clock-o"
                                  aria-hidden="true"
                                />
                                July 10, 2019
                              </span>
                            </div>
                          </div>
                          {/* Post content end */}
                        </div>
                        {/* Post Block style end */}
                      </div>
                    </div>
                    {/* block-item6 */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-2df75866 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="2df75866"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-row">
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2a19a800"
                data-id="2a19a800"
                data-element_type="column"
              >
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div
                      className="elementor-element elementor-element-6a650e17 elementor-widget elementor-widget-newszone-title"
                      data-id="6a650e17"
                      data-element_type="widget"
                      data-widget_type="newszone-title.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="section-heading heading-style3">
                          <h2 className="block-title">
                            <span className="title-angle-shap">Tech</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-2ec806e3 elementor-widget elementor-widget-newszone-post-block"
                      data-id="2ec806e3"
                      data-element_type="widget"
                      data-widget_type="newszone-post-block.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="block-item-post style1">
                          <div className="row">
                            <div className="col-md-6 col-sm-6">
                              <div className="post-block-style post-thumb-bg">
                                <div className="post-thumb ts-resize post-thumb-full post-thumb-low-padding">
                                  <a
                                    href="https://demo.themewinter.com/wp/digiqoles/cheap-smartphone-sensor-could-help-you-old-food-safe-eat/"
                                    rel="bookmark"
                                    title="Cheap smartphone sensor could help you old food safe eat"
                                  >
                                    <span
                                      className="digiqole-sm-bg-img rocket-lazyload lazyloaded"
                                      style={{
                                        backgroundImage:
                                          'url("https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/tech_5-600x398.jpg")',
                                      }}
                                      data-ll-status="loaded"
                                    />
                                  </a>
                                </div>
                              </div>
                              {/* Post Block style end */}
                            </div>
                            {/* Col end */}
                            <div className="col-md-6">
                              <div className="post-content feature-contents">
                                <a
                                  className="post-cat"
                                  href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/tech/"
                                  style={{
                                    backgroundColor: "#007bff",
                                    color: "#ffffff",
                                  }}
                                >
                                  Tech
                                </a>
                                <h4 className="post-title md">
                                  <a
                                    href="https://demo.themewinter.com/wp/digiqoles/cheap-smartphone-sensor-could-help-you-old-food-safe-eat/"
                                    rel="bookmark"
                                    title="Cheap smartphone sensor could help you old food safe eat"
                                  >
                                    Cheap smartphone sensor could help you old
                                    food safe
                                  </a>
                                </h4>
                                <div className="post-meta ">
                                  <span className="post-author">
                                    <i className="fa fa-user" />
                                    <a
                                      href="https://demo.themewinter.com/wp/digiqoles/author/digiQoles/"
                                      title="Posts by digiQoles"
                                      rel="author"
                                    >
                                      digiQoles
                                    </a>
                                  </span>
                                  <span className="post-date">
                                    <i className="fa fa-clock-o" /> June 30,
                                    2019
                                  </span>
                                  <span className="post-view">
                                    <i className="ts-icon ts-icon-fire" />
                                    1772
                                  </span>
                                </div>
                                <p>
                                  Struggling to sell one multi-million dollar
                                  home currently on the market won’t stop
                                  actress and singer Jennifer Lopez from
                                  expanding her property collection. Lopez has
                                  reportedly added to her real
                                </p>
                              </div>
                              {/* Post content end */}
                            </div>
                          </div>
                          {/* row end */}
                          <div className="row post-list post-block-list post-thumb-bg">
                            <div className="col-md-6 col-sm-6">
                              <div className="post-block-style post-float media">
                                <div className="post-thumb d-flex post-thumb-low-padding">
                                  <a
                                    href="https://demo.themewinter.com/wp/digiqoles/best-gardening-supplies-for-the-horticultural-hopeless/"
                                    rel="bookmark"
                                    title="Best garden wing supplies for the horticu ltural hopeless"
                                  >
                                    <span
                                      className="digiqole-sm-bg-img rocket-lazyload lazyloaded"
                                      style={{
                                        backgroundImage:
                                          'url("https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/tech_4-455x300.jpg")',
                                      }}
                                      data-ll-status="loaded"
                                    />
                                  </a>
                                </div>
                                <div className="post-content media-body">
                                  <a
                                    className="post-cat only-color"
                                    href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/tech/"
                                    style={{ color: "#007bff" }}
                                  >
                                    Tech
                                  </a>
                                  <h4 className="post-title">
                                    <a
                                      href="https://demo.themewinter.com/wp/digiqoles/best-gardening-supplies-for-the-horticultural-hopeless/"
                                      rel="bookmark"
                                      title="Best garden wing supplies for the horticu ltural hopeless"
                                    >
                                      Best garden wing supplies for the horticu
                                      ltural
                                    </a>
                                  </h4>
                                  <div className="post-meta">
                                    <span className="post-date">
                                      <i
                                        className="fa fa-clock-o"
                                        aria-hidden="true"
                                      />
                                      June 30, 2019
                                    </span>
                                  </div>
                                </div>
                                {/* Post content end */}
                              </div>
                              {/* Post block style end */}
                            </div>
                            {/* List post block end */}
                            <div className="col-md-6 col-sm-6">
                              <div className="post-block-style post-float media">
                                <div className="post-thumb d-flex post-thumb-low-padding">
                                  <a
                                    href="https://demo.themewinter.com/wp/digiqoles/naturalistic-design-is-thriving-as-actual-nature-dies/"
                                    rel="bookmark"
                                    title="Naturalistic a design is thriv  as actual nature dies"
                                  >
                                    <span
                                      className="digiqole-sm-bg-img rocket-lazyload lazyloaded"
                                      style={{
                                        backgroundImage:
                                          'url("https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/tech_3-455x300.jpg")',
                                      }}
                                      data-ll-status="loaded"
                                    />
                                  </a>
                                </div>
                                <div className="post-content media-body">
                                  <a
                                    className="post-cat only-color"
                                    href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/tech/"
                                    style={{ color: "#007bff" }}
                                  >
                                    Tech
                                  </a>
                                  <h4 className="post-title">
                                    <a
                                      href="https://demo.themewinter.com/wp/digiqoles/naturalistic-design-is-thriving-as-actual-nature-dies/"
                                      rel="bookmark"
                                      title="Naturalistic a design is thriv  as actual nature dies"
                                    >
                                      Naturalistic a design is thriv as actual
                                      nature
                                    </a>
                                  </h4>
                                  <div className="post-meta">
                                    <span className="post-date">
                                      <i
                                        className="fa fa-clock-o"
                                        aria-hidden="true"
                                      />
                                      June 30, 2019
                                    </span>
                                  </div>
                                </div>
                                {/* Post content end */}
                              </div>
                              {/* Post block style end */}
                            </div>
                            {/* List post block end */}
                            <div className="col-md-6 col-sm-6">
                              <div className="post-block-style post-float media">
                                <div className="post-thumb d-flex post-thumb-low-padding">
                                  <a
                                    href="https://demo.themewinter.com/wp/digiqoles/the-secret-to-moving-this-ancient-sphinx-screening/"
                                    rel="bookmark"
                                    title="The secret to moving this ancient sphinx screening"
                                  >
                                    <span
                                      className="digiqole-sm-bg-img rocket-lazyload lazyloaded"
                                      style={{
                                        backgroundImage:
                                          'url("https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_2-455x300.jpg")',
                                      }}
                                      data-ll-status="loaded"
                                    />
                                  </a>
                                </div>
                                <div className="post-content media-body">
                                  <a
                                    className="post-cat only-color"
                                    href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/tech/"
                                    style={{ color: "#007bff" }}
                                  >
                                    Tech
                                  </a>
                                  <h4 className="post-title">
                                    <a
                                      href="https://demo.themewinter.com/wp/digiqoles/the-secret-to-moving-this-ancient-sphinx-screening/"
                                      rel="bookmark"
                                      title="The secret to moving this ancient sphinx screening"
                                    >
                                      The secret to moving this ancient sphinx
                                      screening
                                    </a>
                                  </h4>
                                  <div className="post-meta">
                                    <span className="post-date">
                                      <i
                                        className="fa fa-clock-o"
                                        aria-hidden="true"
                                      />
                                      July 6, 2019
                                    </span>
                                  </div>
                                </div>
                                {/* Post content end */}
                              </div>
                              {/* Post block style end */}
                            </div>
                            {/* List post block end */}
                            <div className="col-md-6 col-sm-6">
                              <div className="post-block-style post-float media">
                                <div className="post-thumb d-flex post-thumb-low-padding">
                                  <a
                                    href="https://demo.themewinter.com/wp/digiqoles/harbour-amid-a-slowen-down-in-the-city/"
                                    rel="bookmark"
                                    title="Harbour amid a Slowen down in singer city screening"
                                  >
                                    <span
                                      className="digiqole-sm-bg-img rocket-lazyload lazyloaded"
                                      style={{
                                        backgroundImage:
                                          'url("https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1-455x300.jpg")',
                                      }}
                                      data-ll-status="loaded"
                                    />
                                  </a>
                                </div>
                                <div className="post-content media-body">
                                  <a
                                    className="post-cat only-color"
                                    href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/tech/"
                                    style={{ color: "#007bff" }}
                                  >
                                    Tech
                                  </a>
                                  <h4 className="post-title">
                                    <a
                                      href="https://demo.themewinter.com/wp/digiqoles/harbour-amid-a-slowen-down-in-the-city/"
                                      rel="bookmark"
                                      title="Harbour amid a Slowen down in singer city screening"
                                    >
                                      Harbour amid a Slowen down in singer city
                                    </a>
                                  </h4>
                                  <div className="post-meta">
                                    <span className="post-date">
                                      <i
                                        className="fa fa-clock-o"
                                        aria-hidden="true"
                                      />
                                      July 10, 2019
                                    </span>
                                  </div>
                                </div>
                                {/* Post content end */}
                              </div>
                              {/* Post block style end */}
                            </div>
                            {/* List post block end */}
                          </div>
                          {/* List post Col end */}
                        </div>
                        {/* block-item6 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-278030b0"
                data-id="278030b0"
                data-element_type="column"
              >
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div
                      className="elementor-element elementor-element-36881ca2 elementor-widget elementor-widget-newszone-category-list"
                      data-id="36881ca2"
                      data-element_type="widget"
                      data-widget_type="newszone-category-list.default"
                    >
                      <div className="elementor-widget-container">
                        {/* style one */}
                        <div className="ts-category ts-category-list-item">
                          <ul className="ts-category-list">
                            <li>
                              <a
                                className="rocket-lazyload lazyloaded"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/"
                                style={{
                                  backgroundImage:
                                    'url("//demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/travel_4.jpg")',
                                }}
                                data-ll-status="loaded"
                              >
                                <span> Lifestyle </span>
                                <span className="bar" />
                                <span className="category-count">3</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="rocket-lazyload lazyloaded"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/travel/"
                                style={{
                                  backgroundImage:
                                    'url("//demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/travel_3.jpg")',
                                }}
                                data-ll-status="loaded"
                              >
                                <span> Travel </span>
                                <span className="bar" />
                                <span className="category-count">6</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="rocket-lazyload lazyloaded"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/sports/"
                                style={{
                                  backgroundImage:
                                    'url("//demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/sports_4.jpg")',
                                }}
                                data-ll-status="loaded"
                              >
                                <span> Sports </span>
                                <span className="bar" />
                                <span className="category-count">4</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="rocket-lazyload lazyloaded"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/health/"
                                style={{
                                  backgroundImage:
                                    'url("//demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/04/health_5.jpg")',
                                }}
                                data-ll-status="loaded"
                              >
                                <span> Health </span>
                                <span className="bar" />
                                <span className="category-count">5</span>
                              </a>
                            </li>
                            <li>
                              <a
                                className="rocket-lazyload lazyloaded"
                                href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/fashion/"
                                style={{
                                  backgroundImage:
                                    'url("//demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/06/fashion_4.jpg")',
                                }}
                                data-ll-status="loaded"
                              >
                                <span> Fashion </span>
                                <span className="bar" />
                                <span className="category-count">7</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-6761a0 elementor-hidden-phone elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="6761a0"
          data-element_type="section"
          data-settings='{"ekit_has_onepagescroll_dot":"yes"}'
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2c5e8e7"
              data-id="2c5e8e7"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-32d80cef elementor-widget elementor-widget-image"
                  data-id="32d80cef"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-image">
                      <img
                        src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2020/07/content_banner_3.png"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-a29a3c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="a29a3c"
          data-element_type="section"
          data-settings='{"ekit_has_onepagescroll_dot":"yes"}'
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f28e52f"
              data-id="f28e52f"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-19a45928 elementor-widget elementor-widget-newszone-title"
                  data-id="19a45928"
                  data-element_type="widget"
                  data-widget_type="newszone-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="section-heading heading-style3">
                      <h2 className="block-title">
                        <span className="title-angle-shap">Don't Miss</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-3373257d elementor-widget elementor-widget-newszone-post-vertical-grid"
                  data-id="3373257d"
                  data-element_type="widget"
                  data-widget_type="newszone-post-vertical-grid.default"
                >
                  <div className="elementor-widget-container">
                    <div className="vertical-post-grid">
                      <div className="row">
                        <div className="col-lg-4">
                          <div
                            className="item ts-overlay-style"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/07/10/nancy-zhang-a-chinese-business-woman/index.html"
                              className="img-link"
                            />
                            <div className="post-content">
                              <div className="grid-category">
                                <a
                                  className="post-cat"
                                  href="./index.php/category/lifestyle/sports/index.html"
                                  style={{
                                    backgroundColor: "#4ca80b",
                                    color: "#ffffff",
                                  }}
                                >
                                  Sports
                                </a>
                              </div>
                              <h3 className="post-title">
                                <a href="./index.php/2019/07/10/nancy-zhang-a-chinese-business-woman/index.html">
                                  Nancy multi Chinese business woman trying
                                </a>
                              </h3>
                              <ul className="post-meta-info  "></ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div
                            className="item ts-overlay-style"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/07/10/harbour-amid-a-slowen-down-in-the-city/index.html"
                              className="img-link"
                            />
                            <div className="post-content">
                              <div className="grid-category">
                                <a
                                  className="post-cat"
                                  href="./index.php/category/lifestyle/tech/index.html"
                                  style={{
                                    backgroundColor: "#007bff",
                                    color: "#ffffff",
                                  }}
                                >
                                  Tech
                                </a>
                              </div>
                              <h3 className="post-title">
                                <a href="./index.php/2019/07/10/harbour-amid-a-slowen-down-in-the-city/index.html">
                                  Harbour amid a Slowen down in singer
                                </a>
                              </h3>
                              <ul className="post-meta-info  "></ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div
                            className="item ts-overlay-style"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/07/06/the-secret-to-moving-this-ancient-sphinx-screening/index.html"
                              className="img-link"
                            />
                            <div className="post-content">
                              <div className="grid-category">
                                <a
                                  className="post-cat"
                                  href="./index.php/category/lifestyle/tech/index.html"
                                  style={{
                                    backgroundColor: "#007bff",
                                    color: "#ffffff",
                                  }}
                                >
                                  Tech
                                </a>
                              </div>
                              <h3 className="post-title">
                                <a href="./index.php/2019/07/06/the-secret-to-moving-this-ancient-sphinx-screening/index.html">
                                  The secret to moving this ancient sphinx
                                </a>
                              </h3>
                              <ul className="post-meta-info  "></ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div
                            className="item ts-overlay-style"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/06/30/venezuela-elan-govt-and-opposit-the-property-collect-negote/index.html"
                              className="img-link"
                            />
                            <div className="post-content">
                              <div className="grid-category">
                                <a
                                  className="post-cat"
                                  href="./index.php/category/lifestyle/sports/index.html"
                                  style={{
                                    backgroundColor: "#4ca80b",
                                    color: "#ffffff",
                                  }}
                                >
                                  Sports
                                </a>
                              </div>
                              <h3 className="post-title">
                                <a href="./index.php/2019/06/30/venezuela-elan-govt-and-opposit-the-property-collect-negote/index.html">
                                  Venezuela elan govt and opposit the property
                                </a>
                              </h3>
                              <ul className="post-meta-info  "></ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div
                            className="item ts-overlay-style"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/06/30/brazil-secretart-thiago-wary-lionel-mesi/index.html"
                              className="img-link"
                            />
                            <div className="post-content">
                              <div className="grid-category">
                                <a
                                  className="post-cat"
                                  href="./index.php/category/lifestyle/index.html"
                                  style={{
                                    backgroundColor: "#fda400",
                                    color: "#ffffff",
                                  }}
                                >
                                  Lifestyle
                                </a>
                                <a
                                  className="post-cat"
                                  href="./index.php/category/lifestyle/sports/index.html"
                                  style={{
                                    backgroundColor: "#4ca80b",
                                    color: "#ffffff",
                                  }}
                                >
                                  Sports
                                </a>
                              </div>
                              <h3 className="post-title">
                                <a href="./index.php/2019/06/30/brazil-secretart-thiago-wary-lionel-mesi/index.html">
                                  Brazil Secretart Thiago wary Lionel Mesi
                                </a>
                              </h3>
                              <ul className="post-meta-info  "></ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div
                            className="item ts-overlay-style"
                            style={{
                              backgroundImage:
                                "url(https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1.jpg)",
                            }}
                          >
                            <a
                              href="./index.php/2019/06/30/copa-america-luis-suarez-devastated-us/index.html"
                              className="img-link"
                            />
                            <div className="post-content">
                              <div className="grid-category">
                                <a
                                  className="post-cat"
                                  href="./index.php/category/lifestyle/sports/index.html"
                                  style={{
                                    backgroundColor: "#4ca80b",
                                    color: "#ffffff",
                                  }}
                                >
                                  Sports
                                </a>
                              </div>
                              <h3 className="post-title">
                                <a href="./index.php/2019/06/30/copa-america-luis-suarez-devastated-us/index.html">
                                  Copa America: Luis Suarez devastated US
                                </a>
                              </h3>
                              <ul className="post-meta-info  "></ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* block-item6 */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e6e2f6c"
              data-id="e6e2f6c"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-64329ae8 elementor-widget elementor-widget-newszone-title"
                  data-id="64329ae8"
                  data-element_type="widget"
                  data-widget_type="newszone-title.default"
                >
                  <div className="elementor-widget-container">
                    <div className="section-heading heading-style3">
                      <h2 className="block-title">
                        <span className="title-angle-shap">Recent Post</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-6c8b8e82 elementor-widget elementor-widget-wp-widget-digiqole_latest_news_widget"
                  data-id="6c8b8e82"
                  data-element_type="widget"
                  data-widget_type="wp-widget-digiqole_latest_news_widget.default"
                >
                  <div className="elementor-widget-container">
                    <RecentPostList />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-3858afa6 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="3858afa6"
          data-element_type="section"
        >
          <div className="elementor-container elementor-column-gap-default">
            <div className="elementor-row">
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-72fb4780"
                data-id="72fb4780"
                data-element_type="column"
              >
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div
                      className="elementor-element elementor-element-399f7306 elementor-widget elementor-widget-newszone-title"
                      data-id="399f7306"
                      data-element_type="widget"
                      data-widget_type="newszone-title.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="section-heading heading-style3">
                          <h2 className="block-title">
                            <span className="title-angle-shap">read next</span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-2c3070ef elementor-widget elementor-widget-newszone-post-grid-loadmore"
                      data-id="2c3070ef"
                      data-element_type="widget"
                      data-widget_type="newszone-post-grid-loadmore.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="grid-loadmore-content row">
                          <div className="col-md-6 grid-item">
                            <div className="loadmore-style2 post-grid-loadmore post-361 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-food">
                              <div className="post-block-style">
                                <div className="post-thumb ts-resize">
                                  <a
                                    href="https://demo.themewinter.com/wp/digiqoles/ratcliffe-to-be-director-of-nation-talent-trump-ignored/"
                                    rel="bookmark"
                                    title="Ratcliffe to be Director of nation  talent Trump ignored"
                                  >
                                    <img
                                      width={600}
                                      height={398}
                                      src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/fashion_1-600x398.jpg"
                                      className="attachment-digiqole-medium size-digiqole-medium wp-post-image lazyloaded"
                                      alt=""
                                      data-ll-status="loaded"
                                    />
                                    <noscript>
                                      &lt;img width="600" height="398"
                                      src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/fashion_1-600x398.jpg"
                                      class="attachment-digiqole-medium
                                      size-digiqole-medium wp-post-image" alt=""
                                      /&gt;
                                    </noscript>
                                  </a>
                                  <div className="grid-cat">
                                    <a
                                      className="post-cat"
                                      href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/fashion/"
                                      style={{
                                        backgroundColor: "#da1793",
                                        color: "#ffffff",
                                      }}
                                    >
                                      Fashion
                                    </a>
                                  </div>
                                </div>
                                <div className="post-content">
                                  <h4 className="post-title">
                                    <a
                                      href="https://demo.themewinter.com/wp/digiqoles/ratcliffe-to-be-director-of-nation-talent-trump-ignored/"
                                      rel="bookmark"
                                      title="Ratcliffe to be Director of nation  talent Trump ignored"
                                    >
                                      Ratcliffe to be Director of nation talent
                                      Trump ignored
                                    </a>
                                  </h4>
                                  <div className="post-meta ">
                                    <span className="post-author">
                                      <i className="fa fa-user" />
                                      <a
                                        href="https://demo.themewinter.com/wp/digiqoles/author/digiQoles/"
                                        title="Posts by digiQoles"
                                        rel="author"
                                      >
                                        digiQoles
                                      </a>
                                    </span>
                                    <span className="post-date">
                                      <i
                                        className="fa fa-clock-o"
                                        aria-hidden="true"
                                      />
                                      July 10, 2019
                                    </span>
                                  </div>
                                </div>
                                {/* Post content end */}
                              </div>
                              {/* Post Block style end */}
                            </div>
                          </div>
                          <div className="col-md-6 grid-item">
                            <div className="loadmore-style2 post-grid-loadmore post-111 post type-post status-publish format-standard has-post-thumbnail hentry category-sports tag-sports">
                              <div className="post-block-style">
                                <div className="post-thumb ts-resize">
                                  <a
                                    href="https://demo.themewinter.com/wp/digiqoles/nancy-zhang-a-chinese-business-woman/"
                                    rel="bookmark"
                                    title="Nancy multi Chinese business woman trying"
                                  >
                                    <img
                                      width={600}
                                      height={398}
                                      src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/sports_1-600x398.jpg"
                                      className="attachment-digiqole-medium size-digiqole-medium wp-post-image lazyloaded"
                                      alt=""
                                      data-ll-status="loaded"
                                    />
                                    <noscript>
                                      &lt;img width="600" height="398"
                                      src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/sports_1-600x398.jpg"
                                      class="attachment-digiqole-medium
                                      size-digiqole-medium wp-post-image" alt=""
                                      /&gt;
                                    </noscript>
                                  </a>
                                  <div className="grid-cat">
                                    <a
                                      className="post-cat"
                                      href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/sports/"
                                      style={{
                                        backgroundColor: "#4ca80b",
                                        color: "#ffffff",
                                      }}
                                    >
                                      Sports
                                    </a>
                                  </div>
                                </div>
                                <div className="post-content">
                                  <h4 className="post-title">
                                    <a
                                      href="https://demo.themewinter.com/wp/digiqoles/nancy-zhang-a-chinese-business-woman/"
                                      rel="bookmark"
                                      title="Nancy multi Chinese business woman trying"
                                    >
                                      Nancy multi Chinese business woman trying
                                    </a>
                                  </h4>
                                  <div className="post-meta ">
                                    <span className="post-author">
                                      <i className="fa fa-user" />
                                      <a
                                        href="https://demo.themewinter.com/wp/digiqoles/author/digiQoles/"
                                        title="Posts by digiQoles"
                                        rel="author"
                                      >
                                        digiQoles
                                      </a>
                                    </span>
                                    <span className="post-date">
                                      <i
                                        className="fa fa-clock-o"
                                        aria-hidden="true"
                                      />
                                      July 10, 2019
                                    </span>
                                  </div>
                                </div>
                                {/* Post content end */}
                              </div>
                              {/* Post Block style end */}
                            </div>
                          </div>
                          <div className="col-md-6 grid-item">
                            <div className="loadmore-style2 post-grid-loadmore post-96 post type-post status-publish format-standard has-post-thumbnail hentry category-tech tag-technology">
                              <div className="post-block-style">
                                <div className="post-thumb ts-resize">
                                  <a
                                    href="https://demo.themewinter.com/wp/digiqoles/harbour-amid-a-slowen-down-in-the-city/"
                                    rel="bookmark"
                                    title="Harbour amid a Slowen down in singer city screening"
                                  >
                                    <img
                                      width={600}
                                      height={398}
                                      src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1-600x398.jpg"
                                      className="attachment-digiqole-medium size-digiqole-medium wp-post-image lazyloaded"
                                      alt=""
                                      data-ll-status="loaded"
                                    />
                                    <noscript>
                                      &lt;img width="600" height="398"
                                      src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_1-600x398.jpg"
                                      class="attachment-digiqole-medium
                                      size-digiqole-medium wp-post-image" alt=""
                                      /&gt;
                                    </noscript>
                                  </a>
                                  <div className="grid-cat">
                                    <a
                                      className="post-cat"
                                      href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/tech/"
                                      style={{
                                        backgroundColor: "#007bff",
                                        color: "#ffffff",
                                      }}
                                    >
                                      Tech
                                    </a>
                                  </div>
                                </div>
                                <div className="post-content">
                                  <h4 className="post-title">
                                    <a
                                      href="https://demo.themewinter.com/wp/digiqoles/harbour-amid-a-slowen-down-in-the-city/"
                                      rel="bookmark"
                                      title="Harbour amid a Slowen down in singer city screening"
                                    >
                                      Harbour amid a Slowen down in singer city
                                      screening
                                    </a>
                                  </h4>
                                  <div className="post-meta ">
                                    <span className="post-author">
                                      <i className="fa fa-user" />
                                      <a
                                        href="https://demo.themewinter.com/wp/digiqoles/author/digiQoles/"
                                        title="Posts by digiQoles"
                                        rel="author"
                                      >
                                        digiQoles
                                      </a>
                                    </span>
                                    <span className="post-date">
                                      <i
                                        className="fa fa-clock-o"
                                        aria-hidden="true"
                                      />
                                      July 10, 2019
                                    </span>
                                  </div>
                                </div>
                                {/* Post content end */}
                              </div>
                              {/* Post Block style end */}
                            </div>
                          </div>
                          <div className="col-md-6 grid-item">
                            <div className="loadmore-style2 post-grid-loadmore post-94 post type-post status-publish format-standard has-post-thumbnail hentry category-tech tag-technology">
                              <div className="post-block-style">
                                <div className="post-thumb ts-resize">
                                  <a
                                    href="https://demo.themewinter.com/wp/digiqoles/the-secret-to-moving-this-ancient-sphinx-screening/"
                                    rel="bookmark"
                                    title="The secret to moving this ancient sphinx screening"
                                  >
                                    <img
                                      width={600}
                                      height={398}
                                      src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_2-600x398.jpg"
                                      className="attachment-digiqole-medium size-digiqole-medium wp-post-image lazyloaded"
                                      alt=""
                                      data-ll-status="loaded"
                                    />
                                    <noscript>
                                      &lt;img width="600" height="398"
                                      src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2019/07/tech_2-600x398.jpg"
                                      class="attachment-digiqole-medium
                                      size-digiqole-medium wp-post-image" alt=""
                                      /&gt;
                                    </noscript>
                                  </a>
                                  <div className="grid-cat">
                                    <a
                                      className="post-cat"
                                      href="https://demo.themewinter.com/wp/digiqoles/category/lifestyle/tech/"
                                      style={{
                                        backgroundColor: "#007bff",
                                        color: "#ffffff",
                                      }}
                                    >
                                      Tech
                                    </a>
                                  </div>
                                </div>
                                <div className="post-content">
                                  <h4 className="post-title">
                                    <a
                                      href="https://demo.themewinter.com/wp/digiqoles/the-secret-to-moving-this-ancient-sphinx-screening/"
                                      rel="bookmark"
                                      title="The secret to moving this ancient sphinx screening"
                                    >
                                      The secret to moving this ancient sphinx
                                      screening
                                    </a>
                                  </h4>
                                  <div className="post-meta ">
                                    <span className="post-author">
                                      <i className="fa fa-user" />
                                      <a
                                        href="https://demo.themewinter.com/wp/digiqoles/author/digiQoles/"
                                        title="Posts by digiQoles"
                                        rel="author"
                                      >
                                        digiQoles
                                      </a>
                                    </span>
                                    <span className="post-date">
                                      <i
                                        className="fa fa-clock-o"
                                        aria-hidden="true"
                                      />
                                      July 6, 2019
                                    </span>
                                  </div>
                                </div>
                                {/* Post content end */}
                              </div>
                              {/* Post Block style end */}
                            </div>
                          </div>
                        </div>
                        <div className="load-more-btn text-center">
                          <button
                            className="digiqole-post-grid-loadmore"
                            data-json_grid_meta='{"order":"DESC","posts_per_page":4,"terms":["2"],"tags":"","post_sortby":"latestpost","total_post":32,"grid_style":"style2","show_view_count":"no","show_cat":"yes","show_author":"yes","show_date":"yes","desc_limit":"35","post_title_crop":10,"show_gradient":"","show_author_avator":"no"}'
                          >
                            Load More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1278fea7"
                data-id="1278fea7"
                data-element_type="column"
              >
                <div className="elementor-column-wrap elementor-element-populated">
                  <div className="elementor-widget-wrap">
                    <div
                      className="elementor-element elementor-element-79f0dd5e elementor-widget elementor-widget-newszone-title"
                      data-id="79f0dd5e"
                      data-element_type="widget"
                      data-widget_type="newszone-title.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="section-heading heading-style3">
                          <h2 className="block-title">
                            <span className="title-angle-shap">
                              Recent Comments
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-7737e3f2 elementor-widget elementor-widget-newszone-comment"
                      data-id="7737e3f2"
                      data-element_type="widget"
                      data-widget_type="newszone-comment.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="ts-author-comments">
                          <div className="row ts-comments-row align-items-center mb-50">
                            <div className="col-lg-4 col-md-2">
                              <div className="ts-author-media">
                                <div className="ts-author-thumb">
                                  <img
                                    alt=""
                                    src="https://secure.gravatar.com/avatar/6b622b6dde539b8091333c656733c122?s=96&d=mm&r=g"
                                    className="avatar avatar-96 photo lazyloaded"
                                    height={96}
                                    width={96}
                                    srcSet="https://secure.gravatar.com/avatar/6b622b6dde539b8091333c656733c122?s=96&d=mm&r=g 2x"
                                    data-ll-status="loaded"
                                  />
                                  <noscript>
                                    &lt;img alt=''
                                    src='https://secure.gravatar.com/avatar/6b622b6dde539b8091333c656733c122?s=96&amp;#038;d=mm&amp;#038;r=g'
                                    srcset='https://secure.gravatar.com/avatar/6b622b6dde539b8091333c656733c122?s=96&amp;#038;d=mm&amp;#038;r=g
                                    2x' class='avatar avatar-96 photo'
                                    height='96' width='96' /&gt;
                                  </noscript>
                                </div>
                                <div className="ts-author-meta">14 Jul 19</div>
                              </div>
                            </div>
                            <div className="col-lg-8 col-md-10">
                              <div className="ts-author-content">
                                <div className="comment">
                                  <a href="https://demo.themewinter.com/wp/digiqoles/?post_type=post&p=52 ">
                                    Hidden Hills property with mountain and city
                                    views boasts nine bed rooms, including a big
                                  </a>
                                </div>
                                <div className="ts-author">
                                  by
                                  <a href="http://blank.com">John Doe</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row ts-comments-row align-items-center mb-50">
                            <div className="col-lg-4 col-md-2">
                              <div className="ts-author-media">
                                <div className="ts-author-thumb">
                                  <img
                                    alt=""
                                    src="https://secure.gravatar.com/avatar/b63b48f9ace050d324419d86b600640e?s=96&d=mm&r=g"
                                    className="avatar avatar-96 photo lazyloaded"
                                    height={96}
                                    width={96}
                                    srcSet="https://secure.gravatar.com/avatar/b63b48f9ace050d324419d86b600640e?s=96&d=mm&r=g 2x"
                                    data-ll-status="loaded"
                                  />
                                  <noscript>
                                    &lt;img alt=''
                                    src='https://secure.gravatar.com/avatar/b63b48f9ace050d324419d86b600640e?s=96&amp;#038;d=mm&amp;#038;r=g'
                                    srcset='https://secure.gravatar.com/avatar/b63b48f9ace050d324419d86b600640e?s=96&amp;#038;d=mm&amp;#038;r=g
                                    2x' class='avatar avatar-96 photo'
                                    height='96' width='96' /&gt;
                                  </noscript>
                                </div>
                                <div className="ts-author-meta">14 Jul 19</div>
                              </div>
                            </div>
                            <div className="col-lg-8 col-md-10">
                              <div className="ts-author-content">
                                <div className="comment">
                                  <a href="https://demo.themewinter.com/wp/digiqoles/?post_type=post&p=52 ">
                                    Lopez has reportedly added to her real estat
                                    holdings an eight-plus acre estate in
                                    Bel-Air
                                  </a>
                                </div>
                                <div className="ts-author">
                                  by
                                  <a href="http://ladygaga.com">Lady Gaga</a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row ts-comments-row align-items-center mb-50">
                            <div className="col-lg-4 col-md-2">
                              <div className="ts-author-media">
                                <div className="ts-author-thumb">
                                  <img
                                    alt=""
                                    src="https://secure.gravatar.com/avatar/af56e913707faef5d24ee78935fa64d4?s=96&d=mm&r=g"
                                    className="avatar avatar-96 photo lazyloaded"
                                    height={96}
                                    width={96}
                                    srcSet="https://secure.gravatar.com/avatar/af56e913707faef5d24ee78935fa64d4?s=96&d=mm&r=g 2x"
                                    data-ll-status="loaded"
                                  />
                                  <noscript>
                                    &lt;img alt=''
                                    src='https://secure.gravatar.com/avatar/af56e913707faef5d24ee78935fa64d4?s=96&amp;#038;d=mm&amp;#038;r=g'
                                    srcset='https://secure.gravatar.com/avatar/af56e913707faef5d24ee78935fa64d4?s=96&amp;#038;d=mm&amp;#038;r=g
                                    2x' class='avatar avatar-96 photo'
                                    height='96' width='96' /&gt;
                                  </noscript>
                                </div>
                                <div className="ts-author-meta">14 Jul 19</div>
                              </div>
                            </div>
                            <div className="col-lg-8 col-md-10">
                              <div className="ts-author-content">
                                <div className="comment">
                                  <a href="https://demo.themewinter.com/wp/digiqoles/?post_type=post&p=52 ">
                                    Struggling to sell one multi-million dollar
                                    home currently on the market won’t stop
                                    actress and
                                  </a>
                                </div>
                                <div className="ts-author">
                                  by
                                  <a href="http://blank.com">John Wick</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* author comments end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="elementor-section elementor-top-section elementor-element elementor-element-3282d3f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="3282d3f"
          data-element_type="section"
          data-settings='{"ekit_has_onepagescroll_dot":"yes"}'
        >
          <div className="elementor-container elementor-column-gap-default">
            <div
              className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3acf363"
              data-id="3acf363"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-db50e21 elementor-hidden-phone elementor-widget elementor-widget-image"
                  data-id="db50e21"
                  data-element_type="widget"
                  data-widget_type="image.default"
                >
                  <div className="elementor-widget-container">
                    <div className="elementor-image">
                      <img
                        src="https://demo.themewinter.com/wp/digiqoles/wp-content/uploads/2020/07/content_banner_2.png"
                        title=""
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default connect(null, null)(HomePage);
