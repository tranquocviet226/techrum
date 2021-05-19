import CategoryItem from "components/user/common/CategoryItem";
import txtConstants from "constants/index";
import { Path } from "constants/path";
import { useHistory } from "react-router";
import Slider from "react-slick";
import { Post } from "types/model/Post";
import { formatDate } from "utils/function";
import "./styles.css";

type Props = {
  postWeekendTop?: Post[];
};

const WeekenTop: React.FC<Props> = (props) => {
  const { postWeekendTop } = props;
  const history = useHistory();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const handleSelectPost = (id: number) => {
    history.push({
      pathname: `/${Path.POST.concat("/" + id)}`,
      state: {
        id: id,
      },
    });
  };

  return (
    <section className="elementor-section elementor-top-section elementor-element elementor-element-61505dd8 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-top-column elementor-element w-100">
          <div className="elementor-widget-wrap">
            <div className="container">
              <div className="pd-15 section-heading heading-style3">
                <h2 className="block-title">
                  <span className="title-angle-shap">
                    {txtConstants.weekendTop}
                  </span>
                </h2>
              </div>
              <div>
                <Slider {...settings}>
                  {postWeekendTop?.map((item) => (
                    <div key={item.id} className="pd-15">
                      <div className="ts-overlay-style  featured-post  post-361 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-food">
                        <div
                          className="item item-before rocket-lazyload lazyloaded"
                          style={{
                            backgroundImage: `url("${item.background_url}")`,
                          }}
                          data-ll-status="loaded"
                        >
                          <div className="overlay-post-content min-h-310">
                            <div className="post-content">
                              <div className="grid-category">
                                {item?.categories?.slice(0, 2).map((it) => (
                                  <CategoryItem item={it} key={it.id} />
                                ))}
                              </div>
                              <h3
                                onClick={() => handleSelectPost(item?.id)}
                                className="post-title cur-po"
                              >
                                <a>{item?.title}</a>
                              </h3>
                              <ul className="post-meta-info">
                                <li>
                                  <div className="txt_clip">
                                    <i className="far fa-clock" />
                                    <a> {formatDate(item?.created_at)}</a>
                                  </div>
                                </li>
                                <li className="active">
                                  <div className="txt_clip">
                                    <i className="fas fa-fire"></i>
                                    {item?.views}
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekenTop;
