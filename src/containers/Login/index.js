import { connect } from 'react-redux';
import { compose } from 'recompose';

import LoginComponent from '../../components/Login';

export default compose(
  connect(null),
)(LoginComponent);
