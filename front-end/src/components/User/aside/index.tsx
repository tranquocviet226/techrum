import Rating from "../common/Rating"
import CategoriesAsideContainer from "containers/user/CategoriesAsideContainer"
import TagsGenreAside from "./TagsGenreAside"

const Aside = () => {

    return (
        <div className="col-lg-4 col-md-12">
            <div id="sidebar" className="sidebar" role="complementary">
                <Rating />
                <CategoriesAsideContainer/>
                <TagsGenreAside/>
            </div>
        </div>
    )
}
export default Aside
