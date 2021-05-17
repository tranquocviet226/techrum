import { getPostFind } from "actions/user/postAction";
import CategoryItem from "components/user/common/CategoryItem";
import txtConstants from "constants/index";
import { Path } from "constants/path";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import Slider from "react-slick";
import { ComponentType } from "types/common/componentTypes";
import { FindPostBody, Post } from "types/model/Post";
import { formatDate } from "utils/function";
import "./styles.css";

type Props = {
  randomPosts?: Post[];
};

const SliderRandom: React.FC<Props> = (props) => {
  const { randomPosts } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    getRandomPost();
  }, []);

  const getRandomPost = () => {
    const body: FindPostBody = {
      total_result: 12,
      type: "rand",
    };
    dispatch(getPostFind(ComponentType.RANDOM_POSTS, body));
  };

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
    <div className="container">
      <div className="pd-15 section-heading heading-style3">
        <h2 className="block-title">
          <span className="title-angle-shap">{txtConstants.randomPost}</span>
        </h2>
      </div>
      <div>
        <Slider {...settings}>
          {randomPosts?.map((item) => (
            <div key={item.id} className="pd-15">
              <div className="ts-overlay-style  featured-post  post-361 post type-post status-publish format-standard has-post-thumbnail hentry category-fashion tag-food">
                <div
                  className="item item-before rocket-lazyload lazyloaded"
                  style={{ backgroundImage: `url("${item.background_url}")` }}
                  data-ll-status="loaded"
                >
                  <div className="overlay-post-content">
                    <div className="post-content">
                      <div className="grid-category">
                        {item?.categories?.slice(0, 2).map((it) => (
                          <CategoryItem item={it} key={it.id} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post-content pd-5">
                <h3
                  onClick={() => handleSelectPost(item?.id)}
                  className="post-title cur-po"
                >
                  <a>{item?.title}</a>
                </h3>
                <div className="sub-title">
                  <div className="txt_clip fz-13 mr-2 color-gray">
                    <i className="far fa-clock" />
                    <a> {formatDate(item?.created_at)}</a>
                  </div>
                  <div className="txt_clip fz-13 color-gray">
                    <i className="fas fa-fire mr-1"></i>
                    {item?.views}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderRandom;
