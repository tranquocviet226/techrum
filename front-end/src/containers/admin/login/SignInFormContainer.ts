import { connect } from "react-redux";
import { Dispatch } from "redux";
import { FormikErrors, withFormik } from "formik";

import { authSelector } from "selectors/authSelector";
import SignInForm, {
  FormValuesSignIn,
} from "components/admin/login/SignInForm";
import { login } from "actions/admin/authAction";
import signInValidation from "./signInValidation";
interface OtherProps {
  login: (
    username: string,
    password: string,
    setErrors: (errors: FormikErrors<FormValuesSignIn>) => void
  ) => void;
  validForm: boolean;
  resetValid: () => void;
}

export const SignInFormik = withFormik<OtherProps, FormValuesSignIn>({
  displayName: "SingIn Form",
  mapPropsToValues: () => ({ username: "", password: "" }),
  validationSchema: signInValidation,
  handleSubmit: (values, { props,setSubmitting, setErrors }) => {
    const { username, password } = values;
    props.login(username, password, setErrors);
  },
})(SignInForm);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (
    username: string,
    password: string,
    setErrors: (errors: FormikErrors<FormValuesSignIn>) => void
  ) => dispatch(login(username, password, setErrors)),
});

export default connect(authSelector, mapDispatchToProps)(SignInFormik);
