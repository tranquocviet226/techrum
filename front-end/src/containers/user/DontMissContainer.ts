import DontMiss from "components/user/homePage/homeComponents/dontMiss/DontMiss";
import { connect } from "react-redux";
import { postSelectorUser } from "selectors/user/postSelectorUser";

export default connect(postSelectorUser, null)(DontMiss);
