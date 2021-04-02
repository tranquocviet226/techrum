import { connect } from "react-redux";
import { Dispatch } from "redux";
import { FormikErrors, withFormik } from "formik";

import { authSelector } from "../../selectors/authSelector";
import SignUpForm, {
  FormValuesSignUp,
} from "../../components/Login/SignUpForm";
import { register } from "../../actions/authAction";
import signUpValidation from "./signUpValidation";
import { User } from "../../entities/User";

interface OtherProps {
  register: (
    user: User,
    setErrors: (errors: FormikErrors<FormValuesSignUp>) => void,
    toggle: () => void
  ) => void;
  validForm: boolean;
  resetValid: () => void;
  toggle: () => void;
}

const SignUpFormik = withFormik<OtherProps, FormValuesSignUp>({
  displayName: "SingUp Form",
  mapPropsToValues: () => ({
    email: "",
    new_password: "",
    firstName: "",
    lastName: "",
  }),
  validationSchema: signUpValidation,
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    const { email, new_password, firstName, lastName } = values;
    const newUser: User = {
      email: email,
      password: new_password,
      firstName: firstName,
      lastName: lastName,
      permissions: "",
    };
    props.register(newUser, setErrors, props.toggle);
  },
})(SignUpForm);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  register: (
    user: User,
    setErrors: (errors: FormikErrors<FormValuesSignUp>) => void,
    toggle: () => void
  ) => dispatch(register(user, setErrors, toggle)),
});

export default connect(authSelector, mapDispatchToProps)(SignUpFormik);
