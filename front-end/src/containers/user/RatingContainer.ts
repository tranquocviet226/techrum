import Rating from "components/user/common/Rating";
import { connect } from "react-redux";
import { categorySelector } from "selectors/user/categorySelector";

export default connect(categorySelector, null)(Rating);
