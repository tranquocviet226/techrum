import * as Yup from 'yup';

import { PASSWORD_REGEX } from '../../constants';

export default Yup.object().shape({
  username: Yup.string()
    .required('Email is required')
    .email('Email invalid format'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must have min 6 characters')
    .matches(PASSWORD_REGEX, 'Password invalid format'),
});
