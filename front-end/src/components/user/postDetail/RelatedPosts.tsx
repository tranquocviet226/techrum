import { getPostFind } from "actions/user/postAction";
import txtConstants from "constants/index";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import { ComponentType } from "types/common/componentTypes";
import { Category } from "types/model";
import { FindPostBody, Post } from "types/model/Post";
import RelatedPostItem from "./RelatedPostItem";
import "./styles.css";

type Props = {
  category?: Category;
  relatedPosts?: Post[];
};

const RelatedPosts: React.FC<Props> = (props) => {
  const { category, relatedPosts } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    if (category) {
      getRelatedPosts();
    }
  }, [category]);

  const getRelatedPosts = () => {
    const body: FindPostBody = {
      category_id: category?.id,
    };
    dispatch(getPostFind(ComponentType.RELATED_POSTS, body));
  };

  const settings = {
    dots: true,
    dotsClass: "horizontal-dots",
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: relatedPosts && relatedPosts.length >= 3 ? 3 : 2,
    slidesToScroll: relatedPosts && relatedPosts.length >= 3 ? 3 : 2,
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

  return (
    <div className="ts-related-post author-box">
      <div className="section-heading heading-style3">
        <h3 className="mb-25">{txtConstants.relatedPost} </h3>
      </div>
      <div className="popular-grid-slider owl-carousel owl-loaded owl-drag">
        <Slider {...settings}>
          {relatedPosts?.map((item) => (
            <div key={item.id} className="pd-15">
              <RelatedPostItem item={item} />
            </div>
          ))}
        </Slider>
        <div className="owl-dots disabled" />
      </div>
    </div>
  );
};

export default RelatedPosts;
