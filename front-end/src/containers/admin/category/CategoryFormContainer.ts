import { createCategory, getListCategory } from "actions/common/categoryAction";
import CategoryForm, {
  FormValueCategory,
} from "components/admin/category/categoryComponents/CategoryForm";
import { FormikErrors, withFormik } from "formik";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { categorySelector } from "selectors/user/categorySelector";
import { Category } from "types/model";
import CategoryFormValidation from "./CategoryFormValidation";

interface OtherProps {
  register: (
    category: Category,
    setErrors: (errors: FormikErrors<FormValueCategory>) => void
  ) => void;
  validForm: boolean;
  resetValid: () => void;
  handleClose: () => void;
  categories: Category[];
}

const CategoryFormik = withFormik<OtherProps, FormValueCategory>({
  displayName: "Category Form",
  mapPropsToValues: () => ({
    parent_id: 0,
    title: "",
    background_url: "",
    slug: "",
    color: "#000000",
    position: 1,
    is_searchable: 1,
    is_active: 1,
  }),
  validationSchema: CategoryFormValidation,
  handleSubmit: (values, { props, setErrors }) => {
    const { title, slug, color, parent_id, background_url } = values;

    const newCatgory: Category = {
      id: 1,
      title: title,
      slug: slug,
      parent_id: parent_id,
      color: color,
      position: 0,
      background_url: background_url,
      count: 1,
      is_active: 1,
      sub_category: [],
    };
    props.register(newCatgory, setErrors);
  },
})(CategoryForm);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getListCategory: () => dispatch(getListCategory()),
  register: (
    category: Category,
    setErrors: (errors: FormikErrors<FormValueCategory>) => void
  ) => dispatch(createCategory(category, setErrors)),
});

export default connect(categorySelector, mapDispatchToProps)(CategoryFormik);
