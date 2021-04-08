import { connect } from "react-redux";
import { Dispatch } from "redux";
import { categorySelector } from "selectors/User/categorySelector";
import { getListCategory } from "actions/user/categoryAction";
import HeaderComponent from "components/user/homePage/homeComponents/Header";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getListCategory: () => dispatch(getListCategory()),
});

export default connect(categorySelector, mapDispatchToProps)(HeaderComponent);
