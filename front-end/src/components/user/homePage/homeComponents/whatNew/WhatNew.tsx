import CategoryFirstContainers from "containers/user/CategoryFirstContainers";
import RatingContainer from "containers/user/RatingContainer";
import BannerAds1 from "../bannerAds1/BannerAds1";
import FollowUs from "../followUs/FollowUs";
import NewsContent from "../NewsContent";

const WhatNew = () => {
  return (
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
            <NewsContent />
            <CategoryFirstContainers />
          </div>
        </div>
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1b831df5"
          data-id="1b831df5"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <FollowUs />
            <BannerAds1 />
            <div
              className="elementor-element elementor-element-74cbf30f elementor-widget elementor-widget-newszone-post-list-tab"
              data-id="74cbf30f"
              data-element_type="widget"
              data-widget_type="newszone-post-list-tab.default"
            >
              <div className="elementor-widget-container">
                <RatingContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatNew;
