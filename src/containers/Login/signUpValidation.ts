import * as Yup from 'yup';

import { PASSWORD_REGEX } from '../../constants';

export default Yup.object().shape({
  new_email: Yup.string()
    .required('Email is required')
    .email('Email invalid format'),
  new_password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must have min 6 characters')
    .matches(PASSWORD_REGEX, 'Password invalid format'),
  first_name: Yup.string()
    .required('First name is required')
    .min(2, 'First name is too short')
    .max(50, 'First name is too long'),
  last_name: Yup.string()
    .required('Last name is required')
    .min(2, 'Last name is too short')
    .max(50, 'Last name is too long')
});
