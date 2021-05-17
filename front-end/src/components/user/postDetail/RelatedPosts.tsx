import { getPostFind } from "actions/user/postAction";
import txtConstants from "constants/index";
import { Path } from "constants/path";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import { ComponentType } from "types/common/componentTypes";
import { FindPostBody, Post } from "types/model/Post";
import RelatedPostItem from "./RelatedPostItem";
import "./styles.css";

type Props = {
  category_id?: number;
  relatedPosts?: Post[];
};

const RelatedPosts: React.FC<Props> = (props) => {
  const { category_id, relatedPosts } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    getRelatedPosts();
  }, []);

  const getRelatedPosts = () => {
    const body: FindPostBody = {
      category_id: category_id,
    };
    dispatch(getPostFind(ComponentType.RELATED_POSTS, body));
  };

  const settings = {
    dots: true,
    dotsClass: "horizontal-dots",
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const onSelectPost = (id: number) => {
    history.push({
      pathname: Path.POST.concat("/" + id),
      state: {
        id: id,
      },
    });
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
              <RelatedPostItem item={item}/>
            </div>
          ))}
        </Slider>
        <div className="owl-dots disabled" />
      </div>
    </div>
  );
};

export default RelatedPosts;
