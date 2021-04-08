import { connect } from "react-redux";
import { DataPost } from "data";
import { useHistory } from "react-router-dom";
import { Path } from "constants/path";
import { Category, Post } from "types/Model";

const SliderBannerRight = () => {
  const history = useHistory();

  const onSelectPost = (id: number) => {
    history.push({
      pathname: Path.POST.concat("/" + id),
      state: {
        id: id,
      },
    });
  };

  const _renderSubView = (item: Post) => {
    return (
      <div
        className="item item-before rocket-lazyload lazyloaded"
        style={{
          backgroundImage: `url("${item.background_url}")`,
        }}
        data-ll-status="loaded"
      >
        <div className="overlay-post-content">
          <div className="post-content">
            <div className="grid-category">
              {item.categories.map((it: Category) => (
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
            <h3
              onClick={() => onSelectPost(item.id)}
              className="post-title cur-po"
            >
              <a>{item.title}</a>
            </h3>
            <ul className="post-meta-info  ">
              <li className="author">
                <i className="fa fa-user" />
                <a>{item.author.name}</a>
              </li>
              <li>
                <i className="fa fa-clock-o" />
                {item.views}
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
              {_renderSubView(DataPost[0])}
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
              {_renderSubView(DataPost[0])}
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

export default connect(null, null)(SliderBannerRight);
