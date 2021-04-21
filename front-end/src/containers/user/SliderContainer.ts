import { connect } from "react-redux";
import { Dispatch } from "redux";
import { postSelector } from "selectors/admin/postSelector";
import { getPostsByCategory, resetPosts } from "actions/admin/postAction";
import SliderComponent from "components/user/homePage/homeComponents/Slider";
import { ComponentType } from "types/common/componentTypes";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getPostsByCategory: (
    componentType: ComponentType,
  ) => dispatch(getPostsByCategory(componentType)),
  resetPosts: (componentType: ComponentType) =>
    dispatch(resetPosts(componentType)),
});

export default connect(postSelector, mapDispatchToProps)(SliderComponent);
