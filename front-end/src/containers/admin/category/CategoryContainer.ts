import { getListCategory } from "actions/common/categoryAction";
import { getShowModal } from "actions/common/commonAction";
import CategoryPage from "components/admin/category/CategoryPage";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { commonSelector } from "selectors/common/commonSelector";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getListCategory: () => dispatch(getListCategory()),
  getShowModal: () => dispatch(getShowModal()),
});

export default connect(commonSelector, mapDispatchToProps)(CategoryPage);
