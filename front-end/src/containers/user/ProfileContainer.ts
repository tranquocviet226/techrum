import Profile from "components/user/profile/Profile";
import { connect } from "react-redux";
import { userSelector } from "selectors/user/userSelector";

export default connect(userSelector, null)(Profile);
