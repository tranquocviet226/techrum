import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFormik } from 'formik';

import { selector } from '../../selectors/authSelector';
import SignInForm from '../../components/Login/SignInForm';
import { login } from '../../actions/authAction';
import signInValidation from './signInValidation';

export default compose(
  connect(selector, { login }),
  withFormik({
    displayName: 'Login Form',
    mapPropsToValues: () => ({ email: '', password: '' }),
    validationSchema: signInValidation,
    handleSubmit: (values, { props, setSubmitting, setErrors, setFieldValue }) => {
      props.login({ user: values, meta: { setErrors } });
    },
  }),
)(SignInForm);
