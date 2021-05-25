import { getPostFind } from "actions/user/postAction";
import CategorySecondContainer from "containers/user/CategorySecondContainer";
import DontMissContainer from "containers/user/DontMissContainer";
import ReadNextContainer from "containers/user/ReadNextContainer";
import Slider from "containers/user/SliderContainer";
import SliderRandomContainer from "containers/user/SliderRandomContainer";
import WeekendTopContainer from "containers/user/WeekendTopContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ScrollToTop from "services/ScrollToTop";
import { ComponentType } from "types/common/componentTypes";
import { Category, Post } from "types/model";
import { FindPostBody } from "types/model/Post";
import BannerAds2 from "./homeComponents/bannerAds2/BannerAds2";
import WhatNew from "./homeComponents/whatNew/WhatNew";
import LazyLoad from "react-lazyload";

type Props = {
  categories: Category[];
  postWeekendTop: Post[];
  newContentPosts: Post[];
  randomPosts: Post[];
  categorySecondPosts: Post[];
  dontMissPosts: Post[];
  readNextPosts: Post[];
};

const HomePage: React.FC<Props> = (props) => {
  const {
    categories,
    postWeekendTop,
    randomPosts,
    categorySecondPosts,
    dontMissPosts,
    readNextPosts,
  } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = () => {
    getWeekenTop();
    getRandomPost();
    getListPostByCategorySecond();
    getDonMissPosts();
    getReadNext();
  };

  const getWeekenTop = () => {
    const body: FindPostBody = {
      total_result: 12,
      sort_by: {
        target: "views",
        order: "DESC",
      },
    };
    dispatch(getPostFind(ComponentType.WEEKEND_TOP, body));
  };

  const getRandomPost = () => {
    const body: FindPostBody = {
      total_result: 12,
      type: "rand",
    };
    dispatch(getPostFind(ComponentType.RANDOM_POSTS, body));
  };

  const getListPostByCategorySecond = () => {
    const body: FindPostBody = {
      total_result: 5,
      category_id: categories && categories?.length > 1 ? categories[1].id : 0,
      sort_by: {
        target: "views",
        order: "DESC",
      },
    };
    dispatch(getPostFind(ComponentType.CATEGORY_POSTS_2, body));
  };

  const getDonMissPosts = () => {
    const body: FindPostBody = {
      total_result: 6,
      type: "rand",
    };
    dispatch(getPostFind(ComponentType.DON_T_MISS_POSTS, body));
  };

  const getReadNext = () => {
    const body: FindPostBody = {
      total_result: 6,
      type: "rand",
    };
    dispatch(getPostFind(ComponentType.READ_NEXT_POSTS, body));
  };

  const _renderWeekendTop = () => {
    if (postWeekendTop && postWeekendTop.length > 0)
      return (
        <LazyLoad height={200}>
          <WeekendTopContainer />
        </LazyLoad>
      );
  };

  const _renderWhatNew = () => {
    if (categories && categories.length > 0)
      return (
        <LazyLoad height={200}>
          <WhatNew />
        </LazyLoad>
      );
  };

  const _renderSliderRandom = () => {
    if (randomPosts && randomPosts.length > 0)
      return (
        <LazyLoad height={200}>
          <SliderRandomContainer />
        </LazyLoad>
      );
  };

  const _renderCategorySecond = () => {
    if (categorySecondPosts && categorySecondPosts.length > 0)
      return (
        <LazyLoad height={200}>
          <CategorySecondContainer />
        </LazyLoad>
      );
  };

  const _renderDontMiss = () => {
    if (dontMissPosts && dontMissPosts.length > 0)
      return (
        <LazyLoad height={200}>
          <DontMissContainer />
        </LazyLoad>
      );
  };

  const _renderReadNext = () => {
    if (readNextPosts && readNextPosts.length > 0)
      return (
        <LazyLoad height={200}>
          <ReadNextContainer />
        </LazyLoad>
      );
  };

  return (
    <div
      data-elementor-type="wp-post"
      data-elementor-id={1878}
      className="elementor elementor-1878"
      data-elementor-settings="[]"
    >
      <ScrollToTop />
      <div className="elementor-section-wrap">
        <LazyLoad height={200}>
          <Slider />
        </LazyLoad>
        {_renderWeekendTop()}
        {_renderWhatNew()}
        {_renderSliderRandom()}
        {_renderCategorySecond()}
        {_renderDontMiss()}
        <LazyLoad height={200}>
          <BannerAds2 />
        </LazyLoad>
        <LazyLoad height={200}>{_renderReadNext()}</LazyLoad>
        <LazyLoad height={200}>
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
        </LazyLoad>
      </div>
    </div>
  );
};

export default HomePage;
