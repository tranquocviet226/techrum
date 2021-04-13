import { connect } from "react-redux";
import { Dispatch } from "redux";
import { categorySelector } from "selectors/user/categorySelector";
import { getListCategory } from "actions/common/categoryAction";
import CategoryPage from "components/admin/category/CategoryPage";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getListCategory: () => dispatch(getListCategory()),
});

export default connect(categorySelector, mapDispatchToProps)(CategoryPage);
