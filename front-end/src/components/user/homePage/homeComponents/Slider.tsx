import { useEffect } from "react";
import { ComponentType } from "types/common/componentTypes";
import { Post } from "types/model";
import { ParamsPost } from "types/model/Post";
import SlickSlider from "./SlickSlider";
import SliderBannerRight from "./SliderBannerRight";

type Props = {
  sliderPosts: Post[]
  getPostsByCategory: (
    componentType: ComponentType,
    paramsPost?: ParamsPost
  ) => void,
  resetPosts: (componentType: ComponentType) => void
}

const Slider: React.FC<Props> = (props) => {
  const { sliderPosts, getPostsByCategory, resetPosts } = props

  useEffect(() => {
    getPostsByCategory(ComponentType.SLIDER_POSTS, { total_result: 3 })
  }, [])

  return (
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-5c614333 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="5c614333"
      data-element_type="section"
      data-settings='{"ekit_has_onepagescroll_dot":"yes"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-row">
          <div
            className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1753e2ea"
            data-id="1753e2ea"
            data-element_type="column"
          >
            <div className="elementor-column-wrap elementor-element-populated">
              <div className="elementor-widget-wrap">
                <div
                  className="elementor-element elementor-element-f075111 elementor-widget elementor-widget-newszone-main-slider"
                  data-id="f075111"
                  data-element_type="widget"
                  data-widget_type="newszone-main-slider.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      data-controls='{"dot_nav_show":"","slider_dot_show":"yes","auto_nav_slide":"yes","item_count":5}'
                      className="main-slider owl-carousel owl-loaded owl-drag"
                    >
                      <div className="owl-stage-outer">
                        {sliderPosts.length > 0 &&
                          <SlickSlider sliderPosts={sliderPosts} />}
                      </div>
                      <div className="owl-nav disabled">
                        <div className="owl-prev">
                          <i className="fa fa-angle-left" />
                        </div>
                        <div className="owl-next">
                          <i className="fa fa-angle-right" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> {sliderPosts.length > 1 &&
            <SliderBannerRight sliderPosts={sliderPosts.slice(1, sliderPosts.length)} />}
        </div>
      </div>
    </section>
  );
};

export default Slider;
