import CategorySecondContainer from "containers/user/CategorySecondContainer";
import DontMissContainer from "containers/user/DontMissContainer";
import ReadNextContainer from "containers/user/ReadNextContainer";
import Slider from "containers/user/SliderContainer";
import SliderRandomContainer from "containers/user/SliderRandomContainer";
import WeekendTopContainer from "containers/user/WeekendTopContainer";
import { connect } from "react-redux";
import BannerAds2 from "./homeComponents/bannerAds2/BannerAds2";
import WhatNew from "./homeComponents/whatNew/WhatNew";

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
        <WeekendTopContainer />
        <WhatNew />
        <SliderRandomContainer />
        <CategorySecondContainer />
        <DontMissContainer />
        <BannerAds2 />
        <ReadNextContainer />
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
