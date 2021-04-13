import { getLoading } from "actions/common/commonAction";
import Admin from "layouts/Admin";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { commonSelector } from "selectors/common/commonSelector";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getLoading: () => dispatch(getLoading()),
});

export default connect(commonSelector, mapDispatchToProps)(Admin);
