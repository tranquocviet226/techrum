import { connect } from "react-redux";
import { categorySelector } from "selectors/user/categorySelector";
import FeatureTabNewsComponent from "components/user/homePage/homeComponents/FeatureTabNews";

export default connect(categorySelector)(FeatureTabNewsComponent);
