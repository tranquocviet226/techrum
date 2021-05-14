import PostDetailComponent from "components/user/postDetail";
import { connect } from "react-redux";
import { postSelector } from "selectors/admin/postSelector";

export default connect(postSelector, null)(PostDetailComponent);
