import PostManagement from "components/admin/postManagement/PostManagement";
import { connect } from "react-redux";
import { postSelector } from "selectors/admin/postSelector";

export default connect(postSelector, null)(PostManagement);
