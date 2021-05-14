import txtConstants from "constants/index";
import { Path } from "constants/path";
import React from "react";
import { useHistory } from "react-router-dom";
import { Category, Post } from "types/model";
import { formatDate } from "utils/function";

type Props = {
  sliderPosts: Post[];
};

const SliderBannerRight: React.FC<Props> = (props) => {
  const history = useHistory();
  const { sliderPosts } = props;

  const onSelectPost = (id: number) => {
    history.push({
      pathname: Path.POST.concat("/" + id),
      state: {
        id: id,
      },
    });
  };

  const _renderSubView = (item: Post) => {
    const id = item?.id || 1;
    const background_url = item?.background_url || "";
    const categories = item?.categories || [];
    const title = item?.title || "";
    const author = item?.author || txtConstants.rootAuthor;
    const created_at = item?.created_at || Date.now();
    const views = item?.views || 0;
    return (
      <div
        className="item item-before rocket-lazyload lazyloaded"
        style={{
          backgroundImage: `url("${background_url}")`,
        }}
        data-ll-status="loaded"
      >
        <div className="overlay-post-content">
          <div className="post-content">
            <div className="grid-category">
              {categories.map((it: Category) => (
                <a
                  key={it.id}
                  className="post-cat cur-po"
                  style={{
                    backgroundColor: it.color,
                    color: "#ffffff",
                  }}
                >
                  {it.title}
                </a>
              ))}
            </div>
            <h3 onClick={() => onSelectPost(id)} className="post-title cur-po">
              <a>{title}</a>
            </h3>
            <ul className="post-meta-info  ">
              <li className="author">
                <i className="fa fa-user" />
                <a>{author}</a>
              </li>
              <li className="created_at">
                <i className="far fa-clock" />
                <a>{formatDate(created_at)}</a>
              </li>
              <li className="active">
                <i className="fas fa-fire" />
                {views}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  const _renderTopSlider = () => {
    return (
      <div
        className="elementor-element elementor-element-7970a807 elementor-widget-newszone-post-grid"
        data-id="7970a807"
        data-element_type="widget"
        data-widget_type="newszone-post-grid.default"
      >
        <div className="elementor-widget-container">
          <div className="grid-item">
            <div className="ts-overlay-style featured-post post-59 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-travel">
              {_renderSubView(sliderPosts[0])}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const _renderBottomSlider = () => {
    return (
      <div
        className="elementor-element elementor-element-7c808275 sm-post-effect elementor-widget elementor-widget-newszone-post-grid"
        data-id="7c808275"
        data-element_type="widget"
        data-widget_type="newszone-post-grid.default"
      >
        <div className="elementor-widget-container">
          <div className="grid-item">
            <div className="ts-overlay-style featured-post post-59 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-travel">
              {sliderPosts[1] ? _renderSubView(sliderPosts[1]) : ""}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-68ef10d7"
      data-id="68ef10d7"
      data-element_type="column"
    >
      <div className="elementor-column-wrap elementor-element-populated">
        <div className="elementor-widget-wrap">
          {_renderTopSlider()}
          {_renderBottomSlider()}
        </div>
      </div>
    </div>
  );
};

export default SliderBannerRight;
