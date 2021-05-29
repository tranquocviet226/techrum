import TrendingBar from "components/user/common/trendingBar/TrendingBar";
import { connect } from "react-redux";
import { authSelector } from "selectors/authSelector";

export default connect(authSelector, null)(TrendingBar);
