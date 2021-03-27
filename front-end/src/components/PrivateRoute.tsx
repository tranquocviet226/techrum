import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { connect } from 'react-redux';

import { authSelector } from '../selectors/authSelector';

type Props = RouteProps & {
  component: React.ComponentType<any>,
  isAuth?: boolean;
}

const PrivateRoute = ({ component: Component, isAuth,path, ...rest }: Props) => {
  return <Route
    {...rest}
    render={props => (isAuth
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/admin/login', state: { from: props.location } }} />)}
  />
}

export default connect(authSelector, null)(PrivateRoute);
