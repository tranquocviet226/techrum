import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { authSelector } from '../selectors/authSelector';

type Props = RouteProps & {
  component: React.ComponentType<any>,
  isAuth?: boolean;
}

const PrivateRoute = ({ component: Component, isAuth, ...rest }: Props) => {
  console.log("PrivateRoute", isAuth);

  return <Route
    {...rest}
    render={props => (isAuth
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
  />
}

export default connect(authSelector, null)(PrivateRoute);
