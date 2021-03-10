import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import { selector } from '../selectors/authSelector';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuth
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
  />
);

export default compose(
  connect(selector, null),
)(PrivateRoute);
