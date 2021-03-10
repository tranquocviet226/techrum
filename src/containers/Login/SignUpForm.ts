import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withFormik } from 'formik';
import { omitBy } from 'lodash';

import SignUpForm from '../../components/Login/SignUpForm';
import { signUp } from '../../actions/authAction';
import signUpValidation from './signUpValidation';

export default compose(
  connect(null, { signUp }),
  withFormik({
    displayName: 'sign up Form',
    mapPropsToValues: () => ({ first_name: '', last_name: '', new_email: '', new_password: '' }),
    validationSchema: signUpValidation,
    handleSubmit: (values, { props, setSubmitting, setErrors, setFieldValue }) => {
      props.signUp({ values: omitBy(values, v => !v), meta: { setErrors } });
      props.toggle();
    },
  }),
)(SignUpForm);
