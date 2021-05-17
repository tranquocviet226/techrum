import RelatedPosts from "components/user/postDetail/RelatedPosts";
import { connect } from "react-redux";
import { postSelectorUser } from "selectors/user/postSelectorUser";

export default connect(postSelectorUser, null)(RelatedPosts);
