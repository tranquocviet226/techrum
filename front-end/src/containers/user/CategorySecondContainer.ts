import CategorySecond from "components/user/homePage/homeComponents/categorySecond/CategorySecond";
import { connect } from "react-redux";
import { categorySelector } from "selectors/user/categorySelector";

export default connect(categorySelector, null)(CategorySecond);
