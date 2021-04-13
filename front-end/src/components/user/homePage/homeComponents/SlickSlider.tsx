import { Path } from "constants/path";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SlickItem from "./SlickItem";
import "styles/user/css/SlickSlider.css";
import { Post } from "types/model";

type Props = {
  sliderPosts: Post[]
}

const SlickSlider : React.FC<Props>= (props) => {
  const {sliderPosts} = props

  const history = useHistory();
  const settings = {
    dots: true,
    dotsClass: "vertical-dots",
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
    <Slider {...settings}>
      {sliderPosts.map((item) => (
        <SlickItem
          key={item.id}
          item={item}
          onSelectPost={() => onSelectPost(item.id)}
        />
      ))}
    </Slider>
  );
};

export default SlickSlider
