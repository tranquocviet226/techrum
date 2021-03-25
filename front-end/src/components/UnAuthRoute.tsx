import React from "react";
import {
  Route,
  Redirect,
  RouteProps,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import { connect } from "react-redux";

import { authSelector } from "../selectors/authSelector";
import { DEFAULT_PATH } from "../constants";
import { AuthState } from "../types/authTypes";

type Props = RouteComponentProps & {
  path: RouteProps["path"];
  exact: RouteProps["exact"];
  component: React.ComponentType<any>;
  auth?: AuthState;
};

const UnAuthRoute = ({ component: Component, auth, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !auth?.isAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: DEFAULT_PATH, state: { from: props.location } }}
          />
        )
      }
    />
  );
};

export default withRouter(connect(authSelector)(UnAuthRoute));
