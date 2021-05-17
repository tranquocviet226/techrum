import ReadNext from "components/user/homePage/homeComponents/readNext/ReadNext";
import { connect } from "react-redux";
import { postSelectorUser } from "selectors/user/postSelectorUser";

export default connect(postSelectorUser, null)(ReadNext);
