import HomePage from "components/user/homePage/HomePage";
import { connect } from "react-redux";
import { postSelectorUser } from "selectors/user/postSelectorUser";

export default connect(postSelectorUser, null)(HomePage);
