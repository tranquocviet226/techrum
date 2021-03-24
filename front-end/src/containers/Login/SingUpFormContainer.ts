import { omitBy } from "lodash";
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
import userEvent from "@testing-library/user-event";

interface OtherProps {
  register: (
    user: User,
    setErrors: (errors: FormikErrors<FormValuesSignUp>) => void
  ) => void;
  validForm: boolean;
  resetValid: () => void;
  toggle: () => void;
}

const SignUpFormik = withFormik<OtherProps, FormValuesSignUp>({
  displayName: "SingUp Form",
  mapPropsToValues: () => ({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  }),
  validationSchema: signUpValidation,
  handleSubmit: (values, { props, setSubmitting, setErrors }) => {
    const { email, password, firstName, lastName } = values;
    const newUser: User = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      permissions: "",
    };
    props.register(newUser, setErrors);
    props.toggle();
  },
})(SignUpForm);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  register: (
    user: User,
    setErrors: (errors: FormikErrors<FormValuesSignUp>) => void
  ) => dispatch(register(user, setErrors)),
});

export default connect(authSelector, mapDispatchToProps)(SignUpFormik);
