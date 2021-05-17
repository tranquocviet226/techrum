import CategoriesAsideContainer from "containers/user/CategoriesAsideContainer";
import RatingContainer from "containers/user/RatingContainer";
import BannerAds1 from "../homePage/homeComponents/bannerAds1/BannerAds1";
import FollowUs from "../homePage/homeComponents/followUs/FollowUs";
import TagsGenreAside from "./TagsGenreAside";

type Props = {
  isFollow?: boolean;
  isShowBannerAds1?: boolean;
  isShowRating?: boolean;
  isShowCategoriesAside?: boolean;
  isShowGenre?: boolean;
};

const Aside: React.FC<Props> = (props) => {
  const {
    isFollow = true,
    isShowBannerAds1 = true,
    isShowRating = true,
    isShowCategoriesAside = true,
    isShowGenre = true,
  } = props;

  return (
    <div className="col-lg-4 col-md-12">
      <div id="sidebar" className="sidebar" role="complementary">
        {isFollow ? <FollowUs /> : null}
        {isShowBannerAds1 ? <BannerAds1 /> : null}
        {isShowRating ? <RatingContainer /> : null}
        {isShowCategoriesAside ? <CategoriesAsideContainer /> : null}
        {isShowGenre ? <TagsGenreAside /> : null}
      </div>
    </div>
  );
};
export default Aside;
