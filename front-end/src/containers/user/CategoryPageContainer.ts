import CategoryPage from "components/user/categoryPage";
import { connect } from "react-redux";
import { postSelectorUser } from "selectors/user/postSelectorUser";

export default connect(postSelectorUser, null)(CategoryPage);
