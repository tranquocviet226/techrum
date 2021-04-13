import PostManagement from "components/admin/postManagement/PostManagement";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { categorySelector } from "selectors/user/categorySelector";

const mapDispatchToProps = (dispatch: Dispatch) => ({

});

export default connect(categorySelector, mapDispatchToProps)(PostManagement);
