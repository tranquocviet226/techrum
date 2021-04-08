import { connect } from "react-redux";
import { Dispatch } from "redux";
import { categorySelector } from "selectors/User/categorySelector";
import { getListCategory } from "actions/User/categoryAction";
import HeaderComponent from "components/User/HomePage/HomeComponents/Header/Header";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getListCategory: () => dispatch(getListCategory()),
});

export default connect(categorySelector, mapDispatchToProps)(HeaderComponent);
