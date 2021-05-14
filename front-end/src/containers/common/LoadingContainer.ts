import { connect } from "react-redux";
import { commonSelector } from "selectors/common/commonSelector";
import Loading from "services/Loading";

export default connect(commonSelector, null)(Loading);
