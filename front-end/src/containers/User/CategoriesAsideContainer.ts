import { connect } from "react-redux";
import { categorySelector } from "selectors/user/categorySelector";
import CategoriesAside from "components/user/aside/CategoriesAside";

export default connect(categorySelector, null)(CategoriesAside);
