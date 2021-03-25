import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { authSelector } from '../selectors/authSelector';
import { AuthState } from '../types/authTypes';

type Props = RouteProps & {
  component: React.ComponentType<any>,
  auth?: AuthState;
}

const PrivateRoute = ({ component: Component, auth, ...rest }:Props) => (
  <Route
    {...rest}
    render={props => (auth?.isAuth
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
  />
);

export default connect(authSelector, null)(PrivateRoute);
