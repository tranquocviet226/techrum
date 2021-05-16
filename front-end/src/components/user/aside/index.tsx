import Rating from "../common/Rating";
import CategoriesAsideContainer from "containers/user/CategoriesAsideContainer";
import TagsGenreAside from "./TagsGenreAside";

type Props = {
  isShowGenre?: boolean;
};

const Aside: React.FC<Props> = (props) => {
  const { isShowGenre = true } = props;

  return (
    <div className="col-lg-4 col-md-12">
      <div id="sidebar" className="sidebar" role="complementary">
        <Rating />
        <CategoriesAsideContainer />
        {isShowGenre ? <TagsGenreAside /> : null}
      </div>
    </div>
  );
};
export default Aside;
