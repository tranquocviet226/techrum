import { connect } from "react-redux";
import { Dispatch } from "redux";
import { FormikErrors, withFormik } from "formik";
import { Category } from "types/model";
import CategoryForm, {
  FormValueCategory,
} from "components/admin/category/categoryComponents/CategoryForm";
import { categorySelector } from "selectors/user/categorySelector";
import { createCategory, getListCategory } from "actions/common/categoryAction";

interface OtherProps {
  register: (
    category: Category,
    setErrors: (errors: FormikErrors<FormValueCategory>) => void
  ) => void;
  validForm: boolean;
  resetValid: () => void;
  categories: Category[];
}

const CategoryFormik = withFormik<OtherProps, FormValueCategory>({
  displayName: "Category Form",
  mapPropsToValues: () => ({
    parent_id: [0],
    title: "",
    slug: "",
    color: "#000000",
    position: 1,
    is_searchable: 1,
    is_active: 1,
  }),
  //   validationSchema: signUpValidation,
  handleSubmit: (values, { props, setErrors }) => {
    const { title, slug, color, position, is_active } = values;
    const newCatgory: Category = {
      id: 1,
      title: title,
      slug: slug,
      parent_id: 1,
      color: color,
      position: position,
      background_image: "",
      count: 1,
      is_active: is_active,
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
